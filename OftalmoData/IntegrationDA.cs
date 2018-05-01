using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml;
using System.Data;
using System.Data.SqlClient;
using OftalmoData.Objects;
using System.IO;
using OftalmoModel.Queratocono;
namespace OftalmoData
{
   public  class IntegrationDA
    {
        protected string cnxConection = System.Configuration.ConfigurationManager.ConnectionStrings["cnOftalmo"].ToString();


        /*
        public List<Embarque> ListaEmbarque()
        {
            var model = new List<Embarque>();
            using (SqlConnection conn = new SqlConnection(cnxStringSLMExpress))
            using (SqlCommand cmd = new SqlCommand(Objects.Objects.DataEmbarque, conn))
            {
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.Add("@po_numb", SqlDbType.VarChar).Value = "";
                conn.Open();
                SqlDataReader sqlReader = cmd.ExecuteReader();
                while (sqlReader.Read())
                {
                    var embarque = new Embarque();
                    embarque.id = int.Parse(sqlReader["id"].ToString());
                    embarque.poNumber = sqlReader["po_number"].ToString();
                    embarque.tipoOrden = sqlReader["tipo_Orden"].ToString();
                    embarque.trasnporte = sqlReader["transporte"].ToString();
                    embarque.proveedor = sqlReader["proveedor"].ToString();
                    model.Add(embarque);
                }
                conn.Close();
            }
            return model;
        }
*/

        public bool Insert(XmlDocument xmlDocument)
        {

           
            var model = false;
            using (SqlConnection conn = new SqlConnection(cnxConection))
            using (SqlCommand cmd = new SqlCommand(Objects.Objects.insertarData, conn))
            {
                cmd.CommandType = CommandType.StoredProcedure;
                //cmd.Parameters.Add("@xml", SqlDbType.Xml).Value = xmlDocument;
                cmd.Parameters.Add("@xml", SqlDbType.VarChar).Value = GetXMLAsString(xmlDocument);
                conn.Open();
                SqlDataReader sqlReader = cmd.ExecuteReader();
                while (sqlReader.Read())
                {
                    model = sqlReader["registros"].ToString() == "1" ? true : false;
                }
                conn.Close();
            }
            return model;
        }


        public List<Paciente> listarPaciente()
        {

            List<Paciente> l = new List<Paciente>();
            using (SqlConnection conn = new SqlConnection(cnxConection))
            using (SqlCommand cmd = new SqlCommand(Objects.Objects.listarPaciente, conn))
            {
                cmd.CommandType = CommandType.StoredProcedure;
                //cmd.Parameters.Add("@xml", SqlDbType.Xml).Value = xmlDocument;
     
                conn.Open();
                SqlDataReader s = cmd.ExecuteReader();
                while (s.Read())
                {
                    Paciente p = new Paciente();
                    p.ID_PACIENTE =Int32.Parse( s[0].ToString());
                    p.NRO_HISTORIA = s[1].ToString();
                    p.NOM_PACIENTE = s[2].ToString();
                    p.apellidos = s[3].ToString();
                    p.NRO_DOCUM = s[4].ToString();
                    p.GENERO = s[5].ToString();
                    p.DATE_BIRTH = s[6].ToString();
                    p.USER_CREA= s[7].ToString();
                    p.EVO_FCH_CONSULTA= s[8].ToString();

                    l.Add(p);
                }
                conn.Close(); s.Close();
            }
            return l;
        }


