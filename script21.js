const persons = [
    {firstname : "Malcom", lastname: "Reynolds"},
    {firstname : "Kaylee", lastname: "Frye"},
    {firstname : "Jayne", lastname: "Cobb"}
  ];
  
  document.getElementById("demo").innerHTML = persons.map(getFullName);
  
  function getFullName(item) {
    return [item.firstname,item.lastname].join(" ");
  }