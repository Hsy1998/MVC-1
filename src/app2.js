import './app2.css'
import $ from 'jquery'

const eventBus = $(window)

const m = {
  data: {
    // 初始化数据
    index: parseInt(localStorage.getItem('index'))
  },
  update(data) {
    Object.assign(m.data, data)
    eventBus.trigger('m:updated')
    localStorage.setItem('index', m.data.index)
  },
}

// 视图相关放到v
const v = {
  el: null,
  html: (index) => {
    return `
   <ol id="tab-bar">
     <li class="${index === 0 ? 'active' : null}" data-index="0">1</li>
     <li class="${index === 1 ? 'active' : null}" data-index="1">2</li>
   </ol>
   <ol id="content">
     <li class="${index === 0 ? 'block' : null}">1</li>
     <li class="${index === 1 ? 'block' : null}">2</li>
   </ol>
`
  },
  init(container) {
    v.el = $(container)
  },
  render(index) {
    if (v.el.children.length !== 0) v.el.empty()
    $(v.html(index)).appendTo(v.el)
  },
}

// 其他操作都放c
const c = {
  init(container) {
    // 第一次渲染html
    v.init(container)
    v.render(m.data.index)
    c.autoBindEvents()
    eventBus.on('m:updated', () => {
      v.render(m.data.index)
    })
  },
  events: {
    'click #tab-bar li': 'index',
  },
  index(e) {
    const index = parseInt(e.currentTarget.dataset.index);
    console.log(index);
    m.update({
      index: index
    })
  },

  autoBindEvents() {
    for (let key in c.events) {
      const value = c[c.events[key]]
      const spaceIndex = key.indexOf(' ')
      const part1 = key.slice(0, spaceIndex)
      const part2 = key.slice(spaceIndex + 1)
      v.el.on(part1, part2, value)
    }
  }
}


export default c