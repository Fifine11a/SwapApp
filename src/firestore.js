import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBrTy9FT3cWRIrm_w3zQC40aL40X1ofecs',
  authDomain: 'swapapp-c18c3.firebaseapp.com',
  databaseURL: 'https://swapapp-c18c3.firebaseio.com',
  projectId: 'swapapp-c18c3',
  storageBucket: 'swapapp-c18c3.appspot.com',
  messagingSenderId: '756250577852',
  appId: '1:756250577852:web:5a7df5dd5767cecd2039b9',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
const storage = firebase.storage()

export  {
  storage, firestore as default
}
