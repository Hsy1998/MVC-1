import './app1.css'
import $ from 'jquery'

// 数据相关放m
const m = {
  data: {
    // 初始化数据
    n: parseInt(localStorage.getItem('n'))
  }
}

// 视图相关放到v
const v = {
  el: null,
  html: `
  <div id="app1">
      <div id="number">{{n}}</div>
      <div>
        <button id="btnAdd">+1</button>
        <button id="btnMinus">-1</button>
        <button id="btnMultiply">*2</button>
        <button id="btnDivide">÷2</button>
      </div>
  </div>
`,
  init(container) {
    v.container = $(container)
    v.render()
  },
  render() {
    if (v.el === null) {
      v.el = $(v.html.replace('{{n}}', m.data.n)).prependTo(v.container)
    } else {
      const newEl = $(v.html.replace('{{n}}', m.data.n))
      v.el.replaceWith(newEl)
      v.el = newEl
    }

  },
}


// 初始化html
const html = `
  <div id="app1">
      <div id="number">100</div>
      <div>
        <button id="btnAdd">+1</button>
        <button id="btnMinus">-1</button>
        <button id="btnMultiply">*2</button>
        <button id="btnDivide">÷2</button>
      </div>
  </div>
`
// 其他操作都放c
const c = {
  init(container) {
    // 第一次渲染html
    v.init(container)
    c.ui = {
      btnAdd: $('#btnAdd'),
      btnMinus: $('#btnMinus'),
      btnMultiply: $('#btnMultiply'),
      btnDivide: $('#btnDivide'),
      number: $('#number')
    }
    c.bindEvents()
  },
  // 获取重要的元素

  bindEvents() {
    // 绑定鼠标事件
    v.container.on('click', '#btnAdd', () => {
      m.data.n += 1
      v.render()
    })
    v.container.on('click', '#btnMinus', () => {
      m.data.n -= 1
      v.render()
    })
    v.container.on('click', '#btnMultiply', () => {
      m.data.n *= 2
      v.render()
    })
    v.container.on('click', '#btnDivide', () => {
      m.data.n /= 2
      v.render()
    })
  }

}


export default c