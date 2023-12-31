import style from './ProfilePage.module.css';
import { useState } from 'react';
import CountComponent from './Transactions/Transaction.jsx';
import TitleForm from './TitleForm/TitleForm.jsx';

// Sample account data
const accounts = [
  {
    id: 1,
    title: 'Argent Bank Checking (x8349)',
    amount: '2,082.79',
    balanceType: 'Available Balance',
  },
  {
    id: 2,
    title: 'Argent Bank Savings (x6712)',
    amount: '10,928.42',
    balanceType: 'Available Balance',
  },
  {
    id: 3,
    title: 'Argent Bank Credit Card (x8349)',
    amount: '184.30',
    balanceType: 'Current Balance',
  },
];

export default function UserPage() {
  // State variables to control the visibility of buttons and forms
  const [showSaveBtn, setShowSaveBtn] = useState('hidden');
  const [showCancelBtn, setShowCancelBtn] = useState('hidden');
  const [showEditBtn, setShowEditBtn] = useState('visible');
  const [showTitle, setShowTitle] = useState('visible');
  const [showForm, setShowForm] = useState('hidden');

  // Function to handle the "Edit" button click
  function handle_Edit_Btn() {
    setShowSaveBtn('visible');
    setShowCancelBtn('visible');
    setShowEditBtn('hidden');
    setShowTitle('hidden');
    setShowForm('visible');
  }

  // Function to handle the "Cancel" button click
  function handle_Cancel_Btn() {
    setShowSaveBtn('hidden');
    setShowCancelBtn('hidden');
    setShowEditBtn('visible');
    setShowTitle('visible');
    setShowForm('hidden');
  }

  return (
    <main className={style.bg_dark}>
      <div className={style.hero}>
        {/* Render the TitleForm component with conditional visibility */}
        <TitleForm
          showSaveBtn={showSaveBtn}
          showCancelBtn={showCancelBtn}
          showEditBtn={showEditBtn}
          showTitle={showTitle}
          showForm={showForm}
          Edit_Btn={handle_Edit_Btn}
          Cancel_Btn={handle_Cancel_Btn}
        />
      </div>

      {/* Map through the account data and render CountComponent for each account */}
      {accounts.map((account) => (
        <CountComponent
          key={account.id}
          id={account.id}
          count={account.amount}
          title={account.title}
          balanceType={account.balanceType}
        />
      ))}
    </main>
  );
}
