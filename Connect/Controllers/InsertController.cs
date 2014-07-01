using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Connect.Controllers
{
    public class InsertController : Controller
    {
        //
        // GET: /Insert/
        [Route("Insert")]
        public ActionResult Index()
        {
            return View();
        }
	}
}