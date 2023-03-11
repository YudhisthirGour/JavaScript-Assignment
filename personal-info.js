(function() {

    // Manupulation on header

    var header = document.getElementsByTagName("h1")[0];
    header.style.width = "50%";
    header.style.margin = " auto";
    header.style.marginLeft = " 35%";
    header.style.paddingBottom = "10px";

    
    // create table element
    var table = document.createElement("table");
    var table = document.createElement("table");
    table.style.width = "50%";
    table.style.margin = "0 auto";
    
    // create table header row element
    var headerRow = document.createElement("tr");
    
    // create name header cell
    var nameHeader = document.createElement("th");
    nameHeader.appendChild(document.createTextNode("Name"));
    nameHeader.style.fontWeight = "bold";
    headerRow.appendChild(nameHeader);
    
    // create age header cell
    var ageHeader = document.createElement("th");
    ageHeader.appendChild(document.createTextNode("Age"));
    ageHeader.style.fontWeight = "bold";
    headerRow.appendChild(ageHeader);
    
    // create DOB header cell
    var dobHeader = document.createElement("th");
    dobHeader.appendChild(document.createTextNode("DOB"));
    dobHeader.style.fontWeight = "bold";
    headerRow.appendChild(dobHeader);
    
    // create email header cell
    var emailHeader = document.createElement("th");
    emailHeader.appendChild(document.createTextNode("Email"));
    emailHeader.style.fontWeight = "bold";
    headerRow.appendChild(emailHeader);
    
    // create company header cell
    var companyHeader = document.createElement("th");
    companyHeader.appendChild(document.createTextNode("Company"));
    companyHeader.style.fontWeight = "bold";
    headerRow.appendChild(companyHeader);
    
    // add header row to table
    table.appendChild(headerRow);
    
    var data = [
        {
            Name : "Yudhisthir Singh",
            Age : 21,
            DOB : "03/07/2001",
            Email : "yudhisthir@gmail.com",
            Company : "Gemini Solution"
        },
        {
            Name : "Himanshu Gupta",
            Age : 21,
            DOB : "22/11/2001",
            Email : "himanshu3@gmail.com",
            Company : "American Express"
        },
        {
            Name : "Amogh Pete",
            Age : 21,
            DOB : "05/06/2001",
            Email : "amoghcse@gmail.com",
            Company : "American Express"
        },
        {
            Name : "Yuvraj Singh",
            Age : 21,
            DOB : "25/03/2001",
            Email : "yuvrajsingh@gmail.com",
            Company : "Infosys"
        },
        {
            Name : "Sushil Kumar",
            Age : 21,
            DOB : "20/03/2001",
            Email : "skp@gmail.com",
            Company : "Ziroh Labs"
        }
    ];

    // create table data rows
    for (var i = 0; i < 5; i++) {
      // create table data row element

      let userData = data[i];
      var row = document.createElement("tr");
      
      // create name cell
      var nameCell = document.createElement("td");
      nameCell.appendChild(document.createTextNode(userData.Name));
      nameCell.style.border = "1px solid black";
      nameCell.style.textAlign = "center";
      row.appendChild(nameCell);
      
      // create age cell
      var ageCell = document.createElement("td");
      ageCell.appendChild(document.createTextNode(userData.Age));
      ageCell.style.border = "1px solid black";
      ageCell.style.textAlign = "center";
      row.appendChild(ageCell);
      
      // create DOB cell
      var dobCell = document.createElement("td");
      dobCell.appendChild(document.createTextNode(userData.DOB));
      dobCell.style.border = "1px solid black";
      dobCell.style.textAlign = "center";
      row.appendChild(dobCell);
      
      // create email cell
      var emailCell = document.createElement("td");
      emailCell.appendChild(document.createTextNode(userData.Email));
      emailCell.style.border = "1px solid black";
      emailCell.style.textAlign = "center";
      row.appendChild(emailCell);
      
      // create company cell
      var companyCell = document.createElement("td");
      companyCell.appendChild(document.createTextNode(userData.Company));
      companyCell.style.border = "1px solid black";
      companyCell.style.textAlign = "center";
      row.appendChild(companyCell);
      
      // add row to table
      table.appendChild(row);
    }
    
    // add table to document body
    document.body.appendChild(table);
  })();
  