const pets = [
    {
      id: 1,
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      type: "cat",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
    },
    {
        id: 2,
      name: "Trouble",
      color: "Brown",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "dino",
      imageUrl: "https://i.pinimg.com/564x/bf/0a/4e/bf0a4e068341cca76a51427a7c5fa4df.jpg",
    },
    {
      id: 3,
      name: "Whiskers",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      type: "dino",
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
    },
    {
      id: 4,
      name: "Coco",
      color: "Black",
      specialSkill: "Burps minimally.",
      type: "dog",
      imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
    },
    {
      id: 5,
      name: "Spooky",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "cat",
      imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
    },
    {
      id: 6,
      name: "Tiger",
      color: "Black",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      type: "dog",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
    },
    {
      id: 7,
      name: "Oreo",
      color: "Yellow",
      specialSkill: "Able to stop chewing ice or whistling on request.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
    },
    {
      id: 8,
      name: "Ginger",
      color: "Grey",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "dino",
      imageUrl: "https://i.pinimg.com/474x/a6/3a/e3/a63ae3e11448b5b99c9378bc8c2f0aa3.jpg"
    },
    {
      id: 9,
      name: "Sassy",
      color: "Brown",
      specialSkill: "Adept at talking self and others out of fights.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
    },
    {
      id: 10,
      name: "Sammy",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
    },
    {
      id: 11,
      name: "Coco",
      color: "Orange",
      specialSkill: "Can be around food without staring creepily at it.",
      type: "dino",
      imageUrl: "https://i.pinimg.com/474x/e6/cc/37/e6cc37e501b6fec2fb5b7f6e0f9c32b2.jpg"
    },
    {
      id: 12,
      name: "Buster",
      color: "Green",
      specialSkill: "Does not use excessive acronyms.",
      type: "dog",
      imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
    },
    {
      id: 13,
      name: "Chester",
      color: "Red",
      specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
      type: "dog",
      imageUrl: "http://1kjkdg1axrkd2g03cnboj761.wpengine.netdna-cdn.com/wp-content/uploads/2017/12/braydon-anderson-105552-e1512684107659.jpg"
    },
    {
      id: 14,
      name: "Samantha",
      color: "Brown",
      specialSkill: "Always up for dessert.",
      type: "cat",
      imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
    },
    {
      id: 15,
      name: "Coco",
      color: "Red",
      specialSkill: "Burps minimally.",
      type: "cat",
      imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg"
    },
    {
      id: 16,
      name: "Smokey",
      color: "Brown",
      specialSkill: "Drives at a safe rate of speed in snow or rain.",
      type: "dino",
      imageUrl: "https://i.pinimg.com/564x/cf/af/1d/cfaf1d0d8201783a351b3f66f2be1efa.jpg"
    },
    {
     id: 17,
      name: "Muffin",
      color: "Yellow",
      specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
      type: "cat",
      imageUrl: "https://i.pinimg.com/474x/b1/cc/f6/b1ccf649ab0191fc7dcc1c8169656e63.jpg"
    },
    {
      id: 18,
      name: "Salem",
      color: "Brown",
      specialSkill: "Proficient in air guitar",
      type: "dino",
      imageUrl: "https://i.pinimg.com/564x/81/34/82/8134821139e87e3879b02cc42bffb5ef.jpg"
    },
    {
      id: 19,
      name: "Callie",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "dog",
      imageUrl: "https://i.pinimg.com/474x/40/a3/17/40a317adc3248988d53ac6a5ca60aa7b.jpg"
    },
    {
      id: 20,
      name: "Spooky",
      color: "Black",
      specialSkill: "Uses litter box at appropriate hours.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/474x/73/8b/94/738b942f73a08f130256ae9f5e3e626a.jpg"
    },
    {
      id: 21,
      name: "Miss kitty",
      color: "Red",
      specialSkill: "Owns a Nintendo Power Glove.",
      type: "dino",
      imageUrl: "https://i.pinimg.com/564x/6b/cf/8c/6bcf8c12d087b5dedc9e068b62611199.jpg"
    },
    {
        id: 22,
      name: "Snuggles",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/736x/0b/f8/f2/0bf8f201ea8f7b0e8d406a8312b6ab38.jpg"
    },
    {
        id: 23,
      name: "Buddy",
      color: "Red",
      specialSkill: "Enjoys fine wine.",
      type: "dog",
      imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
    },
    {
        id: 24,
      name: "George",
      color: "Brown",
      specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
      type: "dog",
      imageUrl: "https://i.pinimg.com/474x/15/36/e7/1536e7de67f8f992c595a308ec8ae363.jpg"
    },
    {
      id: 25,
      name: "Salem",
      color: "Red",
      specialSkill: "Knows the words to 4 rap songs.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/474x/4c/c8/1f/4cc81ff3b506a338177a5f9511b4c801.jpg"
    },
    {
        id: 26,
      name: "Bubba",
      color: "Yellow",
      specialSkill: "Cleans himself.",
      type: "dog",
      imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
    },
    {
        id: 27,
      name: "Chloe",
      color: "Green",
      specialSkill: "Admits he is wrong",
      type: "dino",
      imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
    },
    {
        id: 28,
      name: "Nala",
      color: "Purple",
      specialSkill: "Dances when he has to.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
    },
    {
        id: 29,
      name: "Oscar",
      color: "Green",
      specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
      type: "cat",
      imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg"
    },
    {
        id: 30,
      name: "Lucy",
      color: "Red",
      specialSkill: "Doesn’t get weirded out by the word “moist.”",
      type: "dino",
      imageUrl: "https://i.pinimg.com/474x/e2/ba/bb/e2babb85848a5cbc38bca3d3e9e03f26.jpg"
    }
  ];

  // for (i = 0; i < pets.length; i++) {
  //   console.log(pets[i].id);
  //   console.log(pets[i].name);
  //   console.log(pets[i].color);
  //   console.log(pets[i].specialSkill);
  //   console.log(pets[i].type);
  //   console.log(pets[i].imageUrl);
  // };


