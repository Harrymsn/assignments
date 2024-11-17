let pag = Math.random();
console.log(pag);


document.getElementById("acca1").onclick = () => {
  
if(pag > 0 && pag < 0.33){location.replace("Specials.html");}

else if(pag > 0.33 && pag < 0.66){location.replace("lunch specials.html");}

else if(pag > 0.66 && pag < 1){location.replace("dinner specials.html");}}


