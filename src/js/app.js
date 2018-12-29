 //import  '../css/main.css';
 //import '../css/input-elements.css';
import '../scss/main.scss';

import {secretParagraph,secretButton}  from './dom-loader';


var showSecert = false;
 secretButton.addEventListener('click',toggleSecretState);
 updateSecretParagraph();

 function toggleSecretState() {
    showSecert = !showSecert;
    updateSecretParagraph();
    updateSecretButton();
 }

 function updateSecretButton (){
     console.log('dddd');
    if(showSecert){
        secretButton.textContent ='hide the secret 999';
    } else {
        secretButton.textContent ='show the secret sad';
    }
 }     

 function updateSecretParagraph (){
    if(showSecert){
        secretParagraph.style.display ='block';
    } else {
        secretParagraph.style.display ='none';
    }
   
 }     
  