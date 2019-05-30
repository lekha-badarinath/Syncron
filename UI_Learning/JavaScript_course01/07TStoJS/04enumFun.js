//enum is a feature in ts which allows us to club similar data together.
// const colorBlue = 1
// const colorRed = 2
// const colorGreen = 3
var Color;
(function (Color) {
    Color[Color["red"] = 2] = "red";
    Color[Color["green"] = 3] = "green";
    Color[Color["blue"] = 1] = "blue";
})(Color || (Color = {}));
; //convert it to js and compare the code
var green = Color.green;
