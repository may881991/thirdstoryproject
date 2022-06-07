import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail,updateProfile, signOut} from "firebase/auth";
import { getFirestore, query, getDocs, collection, where, addDoc} from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyDilgOKBP1iFC1y3rmz1K7kOQbzv_YrgE0",
    authDomain: "thirdstoryproject.firebaseapp.com",
    projectId: "thirdstoryproject",
    storageBucket: "thirdstoryproject.appspot.com",
    messagingSenderId: "791090450419",
    appId: "1:791090450419:web:8f8cc5a1279b69f9954c86",
    measurementId: "G-P14C60LKZL"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        displayName: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err.message);
  }
};

const getUserData = async (user) => {
  try{
    const userdb = query(collection(db, "users"), where("uid", "==", user.uid));
    const getData =  await getDocs(userdb);
    return getData;
  }catch(err){
    console.error(err.message)
  }
}

const getBookData = async ()=>{
  try{
    const bookDb = collection(db, "books");
    const getData =  await getDocs(bookDb);
    console.log(getData.data())
    return getData;
  }catch(err){
    console.error(err.message)
  }
}

const logInWithEmailAndPassword = async (email, password) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    console.log(res)
  } catch (err) {
    console.error(err.message);
  }
};
const registerWithEmailAndPassword = async (displayName, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password, displayName);
    console.log(res)
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name: displayName,
      authProvider: "local",
      email,
    });
    await updateProfile(auth.currentUser, {
      displayName: displayName
    }).then(() => {
      console.log("updated")
    }).catch((error) => {
      console.log(error)
    });
  } catch (err) {
    console.error(err.message);
  }
};

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err.message);
  }
};
const logout = () => {
  signOut(auth);
};
export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  signInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
  getUserData,
  getBookData,
};