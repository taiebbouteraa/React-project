import { BUY_ITEM } from "./actionTypes"

const inisialState = {
    phones: [{
        id: 1,
        phoneImage: './images/samsung-s21.jpg',
        brand: 'Samsung',
        name: 'Samsung Galaxy S21 Ultra',
        mainCamera: 108,
        frontCamera: 40,
        RAM: 16,
        storage: 128,
        battery: 5000,
        price: 1199,
    }, {
        id: 2,
        phoneImage: './images/samsung-a52.jpg',
        brand: 'Samsung',
        name: 'Samsung Galaxy A52',
        mainCamera: 64,
        frontCamera: 32,
        RAM: 8,
        storage: 128,
        battery: 4500,
        price: 465,
    }, {
        id: 3,
        phoneImage: './images/samsung-m21.jpg',
        brand: 'Samsung',
        name: 'Samsung Galaxy M21 2021',
        mainCamera: 48,
        frontCamera: 20,
        RAM: 6,
        storage: 128,
        battery: 6000,
        price: 365,
    }, {
        id: 4,
        phoneImage: './images/apple-iphone-12-pro-max-.jpg',
        brand: 'Apple',
        name: 'iPhone 12 Pro Max',
        mainCamera: 12,
        frontCamera: 12,
        RAM: 6,
        storage: 512,
        battery: 3687,
        price: 1399,
    }, {
        id: 5,
        phoneImage: './images/apple-iphone-12-pro--.jpg',
        brand: 'Apple',
        name: 'iPhone 12 Pro',
        mainCamera: 12,
        frontCamera: 12,
        RAM: 6,
        storage: 512,
        battery: 2815,
        price: 1299,
    }, {
        id: 6,
        phoneImage: './images/apple-iphone-11.jpg',
        brand: 'Apple',
        name: 'iPhone 11',
        mainCamera: 12,
        frontCamera: 12,
        RAM: 4,
        storage: 5256,
        battery: 3110,
        price: 749,
    }, {
        id: 7,
        phoneImage: './images/huawei-p40-pro.jpg',
        brand: 'Huawei',
        name: 'P 40 Pro',
        mainCamera: 50,
        frontCamera: 32,
        RAM: 6,
        storage: 256,
        battery: 4200,
        price: 859,
    }, {
        id: 8,
        phoneImage: './images/huawei-p30-pro.jpg',
        brand: 'Huawei',
        name: 'P 30 Pro',
        mainCamera: 40,
        frontCamera: 32,
        RAM: 8,
        storage: 256,
        battery: 4200,
        price: 1149,
    }, {
        id: 9,
        phoneImage: './images/asus-zenfone-8.jpg',
        brand: 'Asus',
        name: 'Zenfone 8',
        mainCamera: 64,
        frontCamera: 12,
        RAM: 12,
        storage: 256,
        battery: 4000,
        price: 848,
    }, {
        id: 10,
        phoneImage: './images/asus-rog-phone-5-ultimate.jpg',
        brand: 'Asus',
        name: 'ROG Phone 5 Ultimate',
        mainCamera: 64,
        frontCamera: 24,
        RAM: 18,
        storage: 512,
        battery: 6000,
        price: 848,
    }, {
        id: 11,
        phoneImage: './images/lenovo-legion-2-pro-phone-duel2-1.jpg',
        brand: 'Lenovo',
        name: 'Legion 2 Pro',
        mainCamera: 64,
        frontCamera: 44,
        RAM: 12,
        storage: 256,
        battery: 5500,
        price: 878,
    }, {
        id: 12,
        phoneImage: './images/lenovo-legion-.jpg',
        brand: 'Lenovo',
        name: 'Legion Pro',
        mainCamera: 64,
        frontCamera: 20,
        RAM: 16,
        storage: 512,
        battery: 5000,
        price: 579,
    }
    ],
    shop: [{
        id: 2,
        phoneImage: './images/samsung-a52.jpg',
        brand: 'Samsung',
        name: 'Samsung Galaxy A52',
        mainCamera: 64,
        frontCamera: 32,
        RAM: 8,
        storage: 128,
        battery: 4500,
        price: 465,
    }]
}

const reducers = (state = inisialState, { type, payload }) => {
    switch (type) {
        case BUY_ITEM:
            return {

            }

        default:
            return state
    }
}

export default reducers;