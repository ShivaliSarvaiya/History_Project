const storyElement = document.getElementById("story");
const choicesElement = document.getElementById("choices");

//story nodes and structures (ads application !!)
const storyNodes = {
  start: {
    text: "You wake up in a dark forest. Two paths lie ahead...",
    choices: [
      { text: "Take the left path", next: "leftPath" },
      { text: "Take the right path", next: "rightPath" }
    ]
  },
  leftPath: {
    text: "You walk into a peaceful clearing filled with sunlight and flowers.",
    choices: [
      { text: "Sit and rest", next: "rest" },
      { text: "Keep exploring", next: "explore" }
    ]
  },
  rightPath: {
    text: "The forest grows darker. You hear strange noises around you.",
    choices: [
      { text: "Run back!", next: "start" },
      { text: "Keep going", next: "monster" }
    ]
  },
  rest: {
    text: "You rest peacefully and feel safe. You survived your adventure!",
    choices: [{ text: "Play again", next: "start" }]
  },
  explore: {
    text: "You discover a hidden village. The people welcome you warmly!",
    choices: [
      { text: "Stay with them", next: "happyEnding" },
      { text: "Go back to the forest", next: "start" }
    ]
  },
  monster: {
    text: "A wild creature appears! You try to run, but it’s too fast!",
    choices: [
      { text: "Fight back", next: "fight" },
      { text: "Surrender", next: "caught" }
    ]
  },
  fight: {
    text: "You bravely fight the monster and escape! You’re a hero!",
    choices: [{ text: "Play again", next: "start" }]
  },
  caught: {
    text: "The monster captures you... Game Over.",
    choices: [{ text: "Try again", next: "start" }]
  },
  happyEnding: {
    text: "You live happily ever after with the villagers. The End!",
    choices: [{ text: "Restart", next: "start" }]
  }
};

function resetStory() {
  storyElement.innerHTML = "";
}

function showStory(nodeKey) {
  if (nodeKey === "start") {
    resetStory();
  }

  const node = storyNodes[nodeKey];

  storyElement.innerHTML += `<p>${node.text}</p>`;

  //autoscrolllll
  storyElement.scrollTop = storyElement.scrollHeight;

  //clear old text
  choicesElement.innerHTML = "";

  //new options !!
  node.choices.forEach(choice => {
    const button = document.createElement("button");
    button.textContent = choice.text;
    button.classList.add("choice-btn");
    button.addEventListener("click", () => showStory(choice.next));
    choicesElement.appendChild(button);
  });
}

// Start the story the first time
showStory("start");
