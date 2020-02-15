import React from "react"


function Liste(props){
return(
<div className="div6">
<div className="para3" >We are a global <br/>company<br/>
  with local culture </div>
<ul className="liste1">
{props.obj.map(el => <li className="li">
<a href={el.link}>{el.name}</a>
</li>)}
</ul>



</div>
)
}
export default Liste