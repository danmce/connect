using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Connect.Controllers
{
    public class BlockController : Controller
    {
        //
        // GET: /Block/
        [Route("Block")]
        public ActionResult Index()
        {
            return View();
        }
	}
}