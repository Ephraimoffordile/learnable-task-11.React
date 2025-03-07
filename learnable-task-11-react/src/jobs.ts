export interface job{
id : number;
title : string;
company : string;
location : string;
salary : string;
}

export const jobs: job[] = [
  { id: 1, title: "Frontend Developer", company: "Tech Corp", location: "Remote", salary: "₦400,000" },
  { id: 2, title: "Backend Engineer", company: "Dev Solutions", location: "Enugu", salary: "₦300,000" },
  { id: 3, title: "Manager", company: "goody tech", location: "lagos", salary: "₦80,000" },
  { id: 4, title: "Sales Rep", company: "soap factory", location: "Enugu", salary: "₦150,000" },
  { id: 5, title: "Accountant", company: "primelux", location: "Abuja", salary: "₦300,000" },
  { id: 6, title: "Registra", company: "UNN", location: "Enugu", salary: "₦500,000" },
  { id: 7, title: "Chef", company: "luxi eatry", location: "New Haven", salary: "₦600,000" },
  { id: 8, title: "Editor", company: "News Affairs", location: "Enugu", salary: "₦350,000" },
  { id: 9, title: "Data Analyst", company: "Genesys", location: "Remote", salary: "₦700,000" },
  { id: 10, title: "Product Designer", company: "Dev Solutions", location: "Enugu", salary: "₦300,000" },
]