const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProjetSchema = new Schema({
    isCheck: {
        type: Boolean,
        default: false,
      },


      Perimetre_de_securite_physique:{
        type:Boolean,
        default:false

    }, 
  
      Controle_acces_physique:{
        type:Boolean,
        default:false
 
    }, 

      Securisation_des_bureaux_des_salles_et_des_equipements:{
        type:Boolean,
        default:false
     
    }, 

      Protection_contre_les_menaces_exterieures_et_environnementales:{
        type:Boolean,
        default:false

    }, 

      Travail_dans_les_zones_securisees:{
        type:Boolean,
        default:false

    }, 

      Zones_de_livraison_et_de_chargement:{
        type:Boolean,
        default:false

    }, 

      Emplacement_et_protection_des_materiels:{
        type:Boolean,
        default:false

    }, 

      Services_generaux:{
        type:Boolean,
        default:false

    }, 

      Securite_du_cablage:{
        type:Boolean,
        default:false

    }, 

      Maintenance_des_materiels:{
        type:Boolean,
        default:false

    }, 

      Sortie_des_actifs:{
        type:Boolean,
        default:false

    }, 

      Securite_des_materiels_et_des_actifs_hors_des_locaux:{
        type:Boolean,
        default:false

    }, 

      Mise_au_rebut_ou_recyclage_securise_des_materiels:{
        type:Boolean,
        default:false

    }, 

      Materiels_utilisateur_laisses_sans_surveillance:{
        type:Boolean,
        default:false

    }, 

      Politique_du_bureau_propre_et_de_ecran_verrouille:{
        type:Boolean,
        default:false

    }, 


 
})
module.exports = mongoose.model('controlAcc', ProjetSchema)