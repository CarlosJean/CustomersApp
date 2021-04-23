using CustomersApp.BLL.Objects;
using CustomersApp.BLL.Services;
using CustomersApp.DAL;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CustomersApp.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class CustomersController : ControllerBase {
        private readonly CustomersAppDbContext _db;
        public CustomersController(CustomersAppDbContext customersAppDbContext) {
            this._db = customersAppDbContext;
        }
        // GET: api/<CustomersController>
        [HttpGet]
        public ActionResult<CustomerBO> Get() {
            return Ok(new CustomersService(this._db).GetAll());
        }

        // GET api/<CustomersController>/5
        [HttpGet("{id}")]
        public ActionResult<CustomerBO> Get(int id) {
            return Ok(new CustomersService(this._db).GetCustomer(id));
        }

        // POST api/<CustomersController>
        [HttpPost]
        public ActionResult Post([FromBody] CustomerBO customerBO) {
            try {
                new CustomersService(this._db).Create(customerBO);
                return Ok(new { status= this.Response.StatusCode,message="Cliente insertado exitosamente."});
            } catch (Exception) {
                throw;
            }
        }

        // PUT api/<CustomersController>/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody] string value) {
        //}

        // DELETE api/<CustomersController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id) {
            try {
                new CustomersService(this._db).Delete(id);
                return Ok(new { status = this.Response.StatusCode, message = "Cliente eliminado satisfactoriamente." });

            } catch (Exception) {

                throw;
            }
        }
    }
}
