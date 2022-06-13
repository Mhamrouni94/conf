const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ProjetSchema = new Schema({
  isCheck: {
    type: Boolean,
    default: false,
  },

    Inventaire_des_actifs:{
      type:Boolean,
      default:false

  }, 

    Propriete_des_actifs:{
      type:Boolean,
      default:false

  }, 

    Utilisation_correcte_des_actifs:{
      type:Boolean,
      default:false

  }, 

    Restitution_des_actifs:{
      type:Boolean,
      default:false

  }, 

    Classification_des_informations:{
      type:Boolean,
      default:false
 
  }, 

    Marquage_des_informations:{
      type:Boolean,
      default:false

  }, 

    Manipulation_des_actifs:{
      type:Boolean,
      default:false
 
  }, 

    Gestion_des_supports_amovibles:{
      type:Boolean,
      default:false

  }, 
 
    Mise_au_rebut_des_supports:{
      type:Boolean,
      default:false
 
  }, 

    Transfert_physique_des_supports:{
      type:Boolean,
      default:false
  
  }, 
});
module.exports = mongoose.model("gesActif", ProjetSchema);
