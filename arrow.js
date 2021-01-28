let getTriangle = (base, height) => {
  return (base * height) / 2;
};
console.log("三角形の面積は" + getTriangle(10, 2));

let getSuare = (base, height) => {
  return base * height;
};
console.log("四角形の面積は" + getSuare(10, 2));

let getTrapezoid = (base, top, height) => {
  return ((base + top) * height) / 2;
};
console.log("台形の面積は" + getTrapezoid(10, 2, 10));

let getLineLen = (line1, line2) => line1 + line2;
console.log("線の長さは" + getLineLen(10, 2));

let getSuare2 = (base) => base * 2;
console.log("正方形の面積は" + getSuare2(10));
