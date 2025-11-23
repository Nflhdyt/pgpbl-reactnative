import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { db } from "@/constants/firebase";
import { onValue, ref, remove } from "firebase/database";
import React, { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Linking,
  RefreshControl,
  SectionList,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

export default function LokasiScreen() {

  const [sections, setSections] = useState<{ title: string; data: any[] }[]>(
    []
  );
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const handlePress = (coordinates: string): void => {
    const [latitude, longitude] = coordinates
      .split(",")
      .map((coord) => coord.trim());
    const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
    Linking.openURL(url);
  };

// if running on ios or android platform
const handleDelete = (id: string) => {
 Alert.alert(
   "Hapus Lokasi",
   "Apakah Anda yakin ingin menghapus lokasi ini?",
   [
     {
       text: "Batal",
       style: "cancel"
     },
     {
       text: "Hapus",
       onPress: () => {
         const pointRef = ref(db, `points/${id}`);
         remove(pointRef);
       },
       style: "destructive"
     }
   ]
 );
}


  useEffect(() => {
    const pointsRef = ref(db, "points/");
    // Listen for data changes
    const unsubscribe = onValue(
      pointsRef,
      (snapshot) => {
        const data = snapshot.val();
        if (data) {
          // Transform the Firebase object into an array
          const pointsArray = Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
          }));
          // Format for SectionList
          const formattedData = [
            {
              title: "Lokasi Tersimpan",
              data: pointsArray,
            },
          ];
          setSections(formattedData);
        } else {
          setSections([]);
        }
        setLoading(false);
      },
      (error) => {
        console.error(error);
        setLoading(false);
      }
    );
    // Cleanup listener on component unmount
    return () => unsubscribe();
  }, []);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    // Since Firebase provides real-time data, we can simulate a refresh
    // for UX purposes. A real data refetch isn't strictly necessary unless
    // you want to force a re-read from the server.
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);
  if (loading) {
    return (
      <ThemedView style={styles.container}>
        <ActivityIndicator size="large" />
      </ThemedView>
    );
  }
  return (
    <View style={styles.container}>
      {sections.length > 0 ? (
        <SectionList
          style={{ width: "100%" }}
          sections={sections}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ width: "100%" }}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handlePress(item.coordinates)}>
              <View style={styles.item}>
                <ThemedText style={styles.itemName}>{item.name}</ThemedText>
                <ThemedText>{item.coordinates}</ThemedText>
                <TouchableOpacity
                  onPress={() => handleDelete(item.id)}
                  style={styles.deleteButton}
                >
                  <IconSymbol name="trash" size={24} color="red" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <ThemedText style={styles.header}>{title}</ThemedText>
          )}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      ) : (
        <ThemedView style={styles.container}>
          <ThemedText>Tidak ada data lokasi tersimpan.</ThemedText>
        </ThemedView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingTop: 22,
  },
  item: {
    backgroundColor: "#a7dcffff",
    padding: 15,
    marginVertical: 6,
    marginHorizontal: "4%",
    borderRadius: 8,
    width: "92%", // This ensures consistent margins on both sides
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  itemName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    backgroundColor: "#000000ff",
    color: "#ffffffff",
    padding: 16,
    width: "100%",
    marginBottom: 8,
  },
  deleteButton: {
  padding: 5,
  marginRight: 16,
}

});
