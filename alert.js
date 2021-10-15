console.log("i am here");

// alert("Ma is coming!!!");

const maComing = () => {
  alert("Ammu is coming open the book"); // এতে শুধু ok আসবে alert হিসেবে।
};

const askPicnic = () => {
  const response = confirm("Are you going to picnic?"); // এতে ok এবং cancel নামে দুটি অপশন আসবে একটি পপ আপ এ।
  console.log(response); // click করলে আউটপুট true or false আসবে।
  if (response === true) {
    alert("amake fee ta bkash kore de");
  } else {
    console.log("DGM !!! dure giya mor!!!");
  }
};

const askName = () => {
  const name = prompt("What is your name?"); // prompt confirm এর মতো তবে এতে input লেখা যায়।
  //   if(name)// name যদি true হয়।
  if (name) {
    console.log(name);
  }
};
