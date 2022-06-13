const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ProjetSchema = new Schema({
  isCheck: {
    type: Boolean,
    default: false,
  },

  Politiques_de_securite_de_l_information: {
    type: Boolean,
    default: false,
  },

  Revue_des_politiques_de_securite_de_l_information: {
    type: Boolean,
    default: false,
  },
});
module.exports = mongoose.model("polsec", ProjetSchema);
