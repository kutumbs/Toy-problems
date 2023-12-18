function speedDetector(speed) {
    if (speed < 70) {
      return "Ok";
    } else if (speed>= 70) { 
  let demeritPoints = Math.floor((speed - 70) / 5);
      return `Points: ${demeritPoints}`;
    } else {
      demeritpoints > 12 ? "License Suspended" : "Points: " + demeritPoints;
    }
  }