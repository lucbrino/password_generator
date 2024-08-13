const characters = [
                    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
                    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
                    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-",
                    "+","=","{","[","}","]",",","|",":",";","<",">",".","?", "/"
                   ];

let passw1 = document.getElementById("get-password")
passw1.textContent = "Sua senha sera gerada aqui!"

let passw2 = document.getElementById("get-password2")
passw2.textContent = "Sua senha sera gerada aqui!"

function generatePassword() {
    passw1.textContent = "";
    passw2.textContent = "";
    
    for (i = 0; i < 15; i++) {
        iter1 = Math.floor( Math.random()*90 ) + 1;
        iter2 = Math.floor( Math.random()*90 ) + 1;
        
        passw1.textContent += characters[iter1];
        passw2.textContent += characters[iter2];
    }
}
