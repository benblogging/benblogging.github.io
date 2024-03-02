import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js'
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js'
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js'
import { getFirestore, getDoc, doc } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js'
const firebaseConfig = {
  apiKey: "AIzaSyA6E8BW8L4ClmHMU58fux15uFLFGK3TM74",
  authDomain: "la-blog-55073.firebaseapp.com",
  projectId: "la-blog-55073",
  storageBucket: "la-blog-55073.appspot.com",
  messagingSenderId: "812739481649",
  appId: "1:812739481649:web:0861afd4b3e1c4ecdbc510",
  measurementId: "G-TJ6F9NWXR7"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export async function getFirestoreDB(dataName){
  let firestore=getFirestore();
  const dataLocation=doc(firestore, `la-data/${dataName}`);
  const dataTop=await getDoc(dataLocation);
  const dataJSON=dataTop.data();
  return dataJSON;
}
