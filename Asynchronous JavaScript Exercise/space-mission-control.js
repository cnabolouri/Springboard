// // Task 1: Declare The Task Array and The Interval ID
// // TODO: Begin by declaring an array to hold your one-time tasks (`oneTimeTasks`) and variables for any interval IDs you'll need for continuous tasks (`monitoringTaskId`).
// const oneTimeTasks = [];
// let monitoringTaskId = null;

// // Task 2: Add One-Time Task Function
// function addOneTimeTask(func, delay) {
//   // TODO: Write a function named `addOneTimeTask` that accepts a function (`func`) and a delay (`delay`) as parameters. This function should add an object containing both parameters into the `oneTimeTasks` array.
//   oneTimeTasks.push({ func, delay });
// }

// // Task 3: Run One-Time Tasks Function
// function runOneTimeTasks() {
//   // TODO: Create a function named `runOneTimeTasks` that iterates over the `oneTimeTasks` array and uses `setTimeout` to schedule each task according to its delay.
//   for (const task of oneTimeTasks) {
//     setTimeout(task.func, task.delay);
//   }
// }

// // Task 4: Start Monitoring Function
// function startMonitoring() {
//   // TODO: Write a function named `startMonitoring` that uses `setInterval` to simulate continuous monitoring. This function should print a message every few seconds and store the interval ID in `monitoringTaskId`.
//   console.log("Monitoring started...");
//   monitoringTaskId = setInterval(() => {
//     console.log("Monitoring systems... All systems nominal.");
//   }, 2000);
// }

// // Task 5: Stop Monitoring Function
// function stopMonitoring() {
//   // TODO: Implement a function named `stopMonitoring` that stops the continuous monitoring by using `clearInterval` on `monitoringTaskId`.
//   clearInterval(monitoringTaskId);
//   console.log("Monitoring stopped.");
// }

// // Task 6: Start Countdown Function
// function startCountdown(duration) {
//   // TODO: Create a function named `startCountdown` that takes a duration parameter. Use `setInterval` to decrease the countdown every second and print the remaining time. Use `clearInterval` to stop the countdown when it reaches zero, printing a "Liftoff!" message.
//   let timeLeft = duration;

//   const countdownId = setInterval(() => {
//     if (timeLeft > 0) {
//       console.log(`T-minus ${timeLeft} seconds`);
//       timeLeft--;
//     } else {
//       console.log("Liftoff!");
//       clearInterval(countdownId);
//     }
//   }, 1000);
// }

// // Task 7: Schedule Pre-Launch Activities and Launch
// function scheduleMission() {
//   // TODO: Use the functions you've created to schedule the pre-launch system check, start and stop monitoring, and execute the countdown. Make sure to adjust the delays appropriately to simulate a real mission timeline.
//   addOneTimeTask(() => {
//     console.log("Pre-launch system check initiated.");
//   }, 1000);

//   addOneTimeTask(() => {
//     startMonitoring();
//   }, 2000);

//   addOneTimeTask(() => {
//     console.log("Fuel systems check complete.");
//   }, 4000);

//   addOneTimeTask(() => {
//     console.log("Navigation systems aligned.");
//   }, 6000);

//   addOneTimeTask(() => {
//     stopMonitoring();
//   }, 8000);

//   addOneTimeTask(() => {
//     startCountdown(5);
//   }, 9000);

//   runOneTimeTasks();
// }

// scheduleMission(); // Starts the mission.

// Task 1: Declare The Task Array and The Interval ID
const oneTimeTasks = [];
let monitoringTaskId = null;

// UI elements
const missionStatus = document.getElementById("mission-status");
const monitoringStatus = document.getElementById("monitoring-status");
const countdownDisplay = document.getElementById("countdown-display");
const missionLog = document.getElementById("mission-log");
const rocket = document.getElementById("rocket");
const flame = document.getElementById("flame");
const smoke = document.getElementById("smoke");
const launchBtn = document.getElementById("launch-btn");

// Utility: log to UI + console
function addLog(message) {
  console.log(message);
  const li = document.createElement("li");
  li.innerText = message;
  missionLog.appendChild(li);
  missionLog.scrollTop = missionLog.scrollHeight;
}

function updateMissionStatus(text) {
  missionStatus.innerText = text;
}

function setMonitoringState(isActive) {
  if (isActive) {
    monitoringStatus.innerText = "Active";
    monitoringStatus.classList.add("monitoring-live");
    monitoringStatus.classList.remove("monitoring-off");
  } else {
    monitoringStatus.innerText = "Offline";
    monitoringStatus.classList.add("monitoring-off");
    monitoringStatus.classList.remove("monitoring-live");
  }
}

// Task 2: Add One-Time Task Function
function addOneTimeTask(func, delay) {
  oneTimeTasks.push({ func, delay });
}

// Task 3: Run One-Time Tasks Function
function runOneTimeTasks() {
  for (const task of oneTimeTasks) {
    setTimeout(task.func, task.delay);
  }
}

// Task 4: Start Monitoring Function
function startMonitoring() {
  updateMissionStatus("Monitoring mission systems...");
  setMonitoringState(true);
  addLog("Monitoring started.");

  monitoringTaskId = setInterval(() => {
    addLog("Monitoring systems... All systems nominal.");
  }, 2000);
}

// Task 5: Stop Monitoring Function
function stopMonitoring() {
  clearInterval(monitoringTaskId);
  monitoringTaskId = null;
  setMonitoringState(false);
  addLog("Monitoring stopped.");
}

// Task 6: Start Countdown Function
function startCountdown(duration) {
  let timeLeft = duration;
  updateMissionStatus("Countdown in progress...");

  countdownDisplay.innerText = `T-${timeLeft}`;

  const countdownId = setInterval(() => {
    if (timeLeft > 0) {
      addLog(`T-minus ${timeLeft} seconds`);
      countdownDisplay.innerText = `T-${timeLeft}`;
      timeLeft--;
    } else {
      clearInterval(countdownId);
      countdownDisplay.innerText = "LIFTOFF!";
      updateMissionStatus("Launch successful!");
      addLog("Liftoff!");

      flame.classList.remove("hidden");
      smoke.classList.remove("hidden");
      rocket.classList.add("launching");
    }
  }, 1000);
}

// Task 7: Schedule Pre-Launch Activities and Launch
function scheduleMission() {
  oneTimeTasks.length = 0;
  missionLog.innerHTML = "";
  rocket.classList.remove("launching");
  flame.classList.add("hidden");
  smoke.classList.add("hidden");
  countdownDisplay.innerText = "--";
  updateMissionStatus("Mission sequence initiated...");
  setMonitoringState(false);

  addOneTimeTask(() => {
    addLog("Pre-launch system check initiated.");
    updateMissionStatus("Running pre-launch checks...");
  }, 1000);

  addOneTimeTask(() => {
    startMonitoring();
  }, 2000);

  addOneTimeTask(() => {
    addLog("Fuel systems check complete.");
  }, 4000);

  addOneTimeTask(() => {
    addLog("Navigation systems aligned.");
  }, 6000);

  addOneTimeTask(() => {
    stopMonitoring();
  }, 8000);

  addOneTimeTask(() => {
    addLog("Countdown started.");
    startCountdown(5);
  }, 9000);

  runOneTimeTasks();
}

// Task 8: Execute Your Script
launchBtn.addEventListener("click", () => {
  launchBtn.disabled = true;
  scheduleMission();

  // Re-enable after mission finishes
  setTimeout(() => {
    launchBtn.disabled = false;
  }, 16000);
});
