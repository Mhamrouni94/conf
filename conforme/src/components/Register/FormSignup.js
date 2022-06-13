import React from "react";
import validate from "./validateInfo";
import useForm from "./useForm";
import "./Form.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { register } from "../../redux/Action/AuthAction";
import { Link, Navigate } from "react-router-dom";

const FormSignup = ({ submitForm }) => {
  const dispatch = useDispatch();
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );
  const [UserName, setUsername] = useState("");
  const [LastName, setLastname] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const token = localStorage.getItem("token");
  const handleregister = (e) => {
    e.preventDefault();
    dispatch(register({ UserName, LastName, Email, Password }));
  };
  return (
    <div className="form-content-right">
      {token ? (
        <Navigate to="/audit" />
      ) : (
        <form onSubmit={handleregister} className="form" noValidate>
          <h1>
          Commencez avec nous dès maintenant!Pour créer un compte, remplissez les informations ci-dessous.
          </h1>
          <div className="form-inputs">
            <label className="form-label">Nom</label>
            <input
              className="form-input"
              type="text"
              name="username"
              placeholder="Entrez votre nom"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-inputs">
            <label className="form-label">Prénom</label>
            <input
              className="form-input"
              type="text"
              name="lastname"
              placeholder="Entrez votre prénom"
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
          <div className="form-inputs">
            <label className="form-label">Email</label>
            <input
              className="form-input"
              type="email"
              name="email"
              placeholder="Entrez votre email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-inputs">
            <label className="form-label">Mot de passe</label>
            <input
              className="form-input"
              type="password"
              name="password"
              placeholder="Entrez votre mot de passe"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-inputs">
            <label className="form-label">Confirmez votre mot de passe</label>
            <input
              className="form-input"
              type="password"
              name="password2"
              placeholder="Confirmez votre mot de passe"
              value={values.password2}
              onChange={handleChange}
            />
            {errors.password2 && <p>{errors.password2}</p>}
          </div>
          <button className="form-input-btn" type="submit">
          S'inscrire
          </button>
          <span className="form-input-login">
          Vous avez déjà un compte? Connectez <Link to="/login">ici</Link>
          </span>
        </form>
      )}
    </div>
  );
};

export default FormSignup;
