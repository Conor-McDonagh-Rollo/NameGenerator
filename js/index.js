
const Output = document.getElementById('generated');

let FirstNames = ["Not", "Found"];
let LastNamesA = ["Not"];
let LastNamesB = ["Found"]

let CurrentFirstNames = ["1","1","1","1","1"];
let CurrentLastNames = ["2","2","2","2","2"];

function GenerateFirstNames()
{
    for(let i = 0; i < 10; i++)
    {
        CurrentFirstNames[i] = FirstNames[Math.floor(Math.random() * FirstNames.length)];
    }
    GenText();
}

function GenerateLastNames()
{
    for(let i = 0; i < 10; i++)
    {
        CurrentLastNames[i] = LastNamesA[Math.floor(Math.random() * LastNamesA.length)];
    }
    GenText();
}

function GenText()
{
    var ihtml = "";
    for(let i = 0; i < 10; i++)
    {
        ihtml = ihtml + CurrentFirstNames[i] + " " + CurrentLastNames[i] + "<br>";
    }

    Output.innerHTML = ihtml;
}

function Recover()
{
    let temp = localStorage.getItem("fnames");;
    FirstNames = temp.split('\n');
    temp = localStorage.getItem("LastNamesA");;
    LastNamesA = temp.split('\n');
    temp = localStorage.getItem("LastNamesB");;
    LastNamesB = temp.split('\n');

    for(let i = 0; i < LastNamesA.length; i++)
    {
        LastNamesA[i].replace(/\n|\r/g,'');
    }
    for(let i = 0; i < LastNamesB.length; i++)
    {
        LastNamesB[i].replace(/\n|\r/g,'');
    }
}

document.getElementById('inputNames').addEventListener('change', function() {

    var fr=new FileReader();

    fr.onload=function(){
        let temp = fr.result;
        FirstNames = temp.split('\n');
        localStorage.setItem("fnames", fr.result);
    }  

    fr.readAsText(this.files[0]);
})

document.getElementById('inputA').addEventListener('change', function() {

    var fr=new FileReader();

    fr.onload=function(){
        let temp = fr.result;
        LastNamesA = temp.split('\n');
        localStorage.setItem("LastNamesA", fr.result);
    }  

    fr.readAsText(this.files[0]);

    for(let i = 0; i < LastNamesA.length; i++)
    {
        LastNamesA[i].replace(/\n|\r/g,'');
    }
})

document.getElementById('inputB').addEventListener('change', function() {

    var fr=new FileReader();

    fr.onload=function(){
        let temp = fr.result;
        LastNamesB = temp.split('\n');
        localStorage.setItem("LastNamesB", fr.result);
    }  

    fr.readAsText(this.files[0]);
    
    for(let i = 0; i < LastNamesB.length; i++)
    {
        LastNamesB[i].replace(/\n|\r/g,'');
    }
})