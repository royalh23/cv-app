import { useState } from 'react';
import FormItem from './FormItem';

export default function Form({
  formItems,
  formItem,
  setFormItems,
  setFormItem,
  isEducational,
}) {
  const [isAddClicked, setIsAddClicked] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const handleCancelClick = () => {
    const obj = {
      startDate: '',
      endDate: '',
      location: '',
      id: crypto.randomUUID(),
    };
    isEducational
      ? setFormItem({ ...obj, school: '', degree: '' })
      : setFormItem({ ...obj, company: '', position: '', description: '' });
    setIsAddClicked(false);
  };

  const handleAddClick = () => setIsAddClicked(true);

  const handleEditClick = (e) => {
    setFormItem(formItems.find((item) => item.id === e.target.dataset.id));
    setIsEdit(true);
    setIsAddClicked(true);
  };

  const handleDeleteClick = (e) => {
    const newFormItems = formItems.filter(
      (item) => item.id !== e.target.dataset.id,
    );
    setFormItems([...newFormItems]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormItems([...formItems, formItem]);
    handleCancelClick();
  };

  const handleSave = (e) => {
    e.preventDefault();
    const newFormItems = formItems.filter((item) => item.id !== formItem.id);
    setFormItems([...newFormItems, formItem]);
    setIsEdit(false);
    handleCancelClick();
  };

  const formTextOne = isEducational ? 'school' : 'company';
  const formTextTwo = isEducational ? 'degree' : 'position';

  if (isAddClicked) {
    return (
      <form onSubmit={isEdit ? handleSave : handleSubmit}>
        <label htmlFor={formTextOne}>
          {isEducational ? '*School: ' : '*Company: '}
          <input
            type="text"
            name={formTextOne}
            id={formTextOne}
            value={isEducational ? formItem.school : formItem.company}
            onChange={(e) =>
              isEducational
                ? setFormItem({ ...formItem, school: e.target.value })
                : setFormItem({ ...formItem, company: e.target.value })
            }
            required
          />
        </label>
        <label htmlFor={formTextTwo}>
          {isEducational ? '*Degree: ' : '*Position: '}
          <input
            type="text"
            name={formTextTwo}
            id={formTextTwo}
            value={isEducational ? formItem.degree : formItem.position}
            onChange={(e) =>
              isEducational
                ? setFormItem({ ...formItem, degree: e.target.value })
                : setFormItem({ ...formItem, position: e.target.value })
            }
            required
          />
        </label>
        <div className="dates">
          <label htmlFor="start-date">
            *Start Date:{' '}
            <input
              type="date"
              name="start-date"
              id="start-date"
              value={formItem.startDate}
              onChange={(e) =>
                setFormItem({
                  ...formItem,
                  startDate: e.target.value,
                })
              }
              required
            />
          </label>
          <label htmlFor="end-date">
            *End Date:{' '}
            <input
              type="date"
              name="end-date"
              id="end-date"
              value={formItem.endDate}
              onChange={(e) =>
                setFormItem({
                  ...formItem,
                  endDate: e.target.value,
                })
              }
              required
            />
          </label>
        </div>
        <label htmlFor="location">
          *Location:{' '}
          <input
            type="text"
            name="location"
            id="location"
            value={formItem.location}
            onChange={(e) =>
              setFormItem({
                ...formItem,
                location: e.target.value,
              })
            }
            required
          />
        </label>
        {!isEducational && (
          <label htmlFor="description">
            *Description:{' '}
            <textarea
              name="description"
              id="description"
              value={formItem.description}
              onChange={(e) =>
                setFormItem({ ...formItem, description: e.target.value })
              }
              required
            />
          </label>
        )}
        <div className="buttons">
          <button type="button" onClick={handleCancelClick}>
            Cancel
          </button>
          <button type="submit">Save</button>
        </div>
      </form>
    );
  }

  return (
    <>
      {formItems.map((item) => (
        <FormItem
          key={item.id}
          id={item.id}
          title={isEducational ? item.school : item.company}
          onEditClick={handleEditClick}
          onDeleteClick={handleDeleteClick}
        />
      ))}
      <button onClick={handleAddClick}>
        + {isEducational ? 'Educational' : 'Professional'} Experience
      </button>
    </>
  );
}
