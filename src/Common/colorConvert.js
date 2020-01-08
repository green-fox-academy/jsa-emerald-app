function hexToFadeRgb(hex) {
  // TODO: consider short hex situation
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: Math.min(255, Math.floor(parseInt(result[1], 16) * 2)),
    g: Math.min(255, Math.floor(parseInt(result[2], 16) * 1.4)),
    b: Math.min(255, Math.floor(parseInt(result[3], 16) * 1.3)),
  } : null;
}

function componentToHex(c) {
  const hex = c.toString(16);
  return hex.padStart(2, '0');
}

function rgbToHex(r, g, b) {
  return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
}

function fadeHex(hex) {
  const { r, g, b } = hexToFadeRgb(hex);
  return rgbToHex(r, g, b);
}

export default fadeHex;
