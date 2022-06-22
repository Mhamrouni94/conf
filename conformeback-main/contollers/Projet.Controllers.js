const jwt = require("jsonwebtoken");
const config = require("config");
const projet = require("../models/projet");
const secRH = require("../models/secRH");
const secCom = require("../models/secCom");
const crypt = require("../models/crypt");
const polsec = require("../models/polsec");
const orgSecInfo = require("../models/orgSecInfo");
const gesActif = require("../models/gesActif");
const controlAcc = require("../models/controlAcc");
const secExp = require("../models/secExp");
const aDMsysInfo = require("../models/aDMsysInfo");
const relationFour = require("../models/relationFour");
const gestionIncidents = require("../models/gestionIncidents");
const continuiteAct = require("../models/continuiteAct");
const conformite = require("../models/conformite");
const secret = config.get("secret");

// creation de projet
exports.creeProjet = async (req, res) => {
  const { nameProject, Organisme } = req.body;
  const token = req.headers.authorization;
  try {
    const decodedToken = await jwt.verify(token, secret);
    const user_ID = await decodedToken.id;
    console.log(nameProject);

    let Polsec = await new polsec({});
    Polsec.save();
    console.log(Polsec);

    let OrgSecInfo = await new orgSecInfo({});
    OrgSecInfo.save();

    let SecRH = await new secRH({});
    SecRH.save();

    let GesActif = await new gesActif({});
    GesActif.save();

    let ControlAcc = await new controlAcc({});
    ControlAcc.save();

    let Crypto = await new crypt({});
    Crypto.save();

    let SecExp = await new secExp({});
    SecExp.save();

    let SecCom = await new secCom({});
    SecCom.save();

    let ADMsysInfo = await new aDMsysInfo({});
    ADMsysInfo.save();

    let RelationFour = await new relationFour({});
    RelationFour.save();

    let GestionIncidents = await new gestionIncidents({});
    GestionIncidents.save();

    let ContinuiteAct = await new continuiteAct({});
    ContinuiteAct.save();

    let Conformite = await new conformite({});
    Conformite.save();

    let newProjet = await new projet({
      ProjetName: nameProject,
      Organisme: Organisme,
      user_ID: user_ID,
      politiqueDeSecurite: Polsec._id,
      organisationDeSecurite: OrgSecInfo._id.toString(),
      SecuriteRH: SecRH._id.toString(),
      gestionDesActifs: GesActif._id.toString(),
      controlAcces: ControlAcc._id.toString(),
      cryptograghie: Crypto._id.toString(),
      securiteExploitation: SecExp._id.toString(),
      securiteCommunication: SecCom._id.toString(),
      accDevMainSysInfo: ADMsysInfo._id.toString(),
      relationsAvecFournisseurs: RelationFour._id.toString(),
      gestionIncidents: GestionIncidents._id.toString(),
      gestionDeContinuite: ContinuiteAct._id.toString(),
      conformite: Conformite._id.toString(),
    });
    newProjet.save();
    return res.send(newProjet);
  } catch (error) {
    return res.status(401).json(error);
  }
};

//get projet

