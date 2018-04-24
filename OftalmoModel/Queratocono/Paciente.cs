using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OftalmoModel.Queratocono
{
   public  class Paciente
    {

        public int ID_PACIENTE { set; get; }
        public string NRO_HISTORIA { set; get; }
        public string NOM_PACIENTE { set; get; }
        public string APE_PATERNO { set; get; }
        public string APE_MATERNO { set; get; }
        public string apellidos { set; get; }
        public string TIPO_DOCUM { set; get; }
        public string NRO_DOCUM { set; get; }
        public string DATE_BIRTH { set; get; }
        public string GENERO { set; get; }
        public int ID_PAIS { set; get; }
        public int ID_DEPARTAMENTO { set; get; }
        public int ID_PROVINCIA { set; get; }
        public int ID_DISTRITO { set; get; }
        public string MAN_SUGRIDO_D { set; get; }
        public string MAN_SUGRIDO_I { set; get; }
        public string EVO_FCH_INTERVENCION { set; get; }
        public string EVO_TIME_TRANQRIDO { set; get; }
        public string EVO_FCH_CONSULTA { set; get; }
        public string EVO_COD_INTERVECION { set; get; }
        public string EVO_COD_COMPLICACION { set; get; }
        public string USER_CREA { set; get; }
        public string FCH_CREA { set; get; }
        public string USER_MOD { set; get; }
        public string FCH_MOD { set; get; }

    }
}
