console.log("===============================");
try {
  var a = x + y;
} catch (error) {
  console.log(error);
};
console.log("=========================");
try {
  var a = x + y;
} catch (error) {
  console.log(error.name);
  console.log(error.message);
};
console.log("=========================");
try {
  console.log(2 - 1);
  x = 4 - y;
} catch (error) {
  console.log(error);
  console.log("++++++++++++++++++++++++");
};
console.log("=========================1");

try {
  var number = "String";
  if (typeof number !== "number") {
    throw new Error("Katastrofalna greska");
  }
} catch (error) {
  console.log(error);
};
console.log("=========================1");
try {
  var number = "String";
  if (typeof number !== "number") {
    throw {
      name: "MyError",
      message: "Katastrofalna greska",
    };
  }
} catch (error) {
  console.log(error);
};
console.log("=========================1");
try {
  var x = 2 - f;
} catch (error) {
  console.log(error);
} finally {
  console.log("Nastavi da radis nest");
};
console.log("=========================1");
function checkType(nesto) {
  if (typeof nesto !== "number") {
    throw {
      name: "MyError",
      message: "Katastrofalna greska",
    };
  };
};
try {
  checkType("nesto");
} catch (error) {
  console.log(error);
};
