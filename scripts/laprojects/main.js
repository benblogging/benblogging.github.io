import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js'
import { getFirestore, collection, getDocs, where, and, query, orderBy } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js'
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
/*let condition={
  where:[["x","==","y"],["z","=="]]
}*/
async function getDB(nw='la-resources',condition=null){
  console.log(`condition (s): ${condition}`)
  let db=await getFirestore();
  let col=await collection(db,nw);
  let qx;
  if(condition){
    console.log(`condition 1: ${condition.where[0][0]}, ${condition.where[0][1]}, ${condition.where[0][2]}`)
    if(condition.where.length===1){
      qx=query(col,where(condition.where[0][0],condition.where[0][1],condition.where[0][2]));
    }
    else if(conditon.where.length===2){
      qx=query(col,and(where(condition.where[0][0],condition.where[0][1],condition.where[0][2]),where(condition.where[1][0],condition.where[1][1],condition.where[1][2])));
    }
  }
  else{qx=col}
  let q=query(qx, orderBy("resource_id", "asc"))
  return q;
}
export async function getFirestoreDB(dataName,condition=null){
  let mpj=await getDocs(await getDB(dataName,condition));
  let mpjd=mpj.docs;
  let dbdata=[];
  for(let slg of mpjd){
    dbdata.push({ ...slg.data()})
  }
  return dbdata;
}
