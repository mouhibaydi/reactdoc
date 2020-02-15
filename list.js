import React from 'react'


function List(props){
return(
    <li className={props.info1.submenu ? 'dropdown' : 'none'}>
                <a href={props.info1.link}>
                    {props.info1.name}
                    {props.info1.submenu && <ul className='dropdown-content'>
                        {props.info1.submenu.map(el => <li>{el}</li>)}
                    </ul>}
                </a>
            </li>)}

export default List
