const weight = document.querySelector(".input-weight"),
  height = document.querySelector(".input-growth"),
  form = document.querySelector(".form"),
  button = document.querySelector(".button"),
  bmiInHTML = document.querySelector(".body-mass-index");
let bmi;

function outputInHTML() {
  if (bmi) {
    if (bmi <= 16.25) {
      // Анорексия
      bmiInHTML.innerHTML = `Ваш ИМТ: <span class="bmi--bad-three">${bmi}</span>
    </br>
    У вас анорексия!
    `;
    } else if ((bmi >= 16.25) & (bmi <= 18.5)) {
      // Недостаток массы
      bmiInHTML.innerHTML = `Ваш ИМТ: <span class="bmi--bad-two">${bmi}</span>
    </br>
    У вас недостаток массы!
    `;
    } else if (bmi >= 18.5 && bmi <= 25) {
      // нормальный вес
      bmiInHTML.innerHTML = `Ваш ИМТ: <span class="bmi--good">${bmi}</span>
    </br>
    У вас нормальный вес.
    `;
    } else if (bmi >= 25 && bmi < 30) {
      // излишний вес
      bmiInHTML.innerHTML = `Ваш ИМТ: <span class="bmi--bad-two">${bmi}</span>
    </br>
    У вас избыточный вес.
    `;
    } else if (bmi >= 30 && bmi <= 35) {
      // ожирение 1
      bmiInHTML.innerHTML = `Ваш ИМТ: <span class="bmi--bad-two">${bmi}</span>
    </br>
    У вас ожирение первой степени!
    `;
    } else if (bmi >= 35 && bmi <= 40) {
      // ожирение 2
      bmiInHTML.innerHTML = `Ваш ИМТ: <span class="bmi--bad-two">${bmi}</span>
    </br>
    У вас ожирение второй степени!
    `;
    } else if (bmi >= 40) {
      // ожирение 3
      bmiInHTML.innerHTML = `Ваш ИМТ: <span class="bmi--bad-three">${bmi}</span>
    </br>
    У вас ожирение третьей степени!
    `;
    }
  } else {
    bmiInHTML.textContent = "Введите данные";
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let heightNum = height.value;
  let weightNum = weight.value;

  if (heightNum && weightNum) {
    // если рост записан не в 1.78 а 178
    let bmiFormula;
    if (heightNum >= 100) {
      let heightNumTwo = heightNum.substr(0, 1) + "." + heightNum.substr(1);
      // вес дилится на рост в 2 степени
      bmiFormula = weightNum / Math.pow(heightNumTwo, 2);
      // выводит только 2 числа после . (18.52)
      bmi = Math.round(bmiFormula * Math.pow(10, 2)) / Math.pow(10, 2);
      outputInHTML();
    } else {
      bmiFromula = weightNum / Math.pow(heightNum, 2);
      bmi = Math.round(bmiFormula * Math.pow(10, 2)) / Math.pow(10, 2);
      outputInHTML();
    }
    heightNum = 0;
    weightNum = 0;
  } else {
    height.style.borderColor = "#ff4a52";
    weight.style.borderColor = "#ff4a52";
    outputInHTML();
  }
});
function handlerInput() {
  height.style.borderColor = "#fff";
  weight.style.borderColor = "#fff";
}
weight.addEventListener("input", handlerInput);
height.addEventListener("input", handlerInput);
