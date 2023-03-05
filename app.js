let wrapper = document.querySelector("section.animationWrapper");
let mathImg = document.querySelector("div.mathImg");
let slide = document.querySelector("div.slide");

const timeLine = new TimelineMax();

timeLine
  .fromTo(
    mathImg,
    1,
    { height: "0%" },
    { height: "100%", ease: Power2.easeInOut }
  )
  .fromTo(
    mathImg,
    1.2,
    { width: "80%" },
    { width: "100%", ease: Power2.easeInOut }
  )
  .fromTo(
    slide,
    1,
    { x: "-100%" },
    { x: "0%", ease: Power2.easeInOut },
    "-=1.2"
  )
  .fromTo(wrapper, 0.3, { opacity: 1 }, { opacity: 0 });

setTimeout(() => {
  wrapper.style.pointerEvents = "none";
}, 2500);

window.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    e.preventDefault();
  }
});
window.addEventListener("keydown", (e) => {
  if (e.key == "F5") {
    e.preventDefault();
    window.location.reload(true);
  }
});

let allButton = document.querySelectorAll("button");
allButton.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

let allSelect = document.querySelectorAll("select");
allSelect.forEach((select) => {
  changeColor(select);
  select.addEventListener("change", (e) => {
    setGPA();
    changeColor(e.target);
  });
});

