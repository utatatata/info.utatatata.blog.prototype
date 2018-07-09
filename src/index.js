import m from 'mithril'
import PostList from './Components/PostList'

class Index {
  view() {
    return m("div", {}, [
      m(PostList)
    ])
  }
}

m.mount(document.body, Index)
