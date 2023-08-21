import React, { Component } from 'react';
import { RecommendWrapper, RecommendItem } from '../styled';
import { connect } from 'react-redux';
class Recommend extends Component {
    render() {
        const {R_List} = this.props;
        return (
            <RecommendWrapper>
                {
                    R_List.map((item) => {
                        return (
                            <RecommendItem key={item.get('id')}>
                                {item.get('title')}
                            </RecommendItem>
                        )
                    })
                }
            </RecommendWrapper>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        R_List: state.getIn(['home', 'Recommendlist'])
    }
}

export default connect(mapStatetoProps, null)(Recommend);