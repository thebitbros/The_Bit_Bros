import { CameraView, useCameraPermissions } from 'expo-camera'; // UPDATED for new Expo
import * as Location from 'expo-location';
import { initializeApp } from 'firebase/app';
import { getDatabase, push, ref } from 'firebase/database';
import React, { useRef, useState } from 'react';
import { ActivityIndicator, Alert, Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// --- APNA FIREBASE CONFIG YAHAN PASTE KAREIN ---
const firebaseConfig = {
  apiKey: "AIzaSyAqfSOYHv54ppdgb7KCvNjhCkSEwV7ThUY",
  authDomain: "impactthon-roadsafety.firebaseapp.com",
  databaseURL: "https://impactthon-roadsafety-default-rtdb.firebaseio.com/",
  projectId: "impactthon-roadsafety",
  // storageBucket: "impactthon-roadsafety.firebasestorage.app",
  messagingSenderId: "822137347440",
  appId: "1:822137347440:web:68e96388b8374b3b5d43b5"
};
// ---------------------------------------

// Firebase Initialize
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default function HomeScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef(null);
  const [photo, setPhoto] = useState(null);
  const [photoBase64, setPhotoBase64] = useState(null);
  const [loading, setLoading] = useState(false);
  const [severity, setSeverity] = useState("Medium");

  // 1. Permission Check
  if (!permission) {
    return <View />; // Loading permissions
  }
  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center', marginTop: 50 }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );
  }

  // 2. Take Picture Function
  const takePicture = async () => {
    if (cameraRef.current) {
      try {
        const data = await cameraRef.current.takePictureAsync({
          quality: 0.5,
          base64: true, // Zaroori hai Plan B ke liye
        });
        setPhoto(data.uri);
        setPhotoBase64(`data:image/jpg;base64,${data.base64}`);
      } catch (error) {
        Alert.alert("Error", "Could not capture photo.");
      }
    }
  };

  // 3. Upload Function
  const uploadReport = async () => {
    setLoading(true);
    try {
      let location = await Location.getCurrentPositionAsync({});
      
      await push(ref(db, 'reports/'), {
        image: photoBase64,
        lat: location.coords.latitude,
        long: location.coords.longitude,
        severity: severity,
        timestamp: Date.now(),
        status: "Pending"
      });

      Alert.alert("Success", "Report Sent Successfully!");
      setPhoto(null);
      setPhotoBase64(null);
    } catch (error) {
      Alert.alert("Error", error.message);
    }
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      {!photo ? (
        // NEW CAMERA COMPONENT (CameraView)
        <CameraView style={styles.camera} facing="back" ref={cameraRef}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={takePicture}>
              <Text style={styles.text}>📸 CLICK PHOTO</Text>
            </TouchableOpacity>
          </View>
        </CameraView>
      ) : (
        // PREVIEW SCREEN
        <View style={styles.previewContainer}>
          <Image source={{ uri: photo }} style={styles.preview} />
          
          <Text style={styles.label}>Select Severity:</Text>
          <View style={styles.severityContainer}>
            {["Low", "Medium", "High"].map((level) => (
              <TouchableOpacity 
                key={level} 
                style={[styles.sevBtn, severity === level && styles.activeSev]}
                onPress={() => setSeverity(level)}>
                <Text style={{color: severity === level ? 'white' : 'black'}}>{level}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {loading ? <ActivityIndicator size="large" color="#00ff00" /> : (
            <>
              <TouchableOpacity style={styles.uploadBtn} onPress={uploadReport}>
                <Text style={styles.btnText}>UPLOAD REPORT</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.retakeBtn} onPress={() => {setPhoto(null); setPhotoBase64(null);}}>
                <Text style={styles.btnText}>RETAKE</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  camera: { flex: 1 },
  buttonContainer: { flex: 1, backgroundColor: 'transparent', flexDirection: 'row', justifyContent: 'center', marginBottom: 30 },
  button: { alignSelf: 'flex-end', alignItems: 'center', backgroundColor: 'white', padding: 15, borderRadius: 10 },
  text: { fontSize: 18, fontWeight: 'bold', color: 'black' },
  previewContainer: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' },
  preview: { width: 300, height: 400, borderRadius: 10, marginBottom: 20 },
  label: { fontSize: 16, fontWeight: 'bold', marginBottom: 10 },
  severityContainer: { flexDirection: 'row', marginBottom: 20 },
  sevBtn: { padding: 10, borderWidth: 1, borderColor: '#ccc', marginHorizontal: 5, borderRadius: 5 },
  activeSev: { backgroundColor: 'red', borderColor: 'red' },
  uploadBtn: { backgroundColor: 'green', padding: 15, borderRadius: 10, width: 200, alignItems: 'center', marginBottom: 10 },
  retakeBtn: { backgroundColor: 'gray', padding: 15, borderRadius: 10, width: 200, alignItems: 'center' },
  btnText: { color: 'white', fontWeight: 'bold' }
});