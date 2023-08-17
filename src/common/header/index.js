import React, { Component } from "react";
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
import { faMagnifyingGlass, faArrowsRotate } from '@fortawesome/free-solid-svg-icons';
import { connect } from "react-redux";
import { searchFocus, searchBlur, getList, MouseEnter, MouseLeave, ChangePage } from "./store/actioncreators";

class Header extends Component {
    getListArea() {
        const { list, page, mouseIn, focused, totalPage, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
        const jslist = list.toJS();
        const pagelist = [];
        if (jslist.length) {
            for (let i = (page - 1) * 7; i < page * 7; i++) {
                pagelist.push(<SearchInfoItem key={i}>{jslist[i]}</SearchInfoItem>)
            }
        }
        if (focused || mouseIn) {
            return (
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        熱門搜尋
                        <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage)}>
                            更新
                        </SearchInfoSwitch>
                        <FontAwesomeIcon icon={faArrowsRotate} className="zoom" />
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pagelist}
                    </SearchInfoList>
                </SearchInfo>
            )
        } else {
            return
        }
    }
    render() {
        const { handleinputblur, handleInputFocus, focused, list } = this.props;
        return (
            <HeaderWrapper>
                <Logo />
                <Nav>
                    <NavItem className="left active">首頁</NavItem>
                    <NavItem className="left">下載</NavItem>
                    <NavItem className="right">登入</NavItem>
                    <NavItem className="right">Aa</NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={600}
                            classNames="slide"
                        >
                            <NavSearch
                                className={focused ? 'focused' : ''}
                                onFocus={() => handleInputFocus(list)}
                                onBlur={handleinputblur}
                            ></NavSearch>
                        </CSSTransition>
                        <FontAwesomeIcon
                            className={focused ? 'focused iconfont' : 'iconfont'}
                            icon={faMagnifyingGlass}
                        ></FontAwesomeIcon>
                        {this.getListArea(focused)}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className="writing">寫文章</Button>
                    <Button className="reg">註冊</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}


const mapStatetoProp = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        mouseIn: state.getIn(['header', 'mouseIn'])
    }
}

const mapDispatchtoProp = (dispatch) => {
    return {
        handleInputFocus(list) {
            (list.size === 0) && dispatch(getList());
            dispatch(searchFocus());
        },
        handleinputblur() {
            dispatch(searchBlur());
        },
        handleMouseEnter() {
            dispatch(MouseEnter());
        },
        handleMouseLeave() {
            dispatch(MouseLeave());
        },
        handleChangePage(page, totalPage) {
            if (page < totalPage) {
                dispatch(ChangePage(page + 1));
            } else {
                dispatch(ChangePage(1));
            }
        }
    }
}

export default connect(mapStatetoProp, mapDispatchtoProp)(Header);