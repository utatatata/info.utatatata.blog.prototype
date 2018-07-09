import m from 'mithril'
import PostListData from '../Datas/PostListData'

class PostList {
  view() {
    return m("ul.post-list",
      PostListData.map(post =>
        m("li.post", {}, [
          m("div", {}, post.title),
          m("div", {}, post.body)
	])))
  }
}

export default PostList
