// CONEXION BASE DE DATOS
// ESPACIO CRUD DE USERS
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://admin:admin@cluster0.bs9d2.mongodb.net/test?retryWrites=true&w=majority", { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
}).then(() => {
    console.log('Connection successful!');
}).catch((e) => {
    console.log('Connection failed!');
    console.log(e);
})




  