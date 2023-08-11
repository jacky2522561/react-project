import * as actiontypes from "./actiontypes"
import {fromJS} from 'immutable';

const defaultstate= fromJS({
    focused: false
});

export default(state = defaultstate,action) =>{
    if(action.type === actiontypes.HIF){
        return state.set('focused',true);
    }
    if(action.type === actiontypes.HIB){
        return state.set('focused',false);
    }
    return state;
}