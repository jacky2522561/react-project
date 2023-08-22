import * as actiontypes from "./actiontypes";
import { fromJS } from 'immutable';
import axios from 'axios';

const changeList = (data) => ({
    type: actiontypes.CHANGELIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 7)
})

export const searchFocus = () => ({
    type: actiontypes.HIF
});

export const searchBlur = () => ({
    type: actiontypes.HIB
});

export const getList = () => {
    return (dispatch) => {
        axios.get('https://jacky2522561.github.io/jsondemo/demo.json').then((res) => {
            const data = res.data;
            dispatch(changeList(data.data));
        }).catch(() => {
            console.log('error')
        })
    }
}

export const MouseEnter = () => ({
    type: actiontypes.MOUSE_ENTER
})

export const MouseLeave = () => ({
    type: actiontypes.MOUSE_LEAVE
})

export const ChangePage = (page) =>({
    type: actiontypes.CHANGE_PAGE,
    page
})
