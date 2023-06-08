import { LoginPage } from "..";
import Modal from "../../../shared/globals/UiElements/Modal";

interface LoginPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginPopup = ({ isOpen, onClose }: LoginPopupProps) => {
  return (
    <Modal modalWidth="small" show={isOpen} onClose={onClose}>
      <Modal.Body>
        <LoginPage />
      </Modal.Body>
    </Modal>
  );
};

export default LoginPopup;
