using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OftalmoModel.Queratocono
{
   public  class Paciente
    {

       public  int ID_PACIENTE { set; get; }
        public int NRO_HISTORIA { set; get; }
       
        public string NOM_PACIENTE { set; get; }
        public string APE_PATERNO { set; get; }
        public string APE_MATERNO { set; get; }
        public string TIPO_DOCUM { set; get; }


        public string NRO_DOCUM { set; get; }
        public string DATE_BIRTH { set; get; }
        public string GENERO { set; get; }
        public int  ID_REGION { set; get; }
        public int ID_PROVINCIA { set; get; }
        public int ID_DISTRITO { set; get; }

        public int ID_MANEJO { set; get; }


   
    }
}
