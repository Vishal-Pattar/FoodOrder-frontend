import axios from "axios";
import {
    GET_MENU_REQUEST,
    GET_MENU_SUCCESS,
    GET_MENU_FAIL,
    CLEAR_ERROR,
} from "../constants/menuConstant";

export const getMenus = (id) => async (dispatch) => {
    try {
        dispatch({ type: GET_MENU_REQUEST });
        let link = `/api/v1/eats/stores/${id}/menus`;
        const response = await axios.get(link);
        dispatch({
            type: GET_MENU_SUCCESS,
            payload: response.data.data[0].menu,
        });
    } catch (err) {
        dispatch({
            type: GET_MENU_FAIL,
            payload: err.response.data.message,
        });
    }
};


export const clearErrors = () => {
    return {
        type: CLEAR_ERROR,
    };
}