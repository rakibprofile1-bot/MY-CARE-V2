import { signOut } from "firebase/auth";
import { auth } from "./firebaseconfig";

export { auth };

export function signOutUser() {
  return signOut(auth);
}
