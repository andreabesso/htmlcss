/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * function */
function invia() {
    let nome = document.querySelector('#nome');
    nome.value = val;
    let cognome = document.querySelector('#cognome');
    cognome.value = val;
    let mail = document.querySelector('#mail');
    mail.value = val;
    fcontatti.submit();
}

function openHamburger() {
    document.getElementById("mnav").style.width = "100%";
}

function closeHamburger() {
    document.getElementById("mnav").style.width = "0%";
}