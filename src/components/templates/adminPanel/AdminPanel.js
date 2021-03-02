import React from 'react';

import AddBookForm from '../../organisms/addBookForm/AddBookForm';
import AdminPanelBookList from '../../organisms/adminPanelBookList/AdminPanelBookList';

const AdminPanel = () => {
  return (
    <>
      <AddBookForm />
      <AdminPanelBookList />
    </>
  );
};

export default AdminPanel;
