// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth,getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'

const firebaseConfig = {
  apiKey: "AIzaSyB13ccvg_jc7ADKaVFbWLHoT2SRjVneHYk",
  authDomain: "testmyapp-2f926.firebaseapp.com",
  projectId: "testmyapp-2f926",
  storageBucket: "testmyapp-2f926.firebasestorage.app",
  messagingSenderId: "483891010972",
  appId: "1:483891010972:web:97bbc0e73973810f5d7c59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=initializeAuth(app,{


    persistence:getReactNativePersistence(ReactNativeAsyncStorage)
});

export default app;