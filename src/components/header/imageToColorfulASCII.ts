export async function imageToColorfulASCII(imageUrl: string) {
  const img = new Image();
  img.crossOrigin = ''; // To avoid CORS issues
  img.src = imageUrl;

  await img.decode();

  const width = img.width;
  const height = img.height;

  const offscreenCanvas = new OffscreenCanvas(width, height);
  const ctx = offscreenCanvas.getContext('2d');
  if (!ctx) return [];
  ctx.drawImage(img, 0, 0, width, height);

  const imageData = ctx.getImageData(0, 0, width, height).data;

  const chars = "⠂⠂⠂⠂⠁⢀⢁⢁⢌⢌⢕⢕⢗⢗⢟⢟⢷⢷⢿⢿"
  const darknesses = [];
  const colors = [];

  for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
          const index = (y * width + x) * 4;
          const r = imageData[index];
          const g = imageData[index + 1];
          const b = imageData[index + 2];
          const a = imageData[index + 3];

          // Skip transparent pixels
          if (a === 0) continue;

          // Calculate the darkness value (0..20)
          const brightness = (r + g + b) / 3;
          const darkness = Math.floor((1 - (brightness / 255)) * 10);

          darknesses.push(chars[darkness*2] + chars[darkness*2+1]);
          colors.push(`#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`);
      }
      darknesses[darknesses.length - 1] += '\n'
  }

  // Log the results in the console
  return [
      darknesses.map(d => `%c${d}`).join(''),
      ...colors.map(color => `background-color: ${color};`)
  ]
}
