import Logo from './logo'
import Downloadnow from './downloadnow';


const Navbar = () =>{
    
    return(
    
    <nav id ="navbar">
    
    
        <Logo />
    
    
    
    
    
    
    
    <ul>
        <i class="fa fa-search" aria-hidden="true"></i>
        <Downloadnow />
        <li>Contact</li>
        <li>About</li> 
        <li>Home</li> 
        {/* <li><a href="">Contact</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Home</a></li> */}
    </ul>

</nav>
    )
}

export default Navbar;