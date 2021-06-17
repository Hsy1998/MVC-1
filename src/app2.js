import './app2.css'
import $ from 'jquery'

const html = `
<div id="app2">
      <ol id="tab-bar">
        <li>1</li>
        <li>2</li>
      </ol>
      <ol id="content">
        <li>1</li>
        <li>2</li>
      </ol>
    </div>
`

const $element = $(html).appendTo($('body>#page'))

const $tabBar = $('#tab-bar')
const $content = $('#content')
const n = localStorage.getItem('index')

$tabBar.on('click', 'li', (e) => {
  const $li = $(e.currentTarget);
  $li.addClass('active').siblings().removeClass('active')
  const index = $li.index()
  const n = localStorage.setItem('index', index)
  $content.children().eq(index).addClass('block').siblings().removeClass('block')
})

$tabBar.children().eq(n).trigger('click')