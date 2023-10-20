let containerAlarm = document.querySelector(".container-alarm");
let displayDate = document.getElementById("date");

function actualiseTimer() {
  let date = new Date();
  let heure = date.getHours();
  let minute = date.getMinutes();
  let seconde = date.getSeconds();

  displayDate.innerHTML = heure + ":" + minute + ":" + seconde;
}

setInterval(actualiseTimer, 1000);

////////////////Event ADD || DELETE Alarm//////////////////////////
let heureInput = document.getElementById("heure");
let minuteInput = document.getElementById("minute");
let containerAddAlarm = document.querySelector(".container-add-alarm");
let btnAddAlarm = document.getElementById("add-alarm");
let btnClearAlarm = document.getElementById("clear-alarm");
let errorMsg = document.querySelector(".error");
let popNewAlarm = "";

function deleteAlarm() {
  if (containerAddAlarm.childElementCount >= 1) {
    let btnDeleteAlarm = document.getElementById("trash");
    btnDeleteAlarm.addEventListener("click", (e) => {
      btnDeleteAlarm.parentElement.parentElement.remove();
    });
  }
}

function AddAlarm() {
  popNewAlarm = document.createElement("div");
  popNewAlarm.setAttribute("class", "container-add-alarm-infos");

  if (heureInput.value == "" || minuteInput.value == "") {
    errorMsg.innerHTML = "Veuillez rentrer une heure valide";
  } else {
    errorMsg.innerHTML = "";
    popNewAlarm.innerHTML = `                              
                          <p>${heureInput.value} : ${minuteInput.value} </p>
                          <div class="container-add-alarm-logo">
                              <input type="checkbox" name="" id="">
                              <i id="trash" class=" fa-solid fa-trash"></i>
                          </div>`;

    containerAddAlarm.appendChild(popNewAlarm);
  }
  deleteAlarm();
  heureInput.value = "";
  minuteInput.value = "";
}

function deleteAllAlarm() {
  containerAddAlarm.innerHTML = "";
}

btnAddAlarm.addEventListener("click", AddAlarm, deleteAlarm);
btnClearAlarm.addEventListener("click", deleteAllAlarm);

///////////////////////////Chronomètre///////////////////////////////

let start = document.getElementById("start");
let pause = document.getElementById("pause");
let reset = document.getElementById("stop");
let timerChrono = document.getElementById("timer-chrono")[0];

let hrs = 0;
let min = 0;
let sec = 0;
let t;

function tick() {
  sec++;
  if (sec >= 60) {
    min++;
    if (min >= 60) {
      min = 0;
      hrs++;
    }
  }
}

function affichage() {
  tick();
  timerChrono.textContent =
    (hrs > 9 ? hrs : "0" + hrs) +
    ":" +
    (min > 9 ? min : "0" + min) +
    ":" +
    (sec > 9 ? sec : "0" + sec);
  timer();
}

function timer() {
  t = setTimeout(affichage, 1000);
}

timer();

start.addEventListener("click", timer);
start.addEventListener("click", clearTimeout(t));
//start.addEventListener("click", reset);
