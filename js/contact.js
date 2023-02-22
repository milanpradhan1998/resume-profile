function sendEmail() {
  var name = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var mobile = document.getElementById("mobile").value;
  var msg = document.getElementById("text-area").value;
  var content = `Name:${name}<br>
    email:${email},<br>
    mobile:${mobile},<br>
    msg:${msg}<br>
    `;
  console.log(name, email, mobile, msg);
  if (name != "" && email != "" && mobile != "" && msg != "") {
    Email.send({
      Host: "smtp.elasticemail.com",
      // Host: "smtp.gmail.com",
      Username: "milanpradhan1998@gmail.com",
      Password: "C8AF4D25021BE54BC51D71FF685166F77FA8",
      // Password: "milan@768028",
      To: "milanpradhan.26.11.1998@gmail.com", //which id you want to send the mail
      From: "milanpradhan1998@gmail.com", //this email which is register with elastic mail
      Subject: "This is the subject",
      Body: content,
    }).then((message) => alert(message));
  } else {
    alert("Fill all box.");
  }
}
