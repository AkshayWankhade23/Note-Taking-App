
import React, { useState } from 'react';
import CreateNotes from './CreateNotes';
import styles from './Home.module.css';
import NotesItem from '../components/NotesItem';

const Home = ({ notes, setNotes }) => {
  const [isCreateNotesPopupOpen, setCreateNotesPopupOpen] = useState(false);
  

  const toggleCreateNotesPopup = () => {
    setCreateNotesPopupOpen(!isCreateNotesPopupOpen);
  };

  const addNewNotesGroup = (newGroup) => {
    setNotes((prevNotes) => [newGroup, ...prevNotes]);
  };

  return (
    <div className={styles.container}>
      <h1>Pocket Notes</h1>
      
      <div onClick={toggleCreateNotesPopup} className={styles.create_grp}>
        <span>+</span>
        <span>Create Notes group</span>
      </div>

      <div className={styles.note_list}>
        {notes.map((note) => (
          <NotesItem key={note.id} note={note} selectedColor={note.selectedColor} />
        ))}
      </div>

      {isCreateNotesPopupOpen && (
        <div className="popup-background">
          <div className={styles.popup}>
            <CreateNotes
              addNewNotesGroup={addNewNotesGroup}
              closePopup={() => setCreateNotesPopupOpen(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