// code from lab part 1
  const card = document.querySelector("#card");

  // for (let i=0; i<pets.length; i++) {
  //   card.innerHTML += `<div class="card" style="width: 18rem;">
  //   <img src="${pets[i].imageUrl}" class="card-img-top" alt="...">
  //   <div class="card-body">
  //     <h5 class="card-title">${pets[i].name}</h5>
  //     <p class="card-text">${pets[i].specialSkill}</p>
  //   </div>
  //   <ul class="list-group list-group-flush">
  //     <li class="list-group-item">Species: ${pets[i].type}</li>
  //     <li class="list-group-item">Color: ${pets[i].color}</li>
  //   </ul>
  // </div>`
  // }

  // FUNCTION RENDERS HTML STRING ASSIGNED TO VARIABLE TO THE DOM IN HTML ELEMENT/ID SELECTED.

  const renderToDom = (divId, htmlToRender) => {
    const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHTML = htmlToRender;
  };

// FUNCTION TAKES AN ARRAY AND PASSES KEYS FROM OBJECTS WITHIN ARRAY INTO HTML ON THE DOM CREATING CARDS FOR EACH OBJECT & THE KEY-VALUES WITHIN IT. RENDERS RESULTING HTML CARDS TO THE DOM. 

  const cardsOnDom = (array) => {
    let domString = "";
    for (const member of array) {
      domString += `<div class="card" style="width: 18rem;">
      <img class="card-img-top" src="${member.imageUrl}" alt="${member.name}">
      <div class="card-body">
        <h5 class="card-title">${member.name}</h5>
        <p class="card-text">${member.specialSkill}</p>
        <p class="card-text">${member.type}</p>
        <p class="card-text">${member.color}</p>
        <button type="button" class="btn btn-primary" id="delete--${member.id}">Delete</button>
      </div>
    </div>`;
    }
    renderToDom("#card", domString);
  };

// RENDER ALL OBJECTS / PETS ON DOM AT PAGE START 
cardsOnDom(pets);

  // FUNCTION TO FILTER PET OBJECT BY TYPE INTO NEW ARRAY 

  const filter = (array, typeString) => {
    const petArray = [];
    for (const member of array) {
      if (member.type === typeString) {
        petArray.push(member);
      }
    }
    return petArray;
  };

  // TARGETING BUTTONS ON DOM FOR FILTERED TYPE EVENT LISTENER (BELOW) 

  const showAll = document.querySelector("#showAllButton");
  const catOnly = document.querySelector("#buttonCat");
  const dinoOnly = document.querySelector("#buttonDino");
  const dogOnly = document.querySelector ("#buttonDog");

// ADDING CLICK FUNCTIONALITY TO FILTER BY TYPE VIA EVENT LISTENERS -> BUTTONS BY USING CARDS ON DOM/FILTER FUNCTIONS

  showAll.addEventListener('click', () => {
    cardsOnDom(pets);
  });

  catOnly.addEventListener('click', () => {
    const showCats = filter(pets, 'cat');
    cardsOnDom(showCats);
  });
  dinoOnly.addEventListener('click', () => {
    const showDinos = filter(pets, 'dino');
    cardsOnDom(showDinos);
  });
  dogOnly.addEventListener('click', () => {
    const showDogs = filter(pets, 'dog');
    cardsOnDom(showDogs);
  });

  // TARGETING INDEX.HTML FORM ON DOM

  const form = document.querySelector(
    "form");

// FUNCTION ADDS USER INPUT VALUES TO A NEW OBJECT TO ADD TO PETS ARRAY AND THEN RENDER TO DOM

  const createPet = (event) => {
    event.preventDefault();
    
    const newPetObj = {
      id: pets.length + 1,
      name: document.querySelector("#petName").value,
      color: document.querySelector("#petColor").value,
      specialSkill: document.querySelector("#petSkill").value,
      type: document.querySelector("#petType").value,
      imageUrl: document.querySelector("#petUrl").value,
    }

    pets.push(newPetObj);
    cardsOnDom(pets);
    form.reset();
  };

  // ADDS EVENT LISTENER TO FORM SUBMIT BUTTON AND PASSES IT BACK TO THE FUNCTION 

  form.addEventListener('submit', createPet);

  // ADD EVENT LISTENER TO DELETE CARDS ONCLICK FOR DELETE BUTTON

  card.addEventListener('click', (e) => {
    if (e.target.id.includes("delete")) {
      // restructuring - target id of clicked card by splitting "delete -- idnumber" and returning [delete, idnumber] to array, then grabbing that id number
      const [, id] = e.target.id.split("--");

      const index = pets.findIndex(e => e.id === Number(id));
      
      pets.splice(index, 1);

      cardsOnDom(pets);
    }
  });
  
  const startApp = () => {
    cardsOnDom(pets);
  }

  startApp()
