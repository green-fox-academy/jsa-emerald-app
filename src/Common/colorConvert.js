function hexToFadeRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  const thread = 1.4;
  return result ? {
    r: Math.min(255, Math.floor(parseInt(result[1], 16) * 2)),
    g: Math.min(255, Math.floor(parseInt(result[2], 16) * thread)),
    b: Math.min(255, Math.floor(parseInt(result[3], 16) * 1.3)),
  } : null;
}

function componentToHex(c) {
  const hex = c.toString(16);
  return hex.length === 1 ? `0${hex}` : hex;
}

function rgbToHex(r, g, b) {
  return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
}

function fadeHex(hex) {
  const rgb = hexToFadeRgb(hex);
  return rgbToHex(rgb.r, rgb.g, rgb.b);
}

export default fadeHex;
