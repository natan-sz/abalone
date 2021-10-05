var sex = document.getElementById("sex");
var length = document.getElementById("length");
var diameter = document.getElementById("diameter");
var height = document.getElementById("height");
var wholeWeight = document.getElementById("whole-weight");
var shuckedWeight = document.getElementById("shucked-weight");
var visceraWeight = document.getElementById("viscera-weight");
var shellWeight = document.getElementById("shell-weight");
var result_text = document.getElementById("result_text");
var requestButton = document.getElementById("request-button");

var lengthLabel = document.getElementById("length-label");
var diameterLabel = document.getElementById("diameter-label");
var heightLabel = document.getElementById("height-label");
var wholeWeightLabel = document.getElementById("whole-weight-label");
var shuckedWeightLabel = document.getElementById("shucked-weight-label");
var visceraWeightLabel = document.getElementById("viscera-weight-label");
var shellWeightLabel = document.getElementById("shell-weight-label");

var api_url = "https://664knkwxhg.execute-api.us-east-1.amazonaws.com/abalone_age/abalone-age" 

function callApi() {
let properties = [sex.value,length.value,diameter.value,height.value,wholeWeight.value, shuckedWeight.value, visceraWeight.value,shellWeight.value]

let payload = {"data":properties.toString() };
console.log(payload)

let data = new FormData();
data.append("json", JSON.stringify(payload));

fetch(api_url,
{
	method: "post",
	body: data
})
.then(function(res){return res.json(); })
.then(function(data){
	console.log(typeof data);
	console.log("Predicted Age is: " + JSON.stringify(data["predictions"][0]["score"]) + " years");
})

}

requestButton.addEventListener("click",callApi);

window.onload = (event) => {
	changeDiameter();
	changeHeight();
	changeWholeWeight();
	changeShuckedWeight();
	changeVisceraWeight();
	changeShellWeight();
	changeLength();
};

function changeDiameter(){
	diameterLabel.innerHTML = "Diameter: " + diameter.value;
}
function changeHeight(){
	heightLabel.innerHTML = "Height: " + height.value;
}
function changeWholeWeight(){
	wholeWeightLabel.innerHTML = "Whole Weight: " + wholeWeight.value;
}
function changeShuckedWeight(){
	shuckedWeightLabel.innerHTML = "Shucked Weight: " + shuckedWeight.value;
}
function changeVisceraWeight(){
	visceraWeightLabel.innerHTML = "Viscera Weight: " + visceraWeight.value;
}
function changeShellWeight(){
	shellWeightLabel.innerHTML = "Shell Weight: " + shellWeight.value;
}
function changeLength(){
	lengthLabel.innerHTML = "Length: " + length.value;
}
