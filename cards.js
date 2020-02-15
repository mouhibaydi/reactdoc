import React from "react"





function Cards(props) {
    return (
        <div className="div7">
            <div className="div10">
                <div className="world">
                    The world's<br />
                    biggest healthcare platform
             </div>
                <div className="we">We work from 6 offices all over the world,
                  bringing Docplanner<br /> Group to life in almost 20 countries.
             </div>
                <img className="logo1" src="https://www.docplanner.com/img/logo.png" />
            </div>
            <div className="div8">
                {props.menu.map((el, i) => <div className={(i === 0 || i === 2) ? "div9 a" : "div9"}>
                    <img className="logo" src={el.image} />
                    <p>{el.texte}</p>
                    <p>{el.paragraphe}</p>
                </div>)}





            </div>









        </div>
    )
}
export default Cards