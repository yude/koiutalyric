import data from "./koi.txt"

export async function getKoi() {
  var lines = data.split("\n");

  return lines[Math.floor(Math.random() * lines.length)]
}
