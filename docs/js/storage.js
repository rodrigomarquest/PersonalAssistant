export const save = (key, data) =>
  localStorage.setItem(key, JSON.stringify(data));

export const load = (key, fallback = []) => {
  const raw = localStorage.getItem(key);
  return raw ? JSON.parse(raw) : fallback;
};