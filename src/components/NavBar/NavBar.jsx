import CartWidget from '../CartWidget/CartWidget'
import classes from './NavBar.module.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { collection, getDocs, query, orderBy } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'

const NavBar = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const categoriesCollection = query(collection(db, 'categories'), orderBy('order'))

        getDocs(categoriesCollection)
            .then(querySnapshot => {
                const categoriesAdapted = querySnapshot.docs.map(doc => {
                    const fields = doc.data()
                    return { id: doc.id, ...fields}
                })

                setCategories(categoriesAdapted)
            })
    }, [])

    return (
        <nav className={classes.nav}>
            <div className="d-flex align-items-center">
                <Link to='/' className={classes.title}>Custom Keyboards</Link>
            </div>
            <CartWidget />
            <section className="d-flex align-items-center flex-wrap">
                {
                    categories.map(cat => (
                        <Link key={cat.id} to={`/category/${cat.name}`} className={classes.button}>{cat.name}</Link>
                    ))
                }
            </section>
        </nav>
    )
}

export default NavBar