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
