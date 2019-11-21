"use strict";

const lengthInput = document.querySelector("#length");
const widthInput = document.querySelector("#width");

function calculate() {
  if (
    !lengthInput.validity.valid ||
    !widthInput.validity.valid ||
    !lengthInput.value ||
    !widthInput.value
  ) {
    return alert(`Invalid input data`);
  }

  const quantity = (lengthInput.value * widthInput.value) / 4;
  let pack_6 = Math.ceil(quantity / 6);
  let pack_8 = 0;
  const rest = quantity % 6;

  if (pack_6 > 1 && (rest === 1 || rest === 2)) {
    pack_6 -= 2;
    pack_8 = 1;
    console.log("Rest:" + (pack_6 * 6 + pack_8 * 8 - quantity));
    return alert(
      `You will need ${pack_6} packs of 6pcs, ${pack_8} packs of 8pcs`
    );
  }

  if (pack_6 > 2 && (rest === 3 || rest === 4)) {
    pack_6 -= 3;
    pack_8 = 2;
    console.log("Rest:" + (pack_6 * 6 + pack_8 * 8 - quantity));
    return alert(
      `You will need ${pack_6} packs of 6pcs, ${pack_8} packs of 8pcs`
    );
  }

  console.log("Rest:" + (pack_6 * 6 + pack_8 * 8 - quantity));
  return alert(
    `You will need ${pack_6} packs of 6pcs, ${pack_8} packs of 8pcs`
  );
}
