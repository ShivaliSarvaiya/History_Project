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
    text: "Olympia's agreeableness and docility create a stark contrast to the way Clara constantly tried to argue back and provide reasonable explanations for your fears of the Sandman. Her opinions feel like a flaw, and you become distant.",
    choices: [{ text: "Play again", next: "start" }]
  },
  speakOnly: {
    text: "Her predictable responses soothe you, and you become wholly infatuated with her. All memories of Clara, your best friend, your mother, all vanish from memory and all that exists is her. You become set on marrying her. The night ends, however, and you head back alone to your room. Suddenly, you hear a commotion in a small room to your left.",
    choices: [
      { text: "Investigate the commotion", next: "investigate" },
      { text: "Keep walking", next: "keepWalking" }
    ]
  },


  keepWalking: {
    text: "You hurry down the hall, not bothering to look back. But the next day, Olympia isn't there. Nor is she the day after. Reality cracks a little around you as you ask Coppola where she went. He laughs cruelly and responds that she was never real, and from his pocket he produces two glass eyes. A shudder rolls through you.",
    choices: [
      { text: "Continue", next: "continue3" }
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
    text: "It's the telescope that you had bought all those weeks ago. You aim it out the balcony, but you catch Clara in it instead!",
    choices: [{ text: "continue", next: "continue" }]
  },
  continue: {
    text: "A spasm shudders through you and your eyes soon begin to roll. The telescope shudders in your hand and grows red-hot before falling to the floor. Fire seems to flash and glow, and you leap high into the air, and, laughing hideously, seize Clara and try to throw her off the tower. Lothario grabs her, and in your madness you throw yourself over the balcony.",
    choices: [{ text: "Restart", next: "start" }]
  },

  investigate: {
    text: "You peer into the room where the noises are coming from, and you see Coppelius and your professor, Olympia's dad, fighting over Olympia.",
    choices: [
      { text: "Intervene", next: "intervene" },
      { text: "Just watch", next: "justWatch" }
    ]
  },

  intervene: {
    text: "You jump into the fray, shouting while trying to save Olympia, but in a flash and a twist, she comes apart in an explosion of wires. Two glass eyes tumble to the ground and you realize all along that she was never real.",
    choices: [
      { text: "Continue", next: "continue1" }
    ]
  },

  justWatch: {
    text: "You freeze in horror as, in one swift motion, Coppelius lunges for Olympia's face and tears out the eyes. They tinkle to the floor, two glass orbs, and you realize with a shock that she was indeed nothing more than a doll. An automaton.",
    choices: [
      { text: "Continue", next: "continue2" }
    ]
  },

  continue1: {
    text: "Overcome by rage at being fooled by a doll, you throw a fit of madness and vow to never trust anyone again through fear of them too, being nothing more than cold metal. You isolate yourself from everyone through your paranoia, and die alone.",
    choices: [
      { text: "Restart", next: "start" }
    ]
  },

  continue2: {
    text: "Your reality shatters as the person who you thought was your true love ended up being nothing more than an unfeeling machine. You live the rest of your life paranoid of making true relationships out of fear that they too, will be machines. You die in fear, alone and broken.",
    choices: [
      { text: "Restart", next: "start" }
    ]
  },

  continue3: {
    text: "Realizing you've been tricked, red hot anger boils through you and you return home with a feverish sweat. As you lay eyes on Clara, you realize that she too, must be a machine as well. You attempt to kill her in a rage of madness, but Lothario rescues her. Coppelius watches from below as you throw yourself over the balcony.",
    choices: [
      { text: "Restart", next: "start" }
    ]
  },

  ignore: {
    text: "Shoving the object deeper into your pocket, you gaze out into the distance and banish all thoughts of Coppola, the telescope, and Olympia from your mind. You look blankly into the distance and the story ends.",
    choices: [
      { text: "Restart", next: "start" }
    ]
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
