import CartWidget from '../CartWidget/CartWidget';
import logo from '../../assets/logo.png'; 
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';


function NavBar() {
    return (
        <nav className={styles.barraNavegacion}>
            <img src={logo} className = {styles.logo} />
            <ul >
                <li><Link to="/">Home</Link></li>
                <li><Link to="/category/Beauty">Beauty</Link></li>
                <li><Link to="/category/Fragrances">Fragrances</Link></li>
                <li><Link to="/category/Furniture">Furniture</Link></li>
                <li><Link to="/category/Groceries">Groceries</Link></li>   
              <CartWidget cantidad={5}/>       
            </ul>                                        
        </nav>
    );
}

export default NavBar;