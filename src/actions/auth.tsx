import { firebase, googleAuthProvider } from '../firebase/firebase';
import * as constants from '../constants';

export interface Login {
  type: constants.LOGIN;
  uid: string;
}

export interface Logout {
  type: constants.LOGOUT;
}

export type AuthAction = Login | Logout;

export const login = (uid: string): Login => ({
  type: constants.LOGIN,
  uid
});

export const startLogin = (): any => {
  return (): Promise<firebase.auth.UserCredential> => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const logout = () : Logout => ({
  type: constants.LOGOUT
});

export const startLogout = (): any => {
  return () => {
    return firebase.auth().signOut();
  };
};