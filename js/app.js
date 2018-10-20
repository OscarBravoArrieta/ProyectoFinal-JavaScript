var elementos = document.getElementsByTagName('img'); //Guarda en una matriz todos los elementos img
for (var i = 0; i < elementos.length; i++) {
	elementos[i].addEventListener("click", processEvent, false); //Agrega un listener a cada alemento de la matriz
}

function processEvent(e){
	console.log(this.id);
	if (display.textContent.length < 8){ // Controlar que no se muestren mas de 8 caracteres
		if (this.id >= 0 && this.id <= 9){//Verifica cuando Se hace clic en un dígito
			if(display.textContent == '0'){
				display.textContent = this.id;
			}else{
				display.textContent = display.textContent + this.id;
			}
		}
		if (this.id == 'punto') {//Cuando se hace clic en el punto
			if (display.textContent.indexOf(".") == -1) { //Verifica si no hay un punto en el display
				display.textContent = display.textContent + "."
			}
			if (display.textContent == "0") {
				display.textContent = "0."
			}
		}
		if (this.id == 'sign') {//valida cuando se hace clic en +/-
			if(display.textContent != "0"){
				if (display.textContent.indexOf("-") == -1){
					display.textContent = "-" + display.textContent;
				}else{
					display.textContent = display.textContent.substring(1,display.textContent.length);
				}
			}
		}
		if (this.id == 'mas') {//valida cuando se hace clic en +

		}
		if (this.id == 'menos') {//valida cuando se hace clic en -

		}
		if (this.id == 'por') {//valida cuando se hace clic en *

		}
		if (this.id == 'dividido') { //valida cuando se hace clic en /

		}
		if (this.id == 'raiz') { //valida cuando se hace clic en raiz

		}
   } //Fin Controlar la longitud
   if (this.id == 'on') { // Valida si se hace click en on y borra el contenido del display
	   display.textContent = "0"
   }
}
