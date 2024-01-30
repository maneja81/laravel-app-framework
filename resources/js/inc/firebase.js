import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import { getAuth } from "firebase/auth";

/* import { getAuth } from "firebase/auth";
const auth = getAuth();
auth.useDeviceLanguage(); */

const firebaseConfig = {
    apiKey: "AIzaSyCEg1CTlYi7p0aelJQkSHl5tYOYxiqS7dM",
    authDomain: "ma-shopify-apps.firebaseapp.com",
    databaseURL: "https://ma-shopify-apps-default-rtdb.firebaseio.com",
    projectId: "ma-shopify-apps",
    storageBucket: "ma-shopify-apps.appspot.com",
    messagingSenderId: "229141588998",
    appId: "1:229141588998:web:c9c646ce1067d5c964e787",
    measurementId: "G-0H5VZ3S4EG",
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export default {
    dbWatch: function (path, callback) {
        const starCountRef = ref(database, path);
        onValue(starCountRef, (snapshot) => {
            callback(snapshot.val());
        });
    },
};
