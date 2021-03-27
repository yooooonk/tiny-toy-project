import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCWhqHfilrjVlu3pYmKNNXr91o9S0YiVKE',
  authDomain: 'sparta-react-c2170.firebaseapp.com',
  projectId: 'sparta-react-c2170',
  storageBucket: 'sparta-react-c2170.appspot.com',
  messagingSenderId: '200314441310',
  appId: '1:200314441310:web:4c618ac3325069a1a96ecf',
  measurementId: 'G-CL05W308WY'
};

firebase.initializeApp(firebaseConfig);
export const apiKey = firebaseConfig.apiKey;
const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();

export { auth, firestore, storage };
