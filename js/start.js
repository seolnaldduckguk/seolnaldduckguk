lt = document.querySelector("#result");
const endPoint = 4;
var point;
var infopoint;

function setResult(){
    const resultName = document.querySelector('.namer');
    resultName.innerHTML = infoList[infopoint].name;

    var resultImg = document.createElement('img');
    const imgDiv = document.querySelector('#resultImg');
    var imgURL = 'img/image-' + point + '.png';
    resultImg.src = imgURL;
    resultImg.alt = point;
    resultImg.classList.add('img-fluid');
    imgDiv.appendChild(resultImg);

    const resultDesc = document.querySelector('.resultDesc');
    resultDesc.innerHTML = infoList[infopoint].desc;
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
            if(n==0){
                point+=1000*target[0];
                infopoint+=(target[0]-1)*64;
            }else if(n==1){
                point+=100*target[0];
                infopoint+=(target[0]-1)*16;
            }else if(n==2){
                point+=10*target[0];
                infopoint+=(target[0]-1)*4;
            }else if(n==3){
                point+=target[0];
                infopoint+=(target[0]-1)*1;
            }
           
            for (let i = 0; i < children.length; i++) {
                children[i].style.display = 'none';
            }
            goNext(++n);
        }, 450)
    }, false);
}

function goNext(n) {
    var c1=document.getElementById("circle1");
    var c2=document.getElementById("circle2");
    var c3=document.getElementById("circle3");
    var c4=document.getElementById("circle4");

    if(n==0){
        c1.style.backgroundColor="rgba(58, 123, 213)";
        c2.style.backgroundColor="rgba(175, 196, 231, 0.5)";
        c3.style.backgroundColor="rgba(175, 196, 231, 0.5)";
        c4.style.backgroundColor="rgba(175, 196, 231, 0.5)";
    }else if(n==1){
        c1.style.backgroundColor="rgba(175, 196, 231, 0.5)";
        c2.style.backgroundColor="rgba(58, 123, 213)";
        c3.style.backgroundColor="rgba(175, 196, 231, 0.5)";
        c4.style.backgroundColor="rgba(175, 196, 231, 0.5)";
    }else if(n==2){
        c1.style.backgroundColor="rgba(175, 196, 231, 0.5)";
        c2.style.backgroundColor="rgba(175, 196, 231, 0.5)";
        c3.style.backgroundColor="rgba(175, 196, 231, 0.5)";
        c4.style.backgroundColor="rgba(58, 123, 213)";
    }else if(n==3){
        c1.style.backgroundColor="rgba(175, 196, 231, 0.5)";
        c2.style.backgroundColor="rgba(175, 196, 231, 0.5)";
        c3.style.backgroundColor="rgba(58, 123, 213)";
        c4.style.backgroundColor="rgba(175, 196, 231, 0.5)";
    }else if(n === endPoint){
        c1.style.visibility='hidden';
        c2.style.visibility='hidden';
        c3.style.visibility='hidden';
        c4.style.visibility='hidden';
        goResult();
    }

    var q = document.querySelector('.qBox');
    q.innerHTML = qnaList[n].q;
    for (let i in qnaList[n].a) {
        addAnswer(qnaList[n].a[i].answer, n, i);
    }
}

function begin() {
    point=0;
    infopoint=0;
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

function moveHome() {
    result.style.WebkitAnimation = "fadeOut 0.8s";
    result.style.animation = "fadeOut 0.8s";
    setTimeout(() => {
        main.style.WebkitAnimation = "fadeIn 0.8s";
        main.style.animation = "fadeIn 0.8s";
        setTimeout(() => {
            result.style.display = "none";
            main.style.display = "block";
        }, 300)
    }
    )
}