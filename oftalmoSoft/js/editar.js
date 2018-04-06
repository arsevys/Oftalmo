// array = ["general.html","antecedentes.html","evaluacion.html","graduacion.html","manejo.html","evolucion.html"];

// var index = -1 ;

// function eventnext(x){

//     index = index+x;
//     var xhttp = new XMLHttpRequest();
//   	xhttp.onreadystatechange = function() {
//     	if (this.readyState == 4 && this.status == 200) {
//     		console.log(this.responseText);
//         pasos();
//      		document.getElementById("baseconsulta").innerHTML = this.responseText;
//     	}
//   	};
// 	xhttp.open("GET","./paginas/"+array[index], true);
// 	xhttp.send();

// }

var index = 0 ;




function eventsplit(x){
	var nuevo = x - index;
	eventnext(nuevo)
}

function eventnext(x){
	if(x != 10){
		 index = index+x;

	   var pasosvar = document.getElementById("baseconsulta").querySelectorAll(".paso");

	    for(var i = 0 ; i < pasosvar.length;i++){
	    	pasosvar[i].style.display = "none";
	    }

	    

	    pasosvar[index].style.display = "block";
	    pasos();
	}
	else {
		alert("Guardado");
	}

   

}



function pasos(){
   var normal = document.getElementsByClassName("pasos").item(0).getElementsByTagName("div");
   var responsi = document.getElementsByClassName("pasos-responsive").item(0).getElementsByTagName("div");

   for(var i = 0;normal.length > i;i++){
  
    normal.item(i).classList.remove("select");
   }
    normal.item(index).classList.add("select");
    for(var i = 0;responsi.length > i;i++){
    responsi.item(i).classList.remove("slc");
   }
    responsi.item(index).classList.add("slc");
}

var Pais = {
	"Perú":{
		"Amazonas":["Chachapoyas","Bagua","Bongará","Condorcanqui","Luya","Rodriguez De Mendoza","Utcubamba"],
		"Ancash":["Huaraz","Aija","Antonio Raimondi","Asunción","Bolognesi","Carhuaz","Carlos Germín Fitzcarrald","Casma","Corongo","Huari","Huarmey","Huaylas","Mariscal Luzuriaga","Ocros","Pallasca","Pomabamba","Recuay","Santa","Sihuas","Yungai"],
		"Apurimac":["Abancay","Andahuaylas","antabamba","aymaraes","cotabambas","chincheros","grau"],
		"Arequipa":["Arequipa","camaná","caraveli","castilla","caylloma","condesuyos","islay","la unión"],
		"Ayacucho":["huamanga","cangallo","huancasancos","huanta","la mar","lucanas","parinacochas","páucar del sara sara","sucre","Víctor fajardo","vilcashuamán"],
		"Cajamarca":["Cajamarca","Cajabamba","Celendín","chota","contumaza","cutervo","hualgayoc","Jaén","san Ignacio","san marcos","san miguel","san pablo","santa cruz"],
		"Callao":["Callao"],
		"Cusco":["Cusco","acomayo","anta","calca","canas","canchis","chumbivilcas","espinar","la convención","Paruro","paucartambo","quispicanchi","urubamba"],
		"Huancavelica":["Huancavelica","acobamba","angares","castrovirreyna","churcampa","huaytará","tayacaja"],
		"Huánuco":["Huánuco","ambo","dos de mayo","huacaybamba","huamalíes","Leoncio prado","marañón","pachitea","puerto inca","lauricocha","yarowilca"],
		"Ica":["Ica","chincha","nazca","palpa","pisco"],
		"Junín":["Huancayo","concepción","chanchamayo","jauja","Junín","satipo","tarma","yauli","chupaca"],
		"La Libertad":["Trujillo","ascope","bolívar","chepén","julcán","otuzco","Pacasmayo","pataz","Sánchez Carrión","Santiago de chuco","gran chimú","virú"],
		"Lambayeque":["Chiclayo","ferreñafe","Lambayeque"],
		"Lima":["Lima","barranca","cajatambo","canta","cañete","huarai","huarochi","Huaura","oyón","yauyos"],
		"Loreto":["Maynas","alto amazonas","Loreto","mariscal ramón castilla","requena","Ucayali","datem del marañón","putumayo"],
		"Madre De Dios":["Tambopata","manu","tahuamanu"],
		"Moquegua":["Mariscal nieto","general sánchez cerro","Ilo"],
		"Pasco":["Pasco","Daniel Alcides Carrión","oxapampa"],
		"Piura":["Piura", "ayabaca","huancabamba","morropón","paita","Sullana","talara","sechura"],
		"Puno":["puno","Azángaro","carabaya","churcuito","el collao", "Huancané", "lampa", "melgar"," moho","san Antonio de putina","san Román","sandia","yunguyo"],
		"San Martín":["Moyobamba","bellavista","el dorado","Huallaga","lamas","mariscal cáceres","picota","rioja","san Martín","tocache"],
		"Tacna":["Tacna","candarave","Jorge Basadre","tarata"],
		"Tumbes":["Tumbes","contralmirante villar","zarumillaW"],
		"Ucayali":["Coronel portillo","atalaya","padre abad","purús"]
	}
}

