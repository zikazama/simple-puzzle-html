const container = document.getElementById("container");
const element = `<div class="flex-item"></div>`;
// const angka = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15, ''];

let angka = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, ""],
];

function shuffleMatrix(matrix) {
  for (let i = matrix.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = matrix[i];
    matrix[i] = matrix[j];
    matrix[j] = temp;
  }
  return matrix;
}

angka = shuffleMatrix(angka);

// const hasil = angka.map((nilai,index) => {
//     let temp = ``;
//     if([0, 4, 8, 12].includes(index)){
//       temp += `<div class="row">`;
//     }
//     temp += `<div class="flex-item">${nilai}</div>`;
//     if([3, 7, 11, 15].includes(index)){
//       temp += `</div>`;
//     }
//     return temp;
// });

function render() {
  const hasil = angka.map((nilai, index) => {
    let temp = ``;
    temp += `<div class="row">`;
    nilai.map((nilai2, index2) => {
      temp += `<div class="flex-item">${nilai2}</div>`;
    });
    temp += `</div>`;
    return temp;
  });
  container.innerHTML = hasil;
}

render();

function swap(x1, y1, x2, y2) {
  let temp = angka[x1][y1];
  angka[x1][y1] = angka[x2][y2];
  angka[x2][y2] = temp;
}

function checkOrdered() {
  let tempOrdered = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, ""],
  ];
  if (angka === tempOrdered) {
    alert("Selamat Kamu menang");
  }
}

const list = document.getElementsByClassName("flex-item");

function addEvent() {
  for (let indexlist = 0; indexlist < list.length; indexlist++) {
    list[indexlist].addEventListener("click", function (e) {
      console.log("click");
      let temp_angka = e.target.innerHTML;
      if (temp_angka !== "") {
        let indexout1 = "";
        let indexout2 = "";
        angka.map((value, index) => {
          value.map((value2, index2) => {
            if (value2 === parseInt(temp_angka)) {
              indexout1 = index;
              indexout2 = index2;
            }
          });
        });

        // top
        if (indexout1 !== 0) {
          if (angka[indexout1 - 1][indexout2] === "") {
            swap(indexout1, indexout2, indexout1 - 1, indexout2);
            render();
            addEvent();
            checkOrdered();
          }
        }

        // bottom
        if (indexout1 !== 3) {
          if (angka[indexout1 + 1][indexout2] === "") {
            swap(indexout1, indexout2, indexout1 + 1, indexout2);
            render();
            addEvent();
            checkOrdered();
          }
        }

        // left
        if (indexout2 !== 0) {
          if (angka[indexout1][indexout2 - 1] === "") {
            swap(indexout1, indexout2, indexout1, indexout2 - 1);
            render();
            addEvent();
            checkOrdered();
          }
        }

        // right
        if (indexout2 !== 3) {
          if (angka[indexout1][indexout2 + 1] === "") {
            swap(indexout1, indexout2, indexout1, indexout2 + 1);
            render();
            addEvent();
            checkOrdered();
          }
        }
      }
    });
  }
}

addEvent();
