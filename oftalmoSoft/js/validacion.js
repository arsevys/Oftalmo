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
     
     "anilloFleisher":valC("anilloFlei-OD"),
     "estriasVogt":valC("estriasvogt-OD"),
     "nervios":valC("nervios-OD"),
     "leucoma":valC("leucoma-OD"),
     "hidrops":valC("hidrops-OD"),
     "manis":valC("manis-OD"),
     "tipoQueratono":$(".tipcono-OD").val()
    }
}



//Ojo Derecho 
switch(valC("estudios-OI")){
    case "P":console.log("Eligio Pentacam");

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
     "medidorSI":valD("medidorSI-OI"), //campo colores
      "kmaxDerecha":valD("kmaxDerecha-OI"),
     "kmaxIzquierda":valD("kmaxIzquierda-OI"),

      "medidorDI":valD("medidorDI-OI"),//campo colores
      // Paquimetria
     "puntoFino":valD("pFino-OI"),
     "apex":valD("apex-OI"),
     "bfsAnterior":valD("bfsA-OI"),
     "bfsPosterior":valD("bfsP-OI") 
    }
    console.log("Pentacam",Pentacam);
    c.ojoIzquierdo.estudiosData=Pentacam;

    break;
     case "G":console.log("Eligio Galilei");
let gali={
    // Queratometria Anterior
    "simkAnterior":valD("gsimkA-OI"),
    "flatsimkAnterior":valD("gflatsimkA-OI"),
    "1flatsimkAnterior":valD("gflat1simkA-OI"),
    "ejeflatsimkAnterior":valD("gejeflatsimkA-OI"),
    "steepsimkAnterior":valD("gsteepsimkA-OI"),
    "ejesteepsimkAnterior":valD("gejesteepsimkA-OI"),
    "asignatismoAnterior":valD("gastimagtismoA-OI"),
    // Queratometria Posterior
    "simkPosterior":valD("gsimkP-OI"),
    "flatsimkPosterior":valD("gflatsimkP-OI"),
    "1flatsimkPosterior":valD("gflat1simkP-OI"),
    "ejeflatsimkPosterior":valD("gejeflatsimkP-OI"),
    "steepsimkPosterior":valD("gsteepsimkP-OI"),
    "ejesteepsimkPosterior":valD("gejesteepsimkP-OI"),
    "asignatismoPosterior":valD("gastimagtismoP-OI"),
    // Paquimetria
    "puntoFino":valD("gpuntoFino-OI"),
    "central":valD("gcentral-OI"),
    "eleA3centrales":valD("geleA3centrales-OI"),
    "eleP3centrales":valD("geleP3centrales-OI")
  }
console.log("Galillei",gali);
     c.ojoIzquierdo.estudiosData=Gali;
     break;
      case "S":console.log("Eligio Sirius");
 let sirius={
     //Queratometria Anterior
     "k1Anterior":valD("sk1A-OI"),
     "ejek1Anterior":valD("sejek1A-OI"),
     "k2Anterior":valD("sk2A-OI"),
     "ejek2Anterior":valD("sejek2A-OI"),
  
     "asignatismoAnterior":valD("satigmatismoA-OI"),
     "ejeasignatismoAnterior":valD("sejeatigmatismoA-OI"),
       // Queratometria Posterior
         "simkPosterior":valD("ssimkP-OI"),
     "flatsimkPosterior":valD("sflatsimkP-OI"),
     "ejesimkPosterior":valD("sejesimkP-OI"),
    
     "steepsimkPosterior":valD("ssteepsimkP-OI"),
     "ejeflatsimkPosterior":valD("sejeflatsimkP-OI"),
     "asignatismoPosterior":valD("sastimagtismoP-OI"),
     "ejesteepsimkPosterior":valD("sejesteepsimkP-OI"),
     //Paquimetria
     "puntodelgado":valD("spuntodelgado-OI"),
     "eje":valD("seje-OI"),
     "grosor":valD("sgrosor-OI"),
     "anguloKappa":valD("sangulokappa-OI")
  }

console.log("Sirius",sirius);

 c.ojoIzquierdo.estudiosData=sirius;

      break;
}





