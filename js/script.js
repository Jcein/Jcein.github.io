let navbarDiv = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if(document.body.scrollTop > 40 || document.documentElement.scrollTop > 40){
        navbarDiv.classList.add('navbar-cng');
    } else {
        navbarDiv.classList.remove('navbar-cng');
    }
});


const navbarCollapseDiv = document.getElementById('navbar-collapse');
const navbarShowBtn = document.getElementById('navbar-show-btn');
const navbarCloseBtn = document.getElementById('navbar-close-btn');
// show navbar
navbarShowBtn.addEventListener('click', () => {
    navbarCollapseDiv.classList.add('navbar-collapse-rmw');
});

// hide side bar
navbarCloseBtn.addEventListener('click', () => {
    navbarCollapseDiv.classList.remove('navbar-collapse-rmw');
});

document.addEventListener('click', (e) => {
    if(e.target.id != "navbar-collapse" && e.target.id != "navbar-show-btn" && e.target.parentElement.id != "navbar-show-btn"){
        navbarCollapseDiv.classList.remove('navbar-collapse-rmw');
    }
});

// stop transition and animatino during window resizing
let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove("resize-animation-stopper");
    }, 400);
});

//----------------------------------------------------------------------------------------------------------------------------------------------------------
//open picture
//----------------------------------------------------------------------------------------------------------------------------------------------------------
    
    const clickImgs1 = document.querySelector('.js-gallery-img1')
    const clickImgs2 = document.querySelector('.js-gallery-img2')
    const clickImgs3 = document.querySelector('.js-gallery-img3')
    const clickImgs4 = document.querySelector('.js-gallery-img4')
    const clickImgs5 = document.querySelector('.js-gallery-img5')
    const clickImgs6 = document.querySelector('.js-gallery-img6')
    const clickImgs7 = document.querySelector('.js-gallery-img7')
    const clickImgs8 = document.querySelector('.js-gallery-img8')
    const clickImgs9 = document.querySelector('.js-gallery-img9')

    const galModal1=document.querySelector('.galModal-1')
    const galModal2=document.querySelector('.galModal-2')
    const galModal3=document.querySelector('.galModal-3')
    const galModal4=document.querySelector('.galModal-4')
    const galModal5=document.querySelector('.galModal-5')
    const galModal6=document.querySelector('.galModal-6')
    const galModal7=document.querySelector('.galModal-7')
    const galModal8=document.querySelector('.galModal-8')
    const galModal9=document.querySelector('.galModal-9')
    
    const outImgs=document.querySelector('.first-modal-container')
    const allImgmodals=document.querySelectorAll('.gallery-modal')
    function outimg(){
        for( const allImgmodal of  allImgmodals){
            allImgmodal.classList.remove('open-gallery-modal')
        }
    }
    /*function openScrollMouse() {
        document.getElementById("bn").style.overflow='auto';
    }*/

    outImgs.addEventListener('click',outimg)
    //outImgs.addEventListener('click',openScrollMouse)

    function openimg1(){
        galModal1.classList.add('open-gallery-modal')
    }
    function openimg2(){
        galModal2.classList.add('open-gallery-modal')
    }
    function openimg3(){
        galModal3.classList.add('open-gallery-modal')
    }
    function openimg4(){
        galModal4.classList.add('open-gallery-modal')
    }
    function openimg5(){
        galModal5.classList.add('open-gallery-modal')
    }
    function openimg6(){
        galModal6.classList.add('open-gallery-modal')
    }
    function openimg7(){
        galModal7.classList.add('open-gallery-modal')
    }
    function openimg8(){
        galModal8.classList.add('open-gallery-modal')
    }
    function openimg9(){
        galModal9.classList.add('open-gallery-modal')
    }

        clickImgs1.addEventListener('click',openimg1)
        clickImgs2.addEventListener('click',openimg2)
        clickImgs3.addEventListener('click',openimg3)
        clickImgs4.addEventListener('click',openimg4)
        clickImgs5.addEventListener('click',openimg5)
        clickImgs6.addEventListener('click',openimg6)
        clickImgs7.addEventListener('click',openimg7)
        clickImgs8.addEventListener('click',openimg8)
        clickImgs9.addEventListener('click',openimg9)
//----------------------------------------------------------------------------------------------------------------------------------------------------------
//open payment
//----------------------------------------------------------------------------------------------------------------------------------------------------------

