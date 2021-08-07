import { ADD_COMP_PHONE, BUY_ALL, BUY_ITEM, CANCLE_SHOP, FILTER_APPLE, FILTER_ASUS, FILTER_HUAWEI, FILTER_LENOVO, FILTER_SAMSUNG, ITEM_MINUS, ITEM_PLUS, REMOVE_COMP_PHONE_1, REMOVE_COMP_PHONE_2, REMOVE_ITEM, } from "./actionTypes";

export const buyItem = (id) => {
    return {
        type: BUY_ITEM,
        payload: id,
    };
}
export const itemPlus = (payload) => {
    return {
        type: ITEM_PLUS,
        payload: payload,
    };
}
export const itemMinus = (payload) => {
    return {
        type: ITEM_MINUS,
        payload: payload,
    };
}
export const removeItem = (id) => {
    return {
        type: REMOVE_ITEM,
        payload: id,
    };
}
export const filterSamsung = (payload) => {
    return {
        type: FILTER_SAMSUNG,
        payload: payload,
    };
}
export const filterApple = (payload) => {
    return {
        type: FILTER_APPLE,
        payload: payload,
    };
}
export const filterHuawei = (payload) => {
    return {
        type: FILTER_HUAWEI,
        payload: payload,
    };
}
export const filterAsus = (payload) => {
    return {
        type: FILTER_ASUS,
        payload: payload,
    };
}
export const filterLenovo = (payload) => {
    return {
        type: FILTER_LENOVO,
        payload: payload,
    };
}
export const cancleShop = () => {
    return {
        type: CANCLE_SHOP,
    }
}
export const buyAll = () => {
    return {
        type: BUY_ALL,
    }
}
export const removeCompPhone1 = () => {
    return {
        type: REMOVE_COMP_PHONE_1,
    }
}
export const removeCompPhone2 = () => {
    return {
        type: REMOVE_COMP_PHONE_2,
    }
}
export const addCompPhone = (payload) => {
    return {
        type: ADD_COMP_PHONE,
        payload: payload
    }
}