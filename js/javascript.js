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
      { text: "Ultimately decide Olympia is better", next: "speakOnly" },
      { text: "Abandon Olympia and return to Clara", next: "return" }
    ]
  },
  Clara: {
    text: "Olympia's agreeableness and docileness create a stark contrast to the way Clara constantly tried to argue back and provide reasonable explanations for your fears of the Sandman. Her opinions feel like a flaw, and you become distant.",
    choices: [{ text: "Play again", next: "start" }]
  },
  SpeakOnly: {
    text: "Her predictable responses soothe you, and you become wholly infatuated with her. All memories of Clara, your best friend, your mother, all vanish from memory and all that exists is her. You become set on marrying her. The night ends, however, and you head back alone to your room. Suddenly, you hear a commotion in a small room to your left.",
    choices: [
      { text: "Investigate the commotion", next: "Investigate" },
      { text: "Keep walking", next: "Keep walking" }
    ]
  },
  return: {
    text: "You reconcile with Clara back at your hometown. Together you go to a small plaza and stand on one of the balconies. You feel something in your pocket.",
    choices: [
      { text: "Pull it out", next: "pullOut" },
      { text: "Ignore it", next: "ignore" }
    ]
  },
  keptWriting: {
    text: "You finish your letter, and a couple weeks later you return back to your hometown and reconcile with Clara. As you stand with her over a balcony, you feel something in your pocket.",
    choices: [
      { text: "Pull it out", next: "pullOut" },
      { text: "Ignore it", next: "ignore" }
    ]
  },
  pullOut: {
    text: "It's the telescope that you had bought all those weeks ago! You aim it out the balcony, but you catch Clara in it instead.",
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
