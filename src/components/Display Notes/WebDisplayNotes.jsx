import React, {useState} from 'react'
import styles from './WebDisplayNotes.module.css';
import CreateNotes from '../../pages/CreateNotes';
import NotesItem from '../NotesItem';
import DisplayNotes from '../../pages/DisplayNotes'

const WebDisplayNotes = ({ notes, setNotes, note, selectedColor }) => {
    const [isCreateNotesPopupOpen, setCreateNotesPopupOpen] = useState(false);

    const toggleCreateNotesPopup = () => {
        setCreateNotesPopupOpen(!isCreateNotesPopupOpen);
    };

    const addNewNotesGroup = (newGroup) => {
        setNotes((prevNotes) => [newGroup, ...prevNotes]);
    };

    return (
        <>
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
                    <DisplayNotes  notes={notes} setNotes={setNotes}  />
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
        </>
    )
}

export default WebDisplayNotes