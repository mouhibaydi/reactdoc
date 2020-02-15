import React from 'react'
import List from './list'

function Nav(props) {
    return (
        
 <div className="div">
 <img className="logo-docplanner" src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" alt="Docplanner Group" />
 <ul className="navbar">
   {props.info.map(el => <List info1={el} />)}
 </ul>
</div>
    )
}
export default Nav