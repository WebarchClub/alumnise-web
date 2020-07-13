const form = document.querySelector("#add-cafe-form");
let x = document.getElementById("check1").checked;
let y = document.getElementById("check2").checked;
let z = "";
let a;

function getSelectedCheckboxValues(name) {
    const checkboxes = document.querySelectorAll(
        `input[name="${name}"]:checked`
    );
    let values = [];
    checkboxes.forEach((checkbox) => {
        values.push(checkbox.value);
    });
    return values;
}

const butn = document.querySelector("#myBtn");
butn.addEventListener("click", (event) => {
    const z = getSelectedCheckboxValues("placed");
    a = z[0];
});

// saving data
form.addEventListener("submit", (e) => {
    e.preventDefault();
    db.collection("placement")
        .add({
            approve: false,
            name: form.name.value,
            batch: form.batch.value,
            company: form.company.value,
            position: form.position.value,
            salary: form.salary.value,
            description: form.description.value,
            placed: a,
        })
        .then(function () {
            console.log("Document successfully written!");
        })
        .catch(function (error) {
            console.error("Error writing document: ", error);
        });

    form.name.value = "";
    form.batch.value = "";
    form.company.value = "";
    form.position.value = "";
    form.salary.value = "";
    form.description.value = "";
});
