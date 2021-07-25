import { BUY_ITEM, } from "./actionTypes";

export const buyItem = (id) => {
    return {
        type: BUY_ITEM,
        payload: id,
    };
}