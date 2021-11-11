import { useEffect, useState } from "react";
import initializeFirebase from "../Login/Firebase/firebase.init.js";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged,updateProfile } from "firebase/auth";

//initializeFirebase
initializeFirebase()

const useFirebase = () => {

  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true)
  const [authError, setAuthError] = useState('');

  const auth = getAuth();
  
    const registerUser = (email, password,name,history) => {
       setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
               setAuthError('')
            const newUser = { email, displayName: name }
            setUser(newUser)
            //send name to firebase after creation
            updateProfile(auth.currentUser, {
             displayName: name
          }).then(() => {
         
            }).catch((error) => {
            });
                    
            history.replace('/');
        })
        .catch((error) => {
        setAuthError(error.message);
        })
          .finally(()=>setLoading(false));
    }


    const loginUser = (email, password,location,history) => {
         setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const destination = location?.state?.from || '/'
            history.replace(destination);
     setAuthError('')
  })
    .catch((error) => {
     setAuthError(error.message);
  })
        .finally(()=>setLoading(false));
    }


  //observe the user state
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
   if (user) {
    setUser(user)
  } else {
      setUser({})
          }
          setLoading(false)
      });
        return () => unsubscribe;
    }, [])
    

    //logOut
    const logOut = () => {
        setLoading(true)
      signOut(auth).then(() => {
        // Sign-out successful.
        }).catch((error) => {
        // An error happened.
        })
            .finally(()=>setLoading(false));
    }


    return {
        user,
        loading,
        authError,
        registerUser,
        loginUser,
        logOut

    }
}

export default useFirebase;