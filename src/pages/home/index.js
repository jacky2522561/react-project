import React,{Component} from "react";
import Topic from "./components/Topic";
import List from "./components/List";
import Writter from "./components/Writter";
import Recommend from "./components/Recommend";
import {
    HomeWrapper,
    HomeLeft,
    HomeRight
} from './styled';
class Home extends Component{
    render(){
        return(
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img" src="https://moto7.net/imgs/cowboys-chopper-1.jpg"/>
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writter />
                </HomeRight>
            </HomeWrapper>
        )
    }
}

export default Home;