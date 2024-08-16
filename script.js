let num = 0;
const maxNum = 150;
let history = [];
let future = [];

const numberDisplay = document.getElementById('numberDisplay');
const progressBar = document.getElementById('progressBar');
const subtractBtn = document.getElementById('subtractBtn');
const addBtn = document.getElementById('addBtn');
const undoBtn = document.getElementById('undoBtn');
const redoBtn = document.getElementById('redoBtn');

function updateUI() {
  numberDisplay.textContent = num;
  const progressPercentage = (num / maxNum) * 100;
  progressBar.style.width = `${progressPercentage}%`;
  undoBtn.disabled = history.length === 0;
  redoBtn.disabled = future.length === 0;
}

function handleAdd() {
  if (num < maxNum) {
    history.push(num);
    future = [];
    num++;
    updateUI();
  }
}

function handleSubtract() {
  if (num > 0) {
    history.push(num);
    future = [];
    num--;
    updateUI();
  }
}

function handleUndo() {
  if (history.length > 0) {
    future.unshift(num);
    num = history.pop();
    updateUI();
  }
}

function handleRedo() {
  if (future.length > 0) {
    history.push(num);
    num = future.shift();
    updateUI();
  }
}

subtractBtn.addEventListener('click', handleSubtract);
addBtn.addEventListener('click', handleAdd);
undoBtn.addEventListener('click', handleUndo);
redoBtn.addEventListener('click', handleRedo);

updateUI();  // Initialize UI