switch(valC("estudios-OD")){
     case "P":console.log("Eligio Pentacam"); 
 let Pentacam1={
     // Queratometria Anterior
     "k1Anterior":valD("k1A-OD"),
     "ejek1Anterior":valD("ejek1A-OD"),
     "k2Anterior":valD("k2A-OD"),
     "ejek2Anterior":valD("ejek2A-OD"),
     "cilindroTopoAnterior":valD("citoA-OD"),
     //Queratometria Posterior
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
     "medidorSI":valD("medidorSI-OD"), //campo colores
      "kmaxDerecha":valD("kmaxDerecha-OD"),
     "kmaxIzquierda":valD("kmaxIzquierda-OD"),

      "medidorDI":valD("medidorDI-OD"),//campo colores
      // Paquimetria
     "puntoFino":valD("pFino-OD"),
     "apex":valD("apex-OD"),
     "bfsAnterior":valD("bfsA-OD"),
     "bfsPosterior":valD("bfsP-OD") 
   }
console.log("Pentacam Derecho",Pentacam1);
  c.ojoDerecho.estudiosData=Pentacam1;
     break;
      case "G":console.log("Eligio Galilei");
 let gali1={
    // Queratometria Anterior
    "simkAnterior":valD("gsimkA-OD"),
    "flatsimkAnterior":valD("gflatsimkA-OD"),
    "1flatsimkAnterior":valD("gflat1simkA-OD"),
    "ejeflatsimkAnterior":valD("gejeflatsimkA-OD"),
    "steepsimkAnterior":valD("gsteepsimkA-OD"),
    "ejesteepsimkAnterior":valD("gejesteepsimkA-OD"),
    "asignatismoAnterior":valD("gastimagtismoA-OD"),
    // Queratometria Posterior
    "simkPosterior":valD("gsimkP-OD"),
    "flatsimkPosterior":valD("gflatsimkP-OD"),
    "1flatsimkPosterior":valD("gflat1simkP-OD"),
    "ejeflatsimkPosterior":valD("gejeflatsimkP-OD"),
    "steepsimkPosterior":valD("gsteepsimkP-OD"),
    "ejesteepsimkPosterior":valD("gejesteepsimkP-OD"),
    "asignatismoPosterior":valD("gastimagtismoP-OD"),
    // Paquimetria
    "puntoFino":valD("gpuntoFino-OD"),
    "central":valD("gcentral-OD"),
    "eleA3centrales":valD("geleA3centrales-OD"),
    "eleP3centrales":valD("geleP3centrales-OD")
  }
    console.log("Galillei Derecho",gali1);
     c.ojoDerecho.estudiosData=gali1;
      break;


      case "S":console.log("Eligio Sirius");
    let sirius1={
     //Queratometria Anterior
     "k1Anterior":valD("sk1A-OD"),
     "ejek1Anterior":valD("sejek1A-OD"),
     "k2Anterior":valD("sk2A-OD"),
     "ejek2Anterior":valD("sejek2A-OD"),
  
     "asignatismoAnterior":valD("satigmatismoA-OD"),
     "ejeasignatismoAnterior":valD("sejeatigmatismoA-OD"),
       // Queratometria Posterior
         "simkPosterior":valD("ssimkP-OD"),
      "flatsimkPosterior":valD("sflatsimkP-OD"),
      "ejesimkPosterior":valD("sejesimkP-OD"),
    
      "steepsimkPosterior":valD("ssteepsimkP-OD"),
      "ejeflatsimkPosterior":valD("sejeflatsimkP-OD"),
     "asignatismoPosterior":valD("sastimagtismoP-OD"),
     "ejesteepsimkPosterior":valD("sejesteepsimkP-OD"),
     //Paquimetria
     "puntodelgado":valD("spuntodelgado-OD"),
     "eje":valD("seje-OD"),
     "grosor":valD("sgrosor-OD"),
     "anguloKappa":valD("sangulokappa-OD")


     }
      console.log("Sirius Derecho",sirius1);
        c.ojoDerecho.estudiosData=sirius1;
         break;
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