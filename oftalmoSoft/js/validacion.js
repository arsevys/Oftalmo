// $(document).ready(function(){

var datos=new Object;
//datos["agregar"]={};


//Primer paso *******************************************
function datosGenerales(){



        var d={ "fila":{
        	"numHisCli":valD("numHC-DG"),
        	"nombres":valD("nom-DG"),
        	"apaterno":valD("apeP-DG"),
        	"amaterno":valD("apeM-DG"),
        	"tipodoc":valD("td-DG"),
        	"n_doc":valD("nd-DG"),
        	"f_nac":valD("fn-DG"),
        	"pais":valD("pais-DG"),
        	"region":valD("region-DG"),
        	"provincia":valD("provincia-DG"),
        	"distrito":valD("distrito-DG"),
        	"genero":valC("genSex")

        }}
        valC("genSex");
        console.log(d);


            // $.ajax({
            //   url:"/Oftalmo/GrabarCliente",
            //   data:{jsonX:JSON.stringify(d)},
            //   type:"POST",
            //   success:function(e){
            //      console.log(e);
            //  eventnext(1);
            //   }

            // })
}
//----------------------***********************************------------------------//


//Segundo paso ************************************************
function antecedentes(){

	eventnext(1)

        function Multi(x,y){
            var form = document.getElementById(x);
            var radius = form.querySelectorAll("label input[type='radio']");
            if(radius[0].dataset.ch=="si"){return "NO"}

            var cadena="";
            var form1 = document.getElementById(y);
            var radius1 = form.querySelectorAll("label input[type='checkbox']");
                for(var i = 0;i<radius1.length;i++){            
                           if( radius1[i].checked){

                            console.log(radius1[i]);
                            cadena+=radius1[i].dataset.dat +",";
                           }

                             }
                   console.log(cadena);
                   return cadena.substr(cadena,cadena.length-1);          
            }

        	var d={
        		"rasgadoOjos":valC("rasgadoO-A"),
        		"ahfqueratocono":valC("ahf-A"),
        		"refraccion":valC("refraccion-A"),
        		"unilateral":valC("unilateral-A"),
        		"bilateral":($("#bilateral-A")[0].checked)?"si":"no",
        		"lentesRGP":Multi('APPPaso3p','APPcheakPaso2'),
                "aniosRGP":valD("anios-A"),
        		"emfermedadesTopico":"no"

        	}

        	console.log(d);
}

//----------------------***********************************------------------------//


