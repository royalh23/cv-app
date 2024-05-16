import '../styles/TemplateItem.css';

export default function TemplateItem({ item, isEdu }) {
  return (
    <div className="template-item">
      <div>
        <p>
          {item.startDate} - {item.endDate}
        </p>
        <p className="italic">{item.location}</p>
      </div>
      <div>
        <h3>{isEdu ? item.school : item.company}</h3>
        <p>{isEdu ? item.degree : item.position}</p>
        {!isEdu && <p>{item.description}</p>}
      </div>
    </div>
  );
}
