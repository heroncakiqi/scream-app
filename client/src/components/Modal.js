import React, {useContext} from 'react';
import Modal from 'react-modal';
import { Context as GlobalContext } from "../context/globalContext"
import SharePost from "./SharePost"
 
const customStyles = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

const CustomModal = () => {
  const {state: {modal}, toggleModal } = useContext(GlobalContext)

    return (
      <Modal
        isOpen={modal}
        onRequestClose={toggleModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <SharePost />
      </Modal>
    )
}

Modal.setAppElement("#root")

export default CustomModal