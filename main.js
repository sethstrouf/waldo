  //FUNCTIONS
  function createPopUpDiv() {
    const div = document.createElement('div');
    const list = document.createElement('ul');
    div.classList.add("popup");
    list.classList.add("list");
    li1.classList.add("item", "waldo");
    li2.classList.add("item", "evil");
    li1.textContent = "Waldo";
    li2.textContent = "Odlaw";

    list.appendChild(li1);
    list.appendChild(li2);
    div.appendChild(list);
    return div;
  }

  function closePopUp(e) {
    let [x,y] = getMousePosForPopUp(e);
    // if click is outside the image
    if (x > rect.right || x < rect.left || y > rect.bottom || y < rect.top ) {
      popUp.classList.add("delete");
    }
  }

  function getMousePosForImageMapping(e) {
    // adjust coords so image goes from 0,0 to 1000,750
    let x = e.clientX - (rect.right - rect.width);
    let y = e.clientY - (rect.bottom - rect.height);
    return [x,y];
  }

  function getMousePosForPopUp(e) {
    // adjust coords so image goes from 0,0 to 1000,750
    let x = e.clientX;
    let y = e.clientY;
    return [x,y];
  }

  function popUpList(e) {
    // store coordinates in case user makes a guess
    mouseCoords = getMousePosForImageMapping(e);
    let [x,y] = getMousePosForPopUp(e);
    popUp.style.left = `${x}px`;
    popUp.style.top = `${y}px`;
    popUp.classList.remove("delete");
    body.appendChild(popUp);
  }

  function handleWaldoClick(e) {
    let [x,y] = mouseCoords;
    // Waldo = [530, 360]
    // create "box" where Waldo is
    if ((x > 515 && x < 555) && (y > 343 &&  y < 395)) {
      document.querySelector('.waldoHeader').classList.add('strike');
      li1.classList.add('strike');
      const circle = document.createElement('div');
      circle.classList.add('circle');
      circle.style.left = 510 + rect.left + 'px';
      circle.style.top = 340 + rect.top + 'px';
      body.appendChild(circle);
    }
  }

  function handleEvilClick(e) {
    // Evil = [247, 370]
    let [x,y] = mouseCoords;
    if ((x > 235 && x < 260) && (y > 340 &&  y < 415)) {
      document.querySelector('.evilHeader').classList.add('strike');
      li2.classList.add('strike');
      const circle = document.createElement('div');
      circle.classList.add('circle');
      circle.style.left = 230 + rect.left + 'px';
      circle.style.top = 345 + rect.top + 'px';
      body.appendChild(circle);
    }
  }

  //VARIABLES
  let mouseCoords = [];
  const body = document.querySelector('body');
  const image = document.querySelector('.image')
  const li1 = document.createElement('li');
  const li2 = document.createElement('li');
  let popUp = createPopUpDiv();
  // get dimensions relative to viewport
  const rect = image.getBoundingClientRect();
  const popUpRect = popUp.getBoundingClientRect();

  //EVENT LISTENERS
  image.addEventListener("click", popUpList);
  document.addEventListener("click", closePopUp);
  li1.addEventListener("click", handleWaldoClick);
  li2.addEventListener("click", handleEvilClick);