exports.getProject = async (req, res) => {
  const token = req.headers.authorization;
  try {
    const decodedToken = await jwt.verify(token, secret);
    const id_user = await decodedToken.id;
    let project = await projet.find({ user_ID: id_user });
    
    const Proj = [];
    if (!project) {
      return res.status(201).json("aucun projet ");
    }

    for (let i = 0; i < project.length; i++) {
      const politiqueDeSecurite = project[i].politiqueDeSecurite.toString();
      let Polsec = await polsec.findOne({ _id: politiqueDeSecurite });
      if (Polsec) {
        const proj = {
          Politiques_de_securite_de_l_information:
            Polsec.Politiques_de_securite_de_l_information,
          Revue_des_politiques_de_securite_de_l_information:
            Polsec.Revue_des_politiques_de_securite_de_l_information,
        };
        Proj.push(proj);
      }
      /*   const organisationDeSecurite = project[i].organisationDeSecurite;
        let OrgSecInfo = await orgSecInfo.findById({ organisationDeSecurite });
        Fonctions_et_responsabilites_liees_a_la_securite_de_l_information =
          OrgSecInfo.Fonctions_et_responsabilites_liees_a_la_securite_de_l_information;
        Separation_des_Taches = OrgSecInfo.Separation_des_Taches;
        Relation_savec_Les_Autorites = OrgSecInfo.Relation_savec_Les_Autorites;
        Relations_Avec_Des_Groupes_De_Travail_Specialises =
          OrgSecInfo.Relations_Avec_Des_Groupes_De_Travail_Specialises;
        La_securite_de_information_dans_la_gestion_de_projet =
          OrgSecInfo.La_securite_de_information_dans_la_gestion_de_projet;
        Politique_en_matiere_appareils_mobiles =
          OrgSecInfo.Politique_en_matiere_appareils_mobiles;
        Teletravail = OrgSecInfo.Teletravail;

        const SecuriteRH = project[i].SecuriteRH;
        let SecRH = await secRH.findById({ SecuriteRH });
        Selection_des_candidat = SecRH.Selection_des_candidat;
        Termes_et_conditions_embauche = SecRH.Termes_et_conditions_embauche;
        Responsabilites_de_la_direction = SecRH.Responsabilites_de_la_direction;
        Sensibilisation_apprentissage_et_formation_a_la_securite_de_information =
          SecRH.Sensibilisation_apprentissage_et_formation_a_la_securite_de_information;
        Processus_disciplinaire = SecRH.Processus_disciplinaire;
        Achevement_ou_modification_des_responsabilites_associees_au_contrat_de_travail =
          SecRH.Achevement_ou_modification_des_responsabilites_associees_au_contrat_de_travail;

        const gestionDesActifs = project[i].gestionDesActifs;
        let GesActif = await gesActif.findById({ gestionDesActifs });
        Inventaire_des_actifs = GesActif.Inventaire_des_actifs;
        Propriete_des_actifs = GesActif.Propriete_des_actifs;
        Utilisation_correcte_des_actifs =
          GesActif.Utilisation_correcte_des_actifs;
        Restitution_des_actifs = GesActif.Restitution_des_actifs;
        Classification_des_informations =
          GesActif.Classification_des_informations;
        Marquage_des_informations = GesActif.Marquage_des_informations;
        Manipulation_des_actifs = GesActif.Manipulation_des_actifs;
        Mise_au_rebut_des_supports = GesActif.Mise_au_rebut_des_supports;
        Transfert_physique_des_supports =
          GesActif.Transfert_physique_des_supports;

        const controlAcces = project[i].controlAcces;
        let ControlAcc = await controlAcc.findById({ controlAcces });
        Politique_de_controle_acces = ControlAcc.Politique_de_controle_acces;
        Acces_aux_reseaux_et_aux_services_reseau =
          ControlAcc.Acces_aux_reseaux_et_aux_services_reseau;
        Enregistrement_et_desinscription_des_utilisateurs =
          ControlAcc.Enregistrement_et_desinscription_des_utilisateurs;
        Distribution_des_acces_aux_utilisateur =
          ControlAcc.Distribution_des_acces_aux_utilisateur;
        Gestion_des_droits_acces_a_privileges =
          ControlAcc.Gestion_des_droits_acces_a_privileges;
        Gestion_des_informations_secretes_authentification_des_utilisateurs =
          ControlAcc.Gestion_des_informations_secretes_authentification_des_utilisateurs;
        Revue_des_droits_acces_utilisateurs =
          ControlAcc.Revue_des_droits_acces_utilisateurs;
        Suppression_ou_adaptation_des_droits_acces =
          ControlAcc.Suppression_ou_adaptation_des_droits_acces;
        Utilisation_informations_secretes_authentification =
          ControlAcc.Utilisation_informations_secretes_authentification;
        Restriction_acces_a_information =
          ControlAcc.Restriction_acces_a_information;
        Securiser_les_procedures_de_connexion =
          ControlAcc.Securiser_les_procedures_de_connexion;
        Systeme_de_gestion_des_mots_de_passe =
          ControlAcc.Systeme_de_gestion_des_mots_de_passe;
        Utilisation_de_programmes_utilitaires_a_privileges =
          ControlAcc.Utilisation_de_programmes_utilitaires_a_privileges;
        Controle_acces_au_code_source_des_programmes =
          ControlAcc.Controle_acces_au_code_source_des_programmes;

        const cryptograghie = project[i].cryptograghie;
        let Crypto = await crypto.findById({ cryptograghie });
        Politique_utilisation_des_mesures_cryptographique =
          Crypto.Politique_utilisation_des_mesures_cryptographique;
        Gestion_des_cles = Crypto.Gestion_des_cles;

        const securiteExploitation = project[i].securiteExploitation;
        let SecExp = await secExp.findById({ securiteExploitation });
        Procedures_exploitation_documentees =
          SecExp.Procedures_exploitation_documentees;
        Gestion_des_changements = SecExp.Gestion_des_changements;
        Dimensionnement = SecExp.Dimensionnement;
        Separation_des_environnements_de_developpement_de_test_et_exploitation =
          SecExp.Separation_des_environnements_de_developpement_de_test_et_exploitation;
        Mesures_contre_les_logiciels_malveillants =
          SecExp.Mesures_contre_les_logiciels_malveillants;
        Sauvegarde_des_informations = SecExp.Sauvegarde_des_informations;
        Journalisation_des_evenements = SecExp.Journalisation_des_evenements;
        Protection_de_information_journalisee =
          SecExp.Protection_de_information_journalisee;
        Journaux_administrateur_et_operateur =
          SecExp.Journaux_administrateur_et_operateur;
        Synchronisation_des_horloges = SecExp.Synchronisation_des_horloges;
        Installation_de_logiciels_sur_des_systemes_en_exploitation =
          SecExp.Installation_de_logiciels_sur_des_systemes_en_exploitation;
        Gestion_des_vulnerabilites_techniques =
          SecExp.Gestion_des_vulnerabilites_techniques;
        Restrictions_liees_a_installation_de_logiciels =
          SecExp.Restrictions_liees_a_installation_de_logiciels;
        Mesures_relatives_a_audit_des_systemes_information =
          SecExp.Mesures_relatives_a_audit_des_systemes_information;

        const securiteCommunication = project[i].securiteCommunication;
        let SecCom = await secCom.findById({ securiteCommunication });
        Controle_des_reseaux = SecCom.Controle_des_reseaux;
        Securite_des_services_de_reseau =
          SecCom.Securite_des_services_de_reseau;
        Cloisonnement_des_reseaux = SecCom.Cloisonnement_des_reseaux;
        Politiques_et_procedures_de_transfert_de_l_information =
          SecCom.Politiques_et_procedures_de_transfert_de_l_information;
        Accords_en_matiere_de_transfert_d_information =
          SecCom.Accords_en_matiere_de_transfert_d_information;
        Messagerie_electronique = SecCom.Messagerie_electronique;
        Engagements_de_confidentialite_ou_de_non_divulgation =
          SecCom.Engagements_de_confidentialite_ou_de_non_divulgation;

        const accDevMainSysInfo = project[i].accDevMainSysInfo;
        let ADMsysInfo = await aDMsysInfo.findById({ accDevMainSysInfo });
        Analyse_et_specification_des_exigences_de_securite_de_l_information =
          ADMsysInfo.Analyse_et_specification_des_exigences_de_securite_de_l_information;
        Securisation_des_services_d_application_sur_les_reseaux_publics =
          ADMsysInfo.Securisation_des_services_d_application_sur_les_reseaux_publics;
        Protection_des_transactions_liees_aux_services_d_application =
          ADMsysInfo.Protection_des_transactions_liees_aux_services_d_application;
        Politique_de_developpement_securise =
          ADMsysInfo.Politique_de_developpement_securise;
        Procedures_de_controle_des_changements_de_systeme =
          ADMsysInfo.Procedures_de_controle_des_changements_de_systeme;
        Revue_technique_des_applications_apres_changement_apporte_a_la_plateforme_d_exploitation =
          ADMsysInfo.Revue_technique_des_applications_apres_changement_apporte_a_la_plateforme_d_exploitation;
        Restrictions_relatives_aux_changements_apportes_aux_progiciels =
          ADMsysInfo.Restrictions_relatives_aux_changements_apportes_aux_progiciels;
        Principes_d_ingenierie_de_la_securite_des_systemes =
          ADMsysInfo.Principes_d_ingenierie_de_la_securite_des_systemes;
        Environnement_de_developpement_securise =
          ADMsysInfo.Environnement_de_developpement_securise;
        Developpement_externalise = ADMsysInfo.Developpement_externalise;
        Test_de_la_securite_du_systeme =
          ADMsysInfo.Test_de_la_securite_du_systeme;
        Test_de_conformite_du_systeme =
          ADMsysInfo.Test_de_conformite_du_systeme;
        Protection_des_donnees_de_test =
          ADMsysInfo.Protection_des_donnees_de_test;

        const relationsAvecFournisseurs = project[i].relationsAvecFournisseurs;
        let RelationFour = await relationFour.findById({
          relationsAvecFournisseurs,
        });
        Politique_de_securite_de_l_information_dans_les_relations_avec_les_fournisseurs =
          RelationFour.Politique_de_securite_de_l_information_dans_les_relations_avec_les_fournisseurs;
        La_securite_dans_les_accords_conclus_avec_les_fournisseurs =
          RelationFour.La_securite_dans_les_accords_conclus_avec_les_fournisseurs;
        Chaine_d_approvisionnement_des_produits_et_des_services_informatique =
          RelationFour.Chaine_d_approvisionnement_des_produits_et_des_services_informatique;
        Surveillance_et_revue_des_services_des_fournisseurs =
          RelationFour.Surveillance_et_revue_des_services_des_fournisseurs;
        Gestion_des_changements_apportes_dans_les_services_des_fournisseurs =
          RelationFour.Gestion_des_changements_apportes_dans_les_services_des_fournisseurs;

        const gestionIncidents = project[i].gestionIncidents;
        let GestionIncidents = await gestionIncidents.findById({
          gestionIncidents,
        });
        Responsabilites_et_procedures =
          GestionIncidents.Responsabilites_et_procedures;
        Signalement_des_evenements_lies_a_la_securite_de_l_information =
          GestionIncidents.Signalement_des_evenements_lies_a_la_securite_de_l_information;
        Signalement_des_failles_liees_a_la_securite_de_l_information =
          GestionIncidents.Signalement_des_failles_liees_a_la_securite_de_l_information;
        Appreciation_des_evenements_lies_a_la_securite_de_l_information_et_prise_de_decision =
          GestionIncidents.Appreciation_des_evenements_lies_a_la_securite_de_l_information_et_prise_de_decision;
        Reponse_aux_incidents_lies_a_la_securite_de_l_information =
          GestionIncidents.Reponse_aux_incidents_lies_a_la_securite_de_l_information;
        Tirer_des_enseignements_des_incidents_lies_a_la_securite_de_l_information =
          GestionIncidents.Tirer_des_enseignements_des_incidents_lies_a_la_securite_de_l_information;
        Collecte_de_preuves = GestionIncidents.Collecte_de_preuves;

        const gestionDeContinuite = project[i].gestionDeContinuite;
        let ContinuiteAct = await continuiteAct.findById({
          gestionDeContinuite,
        });
        Organisation_de_la_continuite_de_la_securite_de_l_information =
          ContinuiteAct.Organisation_de_la_continuite_de_la_securite_de_l_information;
        Mise_en_oeuvre_de_la_continuite_de_la_securite_de_l_information =
          ContinuiteAct.Mise_en_oeuvre_de_la_continuite_de_la_securite_de_l_information;
        Verifier_revoir_et_evaluer_la_continuite_de_la_securite_de_l_information =
          ContinuiteAct.Verifier_revoir_et_evaluer_la_continuite_de_la_securite_de_l_information;
        Disponibilite_des_moyens_de_traitement_de_l_information =
          ContinuiteAct.Disponibilite_des_moyens_de_traitement_de_l_information;

        const conformite = project[i].conformite;
        let Conformite = await conformite.findById({ conformite });
        Identification_de_la_legislation_et_des_exigences_contractuelles_applicables =
          Conformite.Identification_de_la_legislation_et_des_exigences_contractuelles_applicables;
        Droits_de_propriete_intellectuelle =
          Conformite.Droits_de_propriete_intellectuelle;
        Protection_des_enregistrement =
          Conformite.Protection_des_enregistrement;
        Protection_de_la_vie_privee_et_protection_des_donnees_a_caractere_personnel =
          Conformite.Protection_de_la_vie_privee_et_protection_des_donnees_a_caractere_personnel;
        Reglementation_relative_aux_mesures_cryptographiques =
          Conformite.Reglementation_relative_aux_mesures_cryptographiques;
        Revue_independnte_de_la_securite_de_l_information =
          Conformite.Revue_independnte_de_la_securite_de_l_information;
        Conformite_avec_les_politiques_et_les_normes_de_securite =
          Conformite.Conformite_avec_les_politiques_et_les_normes_de_securite;
        Verification_de_la_conformite_technique =
          Conformite.Verification_de_la_conformite_technique; */
    }
    return res.send(Proj);
  } catch (error) {
    return res.status(401).json(error);
  }
};
