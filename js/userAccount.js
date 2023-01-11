// Defining DOM variables

const sectionProfile = document.getElementById('section_profile')
const sectionPedidos = document.getElementById('section_pedidos')
const sectionPagamentos = document.getElementById('section_pagamentos')
const sectionMoradas = document.getElementById('section_moradas')

const navProfile = document.getElementById('navperfil')
const navPedidos = document.getElementById('nav_pedidos')
const navPagamentos = document.getElementById('nav_pagamentos')
const navMoradas = document.getElementById('nav_moradas')

let currentsection = document.getElementById('section_profile')

// Function that changes section that is being shown at page

function changeSection(new_section) {
    console.log('im entering changeSection func');
    const currentSection = currentsection
    const newSection = new_section

    currentSection.style.display = 'none'
    newSection.style.display = 'grid'

    currentsection = new_section
}


// Event listeners

navProfile.addEventListener("click", (e)=> {
    e.preventDefault()
    changeSection(sectionProfile)
})

navPedidos.addEventListener("click", (e)=> {
    e.preventDefault()
    changeSection(sectionPedidos)
})

navPagamentos.addEventListener("click", (e)=> {
    e.preventDefault()
    changeSection(sectionPagamentos)
})

navMoradas.addEventListener("click", (e)=> {
    e.preventDefault()
    changeSection(sectionMoradas)
})