import FormSection from './FormSection';
import '../styles/TemplateForm.css';

export default function TemplateForm() {
  return (
    <div className="template-form">
      <FormSection heading="Personal Details" isPersonal={true} />
      <FormSection heading="Educational Experience" isEducational={true} />
      <FormSection heading="Professional Experience" isProfessional={true} />
    </div>
  );
}
