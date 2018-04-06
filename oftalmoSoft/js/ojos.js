


var array = ["Round","Oval","Superior steep","Inferior steep","Irregular","Symmetric bowtie","SB/SRAX","Asymmetric bowtie","AB/SS","AB/SRAX","Butterfly"];


function presion(x){
	var base = document.getElementsByClassName("tipe-eyes").item(0);
	var items = base.getElementsByTagName("img");
    document.getElementById("select").selectedIndex = x;
	for(var i = 0 ; i < items.length;i++){
		var cantidad = "0.4";
		if(i == x) cantidad = "1";
		items.item(i).style.opacity=cantidad;
	}
}

function presiondos(x){
	var base = document.getElementsByClassName("tipe-eyes").item(1);
	var items = base.getElementsByTagName("img");
	document.getElementById("select2").selectedIndex = x;
	for(var i = 0 ; i < items.length;i++){
		var cantidad = "0.4";
		if(i == x) cantidad = "1";
		items.item(i).style.opacity=cantidad;
	}
}