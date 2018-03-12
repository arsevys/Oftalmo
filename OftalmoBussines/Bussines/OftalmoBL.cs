using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using OftalmoData;
using Newtonsoft.Json;
using ParseJsonR;

namespace OftalmoBussines.Bussines
{
   public class OftalmoBL
    {
        public bool GrabarDatosGenerales(string json)
        {
            return new IntegrationDA().Insert(new JsnConverter().JsonParserL(json));

        }
    }
}
