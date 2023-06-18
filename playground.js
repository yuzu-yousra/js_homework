// we will start with the generate button we will access it from the html file
let btn_gen=document.getElementById('btn-gen');
//the quote_elm variable will contain the output we want (so the qute + author)
let quote_elm=document.getElementsByClassName("quote");
//we create an array of obj that will have all our quotes + their authors
const qts=[
    {qt:"meow meow meow",at:"fluffy mycat"},
    {qt:"its morbin time morbs",at:"morbius"},
    {qt:"réserver une case mémoire lelbryocha",at:"khettar the legend"},
    {qt:"can i get a waffle..? can i please get a waffle",at:"some poor guy"},
    {qt:"hi thanks for checking in. i am still a piece of garbage",at:"bill wurtz"},
    {qt:"notto disu shito agen",at:"me in exams"},
    {qt:"i may be stupid and cringe, but i am free",at:"random tumblr user"},
    {qt:'"romanticize" "normalize" how about you shutize the fuckize upize',at:"random twitter user"},
    {qt:"we slidiiiiiiing",at:"pinguins"},
    {qt:"according to my math 6 is higher than 2",at:"joey from yugioh"},
    {qt:"i hate that fish",at:"groudon"},
    {qt:"i hate that lizard",at:"kyogre"},
    {qt:"neuron activation moment",at:"le monki"},
    {qt:"i do not think, therefor i do not am",at:"inspirational shirt"},

];

//now we will write the function that'll choose a random quote from the array

function generateq(){

//we will randomly generate a number between 0 and the array's length, that's gonna be the index of our quote+athor
    let index=Math.floor(Math.random() * qts.length);
    // then to show our quote and athir we'll modify the html doc usining innerhtml
    let ran_q=document.getElementById("quote");    
    let ran_at=document.getElementById("author");

    ran_q.innerHTML=qts[index].qt;
    ran_at.innerHTML=qts[index].at;

    // and done :)
   
}

/* now onto the favorites 
 to do that , each time we click on the fav button we will push the current quote + author onto 
 an array of objects similar to quotes */


 
let tab_fav=[

];

function addToFav(){
    //we first get the current quote and author from the html doc the we push it onto the fav array to store it
   let fav_q=document.getElementById("quote").innerText;
   let fav_at=document.getElementById("author").innerText;
   tab_fav.push({fav_q,fav_at});
}


/* send the tab fav to another html page */
function send_fav(){
    localStorage.setItem("tab_fav",JSON.stringify(tab_fav));
    window.location.href="favlist.html";
}

/*display the fav list in the favlist.html page*/
function affich_fav(){
    let new_tab_fav=JSON.parse(localStorage.getItem("tab_fav"));
    console.log(new_tab_fav);
    
    new_tab_fav.forEach(element => {
        let tabf=document.querySelector("table");
        let elem_row=document.createElement("tr");
        let elm_col=document.createElement("td");
        elm_col.innerText=element.fav_q+" "+element.fav_at;
        elem_row.append(elm_col);
        tabf.append(elem_row);

    }
    );
}
//finished :D
