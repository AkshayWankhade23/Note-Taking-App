
import React, { useState } from 'react';
import CreateNotes from '../../pages/CreateNotes';
import styles from './WebDesignHome.module.css';
import NotesItem from '../NotesItem';
import imagebackground from '../../assets/imagebackground.png';
import lock from '../../assets/lock.png'

const WebDesignHome = ({ notes, setNotes, selectedColor }) => {
    const [isCreateNotesPopupOpen, setCreateNotesPopupOpen] = useState(false);

    const toggleCreateNotesPopup = () => {
        setCreateNotesPopupOpen(!isCreateNotesPopupOpen);
    };

    const addNewNotesGroup = (newGroup) => {
        setNotes((prevNotes) => [newGroup, ...prevNotes]);
    };

    return (
        <div className={styles.container}>
            <div className={styles.left_container}>
                <h1>Pocket Notes</h1>

                <div onClick={toggleCreateNotesPopup} className={styles.create_grp}>
                    <span>+</span>
                    <span>Create Notes group</span>
                </div>

                <div className={styles.note_list}>
                    {notes && notes.map((note) => (
                        <NotesItem key={note.id} note={note} selectedColor={note.selectedColor} />
                    ))}
                </div>
            </div>

            <div className={styles.right_container}>
            <div className={styles.backgroundImg}>
                    <img src={imagebackground} alt="" />
                </div>
                <h1>Pocket Notes</h1>
                <p>Send and receive messages without keeping your phone online.
                    Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>

                <div className={styles.footer}>
                    <div>
                        <img src={lock} alt="" />
                    </div>
                    <div>end-to-end encrypted</div>
                </div>
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

export default WebDesignHome;
