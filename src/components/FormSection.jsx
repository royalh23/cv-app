import { useState } from 'react';
import '../styles/FormSection.css';
import DownIcon from '../assets/chevron-down.svg';
import PersonalForm from './PersonalForm';
import Form from './Form';

export default function FormSection({
  heading,
  isPersonal = false,
  isEducational = false,
  isProfessional = false,
}) {
  const [isArrowClicked, setIsArrowClicked] = useState(false);
  const [personalFormData, setPersonalFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });
  const [eduFormItems, setEduFormItems] = useState([]);
  const [eduFormItem, setEduFormItem] = useState({
    school: '',
    degree: '',
    startDate: '',
    endDate: '',
    location: '',
    id: crypto.randomUUID(),
  });
  const [proFormItems, setProFormItems] = useState([]);
  const [proFormItem, setProFormItem] = useState({
    company: '',
    position: '',
    startDate: '',
    endDate: '',
    location: '',
    description: '',
    id: crypto.randomUUID(),
  });

  const handleArrowClick = () => setIsArrowClicked(!isArrowClicked);

  return (
    <section className="form-section">
      <header>
        <h2>{heading}</h2>
        <img
          src={DownIcon}
          alt="Down arrow"
          onClick={handleArrowClick}
          className={`${isArrowClicked ? 'clicked' : ''} arrow`}
        />
      </header>
      {isArrowClicked && isPersonal && (
        <PersonalForm
          personalFormData={personalFormData}
          setPersonalFormData={setPersonalFormData}
        />
      )}

      {isArrowClicked && isEducational && (
        <Form
          formItems={eduFormItems}
          formItem={eduFormItem}
          setFormItems={setEduFormItems}
          setFormItem={setEduFormItem}
          isEducational={true}
        />
      )}

      {isArrowClicked && isProfessional && (
        <Form
          formItems={proFormItems}
          formItem={proFormItem}
          setFormItems={setProFormItems}
          setFormItem={setProFormItem}
          isEducational={false}
        />
      )}
    </section>
  );
}
