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
            return View();
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

        // POST: Oftalmo/Create
        [HttpPost]
        public ActionResult Create(FormCollection collection)
        {
            try
            {
                // TODO: Add insert logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Oftalmo/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: Oftalmo/Edit/5
        [HttpPost]
        public ActionResult Edit(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Oftalmo/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: Oftalmo/Delete/5
        [HttpPost]
        public ActionResult Delete(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }
    }
}
