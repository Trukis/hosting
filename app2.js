
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9PTDIy3WCz8NMts4dChdp7mt5ndwsA5g",
  authDomain: "crud-b0df5.firebaseapp.com",
  projectId: "crud-b0df5",
  storageBucket: "crud-b0df5.appspot.com",
  messagingSenderId: "774147114640",
  appId: "1:774147114640:web:880b5ac1318deffa4a7a15"
};



const openModal = document.getElementById("openRegistrer")
const modal = document.getElementById("modal")
const closeModal = document.getElementById("closeRegisterModal")
const registerForm = document.getElementById("registrerForm") 
// Initialize Firebase
const app = initializeApp(firebaseConfig);




const showRegistrerModal = () =>{
    modal.classList.toggle("is-active")
}


openModal.addEventListener("click", showRegistrerModal)
closeModal.addEventListener("click", showRegistrerModal)



registerForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    const nombre = registerForm['nombre'].value
    const apellidoP = registerForm['apePat'].value
    const apellidoM = registerForm['apeMat'].value
    const tel = registerForm['cel'].value
    const correo = registerForm['email'].value
    const descrip = registerForm['desc'].value

    const registerStudent= studentRef.push()
    console.log(registerStudent)
    console.log(registerStudent.path.pieces_[1])
}) 