const products = [
    {
        id: '1',
        name: 'Cycle7',
        price: 140,
        category: 'keyboard',
        img: 'https://images.squarespace-cdn.com/content/v1/5f68da90297b94613c756dd6/1688756220563-7KW0SU1Y2OWIWRWD93UZ/LXI06929.jpg?format=1500w',
        stock: 10,
        description: 'Cycle7 by TKD'
    },
    {
        id: '2',
        name: 'Tempo',
        price: 250,
        category: 'keyboard',
        img: 'https://images.squarespace-cdn.com/content/v1/5f68da90297b94613c756dd6/1694378167670-R6PCIMGT8EE6I0D3VEUS/LXI07173+1.jpg?format=1500w',
        stock: 7,
        description: 'Tempo by Mode'
    },
    {
        id: '3',
        name: 'Alice',
        price: 500,
        category: 'keyboard',
        img: 'https://images.squarespace-cdn.com/content/v1/5f68da90297b94613c756dd6/1643354990079-NB2TZCTGEPBY74B24HWG/LXI04200.jpg?format=1500w',
        stock: 5,
        description: 'Alice by TGR'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}