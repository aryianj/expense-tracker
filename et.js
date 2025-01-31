var counter = 0; // expense counter to keep track of expenses

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("btn").addEventListener("click", function(event) {
        event.preventDefault();
        setBudget();
    });
    document.getElementById("e-btn").addEventListener("click", function(event) {
        event.preventDefault();
        counter++; 
        addExpense();
    });
    document.getElementById("c-btn").addEventListener("click", function(event) {
        event.preventDefault();
        addCategory();
    });
});
function setBudget() {
    var bAmount = parseFloat(document.getElementById("b-amount").value);
    bAmount = bAmount.toFixed(2);

    var budget = document.getElementById("budget-available");
    budget.setAttribute("aria-valuemax", bAmount);
    budget.innerHTML = '$' + bAmount + ' Available';
}

function addExpense() {
    var desc = document.getElementById("desc").value;
    var eAmount = document.getElementById("e-amount").value;
    var category = document.getElementById("ctg");
    category = category.options[category.selectedIndex].textContent;
    var date  = document.getElementById("date").value;
    var rec = document.getElementById("rec").checked;

    if (rec == true) {
        rec = "Yes"
    } else {
        rec = "No"
    }
   
    var vals = [desc, eAmount, category, date, rec];

    if (counter <= 15) {
        var tr = document.getElementById(String(counter));
        var tds = tr.children;
    
        for (let i = 0; i < vals.length; i++) {
           tds[i].innerHTML = vals[i];
        }
    } else {
        var tr = document.createElement("tr");
        tr.id = String(counter);
        for (let i = 0; i < vals.length; i++) {
            var td = document.createElement("td");
            td.textContent = vals[i];
            tr.appendChild(td);
        }  
        document.getElementById("expenses-list").appendChild(tr);
    }
}

function addCategory() {
        var ctgName = document.getElementById("ctgName").value;
        var selectElement = document.getElementById("ctg");
        var newOption = document.createElement("option");
        newOption.value = newCategory; 
        newOption.textContent = newCategory; // Set new category as the text
        selectElement.appendChild(newOption); // Add it to the dropdown
    
        selectElement.value = newCategory;
}