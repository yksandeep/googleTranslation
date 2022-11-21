var DetectLanguage = require('detectlanguage');

var detectlanguage = new DetectLanguage('457a4bb150e06fbf73f2dcd430be725a');

const text = ["हैलो, क्या हाल हैं","这是一个非常好的API", "to jest bardzo dobre API"];
// const text = ["to jest bardzo dobre API"];

detectlanguage.languages().then(function(detectableLanguage) {
    let data = detectableLanguage
    let parsedData = data.reduce((acc,item,idx)=>{
        acc[item.code] = item.name
        return acc
    },{})
    detectlanguage.detect(text).then(function(result) {
        let detected = []
        for(let i =0;i<result.length;i++){
            detected.push({text:text[i],detectedLanguage:parsedData[result[i][0].language],...result[i][0]})
        }
        console.log(detected);
    });
  });

detectlanguage.userStatus().then(function(result) {
    console.log(JSON.stringify({userDetails:result}));
});


