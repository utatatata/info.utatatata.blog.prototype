import Post from '../Models/Post'

const posts = require('../../tmp/posts.json')

const PostListState = posts.map(Post.fromObj)

export default PostListState
