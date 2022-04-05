import React from "react"
import css from "./Header.module.css";


function Header(props) {
    
return(

<div className={css.wrapper} >
    Header {props.count}
</div>

)

}




export default Header 