import './app4.css'
import $ from 'jquery'

const $round = $('#app4 .round')

$round.on('mouseenter', () => {
  $round.addClass('color')
}).on('mouseleave', () => {
  $round.removeClass('color')
})