const mongoose = require('mongoose');
const userSettingsSchema = mongoose.Schema({


  userId: {
    type: String,
    require: true
  },
  blueTickMessageConfirmation: {
     type: Boolean,
     require: true
   },
   seenStateConfirmation: {
      type: Boolean,
      require: true
   },
   showLastOnline: {
       type: Boolean,
       require: true
   },
   setDualAuth: {
       type: Boolean,
       require: true
   },
   linkedDevices: [{
     deviceName:String,
     deviceId:String
   }],
})

const userSettings = mongoose.model("usersetting", userSettingsSchema);

module.exports = userSettings;