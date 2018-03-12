                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     

window.onload = ()=>{

	document.getElementById('menu').addEventListener("click",active_menu);
	document.getElementById('barra').addEventListener("click",active_barra);

	// if (document.getElementById('baseconsulta')){
	// 	eventnext(1)
	// }
	this.onresize = (e)=>{
		if(e.currentTarget.innerWidth > 850){
			document.getElementsByClassName("menu").item(0).style.transform = "translateX(0%)";
		}
	}
    
    if(document.getElementById("ps")){
    	registro();
    	iniciarcalendarios()
    }
    
	
}


function active_menu(){
	this.classList.remove("fa-plus");
	this.classList.add("fa-minus");
	document.getElementsByClassName("menu").item(0).style.transform = "translateX(0%)";
	document.getElementById('menu').removeEventListener("click",active_menu);
	document.getElementById('menu').addEventListener("click",desactive_menu);
}

function desactive_menu(){
	this.classList.remove("fa-minus");
	this.classList.add("fa-plus");
	document.getElementsByClassName("menu").item(0).style.transform = "translateX(-100%)";
	document.getElementById('menu').removeEventListener("click",desactive_menu);
	document.getElementById('menu').addEventListener("click",active_menu);
}

function active_barra(){
	this.classList.remove("fa-bars");
	this.classList.add("fa-times");
	document.getElementsByClassName("barra-responsive").item(0).style.transform = "translateX(0%)";
	document.getElementById('barra').removeEventListener("click",active_barra);
	document.getElementById('barra').addEventListener("click",desactive_barra);
}

function desactive_barra(){
	this.classList.remove("fa-times");
	this.classList.add("fa-bars");
	document.getElementsByClassName("barra-responsive").item(0).style.transform = "translateX(100%)";
	document.getElementById('barra').removeEventListener("click",desactive_barra);
	document.getElementById('barra').addEventListener("click",active_barra);
}



function eventkey(este){
	var nr = este.querySelectorAll('label .nr');
	var rs = este.querySelector('label .medidor')

	var total = parseFloat(nr[0].value) - parseFloat(nr[1].value);
	if(!isNaN(total)){
		total = Math.abs(total).toFixed(1);
		if(total < 1.5){
			rs.classList.remove("alert");
		}
		else{
			rs.classList.add("alert");
		}
		rs.value=""+total
	}
	else{
		rs.value = "Error";
		rs.classList.add("alert");
	}
}

function eventkeytwo(este,n){
	var nr = este.querySelectorAll('label .nr');
	var rs = este.querySelector('label .medidor')

	var total = parseFloat(nr[0].value) ;
	if(!isNaN(total)){

		if(total < n){
			rs.value="Normal";
			rs.classList.remove("alert");
		}
		else{
			rs.value="Alto";
			rs.classList.add("alert");
		}
		
	}
	else{
		rs.value = "Error";
		rs.classList.add("alert");
	}
}

function quera(este,nr){
	var vl = este.value;
	var rs = document.getElementsByClassName('grado');
	var total = parseFloat(vl) ;
	console.log(total);
	
	if(!isNaN(total)){

		if(total < 48){
			rs[nr].innerText="I";
		}
		else if(total < 53){
			rs[nr].innerText="II";
		}
		else{
			rs[nr].innerText="III";
		}
		
	}
	else{
		rs.value = "---";
	}
}


var jsonunlock = {
	'0':[],
	'1':[],
	'2':[],
	'3':[]
}


function addrc(nr){
	var sl = document.querySelectorAll(".detalle.agregar select").item(nr);
	var vl = "";
	var v2 = sl.value;
	
	for(let i=0;sl.options.length>i;i++){
       if(sl.options[i].selected){
       	vl=sl.options[i].innerText;
       }
	}


	if(vl != ""){
		sl.remove(sl.selectedIndex);
		if(vl == "Observación"){
			jsonunlock[''+nr].push("Observacion"+nr);
		}
		else if(vl == "Lentes de contacto"){
			jsonunlock[''+nr].push("Lentes"+nr);
		}
		else if(vl == "Anillos corneales"){
			jsonunlock[''+nr].push("Anillos"+nr);
		}
		else{
			jsonunlock[''+nr].push(vl+nr);
		}
		console.log(jsonunlock[''+nr]);
		var ht = document.querySelectorAll(".lista").item(nr);
		var text = ht.innerHTML + "<p data-c='"+v2+"' onclick='clearrc("+nr+",this)'>"+vl+"</p>";
		ht.innerHTML = text;
		elementos();
	}
	
}


function clearrc(nr,este){
	var pos = jsonunlock[''+nr].indexOf(este.innerText);
	jsonunlock[''+nr].splice(pos, 1);
	console.log(jsonunlock[''+nr]);
	este.style.display="none";
	var sl = document.querySelectorAll(".detalle.agregar select").item(nr);
	var option = document.createElement("option");
    option.text = este.innerText;
	sl.add(option);
	elementos();
}


var aux45 = {
	'2':["Observacion2","Lentes2","Crosslinking2","Anillos2","Trasplante2"],
	'3':["Observacion3","Lentes3","Crosslinking3","Anillos3","Trasplante3"]
}


function elementos(){
	    	for (var i = 0; i < aux45['2'].length; i++) {
	    		var els = document.getElementsByClassName(aux45['2'][i]);
	    		for (var j = 0; j < els.length; j++) {
	    			els.item(j).style.display="none";
	    		}
	    	}
	    	for (var i = 0; i < aux45['3'].length; i++) {
	    		var els = document.getElementsByClassName(aux45['3'][i]);
	    		for (var j = 0; j < els.length; j++) {
	    			els.item(j).style.display="none";
	    		}
	    	}

	    	for (var i = 0; i < jsonunlock['2'].length; i++) {
	    		var els = document.getElementsByClassName(jsonunlock['2'][i]);
	    		for (var j = 0; j < els.length; j++) {
	    			els.item(j).style.display="block";
	    		}
	    	}
	    	for (var i = 0; i < jsonunlock['3'].length; i++) {
	    		var els = document.getElementsByClassName(jsonunlock['3'][i]);
	    		for (var j = 0; j < els.length; j++) {
	    			els.item(j).style.display="block";
	    		}
	    	}
}