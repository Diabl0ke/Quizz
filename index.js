const form = document.querySelector('.form-quizz');
let tableauResultats = [];
const reponses = ['a','b','d','b','b','d','a','d'];
const emojis = ['✔️','✨','👀','😭','👎'];
const titreResultat = document.querySelector('.resultats h2');
const noteResultat = document.querySelector('.note');
const aideResultat = document.querySelector('.aide');
const toutesLesQuestions = document.querySelectorAll('.question-block');
let verifTableau = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(document.querySelector('input[name="q1"]:checked').value);

    for(i = 1; i < 9; i++) {
        tableauResultats.push(document.querySelector(`input[name="q${i}"]:checked`).value)
    }
    // console.log(tableauResultats);
    verifFunc(tableauResultats);
    tableauResultats = [];
})

function verifFunc(tabResultats) {

    for(let a = 0; a < 8; a++){

        if(tabResultats[a] === reponses[a]) {
            verifTableau.push(true);
        } else {
            verifTableau.push(false);
        }

    }

    // console.log(verifTableau);
    afficherResultats(verifTableau);
    couleursFonction(verifTableau);
    verifTableau = [];
}

function afficherResultats(tabCheck) {
    
    const nbDeFautes = tabCheck.filter(el => el !== true).length;
    // console.log(nbDeFautes);
    
    switch(nbDeFautes) {
        
        case 0 :
            titreResultat.innerText = `✔️ Bravo, c'est un sans faute ! ✔️`
            aideResultat.innerText = '';
            noteResultat.innerText = '8/8';
        break;
        case 1 :
            titreResultat.innerText = `✨ Vous y êtes presque ! ✨`
            aideResultat.innerText = 'Retentez une autre réponse dans la case rouge, puis re-validez !';
            noteResultat.innerText = '7/8';
        break;
        case 2 :
            titreResultat.innerText = `✨ Vous n'êtes pas loin ! ✨`
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !';
            noteResultat.innerText = '6/8';
        break;
        case 3 :
            titreResultat.innerText = `✨ Encore un effort ... 👀`;
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !';
            noteResultat.innerText = '5/8';
        break;
        case 4 :
            titreResultat.innerText = `✨ Encore un effort ... 👀`
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !';
            noteResultat.innerText = '4/8';
        break;
        case 5 :
            titreResultat.innerText = `👀 Il reste quelques erreurs. 😭`
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !';
            noteResultat.innerText = '3/8';
        break;
        case 6 :
            titreResultat.innerText = `😭 Peux mieux faire ! 👎`;
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !';
            noteResultat.innerText = '2/8';
        break;
        case 7 :
            titreResultat.innerText = `👎 Fait un effort sans déconner ! 😭`;
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !';
            noteResultat.innerText = '1/8';
        break;
        case 8 :
            titreResultat.innerText = `😭 Et tu dis connaître Final Fantasy ?! 😭`;
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !';
            noteResultat.innerText = '0/8';
        break;

        default: 'Woops, cas innatendu.;'

    }
}

function couleursFonction(tabValBool) {

    for(let j = 0; j < tabValBool.length; j++){

        if(tabValBool[j] === true){
            toutesLesQuestions[j].style.background = 'lightgreen';
        } else {
            toutesLesQuestions[j].style.background = '#ffb8b8';
            toutesLesQuestions[j].classList.add('echec');

            setTimeout(() => {
                toutesLesQuestions[j].classList.remove('echec');
            }, 500)
        }
        
    }

}

toutesLesQuestions.forEach(item => {
    item.addEventListener('click', () => {
        item.style.background = "white";
    })
})

