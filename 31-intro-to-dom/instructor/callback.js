
function visit_dentist() {
  console.log("Going to the dentist...");
}

let visit_doctor = () => {
  console.log("Going to the doctor...");
}

setTimeout(visit_dentist, 2000);
setTimeout(visit_doctor, 1000);
