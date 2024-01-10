import classes from './NavBar.module.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    
    return (
        <nav className={classes.nav}>
            <div className="d-flex align-items-center">
                <h2 className="p-2 fs-1">Custom Keyboards</h2>
            </div>
            <CartWidget />
            <section className="d-flex align-items-center">
                <a href='#' className={classes.button}>Home</a>
                <a href='#' className={classes.button}>Categories</a>
                <a href='#' className={classes.button}>About us</a>
                <a href='#' className={classes.button}>Contact</a>
            </section>
        </nav>
    )
}

export default NavBar