import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
    selectDataType,
    fetchPostsIfNeeded,
    invalidateDataType
} from '../actions/index'
import Picker from '../components/Picker'
import Posts from '../components/Posts'

const cates = [
    { text: '视频大纲', value: 'videoHomeTab' },
    { text: '音乐电台', value: 'musicBroadcasting' }
];

class AsyncApp extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        // this.handleRefreshClick = this.handleRefreshClick.bind(this)
    }

    componentDidMount() {
        const { dispatch, selectDataType } = this.props
        dispatch(fetchPostsIfNeeded(selectDataType))
    }

    // static getDerivedStateFromProps(nextProps, prevState) {
    //     if(prevState) {
    //         if(nextProps.selectDataType !== prevState.selectDataType) {
    //             const { dispatch, selectDataType } = nextProps
    //             dispatch(fetchPostsIfNeeded(selectDataType))
    //         }
    //     }
    // }

    handleChange(nextSubreddit) {
        console.log(nextSubreddit);
        this.props.dispatch(selectDataType(nextSubreddit))
    }

    render() {
        const { selectDataType, posts, isFetching } = this.props
        return (
            <div>
                <Picker value={selectDataType} onChange={this.handleChange} options={cates} />
                {isFetching && posts.length === 0 && <h2>Loading...</h2>}
                {!isFetching && posts.length === 0 && <h2>Empty.</h2>}
                {posts.length > 0 &&
                  <div style={{ opacity: isFetching ? 0.5 : 1 }}>
                      <Posts posts={posts} dataType={selectDataType} />
                  </div>
                }
            </div>
        )
    }
}

AsyncApp.propTypes = {
    selectDataType: PropTypes.string.isRequired,
    posts: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    const {
        selectDataType,
        postsByDataType
    } = state
    const {
        isFetching,
        lastUpdated,
        items: posts
    } = postsByDataType[selectDataType] || {
        isFetching: true,
        items: []
    }

    return {
        selectDataType,
        posts,
        isFetching,
        lastUpdated
    }
}

export default connect(mapStateToProps)(AsyncApp)