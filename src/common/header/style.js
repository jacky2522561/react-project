import styled from 'styled-components';
import logopic from '../../Honda-CB350-Brat-Cafe-1.jpg';

export const HeaderWrapper = styled.div`
position: relative;
height: 56px;
border-bottom: 1px solid #f0f0f0;
`

export const Logo = styled.a.attrs({
    href: '/'
})`
position: absolute;
top: 0;
left: 0;
display: block;
width:100px;
height: 56px;
background: url(${logopic});
background-size: contain;
`

export const Nav = styled.div`
width:960px;
padding-right:70px;
box-sizing:border-box;
height: 100%;
margin: 0 auto;
`

export const NavItem = styled.div`
line-height:56px;
padding: 0 15px;
font-size: 17px;
color: #333;
&.left{
    float: left;
}
&.right{
    float: right;
    color: #969696;
}
&.active{
    color:#ea6f5a;
}
`
export const NavSearch = styled.input.attrs({
    placeholder: 'search'
})`
width: 160px;
height: 38px;
padding: 0 30px 0 20px;
margin-left: 20px;
box-sizing: border-box;
margin-top: 9px;
border: none;
outline: none;
border-radius: 19px;
background: #eee;
font-size: 14px;
color: #666;
&::placeholder{
    color: #999;
}
&.focused{
    width:250px;
}
&.slide-enter{
    transition: all .6s ease-out;
    }
    &.slide-enter-active{
    width:250px;
    }
    &.slide-exit{
        transition: all .6s ease-out;
    }
    &.slide-exit-active{
        width:160px;
    }
`

export const SearchInfo = styled.div`
    position: absolute;
    left: 0;
    top: 56px;
    width: 240px;
    padding: 0 20px;
    box-shadow: 0 0 8px rgba(0, 0 ,0 , .2);
    background: #fff;
    opacity: 0.94;
`

export const SearchInfoTitle = styled.div`
margin-top: 20px;
margin-bottom: 15px;
line-height: 20px;
font-size: 14px;
color: #969696;
.zoom{
    float: right;
    width: 18px;
    padding-top: 2px;
}
`

export const SearchInfoSwitch = styled.span`
float: right;
font-size: 13px;
cursor: pointer;
`
export const SearchInfoList = styled.div`
overflow: hidden;
`
export const SearchInfoItem = styled.a`
font-size: 12px;
display: block;
float: left;
line-height: 20px;
padding: 0 5px;
border: 1px solid #ddd;
color: #787878;
border-radius: 3px;
margin-right: 10px;
margin-bottom: 10px;
`

export const Addition = styled.div`
position: absolute;
right:0;
top: 0;
height: 56px;
`

export const Button = styled.button`
float:right;
line-height:38px;
border-radius:19px;
margin-top:9px;
margin-right:20px;
padding: 0 20px;
border: 1px solid #ec6149;
font-size: 14px;
&.reg{
    color: #ec6149;
}
&.writing{
    color:fff;
    background: #ec6149;
}
`

export const SearchWrapper = styled.div`
position:relative;
float: left;
.iconfont{
    position:absolute;
    right:5px;
    bottom:4px;
    width:16px;
    border-radius:18px;
    height:16px;
    padding:7px;
    text-align:center;
    &.focused{
        background: #777;
        color: #fff;
    }
}
`
