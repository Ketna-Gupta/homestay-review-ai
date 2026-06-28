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
text="Quickly analyze sentiment of guest reviews."
/>


<Card
icon="🤖"
title="AI Response"
text="Auto-generate smart responses for guests."
/>


<Card
icon="📊"
title="Review Insights"
text="Comprehend your homestay feedback."
/>


</section>


<Footer />

</>

)

}

export default Home;