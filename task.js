class Emp {
  Employees = [];

  constructor(...arg) {
    for (let i of arg) {
      let p = JSON.parse(i);
      this.Employees = this.Employees.concat(p);
      // console.log(this.Employees);
    }
  }

  sortFn() {
    console.log("Combined array :", this.Employees);
    console.log("Descending order of people by age :");

    var sort = this.Employees.sort(function (a, b) {
      return new Date(a.DOB) - new Date(b.DOB);
    });
    console.log(sort);
  }

  eighteenFn() {
    console.log("User_names of people whose age greater than 18 yrs  :");

    let filter = this.Employees.filter((a) => {
      var today = new Date();
      var birthDate = new Date(a.DOB);
      var age = today.getFullYear() - birthDate.getFullYear();
      return age > 18;
    });
    for (let i of filter) {
      console.log(i.user_name);
    }
  }
}

let males = [
  {
    name: "Jishnu",
    last_name: "Vishwanath",
    user_name: "neolivz",
    DOB: "20-JAN-1984",
    Place: "Thodupuzha",
  },
  {
    name: "Binoy",
    last_name: "John",
    user_name: "carnage",
    DOB: "07-APR-1997",
    Place: "Ernakulam",
  },
  {
    name: "Graph",
    last_name: "Overflow",
    user_name: "graphOverflow",
    DOB: "16-DEC-1993",
    Place: "Ernakulam",
  },
  {
    name: "Shiniyas",
    last_name: "Khan",
    user_name: "shan",
    DOB: "17-NOV-2001",
    Place: "Ernakulam",
  },
];

let females = [
  {
    name: "Gauri",
    last_name: "Kumar",
    user_name: "lilwolf",
    DOB: "18-AUG-1994",
    Place: "Alappuzha",
  },
  {
    name: "Smita",
    last_name: "Sen",
    user_name: "roho",
    DOB: "02-JAN-2000",
    Place: "Ernakulam",
  },
];
let females2 = [
  {
    name: "Smita",
    last_name: "Sen",
    user_name: "roho",
    DOB: "02-JAN-2000",
    Place: "Ernakulam",
  },
];

let m = JSON.stringify(males);
let f = JSON.stringify(females);
let g = JSON.stringify(females2);
let obj = new Emp(m, f, g);
obj.sortFn();
obj.eighteenFn();
