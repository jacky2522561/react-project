import React, { Component } from 'react';
import { TopicWrapper, TopicItem } from '../styled';
import { connect } from 'react-redux';
class Topic extends Component {
    render() {
        const {List} = this.props;
        return (
            <TopicWrapper>
                {
                    List.map((item) => {
                        return (
                            <TopicItem key={item.get('id')}>
                                <img src={item.get('imgURL')} />
                                {item.get('title')}
                            </TopicItem>
                        )
                    })
                }
            </TopicWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        List: state.getIn(['home', 'topicList'])
    }
}

export default connect(mapStateToProps, null)(Topic);