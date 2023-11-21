import React, { useEffect } from 'react';
import './modal.css';

interface PopupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PopupModal: React.FC<PopupModalProps> = ({ isOpen, onClose }) => {
  const modalRef = React.createRef<HTMLDivElement>();

  const closeModalOnOutsideClick = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', closeModalOnOutsideClick);
    } else {
      document.removeEventListener('mousedown', closeModalOnOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', closeModalOnOutsideClick);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="priceModalOverlayHL">
      <div className="priceModalContHL" ref={modalRef}>
        {/* <span className="close" onClick={onClose}>
          &times;
        </span> */}
        <p className='normalPrice'>Nighty rate N5,000.00  X 4 nights X 1 room. N20,000.00  </p>
        <p className='discountPrice'>Discount rate N4,700.00  X 4 nights X 1 room   N18,000.00   </p>

        <div className="totalHL">
          <p>Total</p>

          <div className="totalHLRight">
              <p>NGN 20,000.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupModal;
