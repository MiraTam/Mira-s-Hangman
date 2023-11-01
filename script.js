//Generates a random word
function randomWord() {
  text = `Since he first became head of state in 2013, President Uhuru Kenyatta has earned love and hate from Kenyans in equal measure.

  As the youngest President to take power at that time, Uhuru promised to steer the country into a united and developed nation.
  
  "National unity is a key prerequisite for the realisation of Kenya that we all desire.  Without unity, we shall neither progress nor stand," Uhuru said in his first speech.
  
  "I assure Kenyans that uniting our people is one of my most passionate goals for our country.  I dream of a Kenya where we will not only be proud of our diverse heritage and cultures but also where we will unite around our common aspirations as Kenyans."
  
  Among the legacies Uhuru will leave is that he managed to achieve his dream.
  
  Having taken over a country that was reeling from the 2007/08 post-election violence, Uhuru got into the business of uniting Kenyans.
  
  Even though his preferred successor Raila Odinga did not win the 2022 presidential election, Uhuru united a Kenya that saw the Mt Kenya region vote for a Kalenjin president.
  
  Uhuru will also be remembered as a leader who embraced women's empowerment.
  
  He appointed Fatuma Ahmed as the first female Major General of the Kenyan Military on July 14, 2018.
  
  On May 19, 2021, Uhuru appointed the first female Chief Justice, Martha Koome and had two women lead the Ministry of Defence.
  
  Ambassador Raychelle Omamo and Monica Juma became Defence Cabinet Secretaries during Uhuru's tenure.
  
  Omamo, who is the current Foreign Affairs CS, served from May 15, 2013, to January 14, 2020, while Juma took over until September 30, 2021.
  
  But perhaps the top of Uhuru's legacy is infrastructural development.
  
  In his 10-year tenure, he prioritised the construction of new roads and renovating old ones to increase inter-city connectivity and reduce traffic congestion.
  
  The most famous of these, however, is the Nairobi Expressway which was recently commissioned and the Elwak-Rhamu road in Mandera county which is yet to be commissioned.
  
  There is also the Nairobi Western Bypass highway which connects the Southern Bypass and the highway to Rironi at Gitaru.
  
  The road also connects links to the Northern Bypass through Ruaka,  completing a ring road of four bypasses (Western, Northern, Eastern and Southern) around Nairobi.
  
  Uhuru also oversaw the construction of the Isiolo-Moyale road, a component of the Lamu Port and Lamu-Southern Sudan-Ethiopia Transport Corridor (LAPSSET) Project.
  
  Mombasa is one of the counties that have benefited from these constructions.
  
  There is the 18km Dongo-Kundu Bypass which connects Mombasa West mainland with Mombasa South mainland.
  
  The Changamwe-Magongo road has provided a key link between the city and Moi International Airport.
  
  There is the 609km Standard Gauge railway (SGR) from Mombasa to Nairobi.
  
  The railway runs through Mombasa, Kilifi, Kwale, Taita-Taveta, Makueni, Kajiado, Machakos and Nairobi counties.
  
  Even though infrastructure is Uhuru's pride child, Kenyans will remember that he did not manage to complete the construction of the BRT in his time.
  
  In a report on August 1,  the World Bank said the plan had failed due to poor planning and poor institutional policies.
  
  "Unregulated competition from paratransit operators (informal buses, minibuses, and taxis), the difficulty of finalising compensation deals and acrimonious relationships between paratransit operators and the government in SSA affect system revenue," the report reads.
  
  On the flip side, however, Uhuru will be remembered for excessive borrowing to finance infrastructural developments.
  
  Government data indicates that Kenya's debt now stands at Sh8.6 trillion and it increases by Sh40 billion any time the shilling drops a unit against the US dollar.
  
  But even then, Uhuru has overseen the beginning construction of over 2,000 dams, among them the Thwake dam that is expected to supply water to the Ukambani region.
  
  He will also be remembered, especially by the Northeastern residents, as the first President to occasionally visit the area.
  
  Uhuru started his trips to the region three years after he was first elected in 2013.
  
  His latest development project is the renovation of Uhuru Park, 52 years after it was first opened to the public.
  
  Uhuru, through the Nairobi Metropolitan Services, started the reconstruction of the park in September 2021. 
  
  A recent sneak peek, courtesy of NMS shows that the green space will be one of the city's best hanging out spots.
  
  His other latest project is the Uhuru Gardens Museum.
  
  The museum contains an unedited history of Kenya’s freedom activists and heroes.
  
  Uhuru's administration has also been instrumental in transforming the education sector.
  
  He introduced the Competency-Based Curriculum and according to the Education CS George Magoha, restored integrity in the Knec exams.
  
  During the release of the 2021 KCPE results, Magoha said the Jubilee regime had seen a six-year run of the cleanest and flawless national examination campaign that has restored the integrity and credibility of the national certification system.
  
  Uhuru's Elimu Scholarship programme has seen 9,000 children who sat for KCPE in 2020 and 2021 benefit from fully paid scholarships for four years.
  
  The programme has been running for two years.
  
  President Kenyatta will be remembered as a pan-Africanist and the East African face in many world assemblies.
  
  From the UN environmental-related conferences to issues related to trade.
  
  He has also championed African security and peace in South Africa, Rwanda and DRC.
  
  Uhuru will also be remembered for his uncomfortable silence.
  
  On two occasions, Uhuru has left Kenyans yearning for his comments on things that affected him personally.
  
  One of them was the Building Bridges Initiative which was stopped by the courts. 
  
  The other one is the recent presidential election results.
  
  Uhuru had endorsed Azimio's Raila Odinga and even took part in campaigning for him.
  
  After Raila's defeat, Uhuru did not congratulate his Deputy, William Ruto, who will be his predecessor.
  
  After the Supreme Court confirmation of the results on September 5, Uhuru finally went on record saying he was going to ensure a smooth transition of power.
  
  He also posed tough questions to Kenyans on matters of elections and Constitutional institutions.
  
  During his tenure, the country has witnessed hard economic times. No doubt this will not be erased from Kenyans' minds.
  
  The unemployment rate worsened from 2.81 per cent in 2013 to 5.74 per cent in 2021.
  
  Between 2013 and 2021, Kenya’s economic growth averaged 4.4 per cent as tax revenues stagnated at approximately 14.8 per cent of the GDP.
`;
  let x = text.replace(/[^A-Za-z0-9]+/g, " ");
  let newArr = x.trim().split(" ");
  let word = newArr[Math.floor(Math.random() * newArr.length)].toUpperCase();
  return word;
}

