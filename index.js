function findMatching(driversNames, name) {
  return driversNames.filter(
    (driverName) => driverName.toLowerCase() === name.toLowerCase()
  );
}

function fuzzyMatch(driversNames, string) {
  return driversNames.filter((driverName) =>
    driverName.toLowerCase().indexOf(string.toLowerCase()) === 0
  );
  // can also use startsWith(string)
}

function matchName(drivers, string) {
   return drivers.filter((driver) => driver.name === string )
}
