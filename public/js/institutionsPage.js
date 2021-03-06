

let clickedButton = localStorage.getItem("@help-option")
document.getElementById("titulo-tipo-de-ajuda").innerHTML = "Instituições que precisam de <b class='tipo-ajuda'>" + clickedButton + "</b>"

let database = firebase.database()
var ref = database.ref('institutions/' + getHelpOption())
ref.on('value', gotData, errData)

console.log('carregando...')

sleep(2000).then(() => {
    //tirar a animação
    document.getElementById("loader-firebase").classList.remove("loader")
    document.getElementById("bg-loader-firebase").classList.remove("loader-bg")
})

function getHelpOption() {

    if(localStorage.getItem("@help-option") === 'comida')
        return 'alimento'
    if(localStorage.getItem("@help-option") === 'dinheiro')
        return 'dinheiro'
    if(localStorage.getItem("@help-option") === 'remédio')
        return 'medicamento'
    if(localStorage.getItem("@help-option") === 'roupa')
        return 'roupa'

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  