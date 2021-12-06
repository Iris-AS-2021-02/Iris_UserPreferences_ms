
const express = require('express');

// Connect
require('../db/db');

const userSetting = require('./user_settings_model');

const app = express();
const port = 8087;
app.use(express.json())

app.post('/usersetting', (req, res) => {
    const newUserSetting = new userSetting({...req.body});
    newUserSetting.save().then(() => {
          res.send('New userSetting added successfully!')
    }).catch((err) => {
        console.log(err); 
        res.status(500).send('Internal Server Error!');
    })
})

app.get('/allusersettings', (req, res) => {
   userSetting.find().then((usersettings) => {
        if (usersettings.length !== 0) {
              res.json(usersettings)
        } else {
            res.status(404).send('User Settings not found');
       }
    }).catch((err) => {
         res.status(500).send('Internal Server Error!');
    });
})
app.get('/usersettingbyid/:id', (req, res) => {
    userSetting.findById(req.params.id).then((usersetting) => {
        if (usersetting) {
           res.json(usersetting)
        } else {
            res.status(404).send('User Settings not found');
        }
     }).catch((err) => {
        res.status(500).send('Internal Server Error!');
        console.log(err);
    });
})
app.delete('/deleteusersetting/:id', (req, res) => {
    userSetting.findOneAndRemove(req.params.id).then((usersetting) 	=> {
        if (usersetting) {
             res.json('userSetting deleted Successfully!')
        } else {
            res.status(404).send('userSetting Not found!'); 
        }
    }).catch((err) => {
         res.status(500).send('Internal Server Error!');
    });
});

app.post('/updateusersetting/:id',(req,res)=>{
    userSetting.findByIdAndUpdate(req.params.id,{...req.body}).then(()=>{
        res.send("Update Succesful");
    }).catch((err)=>{
        res.status(500).send('Internal Server Error!');
        console.log(err);
    })
})
app.listen(port, () => {
     console.log(`Up and Running on port ${port} - This is userSetting service`);
})