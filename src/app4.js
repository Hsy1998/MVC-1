import './app4.css'
import $ from 'jquery'

const html = `
<div id="app4">
      <div class="round"></div>
    </div>
`

const $element = $(html).appendTo($('body>#page'))

const $round = $('#app4 .round')

$round.on('mouseenter', () => {
  $round.addClass('color')
}).on('mouseleave', () => {
  $round.removeClass('color')
})