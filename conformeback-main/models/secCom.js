const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProjetSchema = new Schema({
    isCheck: {
        type: Boolean,
        default: false,
      },

   
      Controle_des_reseaux:{
        type: Boolean,
        default:false
    
    },
  
      Securite_des_services_de_reseau:{
        type: Boolean,
        default:false
      
    },

      Cloisonnement_des_reseaux:{
        type: Boolean,
        default:false
    
    },
    
      Politiques_et_procedures_de_transfert_de_l_information:{
        type: Boolean,
        default:false
    
    },
 
      Accords_en_matiere_de_transfert_d_information:{
        type: Boolean,
        default:false
    
    },
 
      Messagerie_electronique:{
        type: Boolean,
        default:false
    
    },
  
      Engagements_de_confidentialite_ou_de_non_divulgation:{
        type: Boolean,
        default:false
    
    },
 
})
module.exports = mongoose.model('secCom', ProjetSchema)