let credits = document.querySelectorAll(".credits");
credits.forEach((credit) => {
  credit.addEventListener("change", () => {
    setGPA();
  });
});
//轉換分數
function convertor(grade) {
  switch (grade) {
    case "A":
      return 4.0;
    case "A-":
      return 3.7;
    case "B+":
      return 3.4;
    case "B":
      return 3.0;
    case "B-":
      return 2.7;
    case "C+":
      return 2.4;
    case "C":
      return 2.0;
    case "C-":
      return 1.7;
    case "D+":
      return 1.4;
    case "D":
      return 1.0;
    case "D-":
      return 0.7;
    case "F":
      return 0.0;
    default:
      return 0;
  }
}
//改變分數顏色
function changeColor(target) {
  if (target.value == "A" || target.value == "A-") {
    target.style.backgroundColor = "lightgreen";
    target.style.color = "black";
  } else if (
    target.value == "B" ||
    target.value == "B-" ||
    target.value == "B+"
  ) {
    target.style.backgroundColor = "yellow";
    target.style.color = "black";
  } else if (
    target.value == "C" ||
    target.value == "C-" ||
    target.value == "C+"
  ) {
    target.style.backgroundColor = "orange";
    target.style.color = "black";
  } else if (
    target.value == "D" ||
    target.value == "D-" ||
    target.value == "D+"
  ) {
    target.style.backgroundColor = "red";
    target.style.color = "black";
  } else if (target.value == "F") {
    target.style.backgroundColor = "grey";
    target.style.color = "white";
  } else {
    target.style.backgroundColor = "rgb(230, 230, 230)";
  }
}
//gpa轉換
function setGPA() {
  let allSelect = document.querySelectorAll("select");
  let credits = document.querySelectorAll(".credits");
  let formLength = document.querySelectorAll("form").length;
  let upperSum = 0;
  let bottomSum = 0;

  for (i = 0; i < formLength; i++) {
    if (!isNaN(credits[i].valueAsNumber)) {
      upperSum += credits[i].valueAsNumber * convertor(allSelect[i].value);
    }
  }
  for (i = 0; i < formLength; i++) {
    if (!isNaN(credits[i].valueAsNumber)) {
      bottomSum += credits[i].valueAsNumber;
    }
  }
  let result = (upperSum / bottomSum).toFixed(2);
  let gpa = document.querySelector("div.result h2");
  if (bottomSum == 0) {
    result = "0.00";
  }
  gpa.innerText = result;
}
//增加表格
let addButton = document.querySelector(".add");
addButton.addEventListener("click", () => {
  let newForm = document.createElement("form");
  let newDiv = document.createElement("div");
  newDiv.classList.add("input");

  // 製作五個小元素
  let newInput1 = document.createElement("input");
  newInput1.setAttribute("type", "text");
  newInput1.setAttribute("list", "opt");
  newInput1.setAttribute("placeholder", "class category");
  newInput1.classList.add("classCategory");

  let newInput2 = document.createElement("input");
  newInput2.setAttribute("type", "text");
  newInput2.setAttribute("placeholder", "class number");
  newInput2.classList.add("classNumber");

  let newInput3 = document.createElement("input");
  newInput3.setAttribute("type", "number");
  newInput3.setAttribute("placeholder", "credits");
  newInput3.setAttribute("min", "0");
  newInput3.setAttribute("max", "6");
  newInput3.classList.add("credits");
  newInput3.addEventListener("change", () => {
    setGPA();
  });
  // here is the select tag
  let newSelect = document.createElement("select");
  newSelect.classList.add("score");
  var opt1 = document.createElement("option");
  opt1.setAttribute("value", "");
  let textNode1 = document.createTextNode("");
  opt1.appendChild(textNode1);
  var opt2 = document.createElement("option");
  opt2.setAttribute("value", "A");
  let textNode2 = document.createTextNode("A");
  opt2.appendChild(textNode2);
  var opt3 = document.createElement("option");
  opt3.setAttribute("value", "A-");
  let textNode3 = document.createTextNode("A-");
  opt3.appendChild(textNode3);
  var opt4 = document.createElement("option");
  opt4.setAttribute("value", "B+");
  let textNode4 = document.createTextNode("B+");
  opt4.appendChild(textNode4);
  var opt5 = document.createElement("option");
  opt5.setAttribute("value", "B");
  let textNode5 = document.createTextNode("B");
  opt5.appendChild(textNode5);
  var opt6 = document.createElement("option");
  opt6.setAttribute("value", "B-");
  let textNode6 = document.createTextNode("B-");
  opt6.appendChild(textNode6);
  var opt7 = document.createElement("option");
  opt7.setAttribute("value", "C+");
  let textNode7 = document.createTextNode("C+");
  opt7.appendChild(textNode7);
  var opt8 = document.createElement("option");
  opt8.setAttribute("value", "C");
  let textNode8 = document.createTextNode("C");
  opt8.appendChild(textNode8);
  var opt9 = document.createElement("option");
  opt9.setAttribute("value", "C-");
  let textNode9 = document.createTextNode("C-");
  opt9.appendChild(textNode9);
  var opt10 = document.createElement("option");
  opt10.setAttribute("value", "D+");
  let textNode10 = document.createTextNode("D+");
  opt10.appendChild(textNode10);
  var opt11 = document.createElement("option");
  opt11.setAttribute("value", "D");
  let textNode11 = document.createTextNode("D");
  opt11.appendChild(textNode11);
  var opt12 = document.createElement("option");
  opt12.setAttribute("value", "D-");
  let textNode12 = document.createTextNode("D-");
  opt12.appendChild(textNode12);
  var opt13 = document.createElement("option");
  opt13.setAttribute("value", "F");
  let textNode13 = document.createTextNode("F");
  opt13.appendChild(textNode13);

  newSelect.appendChild(opt1);
  newSelect.appendChild(opt2);
  newSelect.appendChild(opt3);
  newSelect.appendChild(opt4);
  newSelect.appendChild(opt5);
  newSelect.appendChild(opt6);
  newSelect.appendChild(opt7);
  newSelect.appendChild(opt8);
  newSelect.appendChild(opt9);
  newSelect.appendChild(opt10);
  newSelect.appendChild(opt11);
  newSelect.appendChild(opt12);
  newSelect.appendChild(opt13);

  newSelect.addEventListener("change", (e) => {
    setGPA();
    changeColor(e.target);
  });

  let newButton = document.createElement("button");
  newButton.classList.add("trash");
  let newItag = document.createElement("i");
  newItag.classList.add("fa-solid");
  newItag.classList.add("fa-trash");
  newButton.appendChild(newItag);

  newButton.addEventListener("click", (e) => {
    e.preventDefault();
    e.target.parentElement.parentElement.style.animation =
      "scaleDown 0.5s ease forwards";
    e.target.parentElement.parentElement.addEventListener(
      "animationend",
      (e) => {
        e.target.remove();
        setGPA();
      }
    );
  });

  newDiv.appendChild(newInput1);
  newDiv.appendChild(newInput2);
  newDiv.appendChild(newInput3);
  newDiv.appendChild(newSelect);
  newDiv.appendChild(newButton);

  newForm.appendChild(newDiv);
  document.querySelector(".form").appendChild(newForm);
  newForm.style.animation = "scaleUp 0.5s ease forwards";
});
//垃圾桶
let allTrash = document.querySelectorAll(".trash");
allTrash.forEach((trash) => {
  trash.addEventListener("click", (e) => {
    e.target.parentElement.parentElement.classList.add("remove");
  });
  let form = trash.parentElement.parentElement;
  form.addEventListener("transitionend", (e) => {
    e.target.remove();
    setGPA();
  });
});
//升序降序
let btnDes = document.querySelector(".descending");
let btnAsc = document.querySelector(".ascending");
btnDes.addEventListener("click", () => {
  sorting("descending");
});
btnAsc.addEventListener("click", () => {
  sorting("ascending");
});

