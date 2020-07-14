/*
 * el: <span><img></span>
 */
export default function (el) {
  const img = el.querySelector('img');

  if (img === null) {
    return false;
  }

  let w, h, left, top;

  const wrapperW = el.clientWidth;
  const wrapperH = el.clientHeight;
  const wrapperRatio = wrapperH / wrapperW;

  const imgW = img.clientWidth;
  const imgH = img.clientHeight;
  const imgRatio = imgH / imgW;

  if (wrapperRatio < imgRatio) {
    w = wrapperW;
    h = wrapperW * imgRatio;
    left = 0;
    top = (wrapperH - h) / 2;
  }
  else if (wrapperRatio > imgRatio) {
    h = wrapperH;
    w = h / imgRatio;
    left = (wrapperW - w) / 2;
    top = 0;
  }
  else {
    w = wrapperW;
    h = wrapperH;
    left = 0;
    top = 0;
  }

  img.style.width = `${w}px`;
  img.style.height = `${h}px`;
  img.style.left = `${left}px`;
  img.style.top = `${top}px`;

  return true;
};
