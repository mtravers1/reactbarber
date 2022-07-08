
import React, {Component} from "react"
import Navbar from './navbar'
import Headertext from "./headertext";
import Photoone from "./topsidephoto";
//import subscribe from './sub'


class Header extends Component{
    render(){
    return (
            
        <header>
  
           <Navbar />
           <Headertext />
           <Photoone /> 
                 </header>

            
    )

    
}}

export default Header;