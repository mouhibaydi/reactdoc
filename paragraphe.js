import React from 'react'

function Para(props){
return(
<div className="div1">
        <img className="img"  src="https://www.docplanner.com/img/sygnet.png" />
        <p  style={{textAlign:'center'}} className="titlep">Making the healthcare experience more human</p>
        <div  style={{textAlign:'center'}} className="div2">
         {props.info2.map(el => <p>{el} </p> )}
        </div>



      </div>


)



}
export default Para