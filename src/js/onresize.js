export default function (f) {
  let resizeTimer = 0;
  window.addEventListener('resize', () => {
    if (resizeTimer) {
      clearTimeout(resizeTimer);
    }
    resizeTimer = setTimeout(f(), 200);
  });
}
