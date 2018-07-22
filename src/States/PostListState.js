import Post from '../Models/Post'

const posts = require('../../ssgtmp/posts.json')

const PostListState = posts.map(Post.fromObj)

export default PostListState
