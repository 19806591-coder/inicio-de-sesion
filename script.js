document.getElementById("loginForm").addEventListener("submit",e=>{
e.preventDefault();
const u=document.getElementById("username").value.trim();
const p=document.getElementById("password").value.trim();
const m=document.getElementById("message");
if(!u||!p){m.style.color="red";m.textContent="❌ Ingresa usuario y contraseña.";return;}
localStorage.setItem("loggedUser",u);
m.style.color="#00ff6a";
m.textContent=`✅ Bienvenido, ${u}!`;
});
document.addEventListener("DOMContentLoaded",()=>{
const m=document.getElementById("message");
const s=localStorage.getItem("loggedUser");
if(s){m.style.color="#00ff6a";m.textContent=`Sesión guardada: ${s}`;}
});

