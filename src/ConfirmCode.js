import React, {useState, useEffect} from 'react';

function ConfirmCode() {
  const [editing, setEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(0);
  const [boxes, setBoxes] = useState([]);

  useEffect(() => {
    window.addEventListener('keydown', handler);

    return () => {
      window.removeEventListener('keydown', handler);
    };
  });

  useEffect(() => {
    if (boxes.length === 5) {
      submit();
    }
  }, [boxes]);

  function handler(e) {
    if (e.keyCode === 8) {
      setBoxes(
        boxes.filter((item, index) => {
          if (index != boxes.length - 1) return item;
        })
      );
    }
    if (!e.code.includes('Digit') || (boxes.length >= 5 && !editing)) return;
    let keyEntered = String.fromCharCode(e.keyCode);
    if (editing) {
      let tempArray = [...boxes];
      tempArray[editingIndex.className] = keyEntered;
      setBoxes(tempArray);
      setEditing(false);
      editingIndex.style.background = '#F5F5F5';
      return;
    }

    setBoxes([...boxes, keyEntered]);
  }

  const isEditing = (e) => {
    e.target.style.background = '#ececec';
    setEditingIndex(e.target);
    setEditing(true);
  };

  const submit = () => {
    alert(`Code (${boxes.join('')}) has sent to server`);
  };

  return (
    <p>
      {boxes.map((item, index) => (
        <span
          key={index}
          className={index}
          style={{
            fontSize:'1.5rem',
            padding: 7,
            background:'#F5F5F5',
            borderRadius:'5px',
            marginRight: 5,
            cursor: 'pointer',
          }}
          onClick={isEditing}
        >
          {item}
        </span>
      ))}
      {new Array(5).fill('').map((item, index) => {
        if (boxes[index]) return null;
        return (
          <span
            key={index}
            style={{
              fontSize:'1.5rem',
              padding: 7,
              background:'#F5F5F5',
              borderRadius:'5px',
              marginRight: 5,
              cursor: 'pointer',
            }}
          >
            &nbsp;&nbsp;
          </span>
        );
      })}
    </p>
  );
}

export default ConfirmCode;
