import './app1.css'
import $ from 'jquery'

const eventBus = $(window)

// 数据相关放m
const m = {
  data: {
    // 初始化数据
    n: parseInt(localStorage.getItem('n'))
  },
  update(data) {
    Object.assign(m.data, data)
    eventBus.trigger('m:updated')
    localStorage.setItem('n', m.data.n)
  },
}

// 视图相关放到v
const v = {
  el: null,
  html: `
      <div id="number">{{n}}</div>
      <div>
        <button id="btnAdd">+1</button>
        <button id="btnMinus">-1</button>
        <button id="btnMultiply">*2</button>
        <button id="btnDivide">÷2</button>
      </div>
`,
  init(container) {
    v.el = $(container)
  },
  render(n) {
    if (v.el.children.length !== 0) v.el.empty() // 清空el里的内容再赋值
    $(v.html.replace('{{n}}', n)).appendTo(v.el)
  },
}

// 其他操作都放c
const c = {
  init(container) {
    // 第一次渲染html
    v.init(container)
    c.autoBindEvents()
    v.render(m.data.n)
    eventBus.on('m:updated', () => {
      v.render(m.data.n)
    })
  },

  events: {
    'click #btnAdd': 'add',
    'click #btnMinus': 'minus',
    'click #btnMultiply': 'mul',
    'click #btnDivide': 'div'
  },
  add() {
    m.update({
      n: m.data.n + 1
    })
  },
  minus() {
    m.update({
      n: m.data.n - 1
    })
  },
  mul() {
    m.update({
      n: m.data.n * 2
    })
  },
  div() {
    m.update({
      n: m.data.n / 2
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