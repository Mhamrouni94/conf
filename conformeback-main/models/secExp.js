const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProjetSchema = new Schema({
    isCheck: {
        type: Boolean,
        default: false,
      },


      Procedures_exploitation_documentees:{
        type: Boolean,
        default:false

    },

      Gestion_des_changements:{
        type: Boolean,
        default:false

    },

      Dimensionnement:{
        type: Boolean,
        default:false

    },

      Separation_des_environnements_de_developpement_de_test_et_exploitation:{
        type: Boolean,
        default:false

    },

      Mesures_contre_les_logiciels_malveillants:{
        type: Boolean,
        default:false

    },

      Sauvegarde_des_informations:{
        type: Boolean,
        default:false

    },

      Journalisation_des_evenements:{
        type: Boolean,
        default:false

    },

      Protection_de_information_journalisee:{
        type: Boolean,
        default:false

    },

      Journaux_administrateur_et_operateur:{
        type: Boolean,
        default:false

    },

      Synchronisation_des_horloges:{
        type: Boolean,
        default:false

    },

      Installation_de_logiciels_sur_des_systemes_en_exploitation:{
        type: Boolean,
        default:false

    },

      Gestion_des_vulnerabilites_techniques:{
        type: Boolean,
        default:false

    },
 
      Restrictions_liees_a_installation_de_logiciels:{
        type: Boolean,
        default:false
  
    },

      Mesures_relatives_a_audit_des_systemes_information:{
        type: Boolean,
        default:false
   
    },
 
})
module.exports = mongoose.model('secExp', ProjetSchema)