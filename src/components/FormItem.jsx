import { useState } from 'react';
import DeleteIcon from '../assets/delete.svg';
import DeleteIconRed from '../assets/delete-red.svg';
import EditIcon from '../assets/pencil.svg';
import '../styles/FormItem.css';

export default function FormItem({ title, onEditClick, onDeleteClick, id }) {
  const [mouseEnter, setMouseEnter] = useState(false);

  return (
    <div className="form-item">
      <h3>{title}</h3>
      <div className="icons">
        <img
          src={EditIcon}
          alt="Edit icon"
          onClick={onEditClick}
          data-id={id}
        />
        <img
          src={mouseEnter ? DeleteIconRed : DeleteIcon}
          alt="Delete icon"
          onClick={onDeleteClick}
          data-id={id}
          onMouseEnter={() => setMouseEnter(true)}
          onMouseLeave={() => setMouseEnter(false)}
        />
      </div>
    </div>
  );
}
