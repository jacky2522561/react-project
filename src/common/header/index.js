import React from "react";
import {
    HeaderWrapper
    , Logo
    , Nav
    , NavItem
    , NavSearch
    , Addition
    , Button
    , SearchWrapper
    , SearchInfo
    , SearchInfoTitle
    , SearchInfoSwitch
    , SearchInfoItem
    , SearchInfoList
} from './style';
import { CSSTransition } from "react-transition-group";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { connect } from "react-redux";
import { searchFocus, searchBlur } from "./store/actioncreators";

const getListArea = (show) =>{
    if(show){
        return(
            <SearchInfo>
            <SearchInfoTitle>
                熱門搜尋
                <SearchInfoSwitch>
                    更新
                </SearchInfoSwitch>
            </SearchInfoTitle>
            <SearchInfoList>
                <SearchInfoItem>哈雷</SearchInfoItem>
                <SearchInfoItem>鈴木</SearchInfoItem>
                <SearchInfoItem>川崎</SearchInfoItem>
                <SearchInfoItem>本田</SearchInfoItem>
                <SearchInfoItem>BMW</SearchInfoItem>
                <SearchInfoItem>Triumph</SearchInfoItem>
            </SearchInfoList>
        </SearchInfo>
        )
    }else{
        return
    }
}
const Header = (props) => {
    return (
        <HeaderWrapper>
            <Logo />
            <Nav>
                <NavItem className="left active">首頁</NavItem>
                <NavItem className="left">下載</NavItem>
                <NavItem className="right">登陸</NavItem>
                <NavItem className="right">Aa</NavItem>
                <SearchWrapper>
                    <CSSTransition
                        in={props.focused}
                        timeout={600}
                        classNames="slide"
                    >
                        <NavSearch
                            className={props.focused ? 'focused' : ''}
                            onFocus={props.handleInputFocus}
                            onBlur={props.handleinputblur}
                        ></NavSearch>
                    </CSSTransition>
                    <FontAwesomeIcon
                        className={props.focused ? 'focused iconfont' : 'iconfont'}
                        icon={faMagnifyingGlass}
                    ></FontAwesomeIcon>
                    {getListArea(props.focused)}
                </SearchWrapper>
            </Nav>
            <Addition>
                <Button className="writing">寫文章</Button>
                <Button className="reg">註冊</Button>
            </Addition>
        </HeaderWrapper>
    )
}


const mapStatetoProp = (state) => {
    return {
        focused: state.getIn(['header', 'focused'])
    }
}

const mapDispatchtoProp = (dispatch) => {
    return {
        handleInputFocus() {
            const action = searchFocus();
            dispatch(action);
        },
        handleinputblur() {
            const action = searchBlur();
            dispatch(action);
        }
    }
}

export default connect(mapStatetoProp, mapDispatchtoProp)(Header);