//Prototype Callback Ajax

eventListener()


function eventListener(){
    document.getElementById("translate-form").addEventListener("submit",translateWord)
    //Change
    document.getElementById("language").onchange=function(){
        // Arayüz işlemleri
        ui.changeUI();
    }
}
const translate = new Translate(document.getElementById("word").value,document.getElementById("language").value);
const ui = new UI();
function translateWord(e){

    translate.translateWord();
    translate.translateWord(function(err,response){
        if(err){
            console.log(err);
        }
        else{
            ui.displayTranslate(response);
        }
    });
    e.preventDefault();
}