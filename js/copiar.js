function copiarATranferencia() {
    var email = document.getElementById('email').innerHTML;

    navigator.clipboard.writeText(email)
}