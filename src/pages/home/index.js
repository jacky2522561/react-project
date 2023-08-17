import React,{Component} from "react";
import {
    HomeWrapper,
    HomeLeft,
    HomeRight
} from './styled';
class Home extends Component{
    render(){
        return(
            <HomeWrapper>
                <HomeLeft>Left</HomeLeft>
                <HomeRight>Right</HomeRight>
            </HomeWrapper>
        )
    }
}

export default Home;