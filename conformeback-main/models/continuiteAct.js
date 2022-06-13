const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProjetSchema = new Schema({
    isCheck: {
        type: Boolean,
        default: false,
      },

  
      Organisation_de_la_continuite_de_la_securite_de_l_information:{
        type: Boolean,
        default:false
  
    },
  
      Mise_en_oeuvre_de_la_continuite_de_la_securite_de_l_information:{
        type: Boolean,
        default:false
    
    },
    
      Verifier_revoir_et_evaluer_la_continuite_de_la_securite_de_l_information:{
        type: Boolean,
        default:false
    
    },
    
      Disponibilite_des_moyens_de_traitement_de_l_information:{
        type: Boolean,
        default:false
   
    },
 

 
})
module.exports = mongoose.model('continuiteAct', ProjetSchema)