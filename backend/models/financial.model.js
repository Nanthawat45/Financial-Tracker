const {Datatypes} = require("sequelize")
const sequelize = require("./db");

const Financial = sequelize.define("financial", {
  id: {
    type: Datatypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: Datatypes.STRING,
    allowNull: false,
  },
  description: {
    type: Datatypes.STRING,
    allowNull: false,
  },
  data:{
    type:Datatypes.DATE,
    allowNull:false
  },
  amount:{
    type: Datatypes.DECIMAL,
    allowNull: false
  },
  category:{
    type:Datatypes.STRING,
    allowNull:false
  },
  paymentMethod:{
    type:Datatypes.STRING,
    allowNull:false
  }
});

Financial.sync({force:false}).then(()=>{
    console.log("Table created or already exists");
}).catch((error)=>{
console.log("Error created or Financial Table", error);
})