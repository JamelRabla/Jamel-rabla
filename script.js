const progress = document.querySelector('.progress')
const pourcent = document.querySelector('.progress span')

let a = 0;
function progressLoad(){
    if(a>=93){
        progress.style.width = `93%`;
        pourcent.innerHTML = "93%"

    }else{
        progress.style.width = `${a}%`;
        pourcent.innerHTML = `${a}%`;

    }
    a++

}

setInterval(progressLoad,70)