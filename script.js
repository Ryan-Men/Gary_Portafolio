// Script mínimo: año dinámico + toggle tema claro/oscuro
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

const themeToggle = document.getElementById('themeToggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
const STORAGE_KEY = 'theme';

const applyTheme = (mode) => {
  if (mode === 'light') {
    document.documentElement.style.setProperty('--bg', '#f6f6f6');
    document.documentElement.style.setProperty('--surface', '#ffffff');
    document.documentElement.style.setProperty('--text', '#171717');
    document.documentElement.style.setProperty('--muted', '#444');
    document.documentElement.style.setProperty('--border', '#e6e6e6');
  } else {
    document.documentElement.style.setProperty('--bg', '#0f0f0f');
    document.documentElement.style.setProperty('--surface', '#161616');
    document.documentElement.style.setProperty('--text', '#e9e9e9');
    document.documentElement.style.setProperty('--muted', '#b3b3b3');
    document.documentElement.style.setProperty('--border', '#262626');
  }
};

const saved = localStorage.getItem(STORAGE_KEY);
applyTheme(saved ? saved : (prefersDark.matches ? 'dark' : 'dark'));

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const current = localStorage.getItem(STORAGE_KEY) || (prefersDark.matches ? 'dark' : 'dark');
    const next = current === 'dark' ? 'light' : 'dark';
    localStorage.setItem(STORAGE_KEY, next);
    applyTheme(next);
  });
}
