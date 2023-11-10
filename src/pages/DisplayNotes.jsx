
import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import styles from './DisplayNotes.module.css';
import { v4 as uuid } from 'uuid';
import back from '../assets/back.png'
import front from '../assets/front.png'

const DisplayNotes = ({ notes, setNotes, selectedColor }) => {
  const { id } = useParams();
  const noteGroup = notes.find((group) => group.id === id);
  const navigate = useNavigate();
  const [title, setTitle] = useState(noteGroup.title);
  const [details, setDetails] = useState('');

  const formatDate = (date) => {
    const day = new Intl.DateTimeFormat('en-US', { day: 'numeric' }).format(date);
    const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date);
    const year = new Intl.DateTimeFormat('en-US', { year: 'numeric' }).format(date);
    return `${day} ${month} ${year}`;
  };

  const formatTime = (date) => {
    return new Intl.DateTimeFormat('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    }).format(date);
  };

  const backButtonClick = () => {
    // Navigate to the "./home" route
    navigate('/');
  };

  const handleButton = (e) => {
    e.preventDefault();

    if (details) {
      const currentTime = new Date();
      const newNote = {
        id: uuid(), // Using a unique ID for each note
        time: formatTime(currentTime),
        date: formatDate(currentTime),
        details,
      };

      // Add the new note to the current note group
      const updatedNotes = [...noteGroup.notes, newNote];
      const updatedGroups = notes.map((group) =>
        group.id === id ? { ...group, notes: updatedNotes } : group
      );

      // Update the notes array
      setNotes(updatedGroups);
      setDetails('');
    }
  };

  // Function to handle changes in the title input
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  // Function to update the title in the notes array
  const updateTitle = (newTitle) => {
    const updatedGroups = notes.map((group) =>
      group.id === id ? { ...group, title: newTitle } : group
    );
    setNotes(updatedGroups);
  };

  // Extract the first letter of each word in the title to create a shortcut
  const shortcut = noteGroup.title
    .split(' ')
    .map((word) => word[0])
    .join('');

  if (!noteGroup) {
    return <p>Note group not found!</p>;
  }

  return (

    <section>
      <div>
        <Link to="/" className="btn"></Link>
      </div>

      <div className={styles.displayContainer}>
        <header className={styles.heading}>
          <button className={styles.back} onClick={backButtonClick}><img src={back} alt='back_image' /></button>
          {/* <div className={styles.headerEllipse}>cu</div> */}
          <div
            className={styles.headerEllipse}
            style={{
              color: "#fff",
              fontFamily: "Roboto",
              textAlign: "center",
              marginTop: "0.8rem",
              fontSize: "1.35656rem",
              fontStyle: "normal",
              fontWeight: "500",
              backgroundColor: selectedColor,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* {noteGroup.title.substring(0, 2).toUpperCase()} Display the first two characters of the title as the shortcut */}
            {shortcut}
          </div>
          {/* <h4>{title}</h4> */}
          <h4>{noteGroup.title}</h4>
        </header>

        <div className={styles.content}>
          {noteGroup.notes.map((note) => (
            <div key={note.id} className={styles.note}>
              <div className={styles.time}>
                <p>{note.time}</p>
                <p>{note.date}</p>
              </div>
              <div className={styles.detail}>
                <p>{note.details}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.form}>
          <form onSubmit={handleButton} style={{ display: "flex" }}>
            <textarea
              type="text"
              placeholder="Enter your text here........"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            />
            <button type="submit"><img src={front} alt="" /></button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default DisplayNotes;