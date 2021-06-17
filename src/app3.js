import './app3.css'
import $ from 'jquery'

const html = `
<div id="app3">
      <div id="square"></div>
    </div>
`

const $element = $(html).appendTo($('body>#page'))

const $square = $('#square')
const n = localStorage.getItem('statu')
const statu = n === 'yes' ? 'move' : ''

$square.on('click', () => {
  if ($square.hasClass('move')) {
    $square.removeClass('move')
    let n = localStorage.setItem('statu', 'no')
  } else {
    $square.addClass('move')
    let n = localStorage.setItem('statu', 'yes')
  }

})
$square.addClass(statu)