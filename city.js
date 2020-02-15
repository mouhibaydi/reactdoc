import React from "react"
function City(props) {
    return (
        <div className="div15">

            {props.info3.map(el =>
                <div className="div18">
                    <a className="a7" href={el.link} >
                        <img className="imagecity" src={el.image} />
                        <div className="div16">
                            <h1 className="cityname">{el.titre}</h1>
                            <h2 className="openning">{el.butn}</h2>


                            </div>



                    </a>
                        </div>


                        )}
        
        
                   
        
        
        
        
        
        </div>
                    )
                }
                
                
                
export default City