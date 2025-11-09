import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#bfdce5ff', dark: '#3eafd1ff' }}
      headerImage={
        <Image
          source={require('@/assets/images/LogoUGM.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={ styles.title }>WELCOME!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Nama</ThemedText>
        <ThemedText>
          Muhammad Naufal Hidayat
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">NIM</ThemedText>
        <ThemedText>
          23/520500/SV/23249
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Mata Kuliah</ThemedText>
        <ThemedText>
          Pemrograman Geospasial Perangkat Bergerak Lanjut
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Kelas</ThemedText>
        <ThemedText>
          B
        </ThemedText>
        <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Deskripsi</ThemedText>
        <ThemedText>
          Aplikasi ini dijalankan pada perangkat <ThemedText type="defaultSemiBold">{Platform.select({
              ios: 'IOS', 
              android: 'android', 
              web: 'web',
              })}</ThemedText> menggunakan React Native dan Expo
        </ThemedText>
      </ThemedView>  
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  title: {
    color : 'rgba(56, 207, 231, 1)',
    fontWeight: 'bold',
    fontSize: 32,
  },
Logo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
