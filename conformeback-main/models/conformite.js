const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProjetSchema = new Schema({
    isCheck: {
        type: Boolean,
        default: false,
      },

    
      Identification_de_la_legislation_et_des_exigences_contractuelles_applicables:{
        type: Boolean,
        default:false
      
    },
    
      Droits_de_propriete_intellectuelle:{
        type: Boolean,
        default:false
      
    },
    
      Protection_des_enregistrement:{
        type: Boolean,
        default:false
      
    },
    
      Protection_de_la_vie_privee_et_protection_des_donnees_a_caractere_personnel:{
        type: Boolean,
        default:false
     
    },
   
      Reglementation_relative_aux_mesures_cryptographiques:{
        type: Boolean,
        default:false
      
    },
   
      Revue_independnte_de_la_securite_de_l_information:{
        type: Boolean,
        default:false
     
    },
   
      Conformite_avec_les_politiques_et_les_normes_de_securite:{
        type: Boolean,
        default:false
      
    },
    
      Verification_de_la_conformite_technique:{
        type: Boolean,
        default:false
      
    },
   

 
})
module.exports = mongoose.model('conformite', ProjetSchema)