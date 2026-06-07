import { createContext, useEffect, useState, useRef } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/config";
import { createUserProfile, getUserProfile } from "../services/userProfile";
import { ROLES } from "../constants/roles";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const authOperationInProgress = useRef(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (authOperationInProgress.current) {
        if (currentUser) {
          setUser(currentUser);
        }
        return;
      }

      setUser(currentUser);

      if (currentUser) {
        try {
          const profile = await getUserProfile(currentUser.uid);
          setUserProfile(profile);
        } catch {
          setUserProfile(null);
        }
      } else {
        setUserProfile(null);
      }

      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const signIn = async (email, password) => {
    authOperationInProgress.current = true;
    setLoading(true);
    try {
      const credential = await signInWithEmailAndPassword(auth, email, password);
      const profile = await getUserProfile(credential.user.uid);
      setUser(credential.user);
      setUserProfile(profile);
      return { user: credential.user, profile };
    } finally {
      authOperationInProgress.current = false;
      setLoading(false);
    }
  };

  const signUp = async (email, password, role) => {
    authOperationInProgress.current = true;
    setLoading(true);
    try {
      const credential = await createUserWithEmailAndPassword(auth, email, password);
      const profile = await createUserProfile(credential.user, role);
      setUser(credential.user);
      setUserProfile(profile);
      return { user: credential.user, profile };
    } finally {
      authOperationInProgress.current = false;
      setLoading(false);
    }
  };

  const signInWithGoogle = async (defaultRole = ROLES.STUDENT) => {
    authOperationInProgress.current = true;
    setLoading(true);
    try {
      const credential = await signInWithPopup(auth, googleProvider);
      let profile = await getUserProfile(credential.user.uid);

      if (!profile) {
        profile = await createUserProfile(credential.user, defaultRole);
      }

      setUser(credential.user);
      setUserProfile(profile);
      return { user: credential.user, profile };
    } finally {
      authOperationInProgress.current = false;
      setLoading(false);
    }
  };

  const completeProfile = async (role) => {
    if (!user) {
      throw new Error("Użytkownik nie jest zalogowany");
    }

    const profile = await createUserProfile(user, role);
    setUserProfile(profile);
    return profile;
  };

  const resetPassword = (email) => sendPasswordResetEmail(auth, email);

  const logOut = async () => {
    authOperationInProgress.current = true;
    setLoading(true);
    try {
      await signOut(auth);
      setUser(null);
      setUserProfile(null);
    } finally {
      authOperationInProgress.current = false;
      setLoading(false);
    }
  };

  const value = {
    user,
    userProfile,
    loading,
    signIn,
    signUp,
    signInWithGoogle,
    completeProfile,
    resetPassword,
    logOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
