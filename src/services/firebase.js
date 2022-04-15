import firebase from "firebase/compat/app";
import 'firebase/compat/database';
import 'firebase/compat/auth';

const firebaseConfig = {
	apiKey: "AIzaSyDP6MR8lzAnblRohEjKJGvzZDRnZ1oW5fE",
	authDomain: "react1-885ac.firebaseapp.com",
	projectId: "react1-885ac",
	storageBucket: "react1-885ac.appspot.com",
	messagingSenderId: "606885661180",
	appId: "1:606885661180:web:f9af1a4edf7ae917fa8a79"
};

const firebasedb = firebase.initializeApp( firebaseConfig );
export const db = firebase.database().ref();
export const auth = firebase.auth();
