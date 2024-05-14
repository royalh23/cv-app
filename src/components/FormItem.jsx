import DeleteIcon from '../assets/delete.svg';
import EditIcon from '../assets/pencil.svg';
import '../styles/FormItem.css';

export default function FormItem({ title, onEditClick, onDeleteClick, id }) {
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
          src={DeleteIcon}
          alt="Delete icon"
          onClick={onDeleteClick}
          data-id={id}
        />
      </div>
    </div>
  );
}
