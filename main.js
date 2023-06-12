//EOPN

//Button Click Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  console.log("WOW");
  let value = document.getElementById("pass-in").value;

  //Process

  if (value.length >= 13) {
    document.getElementById(
      "info"
    ).innerHTML = ` <p>Strength: <b>Very Strong</b> </p>
      `;
  } else if (value.length >= 9) {
    document.getElementById(
      "info"
    ).innerHTML = ` <p>Strength: <b>Strong</b> </p>
      `;
  } else if (value.length >= 5) {
    document.getElementById("info").innerHTML = ` <p>Strength: <b>Okay</b> </p>
      `;
  } else if (value.length < 5 && value.length >= 1) {
    document.getElementById("info").innerHTML = ` <p>Strength: <b>Weak</b> </p>
      `;
  } else {
    document.getElementById(
      "info"
    ).innerHTML = ` <p>Strength: Put in a password </p>
      `;
  }
}
