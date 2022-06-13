const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProjetSchema = new Schema({
    isCheck: {
        type: Boolean,
        default: false,
      },

      Analyse_et_specification_des_exigences_de_securite_de_l_information:{
        type: Boolean,
        default:false
      },
    
      Securisation_des_services_d_application_sur_les_reseaux_publics:{
        type: Boolean,
        default:false
      
    },
    
      Protection_des_transactions_liees_aux_services_d_application:{
        type: Boolean,
        default:false
     
    },
    
      Politique_de_developpement_securise:{
        type: Boolean,
        default:false
     
    },
    
      Procedures_de_controle_des_changements_de_systeme:{
        type: Boolean,
        default:false
     
    },
    
      Revue_technique_des_applications_apres_changement_apporte_a_la_plateforme_d_exploitation:{
        type: Boolean,
        default:false
     
    },
    
      Restrictions_relatives_aux_changements_apportes_aux_progiciels:{
        type: Boolean,
        default:false
     
    },
   
      Principes_d_ingenierie_de_la_securite_des_systemes:{
        type: Boolean,
        default:false
      
    },
  
      Environnement_de_developpement_securise:{
        type: Boolean,
        default:false
     
    },
    
      Developpement_externalise:{
        type: Boolean,
        default:false
   
    },
    
      Test_de_la_securite_du_systeme:{
        type: Boolean,
        default:false
    
    },
   
      Test_de_conformite_du_systeme:{
        type: Boolean,
        default:false
      
    },
    
      Protection_des_donnees_de_test:{
        type: Boolean,
        default:false
      
    },
   
   
   
   

 
})
module.exports = mongoose.model('aDMsysInfo', ProjetSchema)