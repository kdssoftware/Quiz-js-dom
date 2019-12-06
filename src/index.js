import User from "./user";
let vragenAlGehad  = [-1];
let user = new User();
const db = require('./vragen.json');

function stelVraag(){
    //random vraag teruggeven in DOM
    console.log("stelVraag()");
    if(user.vragen>=10){
        result();
        return;
    }else {
        for (const vraag of db.vragen) {
            if (!alGehad(vraag.vraagnr)) {
                vragenAlGehad.push(vraag.vraagnr);
                document.getElementById("vraag").innerHTML = vraag.vraag;
                console.log(vraag.vraag);
                let lb0 =  Math.floor((Math.random() * 4));
                document.getElementById("label"+lb0).innerHTML = vraag.antwoord;
                document.getElementById("radio"+lb0).value = vraag.antwoord;
                let lb1;
                do{
                    lb1 = Math.floor((Math.random() * 4));
                }while(lb1 === lb0);
                document.getElementById("label"+lb1).innerHTML = vraag.fouten[0];
                document.getElementById("radio"+lb1).value = vraag.fouten[0];
                let lb2;
                do{
                    lb2 = Math.floor((Math.random() * 4));
                }while(lb2 === lb0 || lb2 === lb1);
                document.getElementById("label"+lb2).innerHTML = vraag.fouten[1];
                document.getElementById("radio"+lb2).value = vraag.fouten[1];
                let lb3;
                do{
                    lb3 = Math.floor((Math.random() * 4));
                }while(lb3 === lb2 || lb3 === lb1 || lb3 === lb0);
                document.getElementById("label"+lb3).innerHTML = vraag.fouten[2]
                document.getElementById("radio"+lb3).value = vraag.fouten[2];
                console.log(vragenAlGehad);
                return;
            }
        }
    }
}

function alGehad(vraagnr){
    let alGehad = false;
    for(const v of vragenAlGehad){
        if(v===vraagnr){
            alGehad = true;
        }
    }
    return alGehad;
}

function checkVraag(){
    //krijgt vraag terug en antwoord
    let juist_antwoord;
    for(const v of db.vragen){
        if(v.vraag===document.getElementById("vraag").innerHTML){
            juist_antwoord = db.vragen[v.vraagnr].antwoord;
            break;
        }
    }
    console.log(juist_antwoord);

    if(document.getElementById("radio0").checked){
        if(document.getElementById("radio0").value===juist_antwoord){
            user.Juist();
        }else{
            user.Fout();
        }
    }else if(document.getElementById("radio1").checked){
        if(document.getElementById("radio1").value===juist_antwoord){
            user.Juist();
        }else{
            user.Fout();
        }

    }else if(document.getElementById("radio2").checked){
        if(document.getElementById("radio2").value===juist_antwoord){
            user.Juist();
        }else{
            user.Fout();
        }

    }else if(document.getElementById("radio3").checked){
        console.log(3);
        if(document.getElementById("radio3").value===juist_antwoord){
            user.Juist();
        }else{
            user.Fout();
        }
    }
}

function result(){
    if(user.juist>=6){
        document.getElementById("zin").innerHTML = "Je hebt gewonnen! je had er "+user.juist+" juist.";
    }else{
        document.getElementById("zin").innerHTML = "Je hebt verloren...  je had er "+user.juist+" juist.";
    }
}

document.getElementById('volgende').addEventListener("click", function(){
    checkVraag();
    stelVraag();
});

stelVraag();