using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OftalmoModel.Queratocono
{
  public   class DetalleManejo
    {

        public int ID_MANEJO { set; get; }
        public int ID_PACINETE { set; get; }
        public string ID_LODO_OJO { set; get; }
        public int ID_TRATA_MEDICO { set; get; }
        public string FCH_PROX_CONSULTA { set; get; }
        public int ID_AGU_VISUAL_SC { set; get; }
        public int ID_AGU_VISUAL_CC { set; get; }
        public int ID_REFRAC_ESF { set; get; }
        public int ID_REFRAC_CILIND { set; get; }
        public int ID_REFRAC_EJE { set; get; }
        public int TIEMPO_USO { set; get; }
        public int ID_MODELO { set; get; }
        public int ID_TIEMPO_UV { set; get; }
        public string C_EPI_OFF { set; get; }
        public string C_EPI_ON { set; get; }
        public string C_CUSTOMI { set; get; }
        public int A_MICRA { set; get; }
        public int A_EJE_INS { set; get; }
        public int A_PROFUND { set; get; }
        public string A_COD_ANILLO { set; get; }
        public string A_FLG_SEG { set; get; }
        public int A_CUANTOS { set; get; }
        public string T_I_FLG_RIESGO { set; get; }
        public string T_I_FCH_CIRUGIA { set; get; }
        public int T_I_CONT_CELULA { set; get; }
        public int T_I_GROS_CORNEAL { set; get; }
        public string T_D_DIAM_CORNIAL { set; get; }
        public int T_D_EDAD { set; get; }
        public string T_D_FCH_ENUCLE { set; get; }
        public int T_D_CONT_CELULA { set; get; }
        public string T_P_RUTA_IMAGEN { set; get; }
        public string T_P_FCH_CONTROL { set; get; }
    }
}
