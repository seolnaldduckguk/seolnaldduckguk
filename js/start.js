const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
const endPoint = 4;
const select = [0, 0, 0, 0, 0, 0];

function calResult(){
    var result = select.indexOf(Math.max(...select));
    return result;
}

function setResult(){
    let point = calResult();
    const resultName = document.querySelector('.namer');
    resultName.innerHTML = infoList[point].name;
    
    var resultImg = document.createElement('img');
    const imgDiv = document.querySelector('#resultImg');
    var imgURL = 'img/image-' + point + '.jpg';
    resultImg.src = imgURL;
    resultImg.alt = point;
    imgDiv.appendChild(resultImg);

    const resultDesc = document.querySelector('.resultDesc');
    resultDesc.innerHTML = infoList[point].desc;
}

function goResult(){
    qna.style.WebkitAnimation = "fadeOut 0.8s";
    qna.style.animation = "fadeOut 0.8s";
    setTimeout(() => {
        result.style.WebkitAnimation = "fadeIn 0.8s";
        result.style.animation = "fadeIn 0.8s";
        setTimeout(() => {
            qna.style.display = "none";
            result.style.display = "block";
        }, 450)
    })  
        setResult();  
}

function addAnswer(answerText, n, idx) {
    var a = document.querySelector('.answerBox');
    var answer = document.createElement("button");

    answer.classList.add('answerList');
    answer.classList.add('my-3');
    answer.classList.add('py-3');
    answer.classList.add('mx-auto');
    answer.classList.add('fadeIn');

    a.appendChild(answer);
    answer.innerHTML = answerText;

    answer.addEventListener("click", function () {
        var children = document.querySelectorAll('.answerList');
        for (let i = 0; i < children.length; i++) {
            children[i].disabled = true;
            children[i].style.WebkitAnimation = "fadeOut 0.5s";
            children[i].style.animation = "fadeOut 0.5s";
        }
        setTimeout(() => {
            var target = qnaList[n].a[idx].type;
            for(let i = 0; i < target.length; i++){
                select[target[i]] += 1;
            }

            for (let i = 0; i < children.length; i++) {
                children[i].style.display = 'none';
            }
            goNext(++n);
        }, 450)
    }, false);
}

function goNext(n) {
    var c1 = document.querySelector("#circle1");
    var c2 = document.querySelector("#circle2");
    var c3 = document.querySelector("#circle3");
    var c4 = document.querySelector("#circle4");
    if(n === endPoint){
        c1.style.visibility='hidden';
        c2.style.visibility='hidden';
        c3.style.visibility='hidden';
        c4.style.visibility='hidden';
        goResult();
    }
    if(n==0){
        c2.style.visibility='hidden';
        c3.style.visibility='hidden';
        c4.style.visibility='hidden';
    } else if(n==1){
        c1.style.visibility='hidden';
        c2.style.visibility='visible';
        c3.style.visibility='hidden';
        c4.style.visibility='hidden';
    } else if(n==3){
        c1.style.visibility='hidden';
        c2.style.visibility='hidden';
        c3.style.visibility='visible';
        c4.style.visibility='hidden';
    } else if(n==2){
        c1.style.visibility='hidden';
        c2.style.visibility='hidden';
        c3.style.visibility='hidden';
        c4.style.visibility='visible';
    }

    var q = document.querySelector('.qBox');
    q.innerHTML = qnaList[n].q;
    for (let i in qnaList[n].a) {
        addAnswer(qnaList[n].a[i].answer, n, i);
    }
}

function begin() {
    main.style.WebkitAnimation = "fadeOut 0.8s";
    main.style.animation = "fadeOut 0.8s";
    setTimeout(() => {
        qna.style.WebkitAnimation = "fadeIn 0.8s";
        qna.style.animation = "fadeIn 0.8s";
        setTimeout(() => {
            main.style.display = "none";
            qna.style.display = "block";
        }, 300)
        let n = 0;
        goNext(n);
    }, 300);
}