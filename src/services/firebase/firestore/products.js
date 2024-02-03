import { getDocs, collection, query, where, orderBy } from 'firebase/firestore'
import { db } from '../firebaseConfig'
import { createProductAdaptedFromFirestore } from '../../../adapters/createProductAdapterFromFirestore'

export const getProducts = (category) => {
    const productsCollection = category 
        ? query(collection(db, 'products'), where('category', '==', category)) 
        : query(collection(db, 'products'), orderBy('order')) 

        return getDocs(productsCollection)
            .then(querySnapshot => {
                const productsAdapted = querySnapshot.docs.map(doc => {
                    return createProductAdaptedFromFirestore(doc)
                })

                return productsAdapted
            })
            .catch(error => {
                return error
            })           
}

export const getProductById = () => {

}