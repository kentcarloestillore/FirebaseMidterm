import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCWHsionV-W1QaLlQI7BW5rB_8i_JggAxw",
  authDomain: "expensetracker-8f406.firebaseapp.com",
  projectId: "expensetracker-8f406",
  storageBucket: "expensetracker-8f406.appspot.com",
  messagingSenderId: "981573735216",
  appId: "1:981573735216:web:0ee0a638d48dd810752ef5"
};

initializeApp(firebaseConfig);

const db = getFirestore();

export default db;