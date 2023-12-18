import classes from './NavBar.module.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {

    return (
        <nav className={classes.nav}>
            <div className="d-flex">
                <h2 className="p-2">Custom Keyboards</h2>
                <CartWidget />
            </div>
            <section className={classes.buttons}>
                <button className="btn btn-danger m-1">Home</button>
                <button className="btn btn-danger m-1">Contact</button>
                <button className="btn btn-danger m-1">About Us</button>
            </section>
        </nav>
    )
}

export default NavBar