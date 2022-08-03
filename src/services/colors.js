const colors = [
  "#264653",
  "#2A9D8F",
  "#E9C46A",
  "#F4A261",
  "#E76F51",
  "#9b5de5",
  "#f15bb5",
  "#fee440",
  "#00bbf9",
  "#00f5d4",
];

function stringToHash(string) {
  var hash = 0;

  if (string.length == 0) return hash;

  for (let i = 0; i < string.length; i++) {
    let char = string.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }

  return hash;
}

function mod(n, m) {
  return ((n % m) + m) % m;
}

export function getColor(string) {
  const index = mod(stringToHash(string), colors.length);
  return colors[index];
}
