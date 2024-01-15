const products = [
    {
        id: '1',
        name: 'TKD Cycle7',
        price: 140,
        category: 'Keyboards',
        img: 'https://images.squarespace-cdn.com/content/v1/5f68da90297b94613c756dd6/1688756220563-7KW0SU1Y2OWIWRWD93UZ/LXI06929.jpg?format=1500w',
        stock: 10,
        description: 'Cycle7 by TKD, 70% TKL FRL keyboard, anodized 6063-T6 aluminum case, stainless steel back weight, PC, FR4 and aluminum plates, WK and WKL layout options for both the hotswap and soldered PCBs, magnetic ball-catch EZ-assembly system and gasket bean or strip mounting options.'
    },
    {
        id: '2',
        name: 'Mode Tempo',
        price: 260,
        category: 'Keyboards',
        img: 'https://images.squarespace-cdn.com/content/v1/5f68da90297b94613c756dd6/1694378167670-R6PCIMGT8EE6I0D3VEUS/LXI07173+1.jpg?format=1500w',
        stock: 7,
        description: 'Tempo by Mode, 60% HHKB keyboard, aluminum case, aluminum, steel, brass and wood accent, aluminum, copper and brass weight, POM, FR4, carbon fiber, copper and aluminum plates, fixed HHKB layout with split backspace and stepped caps options available in the hotswap PCB and ISO for the soldered one. Lattice block mounting system for innovative typing experience.'
    },
    {
        id: '3',
        name: 'TGR Alice',
        price: 465,
        category: 'Keyboards',
        img: 'https://images.squarespace-cdn.com/content/v1/5f68da90297b94613c756dd6/1643354990079-NB2TZCTGEPBY74B24HWG/LXI04200.jpg?format=1500w',
        stock: 5,
        description: 'Alice by TGR, 60% WKL keyboard, 5052 aluminum case, brass weight, brass plate, Alice layout with left sided macros, gasket mounted.'
    },
    {
        id: '4',
        name: 'ePBT Aesthetic',
        price: 80,
        category: 'Keycaps',
        img: 'https://kbdfans.com/cdn/shop/files/5a002861b71cc5f47b41ea69cc740bec_900x.jpg?v=1699519958',
        stock: 15,
        description: 'ePBT Aesthetic keycap set, PBT Dyesub.'
    },
    {
        id: '5',
        name: 'GMK Katakana',
        price: 145,
        category: 'Keycaps',
        img: 'https://massdrop-s3.imgix.net/product-images/drop-gmk-white-on-black-katakana-custom-keycap-set/FP/xZsyH8F1Q62GSzaru21B_WoB-K_Pach%20Kit.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70',
        stock: 5,
        description: 'GMK Katakana keycap set, ABS Doubleshot.'
    },
    {
        id: '6',
        name: 'PBTfans Vior',
        price: 75,
        category: 'Keycaps',
        img: 'https://kbdfans.com/cdn/shop/files/base_63717642-a4de-44d7-99ec-87e799806ed1_900x.jpg?v=1690795489',
        stock: 20,
        description: 'PBTfans Vior keycap set, ABS Doubleshot.'
    },
    {
        id: '7',
        name: 'Gateron Oil Kings',
        price: 25,
        category: 'Switches',
        img: 'https://ae01.alicdn.com/kf/S2875fc794e184b929e4a5ed151cdd02ax/35pcs-Gateron-Oil-King-Linear-Switch-5pin-RGB-65g-mx-POM-stem-for-mechanical-keyboard-60m.jpg_.webp',
        stock: 12,
        description: 'Gateron Oil Kings switches, linear, PA66 housing, POM stem, 20mm spring, 55gf actuation, 65gf bottom out, 4mm total travel.'
    },
    {
        id: '8',
        name: 'MMD Princess',
        price: 10,
        category: 'Switches',
        img: 'https://ae01.alicdn.com/kf/S16293d2107134e1996300ce3facd500dt/MMD-Princess-Switch-Linear-Tactile-RGB-SMD-5pin-28g-38g-45g-48g-53g-62g-for-mechanical.jpg_.webp',
        stock: 25,
        description: 'MMD Princess switches, linear/tactile, PC top housing, PA66 bottom housing, POM stem, 20.4mm spring, 53/62gf actuation, 61/67gf bottom out, 3.6/3.1mm total travel.'
    },
    {
        id: '9',
        name: 'JWICK T1 v2',
        price: 12,
        category: 'Switches',
        img: 'https://ae01.alicdn.com/kf/S555d6ad51c814ec7a9e522f3a2604822K/JWICK-V2-T1-Black-Blue-Tactile-Switch-5pin-RGB-SMD-67g-mx-switch-for-mechanical-keyboard.jpg_.webp',
        stock: 20,
        description: 'JWICK T1 v2 switches, tactile, Nylon housing, POM stem, 67gf bottom out, 4mm total travel.'
    },
    {
        id: '10',
        name: 'Krytox 205G0',
        price: 11,
        category: 'Other',
        img: 'https://m.media-amazon.com/images/I/7157Uy+i2HL._SX522_.jpg',
        stock: 18,
        description: 'Krytox 205G0 lubricant for switches and stabilizers.'
    },
    {
        id: '11',
        name: 'Durock Screw In v2',
        price: 18,
        category: 'Other',
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/427/349/products/0211-3ee5b7219dae8a40fc16352642968675-1024-1024.jpg',
        stock: 15,
        description: 'Durock Screw In v2 stabilizer set, Nylon housing, gold plated wire.'
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