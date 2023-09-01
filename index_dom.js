import hamburgerMenu  from "./dom/menu_hamburgues.js";
import {digitalClock,alarma} from './dom/reloj.js'
import { moveBall } from "./dom/teclado.js";
import countdown from "./dom/cuenta_regresiva.js";
import {scroll} from "./dom/boton_scroll.js"
import { darkTheme } from "./dom/tema_oscuro.js";

const d=document;

//este evento nos va a permitir que nuestra funcion se ejecute a la carga del documento.
d.addEventListener("DOMContentLoaded",(e)=>{
    hamburgerMenu(".panel-btn",".panel",".menu a");
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
    alarma("assets/alarma.mp3","#activar-alarma","#desactivar-alarma");
    countdown("countdown","May23,2024 03:23:19","Feliz cumpleaños🤓");
    scroll(".scroll-top-btn");

});

//evento del teclado.
 d.addEventListener("keydown",e=>{
    moveBall(e,".ball",".stage");
 })
 
 //funcion para la ejecucion del tema en obsuro.
 darkTheme(".dark-theme-btn","dark-mode"); 


 