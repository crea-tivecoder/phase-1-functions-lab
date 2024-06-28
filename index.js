// Code your solution in this file!
function distanceFromHqInBlocks(pickUpPoint) {
const Hqdistance = 42;
    if (pickUpPoint > Hqdistance) {
        return pickUpPoint - Hqdistance;
     } else {
        return Hqdistance - pickUpPoint;
     }
}

function distanceFromHqInFeet(pickUpPoint) {
    const distanceInBlocks = distanceFromHqInBlocks(pickUpPoint);
    return distanceInBlocks * 264;
}
function distanceTravelledInFeet(pickUpPoint, destinationBlock) {
    if (pickUpPoint > destinationBlock) {
        return (pickUpPoint - destinationBlock) * 264;
    } else {
        return ( destinationBlock - pickUpPoint) * 264;
    }
}

function calculatesFarePrice(pickUpPoint, destinationBlock) {
    const totalFeetTravelled = distanceFromHqInFeet(pickUpPoint, destinationBlock);
    if (totalFeetTravelled <= 400) {
        return 0;
            // free ride for the first 400 feet
    } else if (totalFeetTravelled > 400 && totalFeetTravelled <= 2000) {
        return (totalFeetTravelled - 400) * 0.02;
            //2 cents per foot for the distance over 400 feet
    } else if (totalFeetTravelled >= 2000 && totalFeetTravelled <= 2500) {
        return 25.0;
            //flatrate for distances over 2000 feet but within 2500 feet
    } else {
        return "cannot travel that far";
            //Rides over 2500 feet are not allowed
     } 
} 