const secondItems=document.querySelectorAll('.js-second-item')
            const secondPlace=document.querySelector('.js-second-modal-container')
            const modalClose=document.querySelector('.js-modal-close')
            
            const submitModal=document.querySelector('.js-submit-modal')
            function openSecondModal() {
                secondPlace.classList.add('openBtn')
            }

            for( const secondItem of secondItems){
                secondItem.addEventListener('click',openSecondModal)
            }
            function resetInput(){
                secondPlace.classList.remove('openBtn');
                document.getElementById('checkNumber').value='';
                document.getElementById("error").innerHTML="";
                document.getElementById("pay-error").innerHTML="";
                document.getElementById("amount").innerHTML="";
                document.getElementById("tax").innerHTML="";
                document.getElementById("total-money").innerHTML="";
                document.getElementById("amount9").innerHTML="";
                document.getElementById("tax9").innerHTML="";
                document.getElementById("total-money9").innerHTML="";
                

                var checkInput=document.getElementsByName("pay");

                for (var i=0;i<checkInput.length;i++){
                    checkInput[i].checked=false;
                }
            }
            modalClose.addEventListener('click',resetInput)
            //modalClose.addEventListener('click',openScrollMouse)
            secondPlace.addEventListener('click',resetInput)
            //secondPlace.addEventListener('click',openScrollMouse)
            // nổi bọt
            submitModal.addEventListener('click',function(event){event.stopPropagation()})
//----------------------------------------------------------------------------------------------------------------------------------------------------------
//Calculate
//----------------------------------------------------------------------------------------------------------------------------------------------------------

