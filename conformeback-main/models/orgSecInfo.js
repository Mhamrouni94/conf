const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProjetSchema = new Schema({
    isCheck: {
        type: Boolean,
        default: false,
      },


      Fonctions_et_responsabilites_liees_a_la_securite_de_l_information:{
        type: Boolean,
        default:false

    },

      Separation_des_Taches:{
        type: Boolean,
        default:false

    },

      Relation_savec_Les_Autorites:{
        type: Boolean,
        default:false

    },

      Relations_Avec_Des_Groupes_De_Travail_Specialises:{
        type:Boolean,
        default:false

    }, 

      La_securite_de_information_dans_la_gestion_de_projet:{
        type:Boolean,
        default:false
     
    }, 
  
 
      Politique_en_matiere_appareils_mobiles:{
        type: Boolean,
        default:false
      
    },
  
      Teletravail:{
        type: Boolean,
        default:false
      
    },
})
module.exports = mongoose.model('orgSecInfo', ProjetSchema)