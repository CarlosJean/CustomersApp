using CustomersApp.DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CustomersApp.BLL.Objects {
    public class CustomerBO{
        public int Id { get; set; }
        public string Names { get; set; }
        public string Surnames { get; set; }
        public string TelephoneNumber { get; set; }
        public string PhoneNumber { get; set; }
        public IEnumerable<string> Addresses { get; set; }
    }
}
