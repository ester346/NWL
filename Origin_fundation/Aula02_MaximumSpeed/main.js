/* ABRE E FECHA O MENU QUANDO CLICAR NOS ÍCONES */
const nav = document.querySelector('#header nav')
console.log(nav)
const toggle = document.querySelectorAll('nav .toggle')
console.log(toggle)

for (const element of toggle) {
  console.log(element)
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* QUANDO CLICAR EM UM ITEM DO MENU, ESCONDER O MENU */

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  console.log(link)
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}
