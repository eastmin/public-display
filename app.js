let scrollLeft,
scrollTop,
frameLeftW,
frameRightW,
frameLeft = document.getElementsByClassName('frames__left')[0],
frameRight = document.getElementsByClassName('frames__right')[0],
imageWrapper = document.getElementById('imageWrapper'),
indexWrapper = document.getElementsByClassName('indexingWrapper')[0],
keywordWrapper = document.getElementsByClassName('keywordWrapper')[0],
logo = document.getElementById('logo'),
flag = 0;

let indexArr = ['Muntplein',
'Europaplein',
'Beursplein',
'Jan Evertsenstraat',
'Jan van Galenstraat',
'Tweede Nassausraat', 
'Hoek Koningsstraat', 
'Kraaipanstraat ',
'Leidsplein ',
'Lepelstraat ',
'Lindengracht ',
'Polanenstraat',
'Mercatorstraat ',
'Nieuwmarkt ',
'Molukkenstraat ',
'Dam ',
'Nieuwmarktbuurt ',
'Nieuwe Leliestraat ',
'Takstraat',
'Westerdoksdijk',
'Waterlooplein',
'Jordaan',
'Palmstraat ',
'Wenckebachweg ',
'Pieter Calandlaan',
'Plantage Middenlaan',
'Prinsengracht',
'Schaepmanstraat',
'Nieuwezijds Voorburgwal',
'Valkenburgerstraat',
'Torresstraat',
'Van de Veldestraat',
'Van Ostadestraat',
'Rokin',
'Zaandammerplein',
'Zuidelijke Wandelweg'];
indexArr.sort();

$(document).ready( ()=>{ 
    scrollLeft = $(window).scrollLeft() ;
    scrollTop = $(window).scrollTop() ;
});

const imgs = document.querySelectorAll('.img');

const createImgs = (keyword, fileCount) => {
    for(let i=1; i<fileCount+1; i++){
        let newImg = document.createElement('img');
        newImg.src = `media/img/keywords/${keyword}/${keyword}-${i}.png`;
        newImg.setAttribute('id', `${keyword}-${i}`);
        newImg.setAttribute('class', `keywordImg`);
        newImg.style.float = "left";
        keywordWrapper.appendChild(newImg);
    }
}

const createIndex = (indexName) => {
    let index = document.createElement('div');
    indexWrapper.appendChild(index);
    index.setAttribute('class', 'index');
    index.innerHTML = `<p>${indexName}</p>`;
}

for(let i=0; i<indexArr.length; i++){
    createIndex(indexArr[i]);
}


// Index toggle
logo.addEventListener('click', ()=>{
    let indexToggle = indexWrapper.classList;
    let keywordToggle = keywordWrapper.classList;

    if(flag == 0){
        document.body.style.overflow = "hidden";
        indexToggle.add('indexingWrapper__toggleOn');
        flag++;
    } else if(flag == 1){
        let t = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        console.log(t);
        document.body.style.overflow = "unset";
        keywordWrapper.style.top = t +'px';
        keywordToggle.add('keywordWrapper__toggleOn');
        indexToggle.remove('indexingWrapper__toggleOn');
        flag++;
    } else {
        console.log(2);
        document.body.style.overflow = "unset";
        keywordToggle.remove('keywordWrapper_toggleOn');
        flag = 0;
    }
})

// set frame width
const setFrameWidth = () => {
    frameLeftW = document.body.clientWidth - document.getElementsByClassName('img')[0].clientWidth;
    frameRightW = frameLeftW;
    frameLeft.style.width = frameLeftW + 'px';
    frameRight.style.width = frameRightW + 'px';
}

window.addEventListener('resize', setFrameWidth);

setFrameWidth();
createImgs('face', 75);
