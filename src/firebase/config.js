import { initializeApp } from "firebase/app"
import { getFunctions } from 'firebase/functions'

export const app = initializeApp({
  apiKey: "AIzaSyByUfYgDkaz_C1UzvSIZcrWs8K7AvAAJwg",
  authDomain: "brangus-app.firebaseapp.com",
  projectId: "brangus-app",
  storageBucket: "brangus-app.appspot.com",
  messagingSenderId: "711817684795",
  appId: "1:711817684795:web:c188f246630cc73678391e",
  measurementId: "G-T6F8J6H0DK"
})

export const cloudFunctions = getFunctions(app)