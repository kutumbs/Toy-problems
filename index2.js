// program that takes the speed of a car as input e.g 80. If the speed is less than 70, it should print “Ok” otherwise returns demerit points and suspended // 
const consoleInput = prompt("Enter Speed");
 //taking in speed parameter 
 function speedDetector(speed) {
   //variables to store the speedLimit,pointsPerDemerit,pointsThreshold 
   const speedLimit = 70; 
   const pointsPerDemerit = 5; 
   const pointsThreshold = 12; if (speed < speedLimit) { return "Ok"; } 
   else { const demeritPoints = Math.floor((speed - speedLimit) / pointsPerDemerit); if (demeritPoints > pointsThreshold) { return "License suspended"; } 
   else { return `Points: ${demeritPoints}`; } } } 
   // displaying the demerit points on the console console.log(speedDetector(90));