import React, {useContext} from 'react';
import Modal from 'react-modal';
import { Context as GlobalContext } from "../context/globalContext"
import SharePost from "./SharePost"
import EditProfile from "./EditProfile"
 
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
  const {state: {modal: {isOpen, content}}, toggleModal } = useContext(GlobalContext)

  let element
  console.log(content, isOpen)
    switch(content) {
      case "create_post":
        element = <SharePost />
      break;
      case "edit_profile":
        element = <EditProfile />
      break;
      default:
        return ''
    }

    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {element}
      </Modal>
    )
}

Modal.setAppElement("#root")

export default CustomModal