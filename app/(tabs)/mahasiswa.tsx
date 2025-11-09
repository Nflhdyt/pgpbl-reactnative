import { IconSymbol } from '@/components/ui/icon-symbol';
import React from 'react';
import { SectionList, StatusBar, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const DATA = [
  {
    title: 'Makanan Favorit Kelas A',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Makanan Favorit Kelas B',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Minuman Favorit Kelas A',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Minuman Favorit Kelas B',
    data: ['Juice', 'Tea', 'Coffee'],
  },
];

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container} edges={['top']}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => (
          <View style={styles.item}>
            <View style={styles.itemContent}>
              <IconSymbol name="food" size={20} color="#fff" />
              <Text style={styles.title}>{item}</Text>
            </View>
          </View>
        )}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
    backgroundColor: '#f0ffff',
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  item: {
    backgroundColor: '#00CED1', 
    padding: 16,
    marginVertical: 6,
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  header: {
    fontSize: 24,
    backgroundColor: '#E0FFFF',
    padding: 12,
    marginVertical: 8,
    borderRadius: 8,
    fontWeight: 'bold',
    color: '#008B8B',
  },
  title: {
    fontSize: 15,
    color: '#fff',
    fontWeight: '500',
  },
});

export default App;