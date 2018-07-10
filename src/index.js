import m from 'mithril'
import Index from './Pages/Index'

m.route(document.body, '/', {
  '/': Index
})

m.mount(document.body, Index)
