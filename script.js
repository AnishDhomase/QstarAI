"use strict"

// ======================== Pages ===============================
// ****** 3 pages
const LandingPage = document.querySelector(".wrapperOne");
const LoginSignupPage = document.querySelector(".wrapperTwo");
const MainPage = document.querySelector(".main");

// ******* landing page insider
const LoginBtn = document.querySelector(".landingPage .box .rhs .btnDiv button.login");
const StartBtn = document.querySelector(".landingPage .box .rhs .btnDiv button.start");

// ********  login/Signup page insider
const BackBtn = document.querySelector(".wrapperTwo .goBack");

const LoginSignupPageContinueBtn = document.querySelector(".wrapperTwo .btn button");

const Finput = document.querySelector(".loginSignup .email fieldset input");

const Fieldset = document.querySelector(".loginSignup .email fieldset");
const FLegend = document.querySelector(".loginSignup .email fieldset legend");
const LoginSignupPageHead = document.querySelector(".loginSignup .head h1");
const LoginSignupPageLoginTxt = document.querySelector(".loginSignup .login");
const LoginSignupPageLoginAnchor = document.querySelector(".loginSignup .login a");
const LoginSignupPageLoginSpan = document.querySelector(".loginSignup .login span");

// ******** main page insider
const LeftBox = document.querySelector(".main .left");
const RightBox = document.querySelector(".main .right");

const ArrowCollapser = document.querySelector(".main .left i.arrow");
const LeftUpBox = document.querySelector(".main .left .upBox");
const LeftNewBtn = document.querySelector(".main .left button.new");
const LeftContentBox = document.querySelector(".main .left .upBox .history .content");
const LeftAccBtn = document.querySelector(".main .left button.user");

const RightSuggDivArr = document.querySelectorAll(".main .right .suggestion .roww div");
const Textarea = document.querySelector(".main .right  .inputBox .inp textarea");
const TextareaWindow = document.querySelector(".main .right .loadWindow .ques .content textarea");
const MicrophoneBtn = document.querySelector(".main .right  .inputBox .inp i.fa-microphone");
const SendBtn = document.querySelector(".main .right  .inputBox .inp i.fa-paper-plane");

const NewChatBox = document.querySelector(".newchat");
const LoadWindowQA = document.querySelector(".main .right .loadWindow");

const OverlayTouchingPage = document.querySelector(".overlay");
const OverlayTouching = document.querySelector(".main .right .overlayTouching");
// ==========================================================================







// ============================ Page switch functionality ===========================
LoginBtn.addEventListener("click",()=>{
    LandingPage.classList.add("notActive");
    LandingPage.style.zIndex = "0";
    OverlayTouchingPage.style.zIndex = "0";
    MainPage.style.zIndex = "0";
    LoginSignupPage.style.zIndex = "111";
});
StartBtn.addEventListener("click",()=>{
    LoginSignupPage.style.zIndex = "0";
    LandingPage.style.zIndex = "0";
    MainPage.style.zIndex = "111";
    OverlayTouchingPage.style.zIndex = "50";
    LandingPage.classList.add("notActive");
});
BackBtn.addEventListener("click",()=>{
    LandingPage.style.zIndex = "111";
    LoginSignupPage.style.zIndex = "0";
    OverlayTouchingPage.style.zIndex = "0";
    MainPage.style.zIndex = "0";
    LandingPage.classList.remove("notActive");
});
LoginSignupPageContinueBtn.addEventListener("click",()=>{
    LandingPage.style.zIndex = "0";
    LoginSignupPage.style.zIndex = "0";
    OverlayTouchingPage.style.zIndex = "50";
    MainPage.style.zIndex = "111";
})
// ===================================================================================



