"use strict"

// ===== Pages ===============================
// pages
const LandingPage = document.querySelector(".wrapperOne");
const LoginSignupPage = document.querySelector(".wrapperTwo");
const MainPage = document.querySelector(".main");

// landing page
const LoginBtn = document.querySelector(".landingPage .box .rhs .btnDiv button.login");
const StartBtn = document.querySelector(".landingPage .box .rhs .btnDiv button.start");

// login/Signup page
const BackBtn = document.querySelector(".wrapperTwo .goBack");
const LoginSignupPageContinueBtn = document.querySelector(".wrapperTwo .btn button");
const Fieldset = document.querySelector(".loginSignup .email fieldset");
const FLegend = document.querySelector(".loginSignup .email fieldset legend");
const Finput = document.querySelector(".loginSignup .email fieldset input");

// main page
const ArrowCollapser = document.querySelector(".main .left i.arrow");
const LeftBox = document.querySelector(".main .left");
const RightBox = document.querySelector(".main .right");
const LeftUpBox = document.querySelector(".main .left .upBox");
const LeftAccBtn = document.querySelector(".main .left button.user");
const LeftNewBtn = document.querySelector(".main .left button.new");
const RightSuggDivArr = document.querySelectorAll(".main .right .suggestion .roww div");
// ========================================================================





//======== Login page functionality =========================================
const LoginSignupPageHead = document.querySelector(".loginSignup .head h1");
const LoginSignupPageLoginTxt = document.querySelector(".loginSignup .login");
const LoginSignupPageLoginAnchor = document.querySelector(".loginSignup .login a");
const LoginSignupPageLoginSpan = document.querySelector(".loginSignup .login span");
// ============================================================================



// ===== Page switch functionality ========================================
LoginBtn.addEventListener("click",()=>{
    LandingPage.classList.add("notActive");
    LandingPage.style.zIndex = "0";
    LoginSignupPage.style.zIndex = "111";
});
StartBtn.addEventListener("click",()=>{
    LandingPage.style.zIndex = "0";
    MainPage.style.zIndex = "111";
    LandingPage.classList.add("notActive");
});
BackBtn.addEventListener("click",()=>{
    LandingPage.style.zIndex = "111";
    LoginSignupPage.style.zIndex = "0";
    LandingPage.classList.remove("notActive");
});
LoginSignupPageContinueBtn.addEventListener("click",()=>{
    LoginSignupPage.style.zIndex = "0";
    MainPage.style.zIndex = "111";
})
// =========================================================================


//======== Login page functionality ========================================
LoginSignupPageLoginAnchor.addEventListener("click",()=>{
    if(LoginSignupPageLoginTxt.classList.contains("logg")){
        LoginSignupPageLoginTxt.classList.remove("logg");
        LoginSignupPageLoginTxt.classList.add("sigg");
        LoginSignupPageHead.innerHTML =`Welcome back`;
        LoginSignupPageLoginAnchor.innerHTML =`Sign up`;
        LoginSignupPageLoginSpan.innerHTML=`Don't have an account?`;
    }
    else{
        LoginSignupPageLoginTxt.classList.remove("sigg");
        LoginSignupPageLoginTxt.classList.add("logg");
        LoginSignupPageHead.innerHTML =`Create your account`;
        LoginSignupPageLoginAnchor.innerHTML =`Log in`;
        LoginSignupPageLoginSpan.innerHTML=`Already have an account?`;
    }
});
Fieldset.addEventListener("click",()=>{
    Finput.focus();
    Fieldset.classList.add("borderBlue");
    FLegend.classList.add("clrBlue");
});
Finput.addEventListener("focusout",()=>{
    Fieldset.classList.remove("borderBlue");
    FLegend.classList.remove("clrBlue");
})

// ======================================================================


// ======= Main page functionality ============================
// Collapser
ArrowCollapser.addEventListener("mouseover",()=>{
    if(window.innerWidth > 450)
    if(ArrowCollapser.classList.contains("fa-grip-lines-vertical")){
        ArrowCollapser.classList.replace("fa-grip-lines-vertical","fa-chevron-left");
        LeftUpBox.classList.add("darken");
        LeftAccBtn.classList.add("darken");
    } 
})
ArrowCollapser.addEventListener("mouseout",()=>{
    if(window.innerWidth > 450)
    if(ArrowCollapser.classList.contains("fa-chevron-left")){
        ArrowCollapser.classList.replace("fa-chevron-left","fa-grip-lines-vertical");
        LeftUpBox.classList.remove("darken");
        LeftAccBtn.classList.remove("darken");
    }
})
// ArrowCollapser.addEventListener("click",()=>{
//     if(ArrowCollapser.classList.contains("fa-chevron-left")){
//         // if(window.innerWidth <= 450){
//         //     ArrowCollapser.classList.replace("fa-chevron-left","fa-bars");   
//         // }
//         // else{
//             ArrowCollapser.classList.replace("fa-chevron-left","fa-chevron-right");
//         // }
//         LeftBox.classList.add("translateLeft");
//         LeftUpBox.classList.remove("darken");
//         LeftAccBtn.classList.remove("darken");

