import * as actiontypes from "./actiontypes"
import {fromJS} from 'immutable';

const defaultstate= fromJS({
    focused: false,
    mouseIn: false,
    list:[],
    page: 1,
    totalPage: 1
});

export default(state = defaultstate,action) =>{
    switch(action.type){
        case actiontypes.HIF:
            return state.set('focused',true);
        case actiontypes.HIB:
            return state.set('focused',false);
        case actiontypes.CHANGELIST:
            return state.merge({
                list: action.data,
                totalPage: action.totalPage
            })
            //return state.set('list',action.data).set('totalPage',action.totalPage);
        case actiontypes.MOUSE_ENTER:
            return state.set('mouseIn',true);
        case actiontypes.MOUSE_LEAVE:
            return state.set('mouseIn',false);
        case actiontypes.CHANGE_PAGE:
            return state.set('page',action.page);
        default:
            return state;
    }
}