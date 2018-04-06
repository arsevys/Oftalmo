(function ($) {
    var metodos = {

        init: function (options) {
            var jDefecto = {
                colHeaders: [],
                colAncho: [],
                tablaId: null,
                colTipo: [],
                tabs: [],
                paginado: 5,
                buscar: [],
                data: [],
                footer: true,
                columnBuscar: 4,
                inicio: true,
                columns: [{ type: "hidden" }],
                dataCheck: [],//datos alamacenados temporalmente para guardar
                idCheckTrue: [], //almacenamos los id de cada fila que tiene un check
                paginadoActual: 0,
                buscarPrimero: true,
                aginadoData: [],
                checkTotal: []//valida si se realizo todo el check completamenta en el modelo D

            }	
            var conf ={}
                var options=$.extend(jDefecto,options);
                //nombre del contenedor
                var id=$(this).prop('id');
                // DOM del contendor
                var main=$(this);
                 if (! $.fn.grilla.jDefecto) {
                $.fn.grilla.jDefecto = new Array();
            }
           
             $.fn.grilla.jDefecto["grillaOF"]=options;

        },

    cargar:function(data){
               $.fn.grilla.jDefecto;
               var t="";
                for (var i = 0 ;data.length>i; i++) {
                    t+=`<tr>
                            <td>
                                <i class="fa fa-pencil" aria-hidden="true" onclick="location.href ='http://54.233.82.3/oftalmo/?q=editar'"></i>
                                <i class="fa fa-times" aria-hidden="true"></i>
                            </td>
                            <td>47856845</td>
                            <td>Yesenia</td>
                            <td>Campos Macha</td>
                            <td>4566786</td>
                            <td>Femenino</td>
                            <td>08 / 08 / 1989</td>
                            <td>Anunez</td>
                            <td>2014-09-18 12:41 2:25</td>
                        </tr>`;

                }
               

              $("#grillaOFBody").html(t);
            },

crearPaginado:function(a){
            let id="grillaOF";
              let mos="mostrarIndice";
           $("#paginadoLista").html("");
     let m=0;
      if(a>0){
         m=a;
        }
      else {
         m=$.fn.grilla.jDefecto["grillaOF"].paginado;
      }

    d=$.fn.grilla.jDefecto["grillaOF"];
   // can=$(this).javier("totalCantidadFila",dat)

   console.log("MM ",m);
     dat=d.data;
     let principal=this;
      div = document.createElement("div");
      $(div).prop('id',"paginado");
      ul=document.createElement("ul");

       let f=0;  
       let c=1;
       
       let men=0; //incrementamos para cargar el indice en la grilla
       let men1=0;
       $(ul).append("<li><i class='fa fa-sort-desc' aria-hidden='true'></i></li>");
       // console.log("Paginado de DAtos : ",dat.length);
      for(let i=0;dat.length>i;i++){
           
           f++;
           if(f==m){
            // men+=m;
        // console.log($(this),$("#abc"));
         $(ul).append(`<li   data-item='${c-1}' onclick="$('#${d.tablaId}').grilla('${mos}',${men1},${m}); $(this).grilla('paginadoEstilo');">${c}</li>`);
         f=0;
         men1+=m;
         c++;
         }
        if(dat.length-1==i&&f>0){//debe ser el ultimo recorrido y tmb debe haber algo de
          // men+=f;
         $(ul).append(`<li  data-item='${c-1}'  onclick="$('#${d.tablaId}').grilla('${mos}',${men1},${m}); $(this).grilla('paginadoEstilo');">${c}</li>`);
         }
      
      }
      $(ul).append("<li><i class='fa fa-sort-desc' aria-hidden='true'></i></li>");
      $(div).append(ul);
      console.log($(div));
      $("#paginadoLista").append(div);
      // $(this).append(dispatchEvent)
 
          }  ,
    paginadoEstilo:function(){
    //function para cambiar estilo de paginado  id+pagJ
   // console.log($(this).data("tablaid"));
      $("#paginadoLista li").css({"color":"#606d6c","background":"#f1f1f1"})
    $(this).css({"background":"#A1A1A1","color":"#666666"})
    //configuramos en que paginado esta actualmente;
    $.fn.grilla.jDefecto["grillaOF"].paginadoActual=$(this).data("item"); 
    // console.log($.fn.javier.jDefecto[$(this).data("tablaid")].paginadoActual);
    config=$.fn.grilla.jDefecto["grillaOF"];
    let id=$(this).data("tablaid");
},
cambioPaginado:function(){

     let i=$(this).val();
     console.log(i);
     $(this).grilla('crearPaginado',parseInt(i));
     $("#paginadoLista").find("ul").find("li")[1].click();
},
    mostrarIndice:function(ind,t){ //muestra en la grilla una cierta cantidad de columnas confrome el indice
      indice =ind||0;
      finalIndice=indice+t;
      totalRecorrido=finalIndice-indice;
      dat=$.fn.grilla.jDefecto["grillaOF"].data;
      
     let news=[] ;
     let sumatoria=0;
    
      // extraemos los datos y lo armamos en un solo array
       // let arraySolo=[];
       // for (let n=0;dat.length>n;n++){
       //  arraySolo.push(dat[n]["0"]);
       //   if(dat[n]["1"]){
       //    for(let j=0;dat[n]["1"].length>j;j++){
       //      arraySolo.push(dat[n]["1"][j]);
       //    }
       //   }
       // }  
       // console.log("Mostrar indice "  , t);
       $.fn.edicionGeneralGrilla=false;
      for(let u=0;totalRecorrido>u;u++){
        
       
          if( typeof dat[indice+u] != 'undefined'){
            news.push(dat[indice+u]);
          }
         
      }
     // $(this).javier("cargarData",news);
     console.log("Vista : ",news);
     $(this).grilla("cargar",news,indice); // normal porque no es una busqueda


    }    
,
      insertarData:function(e){

       let id="grillaOF";
        let conf= $.fn.grilla.jDefecto[id];
        // console.log(conf);
        $.fn.edicionGeneralGrilla=false;
       $.fn.grilla.jDefecto[id].data=e;
       $(this).find("tbody").html("");
       // $(this).javier("cargarData",e);
       // debuggesr;
       $(this).grilla("mostrarIndice",0,conf.paginado);
         $(this).grilla("crearPaginado");
        // console.log($("."+$(this).attr("id")+"pagJ:eq(0)"));
       // $("."+$(this).attr("id")+"pagJ:eq(0)").css({"background":"#A1A1A1","color":"#666666"})
       // // $.fn.javier.jDefecto[$(this).attr("id")].paginadoActual=0;
       
       // if( conf.data.length>3){
        
       //     let nave=$(this).find(".jGridJavierFoot").find("ul").find("li");
        
       //     if(nave.length>conf.paginadoActual){
       //      nave[conf.paginadoActual+1].click();
       //     }
       //     else {
       //       nave[1].click();
       //     }
           
       // }
      }
        }





    $.fn.grilla = function (method) {
         if ( metodos[method] ) {
            return metodos[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } 
       metodos.init.apply(this,arguments);

     }
          }  )(jQuery)



          var data=[3,23,2,3,3,2,2,3,23,2,3,3,2,2,3,23,2,3,3,2,2,3,23,2,3,3,2,2]

          $("#grillaOF").grilla({
            tablaId:"grillaOF",
            paginado:8
          });
           $("#grillaOF").grilla("insertarData",data);