
import React from 'react';
import { Link } from 'react-router-dom';

const NotesItem = ({ note, selectedColor, handleColorSelection }) => {
    // Extract the first letter of each word in the title to create a shortcut
    const shortcut = note.title
        .split(' ')
        .map((word) => word[0])
        .join('');

    return (
        <>
            <Link to={`/display-notes/${note.id}`} className='note'>
                <div className='note_div'>
                    <div
                        className='ellipse'
                        style={{
                            color: "#fff",
                            fontFamily: "Roboto",
                            textAlign: "center",
                            marginTop: "3rem",
                            fontSize: "1.35656rem",
                            fontStyle: "normal",
                            fontWeight: "500",
                            backgroundColor: selectedColor,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        {shortcut}
                    </div>
                    <h4>{note.title.length > 15 ? note.title.substr(0, 15) + '...' : note.title}</h4>
                </div>
            </Link>
        </>
    );
};

export default NotesItem;