const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProjetSchema = new Schema({
    isCheck: {
        type: Boolean,
        default: false,
      },

      Responsabilites_et_procedures:{
        type: Boolean,
        default:false

    },

      Signalement_des_evenements_lies_a_la_securite_de_l_information:{
        type: Boolean,
        default:false

    },

      Signalement_des_failles_liees_a_la_securite_de_l_information:{
        type: Boolean,
        default:false

    },
 
      Appreciation_des_evenements_lies_a_la_securite_de_l_information_et_prise_de_decision:{
        type: Boolean,
        default:false

    },

      Reponse_aux_incidents_lies_a_la_securite_de_l_information:{
        type: Boolean,
        default:false
 
    },
  
      Tirer_des_enseignements_des_incidents_lies_a_la_securite_de_l_information:{
        type: Boolean,
        default:false
 
    },
 
      Collecte_de_preuves:{
        type: Boolean,
        default:false
   
    },
  
 
})
module.exports = mongoose.model('gestionIncidents', ProjetSchema)