//tercer paso ************************************************
function evaluacion(){

let Pentacam={
    // Queratometria Anterior
   "k1Anterior":valD("k1A-OI"),
     "ejek1Anterior":valD("ejek1A-OI"),
     "k2Anterior":valD("k2A-OI"),
     "ejek2Anterior":valD("ejek2A-OI"),
     "cilindroTopoAnterior":valD("citoA-OI"),
     //Queratometria Posterior
     "k1Posterior":valD("k1P-OI"),
     "ejek1Posterior":valD("ejek1P-OI"),
     "k2Posterior":valD("k2P-OI"),
     "ejek2Posterior":valD("ejek2P-OI"),
     "cilindroTopoPosterior":valD("citoP-OI"),
     "kmax":valD("kmax-OI"),
     "it":valD("it-OI"),
     "q":valD("q-OI"),    
     "kmaxSuperior":valD("kmaxSuperior-OI"),
     "kmaxInferior":valD("kmaxInferior-OI"),
     "medidorSI":valD("medidorSI-OI"),
      "kmaxDerecha":valD("kmaxDerecha-OI"),
     "kmaxIzquierda":valD("kmaxIzquierda-OI"),

      "medidorDI":valD("medidorDI-OI"),
      // Paquimetria
     "puntoFino":valD("pFino-OI"),
     "apex":valD("apex-OI"),
     "bfsAnterior":valD("bfsA-OI"),
     "bfsPosterior":valD("bfsP-OI") 
}
console.log(Pentacam);

let gali={
    // Queratometria Anterior
    "slimkAnterior":valD("sc-OI"),
    "flatslimkAnterior":valD("sc-OI"),
    "1flatslimkAnterior":valD("sc-OI"),
    "ejeflatslimkAnterior":valD("sc-OI"),
    "steepslimkAnterior":valD("sc-OI"),
    "ejesteepslimkAnterior":valD("sc-OI"),
    "asignatismoAnterior":valD("sc-OI"),
    // Queratometria Posterior
    "simkPosterior":valD("sc-OI"),
    "flatsimkPosterior":valD("sc-OI"),
    "1flatsimkPosterior":valD("sc-OI"),
    "ejeflatsimkPosterior":valD("sc-OI"),
    "steepsimkPosterior":valD("sc-OI"),
    "ejesteepsimkPosterior":valD("sc-OI"),
    "asignatismoPosterior":valD("sc-OI"),
    // Paquimetria
    "puntoFino":valD("sc-OI"),
    "central":valD("sc-OI"),
    "eleA3centrales":valD("sc-OI"),
    "eleP3centrales":valD("sc-OI")
}
console.log(gali);

let sirius={
    //Queratometria Anterior
   "k1Anterior":valD("k1A-OI"),
     "ejek1Anterior":valD("ejek1A-OI"),
     "k2Anterior":valD("k2A-OI"),
     "ejek2Anterior":valD("ejek2A-OI"),
     "ejek2Anterior":valD("ejek2A-OI"),
     "asignatismoAnterior":valD("sc-OI"),
     "ejeasignatismoAnterior":valD("sc-OI"),
       // Queratometria Posterior
         "simkPosterior":valD("sc-OI"),
    "flatsimkPosterior":valD("sc-OI"),
     "ejesimkPosterior":valD("sc-OI"),
    
    "steepsimkPosterior":valD("sc-OI"),
    "ejeflatsimkPosterior":valD("sc-OI"),
     "asignatismoPosterior":valD("sc-OI"),
    "ejesteepsimkPosterior":valD("sc-OI")
   //Paquimetria


}

console.log(sirius);
let c={
    "ojoIzquierdo":{
     "estudios":valC("estudios-OI"),
     "sc":valD("sc-OI"),
     "cc":valD("cc-OI"),
     "esf":valD("esf-OI"),
     "cilindro":valD("cilindro-OI"),
     "eje":valD("eje-OI"),
  
     "estriasVogt":valC("estriasvogt-OI"),
     "nervios":valC("nervios-OI"),
     "leucoma":valC("leucoma-OI"),
     "hidrops":valC("hidrops-OI"),
     "manis":valC("manis-OI"),
     "anilloFleisher":valC("anilloFlei-OI"),
     "tipoQueratono":$(".tipcono-OI").val()},

    "ojoDerecho":{
        
     "estudios":valC("estudios-OD"),
     "sc":valD("sc-OD"),
     "cc":valD("cc-OD"),
     "esf":valD("esf-OD"),
     "cilindro":valD("cilindro-OD"),
     "eje":valD("eje-OD"),
     "k1Anterior":valD("k1A-OD"),
     "ejek1Anterior":valD("ejek1A-OD"),
     "k2Anterior":valD("k2A-OD"),
     "ejek2Anterior":valD("ejek2A-OD"),
     "cilindroTopoAnterior":valD("citoA-OD"),
     "k1Posterior":valD("k1P-OD"),
     "ejek1Posterior":valD("ejek1P-OD"),
     "k2Posterior":valD("k2P-OD"),
     "ejek2Posterior":valD("ejek2P-OD"),
     "cilindroTopoPosterior":valD("citoP-OD"),
     "kmax":valD("kmax-OD"),
     "it":valD("it-OD"),
     "q":valD("q-OD"),
     "kmaxSuperior":valD("kmaxSuperior-OD"),
     "kmaxInferior":valD("kmaxInferior-OD"),
     "medidorSI":valD("medidorSI-OD"),
      "kmaxDerecha":valD("kmaxDerecha-OD"),
     "kmaxIzquierda":valD("kmaxIzquierda-OD"),
      "medidorDI":valD("medidorDI-OD"),
     "puntoFino":valD("pFino-OD"),
     "apex":valD("apex-OD"),
     "bfsAnterior":valD("bfsA-OD"),
     "bfsPosterior":valD("bfsP-OD"),
     "anilloFleisher":valC("anilloFlei-OD"),
     "estriasVogt":valC("estriasvogt-OD"),
     "nervios":valC("nervios-OD"),
     "leucoma":valC("leucoma-OD"),
     "hidrops":valC("hidrops-OD"),
     "manis":valC("manis-OD"),
     "tipoQueratono":$(".tipcono-OD").val()
    }
}
switch(valC("estudios-OI")){
    case "P":console.log("Eligio Pentacam");break;
     case "G":console.log("Eligio Galilei");break;
      case "S":console.log("Eligio Sirius");break;
}
console.log(c);
}


