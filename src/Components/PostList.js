import m from 'mithril'
import PostListState from '../States/PostListState'
import './PostList.scss'

class PostList {
  view() {
    return m(
      'ul.post-list',
      PostListState.map(post =>
        m('li.post', {}, [
          m('div.title', {}, post.title),
          m('div', {}, post.body),
        ])
      )
    )
  }
}

export default PostList
