using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OftalmoModel.Queratocono
{
   public class Antecedentes
    {


        public int ID_ANTECEDENTE { set; get; }
        public int ID_PACIENTE { set; get; }
        public string FLG_HABITOS { set; get; }
        public string FLG_AHF_QTO { set; get; }
        public string APP_ATOPICAS { set; get; }
        public string FLG_REFRACION { set; get; }
        public string FLG_LENTES_RGP { set; get; }
        public string YEAR_RGP { set; get; }
        public string FLG_BILATERAL { set; get; }
        public string FLG_UNILATERAL { set; get; }
    }
}
