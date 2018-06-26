

let clickedButton = localStorage.getItem("@help-option")
document.getElementById("titulo-tipo-de-ajuda").innerHTML = "Instituições que precisam de " + clickedButton

let database = firebase.database()
var ref = database.ref('institutions/' + getHelpOption())
ref.on('value', gotData, errData)

console.log('carregando...')

sleep(3000).then(() => {
    //tirar a animação
    document.getElementById("loader-firebase").classList.remove("loader")
})

function getHelpOption() {

    if(localStorage.getItem("@help-option") === 'comida')
        return 'food'
    if(localStorage.getItem("@help-option") === 'dinheiro')
        return 'money'
    if(localStorage.getItem("@help-option") === 'remédio')
        return 'medicine'
    if(localStorage.getItem("@help-option") === 'roupa')
        return 'clothe'

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  