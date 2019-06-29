const geolib = require("geolib");

const checkIfInBounds = (shopLocation, center) => {
  //isPointWithinRadius(point, centerPoint, radius)
  console.log(shopLocation, center);
  return geolib.isPointWithinRadius(
    { latitude: shopLocation.lat, longitude: shopLocation.lng },
    { latitude: center.lat, longitude: center.lng },
    500
  );
};

export default checkIfInBounds;
