function Translate(word,language){
    this.apikey="trnsl.1.1.20200516T230738Z.a73114777ffe4800.f2efbbc684ec9d920dd2e2f53ea55dcf4eb8902c";
    this.word=word;
    this.language=language;

    // 
    this.xhr= new XMLHttpRequest();
}
Translate.prototype.translateWord= function(callback){
    // Ajax işlemleri

    const endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.language}`

    this.xhr.open("GET",endpoint);

    this.xhr.onload=()=>{
        if(this.xhr.status ===200){
            const json = JSON.parse(this.xhr.responseText);
            const text = json.text[0];
            callback(null,text);
            console.log(text);
            // console.log(JSON.parse(this.xhr.responseText).text[0]);
        }
        else{
                callback("Bir hata oluştu",null);

        }
    }
    this.xhr.send();

};
Translate.prototype.changeParameters = function (newWord,newLanguage){
    this.newWord=newWord;
    this.newLanguage=newLanguage;
}