var distritos = {
	"Lima":["Ancón","Ate","Barranco","Breña","Carabayllo","Chacalayo","Chorrillos","Cieneguilla","Comas","El Agustino","Independencia","Jesús María","La Molina","La Victoria","Lima","Lince","Los Olivos","Lurigancho","Lurín","Magdalena Del Mar","Miraflores","Pachamac","Pucusana","Pueblo Libre","Puente Piedra","Punta Hermosa","Punta Negra","Rímac","San Bartolo","San Borja","San Isidro","San Juan De Lurigancho","San Juan De Miraflores","San Luis","San Martin De Porres","San Miguel","Santa Anita","Santa María Del Mar","Santa Rosa","Santiago De Surco","Surquillo","Villa El Salvador","Villa María Del Triunfo"]
}


var aux = "Perú";

function registro (){
	var region = document.getElementById("region");
	var provincia = document.getElementById("provincia");

	var content = "";
	Object.keys(Pais[aux]).forEach((value)=>{
		content += "<option onclick='region("+'"'+value+'"'+")'>"+value+"</option>"
	});
	region.querySelector("select").innerHTML = content;

	var content = "";
	Pais[aux]["Amazonas"].forEach((value)=>{
		content += "<option onclick='provincia("+'"'+value+'"'+")'>"+value+"</option>"
	});
	provincia.querySelector("select").innerHTML = content;

	var pasos = document.getElementById("baseconsulta").querySelectorAll(".paso");

    for(var i = 0 ; i < pasos.length;i++){
    	pasos[i].style.display = "none";
    }
    pasos[0].style.display = "block";
}

function lugares(val){
    var valor = val.value;
	if(valor != aux){
		var regionvar = document.getElementById("region");
		var provincia = document.getElementById("provincia");
		var distrito = document.getElementById("distrito");
		aux = valor;
		if(valor == "Perú"){
		   regionvar.style.display = "inline-flex";
           provincia.style.display = "inline-flex";
           console.log(regionvar.querySelector("select").value);
           region(regionvar.querySelector("select").value)
		}
		else{
           regionvar.style.display = "none";
           provincia.style.display = "none";
           distrito.style.display = "none";
		}
	}
}



function region(value){
	if (value.value) 
	  var value = value.value;

	var provinciavar = document.getElementById("provincia");
	var content = "";
	var array = Pais[aux][value];
	console.log(array);
	for(var i = 0; i < array.length ;i++){
		content += "<option>"+array[i]+"</option>"
	}
	provinciavar.querySelector("select").innerHTML= content;
	provincia(array[0]);
}

function provincia(value){
	if (value.value) 
	  var value = value.value;
	var distrito = document.getElementById("distrito");
	var content = "";
	if(distritos[value]){
		distrito.style.display = "inline-flex";
		var array = distritos[value];
		for(var i = 0; i < array.length ;i++){
			content += "<option>"+array[i]+"</option>"
		}
		distrito.querySelector("select").innerHTML= content;
	}
	else{
		distrito.style.display = "none";
	}
}



// function press(){
// 	debugger;
// 	document.getElementById("region").querySelector("select").click;
// 	document.getElementById("provincia").querySelector("select").click;
// }



function checkradio(id){
	var form = document.getElementById(id);
	var radius = form.querySelectorAll("label input[type='radio']");
	var imagen = form.querySelectorAll("label img")
	for(var i = 0;i<radius.length;i++){
		if(radius[i].checked){
			imagen.item(i).src = "/imagenes/CHECK-BLANCO-CIRCULO-ON.png";
		}
		else{
			imagen.item(i).src = "/imagenes/CHECK-CIRCULO-OFF.png";
		}
	}
}

function checkradio2(id){
	var form = document.getElementById(id);
	var radius = form.querySelectorAll("label input[type='radio']");
	var imagen = form.querySelectorAll("label img")
	for(var i = 0;i<radius.length;i++){
		if(radius[i].checked){
			imagen.item(i).src = "/imagenes/captura.png";
		}
		else{
			imagen.item(i).src = "/imagenes/CHECK-CIRCULO-OFF.png";
		}
	}
}


var stados = {
	"paso3lf":"flex",
	"paso3rg":"flex",
	"paso6lf":"block"
}

function extend(id){

	var base = document.getElementById(id);
	var itemsAll = [base.querySelectorAll(".line"),base.querySelectorAll(".input-control"),base.querySelectorAll("h5"),base.querySelectorAll(".input")]
	for (var i = 0; i < itemsAll.length; i++) {
		for (var j = 0; j < itemsAll[i].length; j++) {
		   itemsAll[i].item(j).style.display=stados[id];
		}
	}

	stados[id] = stados[id] == "flex"? "none":"flex";

}

var stados2 = {
	"paso6lf":["block","flex"],
	"paso6rg":["block","flex"]

}


