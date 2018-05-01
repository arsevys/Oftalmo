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
        public Listacbo cargarCombos()
        {
            var model = new Listacbo();
            model.cboAgudezaVisual = new IntegrationDA().cboAgudezaVisual();
            model.cboValEsfera = new IntegrationDA().cboValEsfera();
            model.cboValEje = new IntegrationDA().cboValEje();
            model.cboValCilindro = new IntegrationDA().cboValCilindro();
            model.cboProvincia = new IntegrationDA().cboProvincia("1");
            model.cboDepartamento = new IntegrationDA().cboDepartamento();
            return model;
        }
    }
}