//Cuarta paso ************************************************

function graduacion(){
    var f1 = document.querySelectorAll(".lista").item(0);
    var f2 = document.querySelectorAll(".lista").item(1);

   var graduacion={
    "graduacionOI":"1,5,6,7",
    "graduacionOD":"25,75,52"
   }
}
//----------------------***********************************------------------------//




//Quinto paso ************************************************
function manejo(){

    var man={
        ojoIzquierdo:{
        "tMedico":valD("tMedico-MOI"),
        "scManejo":valD("sc-MOI"),
        "ccManejo":valD("cc-MOI"),
        "esfManejo":valD("esf-MOI"),
        "cilindroManejo":valD("cilindro-MOI"),
        "ejeManejo":valD("eje-MOI"),
        "tUsoManejo":valD("tp-MOI"),
        "modeloManejo":valD("modelo-MOI"),
        "tUsoManejo":valD("tp-MOI"),
        "tiempoUVManejo":valD("tuv-MOI"),
        "epiOffManejo":valC("epiof-moi"),
        "epiOnManejo":valC("epion-MOI"),
        "custoManejo":valC("cust-MOI"),

        "micraManejo":valD("micra-MOI"),
        "eInsertManejo":valD("ejeInser-MOI"),
        "profManejo":valD("prof-MOI"),
         "modeAniManejo":valD("modeAni-MOI"),
        "segmentoManejo":valC("segmento-MOI"),
        "cuantoManejo":valD("cuantos-MOI"),
        "trasAltoRiesgoManejo":valD("trasAR-MOI"),
        "fechaCirugiaManejo":valD("fechCirugia-MOI"),
         "ccelulaendoManejo":valD("cceendoMicroEs-MOI"),
         "grosorCornealManejo":valD("grosorCorneal-MOI"),
        "diametroCornealManejo":valD("diaCor-MOI"),
        "edadManejo":valD("edad-MOI"),
        "fechaEnucleaManejo":valD("fechEnu-MOI"),
        "conCeluEndoManejo":valD("ccendoDon-MOI"),
        "proxFechaConsulta":null,//aqui hay que sacar el valor del calendario
        "fechaControlManejo":valD("fechCon-MOI") },
        ojoDerecho:{
               "tMedico":valD("tMedico-MOID"),
        "scManejo":valD("sc-MOID"),
        "ccManejo":valD("cc-MOID"),
        "esfManejo":valD("esf-MOID"),
        "cilindroManejo":valD("cilindro-MOID"),
        "ejeManejo":valD("eje-MOID"),
        "tUsoManejo":valD("tp-MOID"),
        "modeloManejo":valD("modelo-MOID"),
        "tUsoManejo":valD("tp-MOID"),
        "tiempoUVManejo":valD("tuv-MOID"),
        "epiOffManejo":valC("epiof-moiD"),
        "epiOnManejo":valC("epion-MOID"),
        "custoManejo":valC("cust-MOID"),

        "micraManejo":valD("micra-MOID"),
        "eInsertManejo":valD("ejeInser-MOID"),
        "profManejo":valD("prof-MOID"),
         "modeAniManejo":valD("modeAni-MOID"),
        "segmentoManejo":valC("segmento-MOID"),
        "cuantoManejo":valD("cuantos-MOID"),
        "trasAltoRiesgoManejo":valD("trasAR-MOID"),
        "fechaCirugiaManejo":valD("fechCirugia-MOID"),
         "ccelulaendoManejo":valD("cceendoMicroEs-MOID"),
         "grosorCornealManejo":valD("grosorCorneal-MOID"),
        "diametroCornealManejo":valD("diaCor-MOID"),
        "edadManejo":valD("edad-MOID"),
        "fechaEnucleaManejo":valD("fechEnu-MOID"),
        "conCeluEndoManejo":valD("ccendoDon-MOID"),
        "proxFechaConsulta":null,//aqui hay que sacar el valor del calendario
        "fechaControlManejo":valD("fechCon-MOID") }
        }
    
    console.log(man);

//----------------------***********************************------------------------//

// eventnext(1);
// eventnext(10);
console.log(c);
}

function valC(x){
	let h;
	$("."+x).each(function(i,a){
	
		if(a.checked){
			
			h=a.dataset.v;
		}
    
	})

	return h;
}
function valD(x){

	return $("#"+x).val();
}


function validarDatosGenerales(){



}


// })