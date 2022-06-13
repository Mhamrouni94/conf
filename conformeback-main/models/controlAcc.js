const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProjetSchema = new Schema({
    isCheck: {
        type: Boolean,
        default: false,
      },

 
      Politique_de_controle_acces:{
        type:Boolean,
        default:false
      
    }, 

      Acces_aux_reseaux_et_aux_services_reseau:{
        type:Boolean,
        default:false

    }, 

      Enregistrement_et_desinscription_des_utilisateurs:{
        type:Boolean,
        default:false

    }, 

      Distribution_des_acces_aux_utilisateur:{
        type:Boolean,
        default:false

    }, 

      Gestion_des_droits_acces_a_privileges:{
        type:Boolean,
        default:false

    }, 

      Gestion_des_informations_secretes_authentification_des_utilisateurs:{
        type:Boolean,
        default:false

    }, 

      Revue_des_droits_acces_utilisateurs:{
        type:Boolean,
        default:false

    }, 

      Suppression_ou_adaptation_des_droits_acces:{
        type:Boolean,
        default:false

    }, 
  
      Utilisation_informations_secretes_authentification:{
        type:Boolean,
        default:false

    }, 

      Restriction_acces_a_information:{
        type:Boolean,
        default:false
  
    }, 

      Securiser_les_procedures_de_connexion:{
        type:Boolean,
        default:false
 
    }, 
   
      Systeme_de_gestion_des_mots_de_passe:{
        type:Boolean,
        default:false
     
    }, 
  
      Utilisation_de_programmes_utilitaires_a_privileges:{
        type:Boolean,
        default:false
  
    }, 

      Controle_acces_au_code_source_des_programmes:{
        type:Boolean,
        default:false
     
    }, 

 
})
module.exports = mongoose.model('controlAcc', ProjetSchema)