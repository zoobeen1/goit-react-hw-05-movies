import { GlobalStyle } from 'GlobalStyle';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react';
import { Searchbar } from 'components/Searchbar';
import { Modal } from './Modal';

export function App() {
  //States
  const [query, setQuery] = useState('');

  const [showModal, setShowModal] = useState(false);

  //Functions
  //Тоглим модалку
  const togleModal = () => setShowModal(pshowModal => !pshowModal);

  //Нажали кнопку поиска - обработчик
  const handleFormSubmit = searchQuery => {
    setQuery(searchQuery);
  };

  // *************************************************************************
  return (
    <>
      <GlobalStyle />
      <Searchbar onSubmit={handleFormSubmit} />

      <ToastContainer autoClose={1000} />
      {showModal && <Modal togleModal={togleModal}></Modal>}
    </>
  );
}
