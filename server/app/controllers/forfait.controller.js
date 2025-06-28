const db = require("../models");
const Forfait = db.forfaits;

exports.findAll = (req, res) => {
  Forfait.findAll()
    .then((data) => res.send(data))
    .catch((err) => res.status(500).send({ message: "Cannot find the data" }));
};

exports.create = (req, res) => {
  // ÉTAPE 1 : Log le body reçu pour le POST
  console.log("BODY REÇU:", req.body);

  // Vérifie le champ attendu
  if (!req.body.name) {
    res.status(400).send({ message: "Le name est requis" });
    return;
  }

  // Tente d'insérer dans la base
  Forfait.create(req.body)
    .then((data) => {
      console.log("AJOUTÉ EN BD:", data); // Log le résultat SQL
      res.send(data);
    })
    .catch((err) => {
      console.error("ERREUR SQL:", err); // Log l'erreur SQL si présente
      res
        .status(500)
        .send({ message: "Cannot insert the data", erreur: err.message });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  Forfait.findByPk(id)
    .then((data) => res.send(data))
    .catch((err) => res.status(500).send({ message: "Cannot find this data" }));
};

exports.update = (req, res) => {
  const id = req.params.id;
  Forfait.update(req.body, { where: { id } })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "Forfait mis à jour" });
      } else {
        res.send({ message: "Forfait non trouvé" });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Cannot update this data" });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Forfait.destroy({ where: { id } })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "Forfait supprimé" });
      } else {
        res.send({ message: "Forfait non trouvé" });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Cannot delete this data" });
    });
};