        public List<cboBox> cboAgudezaVisual()
        {

            List<cboBox> l = new List<cboBox>();
            using (SqlConnection conn = new SqlConnection(cnxConection))
            using (SqlCommand cmd = new SqlCommand("cbo_AgudezaVisual", conn))
            {
                cmd.CommandType = CommandType.StoredProcedure;
                //cmd.Parameters.Add("@xml", SqlDbType.Xml).Value = xmlDocument;

                conn.Open();
                SqlDataReader s = cmd.ExecuteReader();
                while (s.Read())
                {
                    cboBox p = new cboBox();
                    p.value =s[0].ToString();
                    p.display = s[1].ToString();
                   

                    l.Add(p);
                }
                conn.Close(); s.Close();
            }
            return l;
        }
        public List<cboBox> cboValEsfera()
        {

            List<cboBox> l = new List<cboBox>();
            using (SqlConnection conn = new SqlConnection(cnxConection))
            using (SqlCommand cmd = new SqlCommand("cbo_ValEsfera", conn))
            {
                cmd.CommandType = CommandType.StoredProcedure;
                //cmd.Parameters.Add("@xml", SqlDbType.Xml).Value = xmlDocument;

                conn.Open();
                SqlDataReader s = cmd.ExecuteReader();
                while (s.Read())
                {
                    cboBox p = new cboBox();
                    p.value = s[0].ToString();
                    p.display = s[1].ToString();


                    l.Add(p);
                }
                conn.Close(); s.Close();
            }
            return l;
        }
        public List<cboBox> cboDepartamento()
        {

            List<cboBox> l = new List<cboBox>();
            using (SqlConnection conn = new SqlConnection(cnxConection))
            using (SqlCommand cmd = new SqlCommand("cbo_Departamento", conn))
            {
                cmd.CommandType = CommandType.StoredProcedure;
                //cmd.Parameters.Add("@xml", SqlDbType.Xml).Value = xmlDocument;

                conn.Open();
                SqlDataReader s = cmd.ExecuteReader();
                while (s.Read())
                {
                    cboBox p = new cboBox();
                    p.value = s[0].ToString();
                    p.display = s[1].ToString();


                    l.Add(p);
                }
                conn.Close(); s.Close();
            }
            return l;
        }
        public List<cboBox> cboValEje()
        {

            List<cboBox> l = new List<cboBox>();
            using (SqlConnection conn = new SqlConnection(cnxConection))
            using (SqlCommand cmd = new SqlCommand("cbo_ValEje", conn))
            {
                cmd.CommandType = CommandType.StoredProcedure;
                //cmd.Parameters.Add("@xml", SqlDbType.Xml).Value = xmlDocument;

                conn.Open();
                SqlDataReader s = cmd.ExecuteReader();
                while (s.Read())
                {
                    cboBox p = new cboBox();
                    p.value = s[0].ToString();
                    p.display = s[1].ToString();


                    l.Add(p);
                }
                conn.Close(); s.Close();
            }
            return l;
        }
  
        public List<cboBox> cboValCilindro()
        {

            List<cboBox> l = new List<cboBox>();
            using (SqlConnection conn = new SqlConnection(cnxConection))
            using (SqlCommand cmd = new SqlCommand("cbo_ValCilindro", conn))
            {
                cmd.CommandType = CommandType.StoredProcedure;
                //cmd.Parameters.Add("@xml", SqlDbType.Xml).Value = xmlDocument;

                conn.Open();
                SqlDataReader s = cmd.ExecuteReader();
                while (s.Read())
                {
                    cboBox p = new cboBox();
                    p.value = s[0].ToString();
                    p.display = s[1].ToString();


                    l.Add(p);
                }
                conn.Close(); s.Close();
            }
            return l;
        }
        public List<cboBox> cboProvincia(string t)
        {

            List<cboBox> l = new List<cboBox>();
            using (SqlConnection conn = new SqlConnection(cnxConection))
            using (SqlCommand cmd = new SqlCommand("cbo_Provincia", conn))
            {
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@t", t);
                //cmd.Parameters.Add("@xml", SqlDbType.Xml).Value = xmlDocument;

                conn.Open();
                SqlDataReader s = cmd.ExecuteReader();
                while (s.Read())
                {
                    cboBox p = new cboBox();
                    p.value = s[0].ToString();
                    p.display = s[1].ToString();


                    l.Add(p);
                }
                conn.Close(); s.Close();
            }
            return l;
        }



        public string GetXMLAsString(XmlDocument myxml)
        {

            StringWriter sw = new StringWriter();
            XmlTextWriter tx = new XmlTextWriter(sw);
            myxml.WriteTo(tx);

            string str = sw.ToString();// 
            return str;
        }
    }
}
