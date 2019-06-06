const floodFill = (image, sr, sc, newColor, initial = image[sr][sc]) => {
  if (image[sr][sc] === newColor) return image;

  image[sr][sc] = newColor;

  if (sr !== 0 && image[sr - 1][sc] === initial) floodFill(image, sr - 1, sc, newColor, initial);
  if (sr !== image.length - 1 && image[sr + 1][sc] === initial) floodFill(image, sr + 1, sc, newColor, initial);
  if (sc !== 0 && image[sr][sc - 1] === initial) floodFill(image, sr, sc - 1, newColor, initial);
  if (sc !== image[0].length -1 && image[sr][sc + 1] === initial) floodFill(image, sr, sc + 1, newColor, initial);

  return image;
};

console.log(floodFill([[1, 1, 1], [1, 1, 0], [1, 0, 1]], 1, 1, 2)); // [[2, 2, 2], [2, 2, 0], [2, 0, 1]]
