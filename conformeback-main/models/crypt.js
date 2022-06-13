const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProjetSchema = new Schema({

    isCheck: {
        type: Boolean,
        default: false,
      },
 
      Politique_utilisation_des_mesures_cryptographique:{
        type:Boolean,
        default:false

    }, 

      Gestion_des_cles:{
        type:Boolean,
        default:false

    }, 
 
})
module.exports = mongoose.model('crypt', ProjetSchema)