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
    },
    {
        id: '4',
        name: 'Aesthetic',
        price: 80,
        category: 'keycaps',
        img: 'https://kbdfans.com/cdn/shop/files/5a002861b71cc5f47b41ea69cc740bec_900x.jpg?v=1699519958',
        stock: 15,
        description: 'ePBT Aesthetic'
    },
    {
        id: '5',
        name: 'Katakana',
        price: 145,
        category: 'keycaps',
        img: 'https://massdrop-s3.imgix.net/product-images/drop-gmk-white-on-black-katakana-custom-keycap-set/FP/xZsyH8F1Q62GSzaru21B_WoB-K_Pach%20Kit.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70',
        stock: 5,
        description: 'GMK Katakana'
    },
    {
        id: '6',
        name: 'Vior',
        price: 75,
        category: 'keycaps',
        img: 'https://kbdfans.com/cdn/shop/files/base_63717642-a4de-44d7-99ec-87e799806ed1_900x.jpg?v=1690795489',
        stock: 20,
        description: 'PBTfans Vior'
    },
    {
        id: '7',
        name: 'Oil Kings',
        price: 25,
        category: 'switches',
        img: 'https://ae01.alicdn.com/kf/S2875fc794e184b929e4a5ed151cdd02ax/35pcs-Gateron-Oil-King-Linear-Switch-5pin-RGB-65g-mx-POM-stem-for-mechanical-keyboard-60m.jpg_.webp',
        stock: 12,
        description: 'Gateron Oil Kings'
    },
    {
        id: '8',
        name: 'Princess',
        price: 10,
        category: 'switches',
        img: 'https://ae01.alicdn.com/kf/S16293d2107134e1996300ce3facd500dt/MMD-Princess-Switch-Linear-Tactile-RGB-SMD-5pin-28g-38g-45g-48g-53g-62g-for-mechanical.jpg_.webp',
        stock: 25,
        description: 'MMD Princess'
    },
    {
        id: '9',
        name: 'T1 v2',
        price: 12,
        category: 'switches',
        img: 'https://ae01.alicdn.com/kf/S555d6ad51c814ec7a9e522f3a2604822K/JWICK-V2-T1-Black-Blue-Tactile-Switch-5pin-RGB-SMD-67g-mx-switch-for-mechanical-keyboard.jpg_.webp',
        stock: 20,
        description: 'JWICK T1 v2'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === category))
        }, 500)
    })
}