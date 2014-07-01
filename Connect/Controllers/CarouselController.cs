using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Connect.Controllers
{
    public class CarouselController : Controller
    {
        //
        // GET: /Carousel/
        [Route("Carousel")]
        public ActionResult Index()
        {
            return View();
        }
	}
}