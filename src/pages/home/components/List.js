import React, { Component } from 'react';
import { ListItem, ListInfo } from '../styled';
import { connect } from 'react-redux';
class List extends Component {
    render() {
        const { L_List } = this.props;
        return (
            <ListItem>
                {
                    L_List.map((item) => {
                        return (
                            <ListInfo key={item.get('id')}>
                                < img src={item.get('imgURL')} />
                                <h3 className='title'>{item.get('title')}</h3>
                                <p className='desc'>{item.get('article')}</p>
                            </ListInfo>
                        )
                    })
                }
            </ListItem>
        )
    }
}
const mapStatetoProps = (state) => {
    return {
        L_List: state.getIn(['home', 'List'])
    }
}
export default connect(mapStatetoProps, null)(List);