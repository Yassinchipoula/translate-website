
let arabic = document.getElementById("arabic");
let english = document.getElementById("english");
let title = document.getElementById("title");
let welcome = document.getElementById("welcome-text");
let about = document.getElementById("about");
let aboutText = document.getElementById("about-text");
let contact = document.getElementById("contact");

arabic.onclick = ()=>{
    setLanugage("arabic");
    localStorage.setItem("Lang","arabic");
};

english.onclick = ()=>{
    setLanugage("english");
    localStorage.setItem("Lang","english");
};

onload = ()=>{
    setLanugage(localStorage.getItem("Lang"));
};
function setLanugage(getLanuage){
if(getLanuage === "arabic"){
    title.innerHTML = " ياسين محمد" ;
    welcome.innerHTML = "مرحبا بكم  في صفحة  محمد ياسين";
    about.innerHTML = "حولنا";
    aboutText.innerHTML = "أنا مهندس محمد ياسين للواجهة الأمامية";
    contact.innerHTML = "اتصل بنا";
}
else if(getLanuage ==="english"){
    title.innerHTML = "Yassin Chipoula";
    welcome.innerHTML = "Welcome to website of yassinchipoula";
    about.innerHTML = "  About US";
    aboutText.innerHTML = "  I am a Mohamed Yassin front end dev";
    contact.innerHTML = "Contact us";

}


}