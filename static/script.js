function toggleArchs() {
  const secondaryContainer = document.getElementById('secondaryPlatforms');
  const btn = document.querySelector('.more-platforms-btn i');
  const isVisible = secondaryContainer.classList.toggle('visible');

  if (isVisible) {
    btn.classList.remove('fa-caret-down');
    btn.classList.add('fa-caret-up');
  } else {
    btn.classList.remove('fa-caret-up');
    btn.classList.add('fa-caret-down');
  }
}

const END_TIMESTAMP = Date.UTC(2025, 11, 25, 5, 0, 0); 

const units = [
  { id: 'days', label: 'Days', max: 365 },
  { id: 'hours', label: 'Hours', max: 24 },
  { id: 'minutes', label: 'Minutes', max: 60 },
  { id: 'seconds', label: 'Seconds', max: 60 }
];

function createCircle(id) {
  const wrapper = document.getElementById(id);
  wrapper.innerHTML = `
    <svg viewBox="0 0 100 100">
      <circle class="bg" cx="50" cy="50" r="45"/>
      <circle class="fg" cx="50" cy="50" r="45" stroke-dasharray="0 282.74"/>
    </svg>
    <div class="text-val">00</div>
    <div class="text-label">${units.find(u => u.id === id).label}</div>
  `;
}

function updateCircle(id, value, max) {
  const wrapper = document.getElementById(id);
  const circle = wrapper.querySelector('.fg');
  const text = wrapper.querySelector('.text-val');

  const r = 45;
  const circumference = 2 * Math.PI * r;
  const offset = circumference - (value / max) * circumference;

  circle.setAttribute('stroke-dasharray', `${circumference - offset} ${circumference}`);
  text.textContent = value.toString().padStart(2, '0');
}

function updateCountdown() {
  const now = Date.now();
  let diff = Math.max(0, END_TIMESTAMP - now);

  const sec = Math.floor((diff / 1000) % 60);
  const min = Math.floor((diff / 1000 / 60) % 60);
  const hrs = Math.floor((diff / 1000 / 60 / 60) % 24);
  const days = Math.floor(diff / 1000 / 60 / 60 / 24);

  updateCircle('seconds', sec, 60);
  updateCircle('minutes', min, 60);
  updateCircle('hours', hrs, 24);
  updateCircle('days', days, 365);
}

function checkDone(){
  if(Date.now() >= Date.UTC(2025, 11, 25, 5, 0, 0)){
    document.getElementById('download').style.display = "block";
    document.getElementById('countdown-header').style.display = "none";
    document.getElementById('countdown').style.display = "none";
  }else{
    document.getElementById('download').style.display = "none";
    document.getElementById('countdown-header').style.display = "block";
    document.getElementById('countdown').style.display = "flex";
  }
}

function mainLoop(){
  updateCountdown();
  checkDone();
}

units.forEach(u => createCircle(u.id));
setInterval(mainLoop, 1000);
