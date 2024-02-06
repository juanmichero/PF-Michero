import { getDocs, getDoc, collection, query, where, orderBy, doc } from 'firebase/firestore'
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

export const getProductById = (id) => {
    const productDocument = doc(db, 'products', id)

    return getDoc(productDocument)
        .then(queryDocumentSnapshot => {
            const productAdapted = createProductAdaptedFromFirestore(queryDocumentSnapshot)

            return productAdapted
        })
        .catch(error => {
            return error
        })
}