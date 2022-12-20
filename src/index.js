const fs = require("fs");
const path = require("path");

(function init() {
  const users = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../data/users.json"), "utf-8"));
  const mobileDevices = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../data/mobile_devices.json"), "utf-8"));
  const iotDevices = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../data/iot_devices.json"), "utf-8"));

  const startTime = performance.now();
  console.log(count(users, mobileDevices, iotDevices));
  const endTime = performance.now();
  console.log(`funtion count took ${endTime - startTime} milliseconds`)

})();


function count(users, mobileDevices, iotDevices) {
return users.map((user) => {
  // find all devices from a given user
  const devices = mobileDevices.filter((device) => device.user === user.id)

  if(!devices.length) {
    return `${user.name} has no iot devices`
  }

  // find all iots from a given user
  const iots = [];
  devices.forEach((dev) => {
  const filteredIotArr = iotDevices.filter((iot) => iot.mobile === dev.id)
  const iterator = filteredIotArr.values();
  for(const iot of iterator) {
    iots.push(iot)
  }
})

  return `${user.name} owns ${devices.length} mobile devices and ${iots.length} iots`
  // return `${user.name} owns ${iots.length} iot devices in total`

})



}


