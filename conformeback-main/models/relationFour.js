const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProjetSchema = new Schema({
    isCheck: {
        type: Boolean,
        default: false,
      },


      Politique_de_securite_de_l_information_dans_les_relations_avec_les_fournisseurs:{
        type: Boolean,
        default:false

    },

      La_securite_dans_les_accords_conclus_avec_les_fournisseurs:{
        type: Boolean,
        default:false

    },

      Chaine_d_approvisionnement_des_produits_et_des_services_informatique:{
        type: Boolean,
        default:false
  
    },

      Surveillance_et_revue_des_services_des_fournisseurs:{
        type: Boolean,
        default:false
    
    },
  
      Gestion_des_changements_apportes_dans_les_services_des_fournisseurs:{
        type: Boolean,
        default:false
     
    },
 
})
module.exports = mongoose.model('relationFour', ProjetSchema)