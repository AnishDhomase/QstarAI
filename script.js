"use strict"

// ===== Page switch functionality ===============================
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


