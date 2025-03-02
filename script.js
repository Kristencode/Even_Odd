
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("Check").addEventListener("click", function () {
    let Num = parseInt(document.getElementById("NuM").value);

    if (isNaN(Num)) {
      alert("Not A number");
    } else if (Num % 2 == 0) {
      alert("Even Number");
    } else{
      alert('Odd')
    }
  });
});
