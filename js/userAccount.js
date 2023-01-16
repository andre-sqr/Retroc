// Setting section changer

// Defining DOM variables

const sectionProfile = document.getElementById('section_profile')
const sectionPedidos = document.getElementById('section_pedidos')
const sectionMoradas = document.getElementById('section_moradas')

const navProfile = document.getElementById('navperfil')
const navPedidos = document.getElementById('nav_pedidos')
const navMoradas = document.getElementById('nav_moradas')

let currentsection = document.getElementById('section_profile')

// Function that changes section that is being shown at page

function changeSection(new_section) {
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

navMoradas.addEventListener("click", (e)=> {
    e.preventDefault()
    changeSection(sectionMoradas)
})


// Getting form values and displaying on page

// Defining DOM variables

const buttonFormUser = document.getElementById('submitformuser')
const buttonFormAdress = document.getElementById('submitformadress')

function readsInputsAndDisplaysUser() {
    const inputName = document.getElementById('personalname').value
    const inputUsername = document.getElementById('personalusername').value
    const inputEmail = document.getElementById('personalemail').value

    const asideBarName = document.getElementById('name_aside_bar')
    asideBarName.innerHTML = `<b>${inputName}</b>`
    const asideBarUsername = document.getElementById('username_aside_bar')
    asideBarUsername.innerHTML = `${inputUsername}`
    const headerUsername = document.getElementById('header_username')
    headerUsername.innerHTML = `<b>${inputUsername}</b>!`
    const asideBarEmail = document.getElementById('email_aside_bar')
    asideBarEmail.innerHTML = `${inputEmail}`
}

buttonFormUser.addEventListener("click", (e)=> {
    e.preventDefault()
    readsInputsAndDisplaysUser()
})

function readsInputsAndDisplayAdress() {
    const inputCity = document.getElementById('personalcity').value
    const inputStreet = document.getElementById('personalstreet').value
    const inputExtraAdress = document.getElementById('personalextraadress').value

    const spanCityAdress = document.getElementById('city_adress')
    spanCityAdress.innerHTML = `${inputCity}`
    const spanStreetAdress = document.getElementById('street_adress')
    spanStreetAdress.innerHTML = `${inputStreet}`
    const spanExtraAdress = document.getElementById('extra_adress')
    spanExtraAdress.innerHTML = `${inputExtraAdress}`
}

buttonFormAdress.addEventListener("click", (e)=> {
    e.preventDefault()
    readsInputsAndDisplayAdress()
})