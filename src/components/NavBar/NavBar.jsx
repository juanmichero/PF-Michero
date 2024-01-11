import classes from './NavBar.module.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {
    
    return (
        <nav className={classes.nav}>
            <div className="d-flex align-items-center">
                <Link to='/' className={classes.title}>Custom Keyboards</Link>
            </div>
            <CartWidget />
            <section className="d-flex align-items-center">
                <Link to='/category/keyboard' className={classes.button}>Keyboards</Link>
                <Link to='/category/keycaps' className={classes.button}>Keycaps</Link>
                <Link to='/category/switches' className={classes.button}>Switches</Link>
                <Link to='/category/other' className={classes.button}>Other</Link>
            </section>
        </nav>
    )
}

export default NavBar