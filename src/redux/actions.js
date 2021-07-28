import { BUY_ITEM, FILTER_APPLE, FILTER_ASUS, FILTER_HUAWEI, FILTER_LENOVO, FILTER_SAMSUNG, ITEM_PLUS, REMOVE_ITEM, } from "./actionTypes";

export const buyItem = (id) => {
    return {
        type: BUY_ITEM,
        payload: id,
    };
}
export const itemPlus = (payload) => {
    return {
        type: ITEM_PLUS,
        payload: payload
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