function extend2(id){

	var base = document.getElementById(id);
	var itemsAll = [base.querySelectorAll(".line"),base.querySelectorAll(".input-control"),base.querySelectorAll("h5"),base.querySelectorAll(".input")]
	for (var i = 0; i < itemsAll.length; i++) {
		for (var j = 0; j < itemsAll[i].length; j++) {
			if(i == 3){
				itemsAll[i].item(j).style.display=stados2[id][0];
			}
			else{
				itemsAll[i].item(j).style.display=stados2[id][1];
			}
		   
		}
	}

	stados2[id][0] = stados2[id][0] == "block"? "none":"block";
	stados2[id][1] = stados2[id][1] == "flex"? "none":"flex";

}



var jsonswitch = {
	"AHFPaso2":0
}

function switchs(id){

	var base = document.getElementById(id);
	var itemsAll = base.querySelectorAll("input[type='radio']");
	itemsAll.item(jsonswitch[id]).checked = false;
	jsonswitch[id] = jsonswitch[id] == 0? 1:0;
    itemsAll.item(jsonswitch[id]).checked = true;
    base.querySelector("img").src = jsonswitch[id] == 0? "/imagenes/switch-NO-rojo.png":"/imagenes/switch-SI-rojo.png";
}


function checkqueare(id){
	var form = document.getElementById(id);
	var radius = form.querySelectorAll("label input[type='checkbox']");
	var imagen = form.querySelectorAll("label img")
	for(var i = 0;i<radius.length;i++){
		if(radius[i].checked){
			imagen.item(i).src = "/imagenes/CHECK-CUADRADO-ON.png";
		}
		else{
			imagen.item(i).src = "/imagenes/CHECK-CUADRADO-OFF.png";
		}
	}
}



var jsonO = {
	"Trasplante PKP":["Rechazo","Edema","Hidrops","Haze","Opacificación","Ulceracion","Infección","Glaucoma","Uveítis"],
	"Trasplante DALK":["Rechazo","Edema","Hidrops","Haze","Opacificación","Ulceracion","Infección","Glaucoma","Uveítis"],
	"Anillos Corneales":["Extrusión","Recolocación","Queratitis Infercciosa","Perforaciones de Cámara Anterior","Úlcera Superficial","Leucoma Cicatrizal","Conjuntivitis"],
	"Crosslinking":["Disminución de Agudeza Visual","Haze Corneal","Fotofobia","Lagrimeo","Queratitis","Infiltrados"],
	"Lentes de Contacto":["Queratitis Bacteriana","Queratitis Fúngica","Ulceración","Conjuntivitis","Alergia","Edema Corneal","Vascularización Corneal","Infiltrados Corneales","Ojo Rojo","Estrías Corneales","Neovascularización Corneal","Microquistes Corneales","Erosión Corneal","Abrasión Corneal"]
};

function fncbo(este){
	var tx = "";

	for (var i = 0; i < jsonO[este.value].length; i++) {
		tx += "<option>"+jsonO[este.value][i]+"</option>";
	}

	tx += "<option>Otro</option>";

	document.getElementById("llenado").innerHTML = tx;

	fncbom({value:jsonO[este.value][0]});
}


function fncbom(thi){
	if(thi.value=="Otro"){
		document.getElementById("detalle").style.display="flex";
	}
	else {
		document.getElementById("detalle").style.display="none";
	}
}
function checkOne(id){

	var form = document.getElementById(id);
	var radius = form.querySelectorAll("label input[type='radio']");
	var imagen = form.querySelectorAll("label img");
	
    //los checkbox hijos

		if(radius[0].dataset.ch== "si"){
			imagen.item(0).src = "/imagenes/CHECK-CIRCULO-OFF.png";
			
			radius[0].dataset.ch= "no"
			
		}
		else{
		
			imagen.item(0).src = "/imagenes/captura.png";
			radius[0].dataset.ch= "si";
			
		}
	
}
function checkUno(id,id1){

	var form = document.getElementById(id);
	var radius = form.querySelectorAll("label input[type='radio']");
	var imagen = form.querySelectorAll("label img");
	
    //los checkbox hijos

    var form1 = document.getElementById(id1);
	var radius1 = form.querySelectorAll("label input[type='checkbox']");
	var imagen1 = form.querySelectorAll("label img")
	



		if(radius[0].dataset.ch== "si"){
			imagen.item(0).src = "/imagenes/CHECK-CIRCULO-OFF.png";
			
			radius[0].dataset.ch= "no"
			for(var i = 0;i<radius1.length;i++){

				
					radius1[i].disabled=false;
					
				
				     }
		}
		else{
		
			imagen.item(0).src = "/imagenes/captura.png";
			radius[0].dataset.ch= "si";
				for(var i = 0;i<radius1.length;i++){

					radius1[i].checked=false;
					radius1[i].disabled=true;
					imagen1.item(i+1).src = "/imagenes/CHECK-CUADRADO-OFF.png";
				
				     }
		}
	
}