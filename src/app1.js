import './app1.css'
import $ from 'jquery'

const $btnAdd = $('#btnAdd')
const $btnMinus = $('#btnMinus')
const $btnMultiply = $('#btnMultiply')
const $btnDivide = $('#btnDivide')
const $number = $('#number')

const n = localStorage.getItem('n')
$number.text(n || 100)

$btnAdd.on('click', () => {
  let n = parseInt($number.text())
  n += 1
  localStorage.setItem('n', n)
  $number.text(n)
})
$btnMinus.on('click', () => {
  let n = parseInt($number.text())
  n -= 1
  localStorage.setItem('n', n)
  $number.text(n)
})
$btnMultiply.on('click', () => {
  let n = parseInt($number.text())
  n *= 2
  localStorage.setItem('n', n)
  $number.text(n)
})
$btnDivide.on('click', () => {
  let n = parseInt($number.text())
  n /= 2
  localStorage.setItem('n', n)
  $number.text(n)
})