function login() {
    const email = document.getElementById('email_login').value
    if (email != '') {
        alert(`Login bem sucedido com o e-mail ${email}!`)
        window.location.href = '../html/userAccount.html';
    }
}