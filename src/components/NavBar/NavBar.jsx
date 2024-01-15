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
                <Link to='/category/Keyboards' className={classes.button}>Keyboards</Link>
                <Link to='/category/Keycaps' className={classes.button}>Keycaps</Link>
                <Link to='/category/Switches' className={classes.button}>Switches</Link>
                <Link to='/category/Other' className={classes.button}>Other</Link>
            </section>
        </nav>
    )
}

export default NavBar