const storyElement = document.getElementById("story");
const choicesElement = document.getElementById("choices");

//story nodes and structures (ads application !!)
const storyNodes = {
  start: {
    text: "You sit in your room at the university. Before you lies a letter you're writing to Clara, and Coppola's telescope.",
    choices: [
      { text: "Continue writing your letter", next: "continueWriting" },
      { text: "Pick up the telescope", next: "pickUp" }
    ]
  },
  continueWriting: {
    text: "You continue, but your mind is foggy and your writing shaky. Your mind keeps drifting to the telescope.",
    choices: [
      { text: "Pick up the telescope", next: "pickUp" },
      { text: "Adamantly keep writing", next: "keptWriting" }
    ]
  },
  pickUp: {
    text: "You try to finish writing your letter, but one quick glance through the window convinces you that Olympia will still be there. You pick up your new telescope and aim it out the window. She sits still, silent, perfect. Later, at a play, her father, a professor of yours, officially introduces you two. You: ",
    choices: [
      { text: "Speak only to Olympia", next: "speakOnly" },
      { text: "Compare Olympia and Clara", next: "Clara" }
    ]
  },
  Clara: {
    text: "You rest peacefully and feel safe. You survived your adventure!",
    choices: [{ text: "Play again", next: "start" }]
  },
  SpeakOnly: {
    text: "Her predictable responses soothe you, and you become wholly infatuated with her. All memories of Clara, your best friend, your mother, all vanish from memory and all that exists is her. You become set on marrying her. The night ends, however, and you head back alone to your room. Suddenly, you hear a commotion in a small room to your left.",
    choices: [
      { text: "Investigate the commotion", next: "Investigate" },
      { text: "Keep walking", next: "Keep walking" }
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
