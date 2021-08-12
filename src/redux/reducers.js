import { ADD_COMP_PHONE, BUY_ITEM, CANCLE_SHOP, FILTER_APPLE, FILTER_ASUS, FILTER_HUAWEI, FILTER_LENOVO, FILTER_SAMSUNG, ITEM_MINUS, ITEM_PLUS, REMOVE_COMP_PHONE_1, REMOVE_COMP_PHONE_2, REMOVE_ITEM } from "./actionTypes"

const inisialState = {
    phones: [{
        id: Math.random(),
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
        id: Math.random(),
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
        id: Math.random(),
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
        id: Math.random(),
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
        id: Math.random(),
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
        id: Math.random(),
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
        id: Math.random(),
        phoneImage: './images/huawei-p40-pro.jpg',
        brand: 'Huawei',
        name: 'Huawei P 40 Pro',
        mainCamera: 50,
        frontCamera: 32,
        RAM: 6,
        storage: 256,
        battery: 4200,
        price: 859,
        trailer: 'https://www.youtube.com/watch?v=hQcH_K_2Mpw',
        counter: 1,
    }, {
        id: Math.random(),
        phoneImage: './images/huawei-p30-pro.jpg',
        brand: 'Huawei',
        name: 'Huawei P 30 Pro',
        mainCamera: 40,
        frontCamera: 32,
        RAM: 8,
        storage: 256,
        battery: 4200,
        price: 1149,
        trailer: 'https://www.youtube.com/watch?v=mbV51222jwE',
        counter: 1,
    }, {
        id: Math.random(),
        phoneImage: './images/asus-zenfone-8.jpg',
        brand: 'Asus',
        name: 'Asus Zenfone 8',
        mainCamera: 64,
        frontCamera: 12,
        RAM: 12,
        storage: 256,
        battery: 4000,
        price: 848,
        trailer: 'https://www.youtube.com/watch?v=bMCH6giHePA',
        counter: 1,
    }, {
        id: Math.random(),
        phoneImage: './images/asus-rog-phone-5-ultimate.jpg',
        brand: 'Asus',
        name: 'Asus ROG Phone 5 Ultimate',
        mainCamera: 64,
        frontCamera: 24,
        RAM: 18,
        storage: 512,
        battery: 6000,
        price: 848,
        trailer: 'https://www.youtube.com/watch?v=KZuSI6hsa2Q',
        counter: 1,
    }, {
        id: Math.random(),
        phoneImage: './images/lenovo-legion-2-pro-phone-duel2-1.jpg',
        brand: 'Lenovo',
        name: 'Lenovo Legion 2 Pro',
        mainCamera: 64,
        frontCamera: 44,
        RAM: 12,
        storage: 256,
        battery: 5500,
        price: 878,
        trailer: 'https://www.youtube.com/watch?v=-7TJ19vFyLA',
        counter: 1,
    }, {
        id: Math.random(),
        phoneImage: './images/lenovo-legion-.jpg',
        brand: 'Lenovo',
        name: 'Lenovo Legion Pro',
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
    shop: [],
    filters: {
        samsung: false,
        apple: false,
        huawei: false,
        asus: false,
        lenovo: false,
    },
    comp: {
        comp1: {
            phoneImage: '',
            name: '',
            mainCamera: '',
            frontCamera: '',
            RAM: '',
            storage: '',
            battery: '',
            price: '',
        },
        comp2: {
            phoneImage: '',
            name: '',
            mainCamera: '',
            frontCamera: '',
            RAM: '',
            storage: '',
            battery: '',
            price: '',
        },
    }
}

const reducers = (state = inisialState, { type, payload }) => {
    switch (type) {
        //--------------------item number start----------------------
        case ITEM_PLUS:
            return {
                ...state, shop: state.shop.map((el) => el.id === payload.id ? { ...el, counter: payload.counter } : el)
            }
        case ITEM_MINUS:
            return {
                ...state, shop: state.shop.map((el) => el.id === payload.id ? { ...el, counter: el.counter === 1 ? el.counter = 1 : payload.counter } : el)
            }
        //----------------------item number end-------------------------
        //--------------------add/remove item srat----------------------
        case BUY_ITEM:
            return {
                ...state, shop: state.shop.find(el => el.id === payload.id) ? state.shop.map((el) => el.id === payload.id ? { ...el, counter: el.counter + 1 } : el)
                    : [...state.shop, payload]
            }
        case REMOVE_ITEM:
            return {
                ...state, shop: state.shop.filter((el) => el.id !== payload)
            }
        //------------------------------add/remove item end--------------------------------
        //--------------------------shopping : cancle / buy  start ------------------------
        case CANCLE_SHOP:
            return {
                ...state, shop: []
            }
        //--------------------------shopping : cancle / buy  end------------------------

        // -----------------------filters start-----------------------
        case FILTER_SAMSUNG:
            return {
                ...state, filters: {
                    ...state.filters,
                    samsung: !state.filters.samsung,
                    apple: false,
                    huawei: false,
                    asus: false,
                    lenovo: false,
                }
            }
        case FILTER_APPLE:
            return {
                ...state, filters: {
                    ...state.filters,
                    samsung: false,
                    apple: !state.filters.apple,
                    huawei: false,
                    asus: false,
                    lenovo: false,
                }
            }
        case FILTER_HUAWEI:
            return {
                ...state, filters: {
                    ...state.filters,
                    samsung: false,
                    apple: false,
                    huawei: !state.filters.huawei,
                    asus: false,
                    lenovo: false,
                }
            }
        case FILTER_ASUS:
            return {
                ...state, filters: {
                    ...state.filters,
                    samsung: false,
                    apple: false,
                    huawei: false,
                    asus: !state.filters.asus,
                    lenovo: false,
                }
            }
        case FILTER_LENOVO:
            return {
                ...state, filters: {
                    ...state.filters,
                    samsung: false,
                    apple: false,
                    huawei: false,
                    asus: false,
                    lenovo: !state.filters.lenovo,
                }
            }
        // -----------------------filters end-----------------------
        // -----------------------remove/add phone compair start-----------------------
        case REMOVE_COMP_PHONE_1:
            return {
                ...state, comp: {
                    ...state.comp,
                    comp1: {
                        phoneImage: '',
                        name: '',
                        mainCamera: '',
                        frontCamera: '',
                        RAM: '',
                        storage: '',
                        battery: '',
                        price: '',
                    },
                    comp2: state.comp.comp2
                }
            }
        case REMOVE_COMP_PHONE_2:
            return {
                ...state, comp: {
                    ...state.comp,
                    comp2: {
                        phoneImage: '',
                        name: '',
                        mainCamera: '',
                        frontCamera: '',
                        RAM: '',
                        storage: '',
                        battery: '',
                        price: '',
                    },
                    comp1: state.comp.comp1
                }
            }
        case ADD_COMP_PHONE:
            return {
                ...state, comp:
                    state.comp.comp1.phoneImage === '' ? { ...state.comp, comp1: payload }
                        : state.comp.comp2.phoneImage === '' ? { ...state.comp, comp2: payload }
                            : {
                                ...state.comp, comp: state.comp &&
                                    alert('Please remove a phone from the comparison table')
                            }
            }
        // -----------------------remove/add phone compair end-----------------------
        default:
            return state
    }
}

export default reducers;