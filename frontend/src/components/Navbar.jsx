import { useState } from "react";

function Navbar(){

const [dark, setDark] = useState(false);

function toggleMode(){
  setDark(!dark);
  document.body.classList.toggle("dark");
}

return(
<nav className="navbar">

<div className="logo">
🏡 Homestay ReviewAI
</div>


<div className="links">

<a href="/">Home</a>
<a href="/about">About</a>
<a href="/dashboard">Dashboard</a>
<a href="/login">Login</a>

<button 
onClick={toggleMode}
style={{
  marginLeft:"20px",
  padding:"8px 15px",
  borderRadius:"20px",
  border:"none",
  cursor:"pointer"
}}
>
{dark ? "☀️ Light" : "🌙 Dark"}

</button>

</div>


</nav>
)

}

export default Navbar;