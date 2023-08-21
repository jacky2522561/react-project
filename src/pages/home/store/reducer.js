import { fromJS } from "immutable";

const defaultState = fromJS({
    topicList:[{
        id:1,
        title:'熱門樣式',
        imgURL:'https://th.bing.com/th/id/OIP.TfckQPnwLyE7pa2YhgrdTQHaFj?pid=ImgDet&rs=1'
    },{
        id:2,
        title:'熱門樣式',
        imgURL:'https://th.bing.com/th/id/OIP.TfckQPnwLyE7pa2YhgrdTQHaFj?pid=ImgDet&rs=1'
    },{
        id:3,
        title:'熱門樣式',
        imgURL:'https://th.bing.com/th/id/OIP.TfckQPnwLyE7pa2YhgrdTQHaFj?pid=ImgDet&rs=1'
    },{
        id:4,
        title:'熱門樣式',
        imgURL:'https://th.bing.com/th/id/OIP.TfckQPnwLyE7pa2YhgrdTQHaFj?pid=ImgDet&rs=1'
    },{
        id:5,
        title:'熱門樣式',
        imgURL:'https://th.bing.com/th/id/OIP.TfckQPnwLyE7pa2YhgrdTQHaFj?pid=ImgDet&rs=1'
    },{
        id:6,
        title:'熱門樣式',
        imgURL:'https://th.bing.com/th/id/OIP.TfckQPnwLyE7pa2YhgrdTQHaFj?pid=ImgDet&rs=1'
    }],
    List:[{
        id:1,
        title:'傳奇人物 - David Mann 摩托車插畫大師',
        article:'除了以音樂文化來闡述設計理念以外，眼尖的朋友一定能看出在視覺圖像的傳達更引用了摩托車藝術大師 David Mann 的作品；那種對自由的渴望，不受拘束的騎士形象，一直都是 West Ride 所展現的。',
        imgURL:'https://mayclub.com.tw/cdn/shop/articles/ffeefe27116005916004ba0f4443560e.jpg?v=1525951182'
    },{
        id:2,
        title:'傳奇人物 - David Mann 摩托車插畫大師',
        article:'除了以音樂文化來闡述設計理念以外，眼尖的朋友一定能看出在視覺圖像的傳達更引用了摩托車藝術大師 David Mann 的作品；那種對自由的渴望，不受拘束的騎士形象，一直都是 West Ride 所展現的。',
        imgURL:'https://mayclub.com.tw/cdn/shop/articles/ffeefe27116005916004ba0f4443560e.jpg?v=1525951182'
    }],
    Recommendlist:[{
        id:1,
        title:'demo1'
    },{
        id:2,
        title:'demo2'
    },{
        id:3,
        title:'demo3'
    },{
        id:4,
        title:'demo4'
    }]
});

export default (state = defaultState,action) =>{
    switch(action.type){
        default:
            return state;
    }
}