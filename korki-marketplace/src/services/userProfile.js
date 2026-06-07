import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/config";
import { ROLES } from "../constants/roles";

const VALID_ROLES = Object.values(ROLES);

export async function getUserProfile(uid) {
  const snapshot = await getDoc(doc(db, "users", uid));
  return snapshot.exists() ? snapshot.data() : null;
}

export async function createUserProfile(user, role) {
  if (!VALID_ROLES.includes(role)) {
    throw new Error("Nieprawidłowa rola użytkownika");
  }

  const profile = {
    email: user.email ?? "",
    displayName: user.displayName ?? "",
    role,
    createdAt: serverTimestamp(),
  };

  await setDoc(doc(db, "users", user.uid), profile);

  return {
    email: profile.email,
    displayName: profile.displayName,
    role: profile.role,
  };
}
