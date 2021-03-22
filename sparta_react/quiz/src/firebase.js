import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAJVJmzWH3elZZa8smatY0FLukoxACHqHQ',
  authDomain: 'spart-react-quiz.firebaseapp.com',
  projectId: 'spart-react-quiz',
  storageBucket: 'spart-react-quiz.appspot.com',
  messagingSenderId: '804374517008',
  appId: '1:804374517008:web:2699462fc801af477a0195',
  measurementId: 'G-0KYJ4QL1GB'
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export { firestore };
