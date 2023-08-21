import styled from 'styled-components';

export const HomeWrapper = styled.div`
overflow: hidden;
width:960px;
margin: 0 auto;
`;

export const HomeLeft = styled.div`
float:left;
margin-left:15px;
padding-top:30px;
width:625px;
.banner-img{
    width: 625px;
    height: 400px;
}
`;

export const HomeRight = styled.div`
float:right;
width:280px;
`

export const TopicWrapper = styled.div`
overflow:hidden;
padding: 20px 0 10px 0;
margin-left: -18px;
`

export const TopicItem = styled.div`
float:left;
background: #f7f7f7;
padding-right: 10px;
margin-left: 18px;
margin-bottom: 18px;
height:32px;
line-height:32px;
font-size: 14px;
color:#000;
img{
    display: block;
    float: left;
    width:42px;
    margin-right: 10px;
}
border: 1px solid #dcdcdc;
border-radius: 4px;
`

export const ListItem = styled.div`
overflow:hidden;
padding:20px 0;
border-bottom: 1px solid #dcdcdc;
img{
    display:block;
    width:180px;
    height: 120px;
    float:right;
    border-radius:10px;
}
`

export const ListInfo = styled.div`
width:500px;
float:left;
margin-top: 20px;
.title{
    line-height: 27px;
    font-size:18px;
    font-weight:bold;
    color:#333
}
.desc{
    font-size:13px;
    line-height:24px;
    color: #999;
}
`

export const RecommendWrapper = styled.div`
margin:30px 0;
width: 280px;
`

export const RecommendItem = styled.div`
display:flex;
justify-content:center;
align-content:center;
flex-wrap: wrap;
width:280px;
height:50px;
background: #ddd;
border-radius: 4px;
margin-top:10px;
`