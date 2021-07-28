import { BUY_ITEM, ITEM_PLUS, REMOVE_ITEM } from "./actionTypes"

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
        trailer: 'https://www.youtube.com/watch?v=dhAmMXCBIcg',
        counter: 1,
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
        trailer: 'https://www.youtube.com/watch?v=1DgyftEnp9o',
        counter: 1,
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
        trailer: 'https://www.youtube.com/watch?v=x5noEryhCcc',
        counter: 1,
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
        trailer: 'https://www.youtube.com/watch?v=TfRtC5cQCpA',
        counter: 1,
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
        trailer: 'https://www.youtube.com/watch?v=xXPE6RgAMOI',
        counter: 1,
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
        trailer: 'https://www.youtube.com/watch?v=5b9b-iCQFa4',
        counter: 1,
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
        trailer: 'https://www.youtube.com/watch?v=hQcH_K_2Mpw',
        counter: 1,
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
        trailer: 'https://www.youtube.com/watch?v=mbV51222jwE',
        counter: 1,
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
        trailer: 'https://www.youtube.com/watch?v=bMCH6giHePA',
        counter: 1,
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
        trailer: 'https://www.youtube.com/watch?v=KZuSI6hsa2Q',
        counter: 1,
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
        trailer: 'https://www.youtube.com/watch?v=-7TJ19vFyLA',
        counter: 1,
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
        trailer: 'https://www.youtube.com/watch?v=aUYW4DyUJNk',
        counter: 1,
    }
    ],
    shop: [{
        id: 8,
        phoneImage: './images/huawei-p30-pro.jpg',
        brand: 'Huawei',
        name: 'P 30 Pro',
        price: 1149,
        counter: 1,
    }, {
        id: 1,
        phoneImage: './images/samsung-s21.jpg',
        brand: 'Samsung',
        name: 'Samsung Galaxy S21 Ultra',
        price: 1199,
        counter: 1,
    }]
}

const reducers = (state = inisialState, { type, payload }) => {
    switch (type) {
        case ITEM_PLUS:
            return {
                // ...state, shop: state.shop.map((el) => el.id === payload ? { ...el, counter: counter + 1 } : el)
            }
        case BUY_ITEM:
            return {
                ...state, shop: [...state.shop, payload]
            }
        case REMOVE_ITEM:
            return {
                ...state, shop: state.shop.filter((el) => el.id !== payload)
            }

        default:
            return state
    }
}

export default reducers;