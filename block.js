import React from "react"
function Blocks(props) {
    return (
        <div className="div4">
            {props.contenu.map(el =>(
            <div className={el.Select ? "forstudent":"fordoctors"} >
            <h1 className="h1" >{el.name}</h1>
                <p className="para">{el.paragraphe}</p>
                <div className="div5">
                    {el.Select && <select className="slect">
                        {el.Select.map(el => <option>{el}</option>)}
                    </select>}
                    <img className={el.name==="for student" ? "image2":"image3"}    src={el.Image} />

                </div>  
                </div>
                )
                



                    )}

        </div>




    )
}
export default Blocks