var imgCount = 0;
var imgIndex = 0;

var rem1 = ["LEAVE NO TRACE OTHER THAN FOOTPRINTS" ,"CARRY YOUR OWN WATER IN A REUSABLE BOTTLE","GO ZERO WASTE","SAY NO TO PLASTIC CUTLERY WHEN ORDERING TAKEOUT","CONSERVE WATER AND ENERGY"];
var rem2 = ["RESPECT THE CULTURE","BE CAREFUL WITH GESTURES","BE POLITE, RESPECTFUL AND THANKFUL","DON’T TREAT LOCALS POORLY","DON’T DISRESPECT LOCAL LAWS"];
var rem3 = ["BRING YOUR COVID-19 VACCINATION CARD","WEAR A MASK IN INDOOR PUBLIC PLACES","BRING ALCOHOL OR HAND SANITIZERS WITH YOU","OBSERVE SOCIAL DISTANCING ","WASH YOUR HANDS OFTEN"];

var rem1Index = 0;
var rem2Index = 0;
var rem3Index = 0;

function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}
function navToMap(){
    document.querySelectorAll(".map-container").forEach(a=>a.style.display = "grid");
    document.querySelectorAll(".stay-place").forEach(a=>a.style.display = "none");
}

function navToStay(){
    document.querySelectorAll(".map-container").forEach(a=>a.style.display = "none");
    document.querySelectorAll(".stay-place").forEach(a=>a.style.display = "flex");
}

function showCurrentImages(imgName){
    var imgs = document.getElementsByClassName(imgName);

    for (i = 0; i < 3; ++i) {
        imgs[i].style.display = "block";
    }
}

function nextImages(imgName){
    if(imgIndex + 3 >= imgCount){
        imgIndex = 0;
    }else{
        imgIndex += 1;
    }

    var imgs = document.getElementsByClassName(imgName);
    imgCount = imgs.length;
    for (i = 0; i < imgCount; i++) {
        imgs[i].style.display = "none";
    }

    for (i = imgIndex; i < imgIndex + 3; i++) {
        imgs[i].style.display = "block";
    }
    console.log(imgIndex);
}


function prevImages(imgName){
    var imgs = document.getElementsByClassName(imgName);
    imgCount = imgs.length;
    if(imgIndex <= 0){
        imgIndex = imgCount - 3;
    }else{
        imgIndex -= 1;
    }
    
    for (i = 0; i < imgCount; i++) {
        imgs[i].style.display = "none";
    }

    for (i = imgIndex; i < imgIndex + 3; i++) {
        imgs[i].style.display = "block";
    }
}

function showImg(index , imgName){
    var imgs = document.getElementsByClassName(imgName);
    
    for (i = 0; i < imgs.length; i++) {
        imgs[i].style.display = "none";
    }

    imgs[index].style.display = "block";
}

function nextRem(h2ID){
    if(h2ID == "rem1"){
        rem1Index += 1;
        if(rem1Index >= 5)
        { 
            rem1Index = 0;
        }
        showRem(rem1Index , h2ID);
    }else if(h2ID == "rem2"){
        rem2Index += 1;
        if(rem2Index >= 5)
        {
            rem2Index = 0;
        }
        showRem(rem2Index , h2ID);
    }else if(h2ID == "rem3"){
        rem3Index += 1;
        if(rem3Index >= 5)
        {
            rem3Index = 0;
        }
        showRem(rem3Index , h2ID);
    }
}
function prevRem(h2ID){
    if(h2ID == "rem1"){
        rem1Index -= 1;
        if(rem1Index < 0)
        {
            rem1Index = 4;
        }
        showRem(rem1Index , h2ID);
    }else if(h2ID == "rem2"){
        rem2Index -= 1;
        if(rem2Index < 0)
        {
            rem2Index = 4;
        }
        showRem(rem2Index , h2ID);
    }else if(h2ID == "rem3"){
        rem3Index -= 1;
        if(rem3Index < 0)
        {
            rem3Index = 4;
        }
        showRem(rem3Index , h2ID);
    }
}

function showRem(index , h2ID){
    if(h2ID == "rem1"){
        document.getElementById(h2ID).innerHTML = rem1[index];
        var rem = document.getElementsByClassName("dotrem1");

        for (i = 0; i < rem.length; i++) {
            if(i == index){
                rem[index].classList.add("dot-active");
            }else{
                rem[i].classList.remove("dot-active");
            }
        }
    }else if(h2ID == "rem2"){
        document.getElementById(h2ID).innerHTML = rem2[index];
        var rem = document.getElementsByClassName("dotrem2");

        for (i = 0; i < rem.length; i++) {
            if(i == index){
                rem[index].classList.add("dot-active");
            }else{
                rem[i].classList.remove("dot-active");
            }
        }
    }else if(h2ID == "rem3"){
        document.getElementById(h2ID).innerHTML = rem3[index];
        var rem = document.getElementsByClassName("dotrem3");

        for (i = 0; i < rem.length; i++) {
            if(i == index){
                rem[index].classList.add("dot-active");
            }else{
                rem[i].classList.remove("dot-active");
            }
        }
        
    }
    showRemImage(index , h2ID);
}

function showRemImage(index , nm){
    if(nm == "rem1"){
        var imgPath = "styles/images/Reminders/rem1/" + (index + 1) + ".png";
        var imgContainer = document.getElementById('remImg1').style.backgroundImage = "url(" + imgPath + ")";
    }else if(nm == "rem2"){
        var imgPath = "styles/images/Reminders/rem2/" + (index + 1) + ".png";
        var imgContainer = document.getElementById('remImg2').style.backgroundImage = "url(" + imgPath + ")";
    }else if(nm == "rem3"){
        var imgPath = "styles/images/Reminders/rem3/" + (index + 1) + ".png";
        var imgContainer = document.getElementById('remImg3').style.backgroundImage = "url(" + imgPath + ")";
    }
}

function playPauseVideo(){
    let options = {
        root: null,
        rootMargin: '0px',
        treshold: 1.0
    };

    let callback = (entries , observer) =>{
        entries.forEach(entry => {
            if(entry.target.id == 'vid1'){
                if(entry.isIntersecting){
                    entry.target.play();
                }else{
                    entry.target.pause();
                }
            }
        });
    }

    let observer = new IntersectionObserver(callback , options);
    observer.observe(document.querySelector('#vid1'));
}

function playPauseVideo2(){
    let options = {
        root: null,
        rootMargin: '0px',
        treshold: 1.0
    };

    let callback = (entries , observer) =>{
        entries.forEach(entry => {
            if(entry.target.id == 'vid2'){
                if(entry.isIntersecting){
                    entry.target.play();
                }else{
                    entry.target.pause();
                }
            }
        });
    }

    let observer = new IntersectionObserver(callback , options);
    observer.observe(document.querySelector('#vid2'));
}





  