const removeCheck1=document.querySelector('.modal-input')
    const removeChecks2=document.querySelectorAll('.modal-card')

    function resetMoney1(){
        document.getElementById("error").innerHTML="";
        document.getElementById('checkNumber').value='';
        document.getElementById("amount").innerHTML="";
        document.getElementById("tax").innerHTML="";
        document.getElementById("total-money").innerHTML="";
        document.getElementById("amount9").innerHTML="";
        document.getElementById("tax9").innerHTML="";
        document.getElementById("total-money9").innerHTML="";
    }

    removeCheck1.addEventListener('click',resetMoney1)

    function resetMoney2(){
        document.getElementById("pay-error").innerHTML="";
    }
    for( const removeCheck2 of removeChecks2){
        removeCheck2.addEventListener('click',resetMoney2)    
    }

    function checkquantity(){
        var x=document.getElementById("checkNumber").value ;
        if (x==""){document.getElementById("error").innerHTML="Vui lòng nhập số người tham gia !" }
        else {
            x=parseFloat(x);
            if (x<=0 || x>10){
                document.getElementById("error").innerHTML="Chỉ giới hạn trong khoảng 10 người !";
            }
            else {
                document.getElementById("error").innerHTML="";
            }
        }    
        
        var checkInput=document.getElementsByName("pay");
        var check1=false;

        for (var i=0;i<checkInput.length;i++){
            if (checkInput[i].checked == true){
                check1=true;break;
            }
        }

        if (check1==false){document.getElementById("pay-error").innerHTML="Vui lòng chọn phương thức thanh toán !"}
        if (check1==true){document.getElementById("pay-error").innerHTML=""}
        
        if (x>0 && x<=10 && check1==true){
            alert("Dịch bệnh thì tràn lan, đi cc! Để tiền mà đi chơi Tết với ny.")
        }
        }

      function autoCalculate() {
        var x=document.getElementById("checkNumber").value ;
        if (x==""){document.getElementById("error").innerHTML="Vui lòng nhập số người tham gia !" }
        else {
            x=parseFloat(x);
            if (x<=0 || x>10){
                document.getElementById("error").innerHTML="Chỉ giới hạn trong khoảng 10 người !";
            }
            else {
                document.getElementById("error").innerHTML="";
            }
        }    
 
        var checkInput=document.getElementsByName("pay");
        var check1=false;

        for (var i=0;i<checkInput.length;i++){
            if (checkInput[i].checked == true){
                check1=true;break;
            }
        }
 //--------------------------------------------------------------------------------------------------------------       
       
        if (check1==false){document.getElementById("pay-error").innerHTML="Vui lòng chọn phương thức thanh toán !"}
        if (check1==true ){document.getElementById("pay-error").innerHTML=""}

        
        if (x>0 && x<=10 && check1==true){
            let money=document.getElementById("place-modal").value;
            var amountz=0;
            var taxz=0;
            var moneyzz=0;
                if(money=="1"){
                    amountz=x*345000;
                    taxz=(amountz*10)/100;
                    moneyzz=amountz+taxz;
                    
                document.getElementById("amount").innerHTML=(amountz+" VNĐ");
                document.getElementById("tax").innerHTML=("+ "+taxz+" VNĐ");
                document.getElementById("total-money").innerHTML=(moneyzz+" VNĐ");
                 }
                 if(money=="2"){
                    amountz=x*549000;
                    taxz=(amountz*10)/100;
                    moneyzz=amountz+taxz;
                    
                document.getElementById("amount").innerHTML=(amountz+" VNĐ");
                document.getElementById("tax").innerHTML=("+ "+taxz+" VNĐ");
                document.getElementById("total-money").innerHTML=(moneyzz+" VNĐ");
                 }
                 if(money=="3"){
                    amountz=x*213000;
                    taxz=(amountz*10)/100;
                    moneyzz=amountz+taxz;
                    
                document.getElementById("amount").innerHTML=(amountz+" VNĐ");
                document.getElementById("tax").innerHTML=("+ "+taxz+" VNĐ");
                document.getElementById("total-money").innerHTML=(moneyzz+" VNĐ");
                 }
                 if(money=="4"){
                    amountz=x*457000;
                    taxz=(amountz*10)/100;
                    moneyzz=amountz+taxz;
                    
                document.getElementById("amount").innerHTML=(amountz+" VNĐ");
                document.getElementById("tax").innerHTML=("+ "+taxz+" VNĐ");
                document.getElementById("total-money").innerHTML=(moneyzz+" VNĐ");
                 }
                 if(money=="5"){
                    amountz=x*315000;
                    taxz=(amountz*10)/100;
                    moneyzz=amountz+taxz;
                    
                document.getElementById("amount").innerHTML=(amountz+" VNĐ");
                document.getElementById("tax").innerHTML=("+ "+taxz+" VNĐ");
                document.getElementById("total-money").innerHTML=(moneyzz+" VNĐ");
                 }
                 if(money=="6"){
                    amountz=x*300000;
                    taxz=(amountz*10)/100;
                    moneyzz=amountz+taxz;
                    
                document.getElementById("amount").innerHTML=(amountz+" VNĐ");
                document.getElementById("tax").innerHTML=("+ "+taxz+" VNĐ");
                document.getElementById("total-money").innerHTML=(moneyzz+" VNĐ");
                 }
                 if(money=="7"){
                    amountz=x*450000;
                    taxz=(amountz*10)/100;
                    moneyzz=amountz+taxz;
                    
                document.getElementById("amount").innerHTML=(amountz+" VNĐ");
                document.getElementById("tax").innerHTML=("+ "+taxz+" VNĐ");
                document.getElementById("total-money").innerHTML=(moneyzz+" VNĐ");
                 }
                 if(money=="8"){
                    amountz=x*250000;
                    taxz=(amountz*10)/100;
                    moneyzz=amountz+taxz;
                    
                document.getElementById("amount").innerHTML=(amountz+" VNĐ");
                document.getElementById("tax").innerHTML=("+ "+taxz+" VNĐ");
                document.getElementById("total-money").innerHTML=(moneyzz+" VNĐ");
                 }
                 if(money=="9"){
                    amountz=x*210000;
                    taxz=(amountz*10)/100;
                    moneyzz=amountz+taxz;
                    
                document.getElementById("amount").innerHTML=(amountz+" VNĐ");
                document.getElementById("tax").innerHTML=("+ "+taxz+" VNĐ");
                document.getElementById("total-money").innerHTML=(moneyzz+" VNĐ");
                 }
                 if(money=="10"){
                    amountz=x*230000;
                    taxz=(amountz*10)/100;
                    moneyzz=amountz+taxz;
                    
                document.getElementById("amount").innerHTML=(amountz+" VNĐ");
                document.getElementById("tax").innerHTML=("+ "+taxz+" VNĐ");
                document.getElementById("total-money").innerHTML=(moneyzz+" VNĐ");
                 }
                 if(money=="11"){
                    amountz=x*301000;
                    taxz=(amountz*10)/100;
                    moneyzz=amountz+taxz;
                    
                document.getElementById("amount").innerHTML=(amountz+" VNĐ");
                document.getElementById("tax").innerHTML=("+ "+taxz+" VNĐ");
                document.getElementById("total-money").innerHTML=(moneyzz+" VNĐ");
                 }
                 if(money=="12"){
                    amountz=x*345000;
                    taxz=(amountz*10)/100;
                    moneyzz=amountz+taxz;
                    
                document.getElementById("amount").innerHTML=(amountz+" VNĐ");
                document.getElementById("tax").innerHTML=("+ "+taxz+" VNĐ");
                document.getElementById("total-money").innerHTML=(moneyzz+" VNĐ");;
                 }
        
        }
        
        if (x>0 && x<=10 ){
            let money=document.getElementById("place-modal").value;
            var amountz=0;
            var taxz=0;
            var moneyzz=0;
                if(money=="1"){
                    amountz=x*345000;
                    taxz=(amountz*10)/100;
                    moneyzz=amountz+taxz;
                    
                document.getElementById("amount9").innerHTML=(amountz+" VNĐ");
                document.getElementById("tax9").innerHTML=("+ "+taxz+" VNĐ");
                document.getElementById("total-money9").innerHTML=(moneyzz+" VNĐ");
                 }
                 if(money=="2"){
                    amountz=x*549000;
                    taxz=(amountz*10)/100;
                    moneyzz=amountz+taxz;
                    
                document.getElementById("amount9").innerHTML=(amountz+" VNĐ");
                document.getElementById("tax9").innerHTML=("+ "+taxz+" VNĐ");
                document.getElementById("total-money9").innerHTML=(moneyzz+" VNĐ");
                 }
                 if(money=="3"){
                    amountz=x*213000;
                    taxz=(amountz*10)/100;
                    moneyzz=amountz+taxz;
                    
                document.getElementById("amount9").innerHTML=(amountz+" VNĐ");
                document.getElementById("tax9").innerHTML=("+ "+taxz+" VNĐ");
                document.getElementById("total-money9").innerHTML=(moneyzz+" VNĐ");
                 }
                 if(money=="4"){
                    amountz=x*457000;
                    taxz=(amountz*10)/100;
                    moneyzz=amountz+taxz;
                    
                document.getElementById("amount9").innerHTML=(amountz+" VNĐ");
                document.getElementById("tax9").innerHTML=("+ "+taxz+" VNĐ");
                document.getElementById("total-money9").innerHTML=(moneyzz+" VNĐ");
                 }
                 if(money=="5"){
                    amountz=x*315000;
                    taxz=(amountz*10)/100;
                    moneyzz=amountz+taxz;
                    
                document.getElementById("amount9").innerHTML=(amountz+" VNĐ");
                document.getElementById("tax9").innerHTML=("+ "+taxz+" VNĐ");
                document.getElementById("total-money9").innerHTML=(moneyzz+" VNĐ");
                 }
                 if(money=="6"){
                    amountz=x*300000;
                    taxz=(amountz*10)/100;
                    moneyzz=amountz+taxz;
                    
                document.getElementById("amount9").innerHTML=(amountz+" VNĐ");
                document.getElementById("tax9").innerHTML=("+ "+taxz+" VNĐ");
                document.getElementById("total-money9").innerHTML=(moneyzz+" VNĐ");
                 }
                 if(money=="7"){
                    amountz=x*450000;
                    taxz=(amountz*10)/100;
                    moneyzz=amountz+taxz;
                    
                document.getElementById("amount9").innerHTML=(amountz+" VNĐ");
                document.getElementById("tax9").innerHTML=("+ "+taxz+" VNĐ");
                document.getElementById("total-money9").innerHTML=(moneyzz+" VNĐ");
                 }
                 if(money=="8"){
                    amountz=x*250000;
                    taxz=(amountz*10)/100;
                    moneyzz=amountz+taxz;
                    
                document.getElementById("amount9").innerHTML=(amountz+" VNĐ");
                document.getElementById("tax9").innerHTML=("+ "+taxz+" VNĐ");
                document.getElementById("total-money9").innerHTML=(moneyzz+" VNĐ");
                 }
                 if(money=="9"){
                    amountz=x*210000;
                    taxz=(amountz*10)/100;
                    moneyzz=amountz+taxz;
                    
                document.getElementById("amount9").innerHTML=(amountz+" VNĐ");
                document.getElementById("tax9").innerHTML=("+ "+taxz+" VNĐ");
                document.getElementById("total-money9").innerHTML=(moneyzz+" VNĐ");
                 }
                 if(money=="10"){
                    amountz=x*230000;
                    taxz=(amountz*10)/100;
                    moneyzz=amountz+taxz;
                    
                document.getElementById("amount9").innerHTML=(amountz+" VNĐ");
                document.getElementById("tax9").innerHTML=("+ "+taxz+" VNĐ");
                document.getElementById("total-money9").innerHTML=(moneyzz+" VNĐ");
                 }
                 if(money=="11"){
                    amountz=x*301000;
                    taxz=(amountz*10)/100;
                    moneyzz=amountz+taxz;
                    
                document.getElementById("amount9").innerHTML=(amountz+" VNĐ");
                document.getElementById("tax9").innerHTML=("+ "+taxz+" VNĐ");
                document.getElementById("total-money9").innerHTML=(moneyzz+" VNĐ");
                 }
                 if(money=="12"){
                    amountz=x*345000;
                    taxz=(amountz*10)/100;
                    moneyzz=amountz+taxz;
                    
                document.getElementById("amount9").innerHTML=(amountz+" VNĐ");
                document.getElementById("tax9").innerHTML=("+ "+taxz+" VNĐ");
                document.getElementById("total-money9").innerHTML=(moneyzz+" VNĐ");;
                 }
        
        }
    }
    //----------------------------------------------------------------------------------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------------------------------------------------------------------------------

    
   /* function bruhha() {
        document.getElementById("bn").style.overflow='hidden'
    }*/