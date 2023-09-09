// Code your solution in this file!
 function distanceFromHqInBlocks(someValue) {
    const blocks = 42 - someValue ;
    return Math. abs(blocks)
  }

  function distanceFromHqInFeet(someValue) {
  return distanceFromHqInBlocks(someValue) * 264;

  // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
  // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks

  // the return value of distanceFromHqInBlocks can then be used to calculate feet
}

  function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    const distance = (destination - start)*264;
    return Math. abs(distance)
  }

  function calculatesFarePrice(start, destination) {
    const distanceFeet = (destination - start) * 264;
    const distance = Math. abs(distanceFeet);

    if (distance < 400){
        return 0;

    }
    else if (distance >= 400 && distance <= 2000){
        return (distance - 400) * .02;

    }
    else if (distance >2000 && distance <= 2500){
        return 25;

    }
    else {
    return 'cannot travel that far';

    }
  }