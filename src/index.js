import User from "./user";
let vragenAlGehad  = [-1];
let user = new User();
const db = require('./vragen.json');
let herlaad = false;
function stelVraag(){
    if(user.vragen>=10){
        result();
        return;
    }else {
        document.getElementById("zin").innerHTML = "";
        for (const vraag of db.vragen) {
            if (!alGehad(vraag.vraagnr)) {
                vragenAlGehad.push(vraag.vraagnr);
                document.getElementById("vraag").innerHTML = vraag.vraag;
                let lb0 =  Math.floor((Math.random() * 4));
                document.getElementById("label"+lb0).innerHTML = vraag.antwoord;
                document.getElementById("radio"+lb0).value = vraag.antwoord;
                document.getElementById("radio"+lb0).checked = false;
                let lb1;
                do{
                    lb1 = Math.floor((Math.random() * 4));
                }while(lb1 === lb0);
                document.getElementById("label"+lb1).innerHTML = vraag.fouten[0];
                document.getElementById("radio"+lb1).value = vraag.fouten[0];
                document.getElementById("radio"+lb1).checked = false;
                let lb2;
                do{
                    lb2 = Math.floor((Math.random() * 4));
                }while(lb2 === lb0 || lb2 === lb1);
                document.getElementById("label"+lb2).innerHTML = vraag.fouten[1];
                document.getElementById("radio"+lb2).value = vraag.fouten[1];
                document.getElementById("radio"+lb2).checked = false;
                let lb3;
                do{
                    lb3 = Math.floor((Math.random() * 4));
                }while(lb3 === lb2 || lb3 === lb1 || lb3 === lb0);
                document.getElementById("label"+lb3).innerHTML = vraag.fouten[2]
                document.getElementById("radio"+lb3).value = vraag.fouten[2];
                document.getElementById("radio"+lb3).checked = false;
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

function vraag() {
    if (document.getElementById("radio0").checked || document.getElementById("radio1").checked || document.getElementById("radio2").checked || document.getElementById("radio3").checked) {
        if(user.vragen<10) {
            checkVraag();
            stelVraag();
        }else if(!herlaad){
            herlaad = true;
            document.getElementById("zin").innerHTML += "( Herlaad de pagina om nog eens te spelen).";
        }
    } else {
        document.getElementById("zin").innerHTML = "Niets ingevuld!";
    }
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
    vraag();
});

stelVraag();