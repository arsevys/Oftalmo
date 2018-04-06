using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OftalmoModel.Queratocono
{
   public  class DatosGenerales
    {   
        public int id { set; get; }
        public string numHisCli { set; get; }
        public string nombres { set; get; }
        public string apaterno { set; get; }
        public string amaterno { set; get; }
        public string tipo_doc { set; get; }
        public string n_doc { set; get; }
        public string f_nac { set; get; }
        public int id_pais { set; get; }
        public int id_region { set; get; }
        public int id_provincia { set; get; }
        public int id_distrito { set; get; }
        public string genero { set; get; }
    }
}
