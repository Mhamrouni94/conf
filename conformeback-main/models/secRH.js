const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProjetSchema = new Schema({
    isCheck: {
        type: Boolean,
        default: false,
      },


      Selection_des_candidats:{
        type:Boolean,
        default:false
   
    }, 

      Termes_et_conditions_embauche:{
        type:Boolean,
        default:false

    }, 
   
 
      Responsabilites_de_la_direction:{
        type:Boolean,
        default:false

    }, 

      Sensibilisation_apprentissage_et_formation_a_la_securite_de_information:{
        type:Boolean,
        default:false

    }, 
 
      Processus_disciplinaire:{
        type:Boolean,
        default:false

    }, 

      Achevement_ou_modification_des_responsabilites_associees_au_contrat_de_travail:{
        type:Boolean,
        default:false

    }, 
})
module.exports = mongoose.model('secRH', ProjetSchema)