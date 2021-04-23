using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CustomersApp.DAL {
    public class Customer {
        public int Id { get; set; }
        public string Names { get; set; }
        public string Surnames { get; set; }
        public string PhoneNumber { get; set; }
        public string TelephoneNumber { get; set; }
        public virtual ICollection<Address> Addresses { get; set; }
    }
}
