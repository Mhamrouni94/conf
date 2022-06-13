import React, { useState } from "react";
import { ListHeader, ListH1, ListBtn, ListInput } from "./ListePrjElements";
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { create } from "../../redux/Action/ProjetAction";
//import creerPrjt from './creerPrjt'

const ListeProjets = (save) => {
  const [nameProject, setNomPrj] = useState("");
  const [Organisme, setOrganisme] = useState("");
  const [modal, setModal] = useState(false);
  const [list, setList] = useState([]);
  const toggle = () => setModal(!modal);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  // const { loading, projet, err } = useSelector((state) => state.ProjectRed);
  const handelChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "nomPrj") {
      setNomPrj(value);
    } else {
      setOrganisme(value);
    }
  };
  const saveList = (listObj) => {
    let tempList = list;
    tempList.push(listObj);
    setList(tempList);
    setModal(false);
    listObj["Name"] = nameProject;
    listObj["Organisme"] = Organisme;
    save(listObj);
  };
  const handelcreate = (e) => {
    e.preventDefault();
    dispatch(create({ nameProject, Organisme }, token));
  };
  return (
    <>
      <ListHeader>
        <ListH1>Liste des Projets</ListH1>
        <div modal={modal} toggle={toggle}>
          <ListBtn onClick={toggle}>Nouveau Projet </ListBtn>
          <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Creation de projet</ModalHeader>
            <ModalBody>
              <form>
                <div>
                  <label> Nom de Projet</label>
                  <ListInput
                    value={nameProject}
                    onChange={handelChange}
                    name="nomPrj"
                  />
                </div>
                <div>
                  <label> Nom de L'organisme</label>
                  <ListInput
                    value={Organisme}
                    onChange={handelChange}
                    name="organisme"
                  />
                </div>
              </form>
            </ModalBody>
            <ModalFooter save={handelcreate}>
              <Button onClick={handelcreate}>Creer</Button>{" "}
              <Button onClick={toggle}>Annuler</Button>
            </ModalFooter>
          </Modal>
        </div>
      </ListHeader>
      <div>
        {list.map((obj) => (
          <li>{obj.Name}</li>
        ))}
      </div>
    </>
  );
};

export default ListeProjets;
