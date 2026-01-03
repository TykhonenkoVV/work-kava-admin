import { useState, useEffect } from 'react';

export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState();

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    }
    if (!isModalOpen) {
      document.body.style.overflow = 'visible';
    }
  }, [isModalOpen]);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return {
    isModalOpen,
    openModal,
    closeModal,
    toggleModal
  };
};
