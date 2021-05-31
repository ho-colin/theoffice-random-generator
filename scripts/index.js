const setup = () => {
    let randomAflBtn = document.querySelector('#randomAflBtn');
    randomAflBtn.addEventListener('click',kiesAflevering);

    let creditsBtn = document.querySelector('#creditsBtn');
    creditsBtn.addEventListener('click',credits);
}

const kiesAflevering = () =>{
    let randomAflevering = Number.parseInt(Math.random() * 200);
    let afleveringSeizoen = document.querySelector('#afleveringSeizoen');
    let aflevering = document.querySelector('#aflevering');
    let titel = document.querySelector('#afleveringTitel');

    try{
        let uitkomstAflevering = officeData[randomAflevering];
        afleveringSeizoen.textContent = uitkomstAflevering.SEIZOEN;
        aflevering.textContent = uitkomstAflevering.AFLEVERING;
        titel.textContent = uitkomstAflevering.TITEL;

        let lijst = document.querySelector('#lijst');
        let li = document.createElement('li');
        li.textContent = `S${uitkomstAflevering.SEIZOEN}, A${uitkomstAflevering.AFLEVERING}, ${uitkomstAflevering.TITEL} `;
        li.addEventListener('click',markBekeken);

        let a = document.createElement('a');
        a.setAttribute('href',uitkomstAflevering.LINKSTREAMZ);
        a.setAttribute('target','_blank'); // OPENT IN NIEUW TAB
        a.textContent = 'Bekijk op Streamz';
        li.appendChild(a);
        lijst.appendChild(li);
    }catch{
        window.alert(`Aflevering met nummer ${randomAflevering} niet gevonden.`);
    }
}

const markBekeken = (event) =>{
    let doel = event.currentTarget;
    if(doel !== event.target) return;
    doel.classList.toggle('bekeken');
}

const credits = () =>{

    let creditsDiv = document.querySelector('#creditsDiv');
    creditsDiv.classList.toggle('onzichtbaar');
}

window.addEventListener("load", setup);