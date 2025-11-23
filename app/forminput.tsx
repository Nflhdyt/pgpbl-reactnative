import { Stack } from "expo-router";
import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const TextInputExample = () => {
  const onPressLearnMore = () => {
    console.log('Button pressed');
  };
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState("");

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Stack.Screen options={{ title: "Form Input" }} />
        <Text style={styles.inputNama}>Nama Mahasiswa</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder="isikan namamu disini"
        />
        <Text style={styles.inputNIM}>NIM</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          placeholder="Isikan NIM-mu disini"
        />
        <Text style={styles.inputNIM}>Kelas</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          placeholder="Isikan Kelas-mu disini"
        />
        <View style={styles.button}>
        <Button
          title="Save"
        />
        </View>
    </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },

  inputNama: {
    fontSize: 15,
    fontWeight: "600",
    margin: 10,
    marginTop: 20,
  },

  inputNIM: {
    fontSize: 15,
    fontWeight: "600",
    margin: 5,
    marginTop: 5,
  },
  button: {
    marginTop: 10,
    marginHorizontal: 'auto',
    backgroundColor: "#00a6ffff",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    width: 200,
    height: 40,
    alignSelf: "center"
  }
});

export default TextInputExample;
