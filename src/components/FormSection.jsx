import { useState } from 'react';
import '../styles/FormSection.css';
import DownIcon from '../assets/chevron-down.svg';
import PersonalForm from './PersonalForm';
import Form from './Form';

export default function FormSection(props) {
  const [isArrowClicked, setIsArrowClicked] = useState(false);
  const [personalFormData, setPersonalFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    id: crypto.randomUUID(),
  });
  const [eduFormItem, setEduFormItem] = useState({
    school: '',
    degree: '',
    startDate: '',
    endDate: '',
    location: '',
    id: crypto.randomUUID(),
  });
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
        <h2>{props.heading}</h2>
        <img
          src={DownIcon}
          alt="Down arrow"
          onClick={handleArrowClick}
          className={`${isArrowClicked ? 'clicked' : ''} arrow`}
        />
      </header>
      {isArrowClicked && props.isPersonal && (
        <PersonalForm
          personalFormData={personalFormData}
          setPersonalFormData={setPersonalFormData}
          setPersonalFormArr={props.setPersonalFormArr}
        />
      )}

      {isArrowClicked && props.isEducational && (
        <Form
          formItems={props.eduFormItems}
          formItem={eduFormItem}
          setFormItems={props.setEduFormItems}
          setFormItem={setEduFormItem}
          isEducational={true}
        />
      )}

      {isArrowClicked && props.isProfessional && (
        <Form
          formItems={props.proFormItems}
          formItem={proFormItem}
          setFormItems={props.setProFormItems}
          setFormItem={setProFormItem}
          isEducational={false}
        />
      )}
    </section>
  );
}
