var skills1 = ["Java", "PL/SQL", "SOA", "COBOL", "Salesforce"];
var skills2 = ["JavaScriPt", "ReactJS", "React Native"];

function temHabilitadeJavascript(skills) {
  var skillsLowerCase = skills.toString().toLowerCase();

  console.log(skillsLowerCase.indexOf("javascript") != -1 ? true : false);
}

temHabilitadeJavascript(skills1);
temHabilitadeJavascript(skills2);
