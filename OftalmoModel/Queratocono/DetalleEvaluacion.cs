using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OftalmoModel.Queratocono
{
  public   class DetalleEvaluacion
    {
        public int ID_DET_EVALUACION { set; get; }
        public int ID_PACIENTE { set; get; }
        public string COD_LADO_OJO { set; get; }
        public string FLG_ESTUDIO { set; get; }
        public int ID_AGU_VISUAL_SC { set; get; }
        public int ID_AGU_VISUAL_CC { set; get; }
        public int ID_ESFERA { set; get; }
        public int ID_CILINDRO { set; get; }
        public int ID_EJE { set; get; }
        public string FLG_ANI_FLEISCHER { set; get; }
        public string FLG_ESTRIAS_VOGT { set; get; }
        public string FLG_NERVIOS { set; get; }
        public string FLG_LEUCOMA { set; get; }
        public string FLG_HIDROPS { set; get; }
        public string FLG_MANIS { set; get; }
        public string ID_TIPO_CONO { set; get; }
    }
}