//         LeftNewBtn.classList.add("nohide");
//         // if(window.innerWidth <= 450){
//         //     LeftNewBtn.classList.add("mobile");
//         // }

//         RightBox.classList.add("translateLeft");
//     }
//     else{
//         // if(window.innerWidth <= 450){
//         //     ArrowCollapser.classList.replace("fa-bars","fa-grip-lines-vertical");   
//         // }
//         // else
//             ArrowCollapser.classList.replace("fa-chevron-right","fa-grip-lines-vertical");
//         LeftBox.classList.remove("translateLeft");

//         LeftNewBtn.classList.remove("nohide");
//         // if(window.innerWidth <= 450){
//         //     LeftNewBtn.classList.remove("mobile");
//         // }

//         RightBox.classList.remove("translateLeft");

//     }
// })

ArrowCollapser.addEventListener("click",()=>{
    if(window.innerWidth <= 450){
        if(ArrowCollapser.classList.contains("fa-grip-lines-vertical")){
            // 
            ArrowCollapser.classList.replace("fa-grip-lines-vertical","fa-bars");   
            LeftNewBtn.classList.add("mobile");

            LeftBox.classList.add("translateLeft");
            LeftUpBox.classList.remove("darken");
            LeftAccBtn.classList.remove("darken");
            LeftNewBtn.classList.add("nohide");
            RightBox.classList.add("translateLeft");
            setTimeout(()=>{
                RightBox.classList.remove("hide");
            },410);
        }
        else{
            //
            ArrowCollapser.classList.replace("fa-bars","fa-grip-lines-vertical");   
            LeftNewBtn.classList.remove("mobile");
    
            LeftBox.classList.remove("translateLeft");
            LeftNewBtn.classList.remove("nohide");
            RightBox.classList.remove("translateLeft");
            RightBox.classList.add("hide");
        }
    }
    else{
        if(ArrowCollapser.classList.contains("fa-chevron-left")){

            ArrowCollapser.classList.replace("fa-chevron-left","fa-chevron-right");

            LeftBox.classList.add("translateLeft");
            LeftUpBox.classList.remove("darken");
            LeftAccBtn.classList.remove("darken");
            LeftNewBtn.classList.add("nohide");
            RightBox.classList.add("translateLeft");
        }
        else{
            ArrowCollapser.classList.replace("fa-chevron-right","fa-grip-lines-vertical");
            LeftBox.classList.remove("translateLeft");
    
            LeftNewBtn.classList.remove("nohide");
            RightBox.classList.remove("translateLeft");
        }
    } 
})
RightBox.addEventListener("click",()=>{
    if(!LeftBox.classList.contains("translateLeft")){
        if(window.innerWidth <= 450){
            // 
            ArrowCollapser.classList.replace("fa-grip-lines-vertical","fa-bars");   
            LeftNewBtn.classList.add("mobile");
    
            LeftBox.classList.add("translateLeft");
            LeftUpBox.classList.remove("darken");
            LeftAccBtn.classList.remove("darken");
            LeftNewBtn.classList.add("nohide");
            RightBox.classList.add("translateLeft");
            setTimeout(()=>{
                RightBox.classList.remove("hide");
            },410);
        }
    }
})

// Suggest div hover
RightSuggDivArr.forEach((divv)=>{
    divv.addEventListener("mouseover",()=>{
        const I = divv.querySelector("i");
        I.classList.add("active");
    })
    divv.addEventListener("mouseout",()=>{
        const I = divv.querySelector("i");
        I.classList.remove("active");
    })
})
if(window.innerWidth <= 450){
    RightBox.classList.add("hide");
}
// Auto resize textarea
const textarea = document.querySelector("textarea");
textarea.addEventListener("keyup", e =>{
    textarea.style.height = "auto";
    let scHeight = e.target.scrollHeight;
    textarea.style.height = `${scHeight}px`;
})
// ===========================================================



