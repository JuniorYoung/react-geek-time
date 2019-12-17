import React from 'react'
import PropTypes from 'prop-types'

const Posts = (props) => (
    <ul>
        {props.dataType === 'videoHomeTab'
            ? 
            props.posts.map((post, i) => <li key={i}><a href={post.apiUrl}>{post.name}</a></li>)
            :
            props.posts.map((post, i) => <li key={i}>{post.title}</li>)
        }
    </ul>
)

Posts.propTypes = {
    posts: PropTypes.array.isRequired
}

export default Posts