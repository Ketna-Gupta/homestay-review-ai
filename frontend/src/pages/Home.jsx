import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";


function Home(){

return(

<>

<Navbar />

<Hero />


<section className="cards">

<Card
icon="⭐"
title="Sentiment Analysis"
text="Find guest reviews sentiment easily."
/>


<Card
icon="🤖"
title="AI Response"
text="Generate smart replies for guests."
/>


<Card
icon="📊"
title="Review Insights"
text="Understand your homestay feedback."
/>


</section>


<Footer />

</>

)

}

export default Home;