let Inputname = document.querySelector(".Inputname")
let InputDescription = document.querySelector(".InputDescription")
let allpost = document.querySelector(".allpost")
let Inputbtn = document.querySelector(".Inputbtn")

// ================================

let arr = [];
function display() {
  arr.map(item => {
  allpost.innerHTML = ` <div class="col-lg-3">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                        <button type="button" class="btn btn-primary">Primary</button>
                        <button type="button" class="btn btn-success">Success</button>
                    </div>
                </div>
            </div>`
})
}
Inputbtn.addEventListener("click", function () {
  arr.push({
    name : Inputname.value,
    description: InputDescription.value,
  });
   display()
});