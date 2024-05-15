import FormSection from './FormSection';
import '../styles/TemplateForm.css';

export default function TemplateForm(props) {
  return (
    <div className="template-form">
      <FormSection
        heading="Personal Details"
        isPersonal={true}
        personalFormArr={props.personalFormArr}
        setPersonalFormArr={props.setPersonalFormArr}
      />
      <FormSection
        heading="Educational Experience"
        isEducational={true}
        eduFormItems={props.eduFormItems}
        setEduFormItems={props.setEduFormItems}
      />
      <FormSection
        heading="Professional Experience"
        isProfessional={true}
        proFormItems={props.proFormItems}
        setProFormItems={props.setProFormItems}
      />
    </div>
  );
}
