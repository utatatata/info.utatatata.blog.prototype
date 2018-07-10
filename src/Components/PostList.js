import m from 'mithril'
import PostListState from '../States/PostListState'

class PostList {
  view() {
    return m("ul.post-list",
      PostListState.map(post =>
        m("li.post", {}, [
          m("div", {}, post.title),
          m("div", {}, post.body)
	])))
  }
}

export default PostList
