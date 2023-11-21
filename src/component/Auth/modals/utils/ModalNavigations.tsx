import { AiOutlineArrowLeft, AiOutlineClose } from "react-icons/ai";
import "./ModalNavigations.css";

interface ModalNavigationsProps {
  onBack: () => void;
}

const ModalNavigations: React.FC<ModalNavigationsProps> = ({ onBack }) => {
  return (
    <div className="modal-buttons">
      <AiOutlineArrowLeft onClick={ onBack }/>
      <a href="./login"><AiOutlineClose /></a>
    </div>
  );
};

export default ModalNavigations;
