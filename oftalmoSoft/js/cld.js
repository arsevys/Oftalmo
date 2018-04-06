

var meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Setiembre","Octubre","Noviembre","Diciembre"];

var fecha= {};

function iniciarcalendarios(){
	var hoy = new Date();
	var year = hoy.getFullYear();
	var month = hoy.getMonth();

	var calendarios = document.querySelectorAll(".calendario");

	for (var i = 0; i < calendarios.length; i++) {
		var dataId = calendarios[i].dataset.name;
		fecha[dataId] = {};
		fecha[dataId]["class"] = calendarios[i].dataset.class;
		fecha[dataId]["mes"] = month;
		fecha[dataId]["year"] = year;
		fecha[dataId]["fecha"] = null;
		fecha[dataId]["fechaAux"] = null;
		llenarhoy(fecha[dataId]["year"],fecha[dataId]["mes"],dataId);
	}
	
	
}



function llenarhoy(year,month,dateid){
	document.querySelector("#"+dateid+" .header .dtl strong").innerText= meses[month];
	document.querySelector("#"+dateid+" .header .dtl span").innerText= '' + year;

	
	var base = `<tr>
					<th><span>L</span></th>
					<th><span>M</span></th>
					<th><span>X</span></th>
					<th><span>J</span></th>
					<th><span>V</span></th>
					<th><span>S</span></th>
					<th><span>D</span></th>
				</tr>`;

	var dias = [];

	var newfecha = new Date(year,month+1,0);

	for (var i = 1; i <= newfecha.getDate(); i++) {
		dias.push(i);
	}

	newfecha = new Date(year,month,1);

	var index = 0;

	for (var i = 1; i <= 42; i++) {

		if( i == 8 || i == 15 || i == 22 || i == 29 || i == 36 || i == 43){
			base += `</tr>`;
		}

		if( i==1 || i == 8 || i == 15 || i == 22 || i == 29 || i == 36){
			base += `<tr>`;
		}
		

		if(newfecha.getDay() <= i && i < newfecha.getDay() + dias.length){
			base += `<td><div><span onclick="seleccion(this,'`+dias[index]+"/"+meses[month]+"/"+year+`','`+dateid+`')"><i>`+dias[index]+`</i></span></div></td>`;
			index++;
		}
		else{
			base += `<td><div><span></span></div></td>`;
		}

	}
   
    document.querySelector("#"+dateid+" .body table").innerHTML = base;
}

function nextmonth(dataId){
	if(fecha[dataId]["mes"] == 11){
		fecha[dataId]["mes"] = 0;
		fecha[dataId]["year"] = fecha[dataId]["year"]+1;
	}
	else{
		fecha[dataId]["mes"] = fecha[dataId]["mes"]+1;
	}
	llenarhoy(fecha[dataId]["year"],fecha[dataId]["mes"],dataId);
}

function backmonth(dataId){

	if(fecha[dataId]["mes"] == 0){
		fecha[dataId]["mes"] = 11;
		fecha[dataId]["year"] = fecha[dataId]["year"] - 1;
	}
	else{
		fecha[dataId]["mes"] = fecha[dataId]["mes"] - 1;
	}

	llenarhoy(fecha[dataId]["year"],fecha[dataId]["mes"],dataId);

}

function seleccion(este,dato,dataId){
	if (fecha[dataId]["fechaAux"] != null)
		fecha[dataId]["fechaAux"].classList.remove(fecha[dataId]["class"]);
	este.classList.add(fecha[dataId]["class"]);
	fecha[dataId]["fechaAux"] = este;
	fecha[dataId]["fecha"] = dato;
}