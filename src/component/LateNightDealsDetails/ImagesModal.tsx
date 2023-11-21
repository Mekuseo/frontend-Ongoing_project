/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React, { useState } from 'react';

interface ModalComponentProps {
  src: string;
  wideSrc: string;
  alt: string;
}

const ModalComponent: React.FC<ModalComponentProps> = ({ src, wideSrc, alt }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [slideIndex, setSlideIndex] = useState(1);

  const openModal = () => {
    setModalOpen(true);
  };
  
  const currentSlide = (n: number) => {
    setSlideIndex(n);
  };

  return (
    <div className="column">
      <img
        src={src}
        style={{ width: '100%' }}
        onClick={() => {
          openModal();
          currentSlide(1);
        }}
        className="hover-shadow cursor"
        alt={alt}
      />

      {modalOpen && (
        <div className="modal">
          <span className="close cursor" onClick={closeModal}>
            &times;
          </span>
          <div className="modal-content">
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalComponent;
