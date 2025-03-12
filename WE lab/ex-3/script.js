document.querySelector(".form").addEventListener("submit", function (event) {
  var count = 0;
  let name = document.querySelector(".name").value;
  let mail = document.querySelector(".mail").value;
  let age = document.querySelector(".age").value;
  let number = document.querySelector(".number").value;
  let weight = document.querySelector(".weight").value;
  if (name == "" || mail == "" || age == "" || number == "" || weight == "") {
    alert("Fill all the credentials properly");
    event.preventDefault();
    count++;
  }
  if (name.length < 3) {
    alert("Enter a valid name.");
    event.preventDefault();
    count++;
  }
  if (!mail.includes("@gmail.com")) {
    alert("Enter a valid Email address");
    event.preventDefault();
    count++;
  }
  if (age < 18 && age > 0) {
    alert(
      "....You are not eligible to donate as your age is not correct for donating...."
    );
    event.preventDefault();
    count++;
  }
  if (age < 0) {
    alert("Please enter a valid age");
    event.preventDefault();
    count++;
  }
  if (number.length != 10) {
    alert("Check your mobile number");
    event.preventDefault();
    count++;
  }
  if (weight < 50) {
    alert("You are under weight...Gain weight and donate");
    event.preventDefault();
    count++;
  }
  if (count == 0) {
    alert(
      "Thank You for donating ......Your form has been submitted successfully"
    );
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }
  setTimeout(() => {
    window.location.reload();
  }, 1000);
});
