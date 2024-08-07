  
import { auth } from "./firebase.mjs";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";


let email = document.getElementById('email');
let pass = document.getElementById('password');


function btn() {
    console.log('email' , email.value);
    console.log('password' , pass.value);  
    
    
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

}



