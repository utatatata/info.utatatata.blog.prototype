import m from 'mithril'
import Index from './Pages/Index'

class Home {
  view() {
    return m("div", {}, "home")
  }
}

m.route.prefix('')
m.route(document.body, '/', {
  '/': Index,
  '/Home': Home,
})
