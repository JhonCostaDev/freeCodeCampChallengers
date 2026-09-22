const lunches = [];

function addLunchToEnd(arr, lunch) {
  arr.push(lunch);
  console.log(`${lunch} added to the end of the lunch menu.`);
  return arr;
}

function addLunchToStart(arr, lunch) {
  arr.unshift(lunch);
  console.log(`${lunch} added to the start of the lunch menu.`);
  return arr;
}

function removeLastLunch(arr) {
  if(arr.length === 0) {
      console.log("No lunches to remove.");
      return null;
  }
  
  const removed = arr.pop();
  console.log(`${removed} removed from the end of the lunch menu.`);
  
  return arr;
}

function removeFirstLunch(arr) {
  if(arr.length === 0) {
      console.log("No lunches to remove.");
      return null;
  }
  const removed = arr.shift();
  console.log(`${removed} removed from the start of the lunch menu.`);

  return arr;
}

function getRandomLunch(arr) {
  if(arr.length === 0) {
      console.log("No lunches available.");
      return null;
  }

  const randomIndex = Math.floor(Math.random() * arr.length);

  const randomLunch = arr[randomIndex];

  console.log(`Randomly selected lunch: ${randomLunch}`);

  return arr;
}

function showLunchMenu(arr) {
  if(arr.length === 0) {
      console.log("The menu is empty.");
      return null;
  }
  console.log(`Menu items: ${arr.join(", ")}`);
}
// lunches.push("Tomato");
// lunches.push("Onion");
// lunches.push("Potato");
showLunchMenu(lunches);