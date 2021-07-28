import { BUY_ITEM, ITEM_PLUS, REMOVE_ITEM, } from "./actionTypes";

export const buyItem = (id) => {
    return {
        type: BUY_ITEM,
        payload: id,
    };
}
export const itemPlus = (newPhone) => {
    return {
        type: ITEM_PLUS,
        payload: newPhone
    };
}
export const removeItem = (id) => {
    return {
        type: REMOVE_ITEM,
        payload: id,
    };
}