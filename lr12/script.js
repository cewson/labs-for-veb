let obj1 = {
    name: "Leha",
    age: 25,
    sex: "Male",
    profession: "Engineer",
    isMarried: false,
    
    displayInfo: function() {
      document.write("Привет, незнакомец! Я объект obj1. <br>");
      document.write("Мои свойства:");
      for (var prop in this) {
        if (typeof(this[prop]) !== "function") {
        document.write(prop);
        }
              document.write("<br>");
      }
    }

  };
  obj1.displayInfo();
 
let obj2 = {};
  obj2["name"] = "Nastya";
  obj2.age = 30;
  Object.assign(obj2, { sex: "Female", profession: "Teacher" });
  obj2.isMarried = true;

  document.write("Объект obj2: <br>");
  for (let prop in obj2) {
    document.write(prop + ": " + obj2[prop] + "<br>");
  }

  let Employee = {
    name: "",
    department: "",
    phone: "",
    salary: 0,
  
    // Геттеры
    getName: function() {
        return this.name;
      },
      getDepartment: function() {
        return this.department;
      },
      getPhone: function() {
        return this.phone;
      },
      getSalary: function() {
        return this.salary;
      },
    
      // Сеттеры
      setName: function(Name) {
          this.name = Name;
        },
        setDepartment: function(Department) {
          this.department = Department;
        },
        setPhone: function(Phone) {
          this.phone = Phone;
        },
        setSalary: function(Salary) {
          this.salary = Salary;
        }
  };
  
  // Пример использования геттеров и сеттеров
  Employee.setName("Lera");
  Employee.setDepartment("IT");
  Employee.setPhone("8080");
  Employee.setSalary(5000);
  
  document.write("<br>Имя: " + Employee.getName() + "<br>");
  document.write("Отдел: " + Employee.getDepartment() + "<br>");
  document.write("Телефон: " + Employee.getPhone() + "<br>");
  document.write("Зарплата: " + Employee.getSalary() + "<br>");


  var originalObject = { // Произвольный объект
    name: "John Doe",
    age: 30,
    department: "IT"
  };
  
  // Дублирование объекта с помощью Object.assign()
  var duplicatedObject = Object.assign({}, originalObject);
  
  console.log(originalObject); // Вывод оригинального объекта
  console.log(duplicatedObject); // Вывод дублированного объекта
  