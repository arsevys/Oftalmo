using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using OftalmoData;
using Newtonsoft.Json;
using ParseJsonR;
using OftalmoModel.Queratocono;
namespace OftalmoBussines.Bussines
{
   public class OftalmoBL
    {
        public bool GrabarDatosGenerales(string json)
        {
            return new IntegrationDA().Insert(new JsnConverter().JsonParserL(json));

        }


        public List<Paciente> listarPaciente()
        {
            return new IntegrationDA().listarPaciente();

        }
    }
}
