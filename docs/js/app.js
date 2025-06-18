import {renderDashboard} from './dashboard.js';
import {renderTasks}     from './tasks.js';
import {renderBudget}    from './budget.js';
import {renderNotes}     from './notes.js';

const routes = {
  dashboard: renderDashboard,
  tasks:     renderTasks,
  budget:    renderBudget,
  notes:     renderNotes
};

const app = document.getElementById('app');
function navigate(route = 'dashboard') {
  window.location.hash = route;
  app.innerHTML = '';
  routes[route](app);
}

window.addEventListener('hashchange', () => {
  navigate(location.hash.replace('#', '') || 'dashboard');
});
document.querySelectorAll('nav button[data-route]')
  .forEach(btn => btn.onclick = () => navigate(btn.dataset.route));

navigate(); // primeira carga

// ---- Theme toggle (enhancement A) ----
const THEMES = ['light', 'dark', 'ocean'];
let themeIndex = THEMES.indexOf(localStorage.getItem('theme')) || 0;
document.body.dataset.theme = THEMES[themeIndex];

document.getElementById('theme-toggle').onclick = () => {
  themeIndex = (themeIndex + 1) % THEMES.length;
  const th = THEMES[themeIndex];
  document.body.dataset.theme = th;
  localStorage.setItem('theme', th);
};