const hangmanPic = document.getElementById("hangmanPicture");
const keyPads = document.getElementsByClassName("letter");
const h1 = document.getElementById("singleLetter");
const answerContainer = document.querySelector(".anserBoxes");
const notiMessage = document.querySelector(".notification");
const lives = document.querySelector(".lives");
var correctAnswer;
var answer = [];
var gameOn = true;
var currentLife = 9;

//initialize  a new game
function initGame() {
  var generatedWord = randomWord();
  correctAnswer = Array.from(generatedWord);
  for (let x = 0; x < generatedWord.length; x++) {
    answer[x] = "-";
  }
  h1.textContent = answer.join("");

  console.log(correctAnswer);
  console.log(answer);
  console.log(generatedWord);
}
//initialize a new game
initGame();

//to type the answer to the answer box
function typeLetter() {
  var letter = this.textContent;
  if (correctAnswer.includes(letter)) {
    for (let i = 0; i < correctAnswer.length; i++) {
      if (correctAnswer[i] == letter && answer[i] == "-") {
        answer[i] = correctAnswer[i];
      }
    }
    this.disabled = true;
    h1.textContent = answer.join("");
  } else {
    if (currentLife > 0) {
      currentLife -= 1;
      lives.textContent = currentLife;
      hangmanPic.src = `images/${currentLife}.png`;
    }
  }

  isGameOver();
}

//assign Click event listner for each button
for (var i = 0; i < keyPads.length; i++) {
  keyPads[i].addEventListener("click", typeLetter);
}

//eventlistner for disabling the buttons after click event
for (var i = 0; i < keyPads.length; i++) {
  keyPads[i].addEventListener("click", function () {
    if (this.className == "letter") {
      this.classList.add("disabled");
      this.setAttribute("disabled", "");
    }
  });
}

//checks if the game is over
function isGameOver() {
  while (gameOn) {
    var condition1 = answer.join("");
    var condition2 = correctAnswer.join("");
    if (condition1 !== condition2) {
      if (currentLife == 0) {
        let html = `<span>The word is: <span class="answer">${correctAnswer.join(
          ""
        )}</span></span>`;
        gameOn = false;
        notiMessage.innerHTML = html;
        disableKeybord();
      }
      break;
    } else {
      hangmanPic.src = "images/congrats.png";
      notiMessage.textContent = "Congrats! well Done!";
      gameOn = false;
      disableKeybord();
      break;
    }
  }
}

//empty answer array for the next round
function emptyAnswerArray() {
  var i = answer.length;
  while (i >= 0) {
    answer.pop(i);
    i--;
  }
}

//starts a new game
function startNewGame() {
  if (gameOn) {
    return;
  } else {
    initializeGame();
    enableKeybord();
    emptyAnswerArray();
    initGame();
  }
}

//initialize all the game variables
function initializeGame() {
  notiMessage.textContent = "";
  gameOn = true;
  currentLife = 9;
  lives.textContent = currentLife;
  hangmanPic.src = "images/initial.png";
}

//disable  all button when the game is over
function disableKeybord() {
  for (let i = 0; i < keyPads.length; i++) {
    let button = keyPads[i];
    if (button.hasAttribute("disabled") == false) {
      button.setAttribute("disabled", "");
      button.classList.add("disabled");
    }
  }
}

//enable all buttons when the next game starts
function enableKeybord() {
  for (let i = 0; i < keyPads.length; i++) {
    let button = keyPads[i];
    if (button.hasAttribute("disabled") == true) {
      button.removeAttribute("disabled");
      button.classList.remove("disabled");
    }
  }
}
