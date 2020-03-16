let turn = true;
//0=x, 1=o

function update(pos) {
  let elem = document.querySelector("#" + pos);
  if (turn) {
    //X
    elem.innerHTML = "X";
    turn = !turn;
  } else {
    //O
    elem.innerHTML = "O";
    turn = !turn;
  }
  elem.disabled = true;
  elem.style.color = "black";
  winCheck();
}

function winCheck() {
  let elems = [];

  for (let i = 0; i < 3; i++) {
    let temp = [];

    for (let j = 0; j < 3; j++)
      temp.push(document.querySelector("#b" + i + j).innerHTML);

    elems.push(temp);
  }

  for (let i = 0; i < 3; i++) {
    if (equalCheck(elems[i][0], elems[i][1], elems[i][2])) {
      displayWinner(elems[i][0]);
    }

    if (equalCheck(elems[0][i], elems[1][i], elems[2][i])) {
      displayWinner(elems[0][i]);
    }
  }
  if (equalCheck(elems[0][0], elems[1][1], elems[2][2])) {
    displayWinner(elems[0][0]);
  }
  if (equalCheck(elems[0][2], elems[1][1], elems[2][0])) {
    displayWinner(elems[0][2]);
  }
}

function equalCheck(a, b, c) {
  if (a != "." && b != "." && c != ".") {
    if (a == b && a == c) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function displayWinner(winner) {
  let outTxt = document.querySelector("#winner");
  outTxt.innerHTML = `${winner} won`;
}
