function Card({title,text,icon}){


return(

<div className="review-card">

<div className="icon">
{icon}
</div>

<h3>{title}</h3>

<p>{text}</p>


</div>

)

}


export default Card;