function sorting(direction) {
  let formInput = document.querySelectorAll("div.input");
  let objectArray = [];

  for (let i = 0; i < formInput.length; i++) {
    let classCategory = formInput[i].children[0].value;
    let classNumber = formInput[i].children[1].value;
    let credits = formInput[i].children[2].value;
    let score = formInput[i].children[3].value;

    if (
      !(
        classCategory == "" &&
        classNumber == "" &&
        credits == "" &&
        score == ""
      )
    ) {
      let classObj = {
        classCategory,
        classNumber,
        credits,
        score,
      };
      objectArray.push(classObj);
    }
  }
  for (let i = 0; i < objectArray.length; i++) {
    objectArray[i].scoreMath = convertor(objectArray[i].score);
  }

  objectArray = mergeSort(objectArray);
  if (direction == "descending") {
    objectArray = objectArray.reverse();
  }

  console.log(objectArray);

  let divForm = document.querySelector("div.form");
  divForm.innerHTML = "";
  for (let i = 0; i < objectArray.length; i++) {
    divForm.innerHTML += `
    <form action="">
    <div class="input">
      <input
        class="classCategory"
        type="text"
        placeholder="class category"
        list="opt"
        value=${objectArray[i].classCategory}
      />
      <input
        class="classNumber"
        type="text"
        placeholder="class number"
        value=${objectArray[i].classNumber}
      />
      <input
        class="credits"
        type="number"
        placeholder="credits"
        min="0"
        max="6"
        value=${objectArray[i].credits}
      />
      <select class="score" name="score">
        <option value=""></option>
        <option value="A">A</option>
        <option value="A-">A-</option>
        <option value="B+">B+</option>
        <option value="B">B</option>
        <option value="B-">B-</option>
        <option value="C+">C+</option>
        <option value="C">C</option>
        <option value="C-">C-</option>
        <option value="D+">D+</option>
        <option value="D">D</option>
        <option value="D-">D-</option>
        <option value="F">F</option>
      </select>
      <button class="trash">
        <i class="fa-solid fa-trash"></i>
      </button>
    </div>
  </form>`;
  }

  formInput = document.querySelectorAll("div.input");
  for (let i = 0; i < formInput.length; i++) {
    formInput[i].children[3].value = objectArray[i].score;
  }

  let allSelect = document.querySelectorAll("select");
  allSelect.forEach((select) => {
    changeColor(select);
    select.addEventListener("change", (e) => {
      setGPA();
      changeColor(e.target);
    });
  });

  let credits = document.querySelectorAll(".credits");
  credits.forEach((credit) => {
    credit.addEventListener("change", () => {
      setGPA();
    });
  });

  let allTrash = document.querySelectorAll(".trash");
  allTrash.forEach((trash) => {
    trash.addEventListener("click", (e) => {
      e.preventDefault();
      e.target.parentElement.parentElement.classList.add("remove");
    });
    let form = trash.parentElement.parentElement;
    form.addEventListener("transitionend", (e) => {
      e.target.remove();
      setGPA();
    });
  });
}

// sorting();
function merge(a, b) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < a.length && j < b.length) {
    if (a[i].scoreMath < b[j].scoreMath) {
      result.push(a[i]);
      i++;
    } else {
      result.push(b[j]);
      j++;
    }
  }

  while (i < a.length) {
    result.push(a[i]);
    i++;
  }
  while (j < b.length) {
    result.push(b[j]);
    j++;
  }

  return result;
}

function mergeSort(arr) {
  if (arr.length == 0) {
    return;
  }
  if (arr.length == 1) {
    return arr;
  } else {
    let middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle, arr.length);
    return merge(mergeSort(left), mergeSort(right));
  }
}
