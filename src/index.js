const fs = require("fs");
const path = require("path");

(function init() {
  const users = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../data/users.json"), "utf-8"));
  const mobileDevices = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../data/mobile_devices.json"), "utf-8"));
  const iotDevices = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../data/iot_devices.json"), "utf-8"));

  const startTime = performance.now();
  console.log(countIotDevicesByUserName(users, mobileDevices, iotDevices));
  const endTime = performance.now();

  const duration = (endTime - startTime) / 1000;
  console.log(`function count took ${duration.toFixed(3)} seconds`);
})();

function countIotDevicesByUserName(users, mobileDevices, iotDevices) {
  const userIdToNameMap = new Map(users.map((user) => [user.id, user.name]));
  const mobileIdToUserIdMap = new Map(mobileDevices.map((device) => [device.id, device.user]));

  return iotDevices.reduce((users, iot) => {
    //
    const userId = mobileIdToUserIdMap.get(iot.mobile);
    const userName = userIdToNameMap.get(userId);
    const name = userName.split(" ")[0];

    if (!users[name]) {
      users[name] = 0;
    }
    users[name]++;
    return users;
  }, {});
}
