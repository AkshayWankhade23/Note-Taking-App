import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

const CreateNotes = ({ addNewNotesGroup, closePopup }) => {
  const [title, setTitle] = useState('');
  const [selectedColor, setSelectedColor] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && selectedColor) {
      const noteGroup = { id: uuid(), title, selectedColor, notes: [] };
      addNewNotesGroup(noteGroup);

      // Close the pop-up
      closePopup();
    }
  };

  const handleColorSelection = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="create-note_header">
      <h4>Create New Notes Group</h4>
      <form onSubmit={handleSubmit}>
        <span>Group Name</span>
        <input
          type="text"
          placeholder="Enter your group name...."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
        />
        <br />
        <span className='choose_color'>Choose Color</span>
        <div className="ellipse_choose">
          <div
            className={`ellipse_1 circle ${selectedColor === '#B38BFA' ? 'selected' : ''}`}
            onClick={() => handleColorSelection('#B38BFA')}
          ></div>
          <div
            className={`ellipse_2 circle ${selectedColor === '#FF79F2;' ? 'selected' : ''}`}
            onClick={() => handleColorSelection('#FF79F2')}
          ></div>

          <div
            className={`ellipse_3 circle ${selectedColor === '#43E6FC' ? 'selected' : ''}`}
            onClick={() => handleColorSelection('#43E6FC')}
          ></div>

          <div
            className={`ellipse_4 circle ${selectedColor === '#F19576' ? 'selected' : ''}`}
            onClick={() => handleColorSelection('#F19576')}
          ></div>

          <div
            className={`ellipse_5 circle ${selectedColor === '#0047FF' ? 'selected' : ''}`}
            onClick={() => handleColorSelection('#0047FF')}
          ></div>

          <div
            className={`ellipse_6 circle ${selectedColor === '#6691FF' ? 'selected' : ''}`}
            onClick={() => handleColorSelection('#6691FF')}
          ></div>
        </div>
        <button className="create_btn" type="submit">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateNotes;