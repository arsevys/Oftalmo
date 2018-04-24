using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OftalmoModel.Queratocono
{
   public class DetalleEvolucion
    {
        public int ID_EVOLUACION { set; get; }
        public int ID_PACIENTE { set; get; }
        public string COD_LADO_OJO { set; get; }
        public string FLG_ESTUDIO { set; get; }
        public double ID_AGU_VISUAL_SC { set; get; }
        public double ID_AGU_VISUAL_CC { set; get; }
        public double ID_REFRAC_ESF { set; get; }
        public double ID_REFRAC_CILIND { set; get; }
        public double ID_REFRAC_EJE { set; get; }
        public double QRA_ANT_K1 { set; get; }
        public double QRA_ANT_EJEK1 { set; get; }
        public double QRA_ANT_K2 { set; get; }
        public double QRA_ANT_EJEK2 { set; get; }
        public double QRA_ANT_CIL_TOPO { set; get; }
        public double QRA_POS_K1 { set; get; }
        public double QRA_POS_EJEK1 { set; get; }
        public double QRA_POS_K2 { set; get; }
        public double QRA_POS_EJEK2 { set; get; }
        public double QRA_POS_CIL_TOPO { set; get; }
        public double QRA_KMAX { set; get; }
        public double QRA_IT { set; get; }
        public double QRA_Q { set; get; }
        public double QRA_KMAX_SUPERIOR { set; get; }
        public double QRA_KMAX_INFERIOR { set; get; }
        public double QRA_KMAX_DERECHA { set; get; }
        public double QRA_KMAX_IZQUERD { set; get; }
        public double PAQ_PUNTO_FINO { set; get; }
        public double PAQ_APEX { set; get; }
        public double PAQ_ELEV_BFS_ANT { set; get; }
        public double PAQ_ELEV_BFS_POS { set; get; }
    }
}
