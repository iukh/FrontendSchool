function testJs(name) {
var a = document.getElementById("content");
console.log(a);
a.innerHTML = name;
}

module.exports = {
    testJs: testJs
};