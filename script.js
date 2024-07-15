function indexOfIgnoreCase(s1, s2) {
  // write your code here
	if (!s1 || !s2) return -1; // Return -1 if either input string is empty
  const lowerCaseStr = s1.toLowerCase(); // Convert the original string to lowercase
  const lowerCaseSubStr = s2.toLowerCase(); // Convert the substring to lowercase
  return lowerCaseStr.indexOf(lowerCaseSubStr);
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
