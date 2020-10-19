const moment = require("moment");
const sleep = require("system-sleep");
const openLink = require("opn");

// Lista de Tarefas
var taskList = [];

// Tarefa
const task1 = {
  link: "https://trybe.zoom.us/j/99835515888",
  job: {
    hour: 11,
    minute: 13,
    seconds: 0,
  },
  done: false,
};

// Adiciona Tarefa na Lista
taskList.push(task1);

// testa se já passou do horário
const taskCheck = (task = {}) => {
  let now = moment();
  let taskTime = moment();
  taskTime.hour(task.job.hour);
  taskTime.minute(task.job.minute);
  taskTime.seconds(task.job.seconds);
  const deltaTime = taskTime.diff(now);

  if (deltaTime <= 0) {
    return true;
  }
  return false;
};

// Teste
console.log(taskCheck(taskList[0]));

// Função sem uso no momento
const logTime = () => {
  const now = moment();
  const arr = [now.get("hour"), now.get("minute"), now.get("seconds")];
  console.log(arr[0] + ":" + arr[1] + ":" + arr[2]);
};

// Serviço
const start = (tickDelay = 5000) => {
  console.log("PID:" + process.pid)
  while (true) {
    taskList.forEach((task) => {
      if (task.done == false) {
        if (taskCheck(task)) {
          task.done = true;
          openLink(task.link);
        }
      }
    });
    sleep(tickDelay);
  }
};

//Inicia os Serviço
//start()
