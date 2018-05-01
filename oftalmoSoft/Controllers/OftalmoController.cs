using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using OftalmoBussines.Bussines;
using System.Web.Mvc;

namespace prjOftalmo.Controllers
{
    public class OftalmoController : Controller
    {
        // GET: Oftalmo
        public ActionResult Index()
        {
            ViewBag.op=Request["p"].ToString();
            return View();
        }


        [HttpPost]
        public JsonResult listarPaciente()
        {

            return Json(new OftalmoBL().listarPaciente(), JsonRequestBehavior.AllowGet);
        
        }

        [HttpPost]
        public bool GrabarCliente(string jsonX)
        {


            return new OftalmoBL().GrabarDatosGenerales(jsonX);
        }

        [HttpPost]
        public bool Logear(string user,string pwd)
        {
            if (user == "admin" && pwd == "admin")
            {

                Session["nombre"] = "Andy Robers Javier";
                return true;

            }
            else
            {
                return false;

            }

         
        }

        public ActionResult registrar()
        {
            return View(new OftalmoBL().cargarCombos());
        }
        // GET: Oftalmo/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: Oftalmo/Create
        public ActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public JsonResult Registrarc(string jsonX)
        {
            return Json(new OftalmoBL().GrabarDatosGenerales(jsonX), JsonRequestBehavior.AllowGet);
        }




    }
}