//=============== Login page functionality ========================================
LoginSignupPageLoginAnchor.addEventListener("click",()=>{
    if(LoginSignupPageLoginTxt.classList.contains("logg")){
        // LoginSignupPageLoginTxt.classList.remove("logg");
        // LoginSignupPageLoginTxt.classList.add("sigg");

        LoginSignupPageLoginTxt.classList.replace("logg","sigg");

        LoginSignupPageHead.innerHTML =`Welcome back`;
        LoginSignupPageLoginAnchor.innerHTML =`Sign up`;
        LoginSignupPageLoginSpan.innerHTML=`Don't have an account?`;
    }
    else{
        // LoginSignupPageLoginTxt.classList.remove("sigg");
        // LoginSignupPageLoginTxt.classList.add("logg");

        LoginSignupPageLoginTxt.classList.replace("sigg","logg");

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
// =============================================================================




// =================== Main page functionality ============================
// ************ Right box opacity 0 for Mobile initially
OverlayTouching.classList.add("hide");
// LoginSignupPageOverlay.add("hide");
if(window.innerWidth <= 450){
    RightBox.classList.add("hide");
    OverlayTouching.classList.remove("hide");
    // LoginSignupPageOverlay.classList.remove("hide");
}

// ************ Left Box Toggle
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
ArrowCollapser.addEventListener("click",()=>{
    if(window.innerWidth <= 450){
        if(ArrowCollapser.classList.contains("fa-grip-lines-vertical")){
            // 
            OverlayTouching.classList.add("hide");
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
            OverlayTouching.classList.remove("hide");
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
                OverlayTouching.classList.add("hide");
                RightBox.classList.remove("hide"); 
            },410);
            
        }
    }
})

// ************* Suggest div hover and click
RightSuggDivArr.forEach((divv)=>{
    divv.addEventListener("mouseover",()=>{
        const I = divv.querySelector("i");
        I.classList.add("active");
    })
    divv.addEventListener("click",()=>{
        setTimeout(()=>{
            const I = divv.querySelector("i");
            I.classList.remove("active");
        }, 100);

        
        NewChatBox.classList.add("notActive");
        LoadWindowQA.classList.remove("notActive");
        RightBox.classList.replace("flexEnd","spaceBtwn");


        // text inside Divs
        const uph6 = divv.querySelector(".top")
        const dwnh6 = divv.querySelector(".bottom")
        const QuesInSugg = String(uph6.innerHTML) + " " + String(dwnh6.innerHTML);
        let inputText = QuesInSugg.trim();

        // left history addition
        const DivsHisSearch = document.createElement("div");
        let inputText28 = inputText.slice(0,25);
        DivsHisSearch.innerText += inputText28;
        LeftContentBox.append(DivsHisSearch);


        // new
        
        DivsHisSearch.addEventListener("click",()=>{
            if(window.innerWidth <= 450){
                if(ArrowCollapser.classList.contains("fa-grip-lines-vertical")){
                    ArrowCollapser.classList.replace("fa-grip-lines-vertical","fa-bars");   
                    LeftNewBtn.classList.add("mobile");
        
                    LeftBox.classList.add("translateLeft");
                    LeftUpBox.classList.remove("darken");
                    LeftAccBtn.classList.remove("darken");
                    LeftNewBtn.classList.add("nohide");
                    RightBox.classList.add("translateLeft");
                    setTimeout(()=>{
                        RightBox.classList.remove("hide");
                        OverlayTouching.classList.add("hide");
                    },410);
                }
            }
            const insideText = DivsHisSearch.innerText;

            // New
            RightBox.classList.replace("flexEnd","spaceBtwn");

            NewChatBox.classList.add("notActive");
            LoadWindowQA.classList.remove("notActive");
            
            // Que-Ans divs making
            const newQAdiv = document.createElement("div");
            newQAdiv.classList.add("ques-ans");
            const newQdiv = document.createElement("div");
            newQdiv.classList.add("ques");
            const newAdiv = document.createElement("div");
            newAdiv.classList.add("ans");

            const newYoudiv = document.createElement("div");
            newYoudiv.classList.add("you");
            const newContentdiv = document.createElement("div");
            newContentdiv.classList.add("content");
            const newEditdiv = document.createElement("div");
            newEditdiv.classList.add("edit");

            newYoudiv.innerHTML = `<img src="user.png" alt="">
            <span>You</span>`;

            const newTextarea = document.createElement("textarea");
            newTextarea.innerHTML = insideText;
            newTextarea.rows = "1";
            newTextarea.readOnly = true;
            newContentdiv.append(newTextarea);

            const newPenI= document.createElement("i");
            const newSave= document.createElement("span");

            newPenI.classList.add("fa-solid", "fa-pen-to-square", "btn");

            newSave.classList.add("btn");
            newSave.innerHTML = `Save & Submit`;

            // Auto resize textarea
            newTextarea.addEventListener("keyup", e =>{
                newTextarea.style.height = "auto";
                let scHeight = e.target.scrollHeight;
                newTextarea.style.height = `${scHeight}px`;
            })


            // Ans div
            newAdiv.innerHTML = `<div class="you">
                <img src="star-of-life_bgBlue_circle.png" alt="">
                <span>QstarAI</span>
                </div>
                <div class="content">
                    <textarea rows="1" readonly>Answer will come here . . .</textarea>
                </div>
                <div class="edit">
                    <i class="fa-regular fa-clipboard"></i>
                </div>    `;
            
            // Ques div
            newContentdiv.append(newTextarea);
            newEditdiv.append(newPenI);
            newEditdiv.append(newPenI);
            newEditdiv.append(newSave);
            newQdiv.append(newYoudiv);
            newQdiv.append(newContentdiv);
            newQdiv.append(newEditdiv);

            newQAdiv.append(newQdiv);
            newQAdiv.append(newAdiv);

            LoadWindowQA.innerHTML = "";
            LoadWindowQA.append(newQAdiv);

            // hover
                newQdiv.addEventListener("mouseover",()=>{
                    newPenI.classList.add("visible");
                })
                newQdiv.addEventListener("mouseout",()=>{
                    newPenI.classList.remove("visible");
                })
                newPenI.addEventListener("click",()=>{
                    newPenI.classList.replace("visible","hidden");
                    newSave.classList.add("visible");
                    newTextarea.readOnly = false;
                    newTextarea.focus();
                })
                newSave.addEventListener("click",()=>{
                    newSave.classList.remove("visible");
                    newTextarea.readOnly = true;
                    setTimeout(()=>{
                        newPenI.classList.remove("hidden");    
                    }, 300);

                })
            // 
            
            Textarea.value = "";
            SendBtn.classList.remove("canSend");
        });


        RightBox.classList.replace("flexEnd","spaceBtwn");

        NewChatBox.classList.add("notActive");
        LoadWindowQA.classList.remove("notActive");
        
        // Que-Ans divs making
        const newQAdiv = document.createElement("div");
        newQAdiv.classList.add("ques-ans");
        const newQdiv = document.createElement("div");
        newQdiv.classList.add("ques");
        const newAdiv = document.createElement("div");
        newAdiv.classList.add("ans");

        const newYoudiv = document.createElement("div");
        newYoudiv.classList.add("you");
        const newContentdiv = document.createElement("div");
        newContentdiv.classList.add("content");
        const newEditdiv = document.createElement("div");
        newEditdiv.classList.add("edit");

        newYoudiv.innerHTML = `<img src="user.png" alt="">
        <span>You</span>`;

        const newTextarea = document.createElement("textarea");
        newTextarea.innerHTML = inputText;
        newTextarea.rows = "1";
        newTextarea.readOnly = true;
        newContentdiv.append(newTextarea);

        const newPenI= document.createElement("i");
        const newSave= document.createElement("span");

        newPenI.classList.add("fa-solid", "fa-pen-to-square", "btn");

        newSave.classList.add("btn");
        newSave.innerHTML = `Save & Submit`;

        // Auto resize textarea
        newTextarea.addEventListener("keyup", e =>{
            newTextarea.style.height = "auto";
            let scHeight = e.target.scrollHeight;
            newTextarea.style.height = `${scHeight}px`;
        })


        // Ans div
        newAdiv.innerHTML = `<div class="you">
            <img src="star-of-life_bgBlue_circle.png" alt="">
            <span>QstarAI</span>
            </div>
            <div class="content">
                <textarea rows="1" readonly>Answer will come here . . .</textarea>
            </div>
            <div class="edit">
                <i class="fa-regular fa-clipboard"></i>
            </div>    `;
        
        // Ques div
        newContentdiv.append(newTextarea);
        newEditdiv.append(newPenI);
        newEditdiv.append(newPenI);
        newEditdiv.append(newSave);
        newQdiv.append(newYoudiv);
        newQdiv.append(newContentdiv);
        newQdiv.append(newEditdiv);

        newQAdiv.append(newQdiv);
        newQAdiv.append(newAdiv);

        LoadWindowQA.append(newQAdiv);

        // hover
            newQdiv.addEventListener("mouseover",()=>{
                newPenI.classList.add("visible");
            })
            newQdiv.addEventListener("mouseout",()=>{
                newPenI.classList.remove("visible");
            })
            newPenI.addEventListener("click",()=>{
                newPenI.classList.replace("visible","hidden");
                newSave.classList.add("visible");
                newTextarea.readOnly = false;
                newTextarea.focus();
            })
            newSave.addEventListener("click",()=>{
                newSave.classList.remove("visible");
                newTextarea.readOnly = true;
                setTimeout(()=>{
                    newPenI.classList.remove("hidden");    
                }, 300);

            })
        // 
        
        Textarea.value = "";
        SendBtn.classList.remove("canSend");
        
    })
    divv.addEventListener("mouseout",()=>{
        const I = divv.querySelector("i");
        I.classList.remove("active");
    })
})

// ************ Auto resize textarea
Textarea.addEventListener("keyup", e =>{
    if(Textarea.value === ""){
        SendBtn.classList.remove("canSend");
    }
    else{
        SendBtn.classList.add("canSend");
    }
    Textarea.style.height = "auto";
    let scHeight = e.target.scrollHeight;
    Textarea.style.height = `${scHeight}px`;
})

// ************* openAI API
// const API_KEY=``;
// const getChatResponse = async function(){
//     const API_URL = "https://api.openai.com/v1/completions";
//     const pElement = document.createElement("p");
//     // Define the properties and data for the API request
//     const requestOptions = {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "Authorization": `Bearer ${API_KEY}`
//         },
//         body: JSON.stringify({
//             model: "text-davinci-003",
//             prompt: "hello",
//             max_tokens: 2048,
//             temperature: 0.2,
//             n: 1,
//             stop: null
//         })
//     }
//     // Send POST request to API, get response and set the reponse as paragraph element text
//     try {
//         const response = await (await fetch(API_URL, requestOptions)).json();
//         console.log(response);
//     } catch (error) { // Add error class to the paragraph element and set error text
//         console.error(error);
//     }
// }
// getChatResponse();


// ********* Ques Send button fuctionality
SendBtn.addEventListener("click",()=>{
    if(Textarea.value === ""){
        SendBtn.classList.replace("fa-paper-plane","fa-ban");
        SendBtn.classList.add("error");
        setTimeout(()=>{
            SendBtn.classList.replace("fa-ban","fa-paper-plane");
            SendBtn.classList.remove("error");

        }, 800);
    }
    else{
        // text inside textarea
        let inputText = String(Textarea.value).trim();
        // left history addition
        let inputText28 = inputText.slice(0,27);
        const DivsHisSearch = document.createElement("div");
        DivsHisSearch.innerText = inputText28;
        LeftContentBox.append(DivsHisSearch);

        DivsHisSearch.addEventListener("click",()=>{

            if(window.innerWidth <= 450){
                if(ArrowCollapser.classList.contains("fa-grip-lines-vertical")){
                    ArrowCollapser.classList.replace("fa-grip-lines-vertical","fa-bars");   
                    LeftNewBtn.classList.add("mobile");
        
                    LeftBox.classList.add("translateLeft");
                    LeftUpBox.classList.remove("darken");
                    LeftAccBtn.classList.remove("darken");
                    LeftNewBtn.classList.add("nohide");
                    RightBox.classList.add("translateLeft");
                    setTimeout(()=>{
                        RightBox.classList.remove("hide");
                        OverlayTouching.classList.add("hide");
                    },410);
                }
            }
            const insideText = DivsHisSearch.innerText;

            // New
            RightBox.classList.replace("flexEnd","spaceBtwn");

            NewChatBox.classList.add("notActive");
            LoadWindowQA.classList.remove("notActive");
            
            // Que-Ans divs making
            const newQAdiv = document.createElement("div");
            newQAdiv.classList.add("ques-ans");
            const newQdiv = document.createElement("div");
            newQdiv.classList.add("ques");
            const newAdiv = document.createElement("div");
            newAdiv.classList.add("ans");

            const newYoudiv = document.createElement("div");
            newYoudiv.classList.add("you");
            const newContentdiv = document.createElement("div");
            newContentdiv.classList.add("content");
            const newEditdiv = document.createElement("div");
            newEditdiv.classList.add("edit");

            newYoudiv.innerHTML = `<img src="user.png" alt="">
            <span>You</span>`;

            const newTextarea = document.createElement("textarea");
            newTextarea.innerHTML = insideText;
            newTextarea.rows = "1";
            newTextarea.readOnly = true;
            newContentdiv.append(newTextarea);

            const newPenI= document.createElement("i");
            const newSave= document.createElement("span");

            newPenI.classList.add("fa-solid", "fa-pen-to-square", "btn");

            newSave.classList.add("btn");
            newSave.innerHTML = `Save & Submit`;

            // Auto resize textarea
            newTextarea.addEventListener("keyup", e =>{
                newTextarea.style.height = "auto";
                let scHeight = e.target.scrollHeight;
                newTextarea.style.height = `${scHeight}px`;
            })


            // Ans div
            newAdiv.innerHTML = `<div class="you">
                <img src="star-of-life_bgBlue_circle.png" alt="">
                <span>QstarAI</span>
                </div>
                <div class="content">
                    <textarea rows="1" readonly>Answer will come here . . .</textarea>
                </div>
                <div class="edit">
                    <i class="fa-regular fa-clipboard"></i>
                </div>    `;
            
            // Ques div
            newContentdiv.append(newTextarea);
            newEditdiv.append(newPenI);
            newEditdiv.append(newPenI);
            newEditdiv.append(newSave);
            newQdiv.append(newYoudiv);
            newQdiv.append(newContentdiv);
            newQdiv.append(newEditdiv);

            newQAdiv.append(newQdiv);
            newQAdiv.append(newAdiv);

            LoadWindowQA.innerHTML = "";
            LoadWindowQA.append(newQAdiv);

            // hover
                newQdiv.addEventListener("mouseover",()=>{
                    newPenI.classList.add("visible");
                })
                newQdiv.addEventListener("mouseout",()=>{
                    newPenI.classList.remove("visible");
                })
                newPenI.addEventListener("click",()=>{
                    newPenI.classList.replace("visible","hidden");
                    newSave.classList.add("visible");
                    newTextarea.readOnly = false;
                    newTextarea.focus();
                })
                newSave.addEventListener("click",()=>{
                    newSave.classList.remove("visible");
                    newTextarea.readOnly = true;
                    setTimeout(()=>{
                        newPenI.classList.remove("hidden");    
                    }, 300);

                })
            // 
            
            Textarea.value = "";
            SendBtn.classList.remove("canSend");
        });

        RightBox.classList.replace("flexEnd","spaceBtwn");

        NewChatBox.classList.add("notActive");
        LoadWindowQA.classList.remove("notActive");
        
        // Que-Ans divs making
        const newQAdiv = document.createElement("div");
        newQAdiv.classList.add("ques-ans");
        const newQdiv = document.createElement("div");
        newQdiv.classList.add("ques");
        const newAdiv = document.createElement("div");
        newAdiv.classList.add("ans");

        const newYoudiv = document.createElement("div");
        newYoudiv.classList.add("you");
        const newContentdiv = document.createElement("div");
        newContentdiv.classList.add("content");
        const newEditdiv = document.createElement("div");
        newEditdiv.classList.add("edit");

        newYoudiv.innerHTML = `<img src="user.png" alt="">
        <span>You</span>`;

        const newTextarea = document.createElement("textarea");
        newTextarea.innerHTML = inputText;
        newTextarea.rows = "1";
        newTextarea.readOnly = true;
        newContentdiv.append(newTextarea);

        const newPenI= document.createElement("i");
        const newSave= document.createElement("span");

        newPenI.classList.add("fa-solid", "fa-pen-to-square", "btn");

        newSave.classList.add("btn");
        newSave.innerHTML = `Save & Submit`;

        // Auto resize textarea
        newTextarea.addEventListener("keyup", e =>{
            newTextarea.style.height = "auto";
            let scHeight = e.target.scrollHeight;
            newTextarea.style.height = `${scHeight}px`;
        })


        // Ans div
        newAdiv.innerHTML = `<div class="you">
            <img src="star-of-life_bgBlue_circle.png" alt="">
            <span>QstarAI</span>
            </div>
            <div class="content">
                <textarea rows="1" readonly>Answer will come here . . .</textarea>
            </div>
            <div class="edit">
                <i class="fa-regular fa-clipboard"></i>
            </div>    `;
        
        // Ques div
        newContentdiv.append(newTextarea);
        newEditdiv.append(newPenI);
        newEditdiv.append(newPenI);
        newEditdiv.append(newSave);
        newQdiv.append(newYoudiv);
        newQdiv.append(newContentdiv);
        newQdiv.append(newEditdiv);

        newQAdiv.append(newQdiv);
        newQAdiv.append(newAdiv);

        LoadWindowQA.append(newQAdiv);

        // hover
            newQdiv.addEventListener("mouseover",()=>{
                newPenI.classList.add("visible");
            })
            newQdiv.addEventListener("mouseout",()=>{
                newPenI.classList.remove("visible");
            })
            newPenI.addEventListener("click",()=>{
                newPenI.classList.replace("visible","hidden");
                newSave.classList.add("visible");
                newTextarea.readOnly = false;
                newTextarea.focus();
            })
            newSave.addEventListener("click",()=>{
                newSave.classList.remove("visible");
                newTextarea.readOnly = true;
                setTimeout(()=>{
                    newPenI.classList.remove("hidden");    
                }, 300);

            })
        // 
        
        Textarea.value = "";
        SendBtn.classList.remove("canSend"); 
    }
})

// ********* Left NewChat Button
LeftNewBtn.addEventListener("click",()=>{
    NewChatBox.classList.remove("notActive");
    LoadWindowQA.classList.add("notActive");
    RightBox.classList.remove("spaceBtwn");
    RightBox.classList.add("flexEnd");
    Textarea.value = "";
    LoadWindowQA.innerHTML = "";
    if(window.innerWidth <= 450){
        if(ArrowCollapser.classList.contains("fa-grip-lines-vertical")){
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



// ===========================================================



