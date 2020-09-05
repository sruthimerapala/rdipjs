function display(val) {
  document.getElementById("result").value += val;
}
function solve() {
  let x = document.getElementById("result").value;
  if (x.indexOf("%") === -1 && x.indexOf("X") === -1) {
    if(x.indexOf("-")===0)
    {
     let y = Math.abs(x);
     document.getElementById("result").value = y;
    }
    else{
    let y = eval(x);
    document.getElementById("result").value = y;
    }
    
  } else if (x.indexOf("%") !== -1) {
    let left = x.substring(0, x.indexOf("%"));
    let right = x.substring(x.indexOf("%") + 1, x.length);
    let y = eval("(" + right + "/100)*" + left);
    document.getElementById("result").value = y;
  } else {
    let a = x.substring(x.indexOf("X") + 1, x.length);
    console.log(a);
    let y = Number(Math.round(Math.sqrt(a) + "e" + 3) + "e-" + 3);
    document.getElementById("result").value = y;
  }
}
function clr() {
  document.getElementById("result").value = "";
}
function validate() {
  let name = document.forms["myForm"]["name"].value;
  let num = document.forms["myForm"]["num"].value;
  let mail = document.forms["myForm"]["mail"].value;
  let bool1 = false;
  let bool2 = false;
  let bool3 = false;

  document.getElementById("name-msg").style.color = "red";
  document.getElementById("num-msg").style.color = "red";
  document.getElementById("mail-msg").style.color = "red";
  if (name) {
    if (name[0].match(/[0-9]/g)) {
      document.getElementById("name-box").style.borderColor = "red";
      document.getElementById("name-msg").innerHTML =
        "Name should not start with number.";
    } else {
      bool1 = true;
      document.getElementById("name-box").style.borderColor = "black";
      document.getElementById("name-msg").innerHTML = "";
    }
  }
  if (num) {
    if (num.match(/[^0-9]/g)) {
      document.getElementById("number-box").style.borderColor = "red";
      document.getElementById("num-msg").innerHTML =
        "Phone Number can only contain numerics.";
    } else {
      document.getElementById("number-box").style.borderColor = "black";
      document.getElementById("num-msg").innerHTML = "";
    }
    if (num.length > 10) {
      document.getElementById("number-box").style.borderColor = "red";
      document.getElementById("num-msg").innerHTML =
        "Phone Number can only be 10 digits.";
    } else if (num.length == 10) {
      bool2 = true;
      document.getElementById("number-box").style.borderColor = "black";
      document.getElementById("num-msg").innerHTML = "";
    }
  }
  if (mail) {
    if (mail.indexOf("@") == -1) {
      document.getElementById("email-box").style.borderColor = "red";
      document.getElementById("mail-msg").innerHTML = "Email should have '@'!";
    } else {
      if (mail.indexOf(".") == -1) {
        document.getElementById("email-box").style.borderColor = "red";
        document.getElementById("mail-msg").innerHTML =
          "Email should have '.'!";
      } else {
        if (mail.lastIndexOf(".") < mail.indexOf("@")) {
          console.log(mail.indexOf(".") < mail.indexOf("@"));
          console.log(mail.indexOf("."));
          console.log(mail.indexOf("@"));
          document.getElementById("email-box").style.borderColor = "red";
          document.getElementById("mail-msg").innerHTML =
            "Email should have '.' after '@'!";
        } else {
          bool3 = true;
          document.getElementById("email-box").style.borderColor = "black";
          document.getElementById("mail-msg").innerHTML = "";
        }
      }
    }
  }
  if (bool1 && bool2 && bool3)
    document.getElementById("submit").disabled = false;
}
function submitted() {
  alert("Submitted successfully!");
  document.getElementById("name-box").value = "";
  document.getElementById("number-box").value = "";
  document.getElementById("email-box").value = "";
}

function validatePalindrome() {
  let x = document.getElementById("palindrome").value;
  if (x) {
    x = x.toLowerCase();
    if (x.split("").join() === x.split("").reverse().join()) {
      alert("Given string is a palindrome!");
    } else {
      alert("Given string is not a palindrome!");
    }
  } else {
    alert("Please input string!");
  }
}

function validateAnagram() {
  let a = document.getElementById("anagramString").value;
  let b = document.getElementById("anagramWord").value;
  if (!a && !b) {
    alert("Invalid input!");
    return;
  }
  let strs = a.split("");
  let word = b.split("");
  let count1 = word.length;
  let count2 = 0;
  for (let x in strs) {
    if (strs[x] !== " ") {
      count2 = count2 + 1;
      if (word.indexOf(strs[x]) == -1) {
        alert("Not Anagram!");
        return;
      } else {
        word.splice(word.indexOf(strs[x]), 1);
      }
    }
  }
  if (count1 === count2) {
    alert("Anagram!");
  }
}
function gamevalidation(){
  var x =Math.floor(Math.random() * 1000);
  var y=Math.floor(Math.random() * 1000);
  var m = x%3;
  var n = y%3;
  if(m === 0 && n === 1 || m===1 && n===0)
    alert("Human survives"+" "+ x + " " + y);
  else if(m === 0 && n === 2 || m===2 && n===0)
    alert("Human dies" +" "+ x +" " +y);
  else if(m === 1 && n === 2 || m ===2 && n===1)
    alert("cockroach lives" +" "+ x +" " +y);
  else if(m === n)
    alert("TIE"+" "+ x +" " +y);
}