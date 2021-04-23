using CustomersApp.BLL.Objects;
using CustomersApp.DAL;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CustomersApp.BLL.Services {
    public class CustomersService {

        private readonly CustomersAppDbContext _db;
        public CustomersService(CustomersAppDbContext customersAppDbContext) {
            this._db = customersAppDbContext;
        }

        public IEnumerable<CustomerBO> GetAll() {
            var customers = this._db.Customers.ToList();
            var customersList = new List<CustomerBO>();
            foreach (var customer in customers) {
                customersList.Add(new CustomerBO() { 
                    Id = customer.Id,
                    Names = customer.Names,
                    Surnames = customer.Surnames,
                    TelephoneNumber = customer.TelephoneNumber,
                    PhoneNumber = customer.PhoneNumber
                });
            }
            return customersList; 
        }

        public CustomerBO GetCustomer(int id) {
            var customer = this._db.Customers.Include(c=>c.Addresses).Where(c => c.Id == id).FirstOrDefault();
            
            var addresses = new List<string>();

            foreach (var address in customer.Addresses) {
                addresses.Add(address.Description);
            }

            return new CustomerBO() {
                Names = customer.Names,
                Surnames = customer.Surnames,
                TelephoneNumber = customer.TelephoneNumber,
                PhoneNumber = customer.PhoneNumber,
                Addresses = addresses
            };
        }
        public void Create(CustomerBO customerBO) {
            var customer = new Customer() {
                Names = customerBO.Names,
                Surnames = customerBO.Surnames,
                TelephoneNumber = customerBO.TelephoneNumber,
                PhoneNumber = customerBO.PhoneNumber,
                Addresses = new List<Address>()
            };

            foreach (var addressitem in customerBO.Addresses) {
                Address address = new Address() {
                    Description = addressitem
                };

                this._db.Addresses.Add(address);
                customer.Addresses.Add(address);
            }
            
            this._db.Customers.Add(customer);
            this._db.SaveChanges();
        }

        public void Delete(int id) {
            try {
            var customer = this._db.Customers.Include(c => c.Addresses).Where(c => c.Id == id).FirstOrDefault();
            foreach (var address in customer.Addresses) {
                this._db.Addresses.Remove(address); 
            }
            this._db.Customers.Remove(customer);
            this._db.SaveChanges();
            } catch (Exception) {

                throw;
            }
        }
    }
}
