// Your JS code here
var subTypeElement = document.querySelector("#subscription");
var subDurationElement = document.querySelector("#months");
var result = document.querySelector(".result");
var subType = "Basic";
var subDuration = 1;

subTypeElement.addEventListener("change", getSubs);
subDurationElement.addEventListener("change", getSubsDur);
function getSubs(e) {
  subType = e.target.value;
  // console.log(subType);
  updateSubscriptionDiv();
}
function getSubsDur(e) {
  subDuration = e.target.value;
  // console.log(subDuration);
  updateSubscriptionDiv();
}
var updateSubscriptionDiv = function () {
  var monthyCost = 5;
  if (subType === "standard") {
    monthyCost = 7;
  }
  if (subType === "premium") {
    monthyCost = 10;
  }
  var total = subDuration * monthyCost;
  result.innerText = `You have choosen ${subDuration} month ${subType} plan for $${total}`;
};
