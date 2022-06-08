const character = [
  {
    img: "char_spider-man.png",
    name: "Spider - Man",
    desc: "Parker is initially depicted as a high school student at Midtown School of Science and Technology who received spider-like and superhuman abilities after being bitten by a radioactive spider and operates as a vigilante in New York City known as Spider-Man. Parker is recruited by Tony Stark, who goes on to mentor him and inducts him into the Avengers during the battle against Thanos. Following the Blip, Parker briefly becomes Stark's chosen successor until his secret identity becomes public, and the events that transpire after he enlists Stephen Strange's help to reverse this causes the multiverse to open. Strange and Parker eventually resolve the crisis by casting a new spell that permanently erases the world's shared knowledge of his civilian persona, including the bonds he once shared with his loved ones, friends, and other superhero allies.",
  },
  {
    img: "char_strange.png",
    name: "Dr. Strange",
    desc: "He first appeared as the main character in the eponymous film (2016), as a brilliant but arrogant neurosurgeon, who, after a career-ending car crash, discovers magic from Kamar-Taj and becomes a Master of the Mystic Arts, using his newfound powers to protect the Earth and allies with the Avengers and Guardians of the Galaxy to combat Thanos. He briefly serves as the Sorcerer Supreme after the death of the Ancient One, but loses the position to Wong while he is Blipped. He remains the appointed Guardian of the New York Sanctum, before facing several problems from the newly recreated multiverse which he accidentally broke open after an initial failed attempt at helping erase everyone's knowledge of Peter Parker's identity as Spider-Man.",
  },
  {
    img: "char_octopus.png",
    name: "Doctor Octopus",
    desc: `Octavius is introduced in Spider-Man 2 as a nuclear physicist and friend and mentor of Peter Parker, whose research into fusion power with his wife Rosie is being sponsored by Oscorp's genetic and scientific research division, headed by Harry Osborn.When Octavius' fusion reactor experiment using tritium becomes unstable, resulting in Rosie's death, the harness of powerful robotic tentacle arms equipped with artificial intelligence (AI) which he was using to safely handle the materials is fused to his body, burning the inhibitor chip keeping the arms from controlling his nervous system. After ending up in the hospital and massacring the surgeons attempting to save Octavius by sawing them off, the arms' AI convince him to steal funds in order to attempt the experiment again, over the course of which crime spree the Daily Bugle dubs him Doctor Octopus, or "Doc Ock" for short.`,
  },
  {
    img: "char_goblin.png",
    name: "Green Goblin",
    desc: `Norman is introduced in the first Spider-Man (2002) film as the CEO of science company Oscorp, and the father of Harry Osborn. Norman has a strained relationship with his son and often neglects him in favor of Harry's best friend, Peter Parker, because he views himself as the only father figure in the boy's life after his Uncle Ben is killed. When Oscorp faces financial difficulties and Norman is pressured to secure a government contract to save it from bankruptcy, he tests an unstable performance-enhancement serum on himself, developing enhanced physical abilities and a split personality. This new persona, later dubbed the "Green Goblin" by the Daily Bugle, occasionally takes over Norman's body to exact revenge on their enemies, using advanced military equipment stolen from Oscorp. He later comes into conflict with Spider-Man after failing to recruit him to his side, and eventually discovers that the masked superhero is Peter, but accidentally kills himself while fighting him.`,
  },
  {
    img: "char_lizard.png",
    name: "Lizard",
    desc: "In the original version of the story, Curt Connors was a geneticist researching the ability of certain reptiles to regrow missing limbs. He developed a lizard DNA-based serum that would allow humans to do the same, and tested it on himself, hoping to regain his missing right arm; instead, he transformed into a feral anthropomorphic lizard. Although Spider-Man was able to undo the transformation, the Lizard remained a part of Connors' subconscious, and would resurface time and time again; often retaining Connors' intelligence and attempting to replace mankind with a race of reptilian creatures like himself. Many stories featuring the Lizard deal with the effects he has on Connors' life and psyche, as the latter lives in constant fear that the Lizard will one day completely and irreversibly take over his body. Because of this, he works tirelessly to find a permanent cure for his alternate personality, much to the worry of his wife, Martha Connors, and son, Billy.",
  },
  {
    img: "char_electro.png",
    name: "Electro",
    desc: `In the original version of the story, Max Dillon was a lineman for an electric company who turned to a life of crime after being struck by lightning while working on a power line and becoming a living electric capacitor. Electro's superpowers revolve around controlling electricity, which he can absorb to "charge" himself and become more powerful, gaining additional abilities such as flight, superhuman strength, and speed. Since his conception, the character has undergone several design changes, from his original green and yellow costume, to his modern look with blue skin and a bald head.`,
  },
  {
    img: "char_sand-man.png",
    name: "Sand - Man",
    desc: `In the comics, William Baker was a common criminal who spent most of his early life drifting in and out of street gangs, using the alias Flint Marko. While on the run from the FBI, a nearby nuclear test reactor exploded, making his body form into sand, becoming known as the Sandman.
        The Sandman possesses the superhuman ability to convert his body into sand by mental command. The sand functions identically to, as well as appears to be, normal flesh. However, he can convert all or parts of his body into animated sand at will. His brain has attained subliminal awareness of all granulated particles of his body. Through conscious effort, he can affect the degree of molecular cohesion between the numerous adjoining surfaces of his particles and thus cause locomotion of discrete volumes, down to the individual grai.`,
  },
];

const charList = document.querySelectorAll(".character_menu li");
const charImg = document.querySelectorAll("#character img");
const charName = document.querySelector(".char_desc h2");
const charDesc = document.querySelector(".char_desc p");

const SHOW = "show";

charList.forEach((li) => {
  li.addEventListener("click", () => {
    for (let i = 0; i < character.length; i++) {
      if (li.innerText === character[i].name) {
        charName.innerText = character[i].name;
        charDesc.innerText = character[i].desc;
        charImg.forEach((img) => {
          if (img.alt === character[i].name) {
            img.classList.add(SHOW);
          } else {
            img.classList.remove(SHOW);
          }
        });
      }
    }
  });
});
