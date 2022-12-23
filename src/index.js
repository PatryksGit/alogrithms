const fs = require("fs");
const path = require("path");

(function init() {
  const users = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "../data/users.json"), "utf-8")
  );
  const mobileDevices = JSON.parse(
    fs.readFileSync(
      path.resolve(__dirname, "../data/mobile_devices.json"),
      "utf-8"
    )
  );
  const iotDevices = JSON.parse(
    fs.readFileSync(
      path.resolve(__dirname, "../data/iot_devices.json"),
      "utf-8"
    )
  );

  const startTime = performance.now();
  console.log(count(users, mobileDevices, iotDevices));
  const endTime = performance.now();

  const duration = (endTime - startTime) / 1000;
  console.log(`function count took ${duration.toFixed(2)} seconds`);
})();

// function count(users, mobileDevices, iotDevices) {
//   const mobiles_to_users = {};
//
//   const users_with_iots = iotDevices.reduce((acc, iot) => {
//     if (!mobiles_to_users[iot.mobile]) {
//       mobiles_to_users[iot.mobile] = mobileDevices.find((currentMobile) => {
//         return currentMobile.id === iot.mobile;
//       }).user;
//     }
//     const userId = mobiles_to_users[iot.mobile];
//
//     if (!acc[userId]) {
//       acc[userId] = [];
//     }
//     acc[userId].push(iot);
//     return acc;
//   }, {});
//   console.log(users_with_iots);
// }

function count(users, mobileDevices, iotDevices) {
  let mobileDevicesCopy = [...mobileDevices];

  return users.map((user) => {
    // find all devices from a given user
    const devices = mobileDevicesCopy.filter(
      (device) => device.user === user.id
    );

    mobileDevicesCopy = mobileDevicesCopy.filter(
      (mobile) => !devices.includes(mobile)
    );

    // find all iots from a given user
    if (!devices.length) {
      return `${user.name} has no iot devices`;
    }

    const iots = [];
    devices.forEach((dev) => {
      const filteredIotsArr = iotDevices.filter((iot) => iot.mobile === dev.id);
      const iterator = filteredIotsArr.values();
      for (const iot of iterator) {
        iots.push(iot);
      }
    });

    return `${user.name} owns ${devices.length} mobile devices and ${iots.length} iots`;
  });
}
