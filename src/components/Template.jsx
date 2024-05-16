import '../styles/Template.css';
import EmailIcon from '../assets/email.svg';
import PhoneIcon from '../assets/phone.svg';
import AddressIcon from '../assets/location.svg';
import TemplateItem from './TemplateItem';

export default function Template({
  personalFormArr,
  eduFormItems,
  proFormItems,
}) {
  return (
    <section className="template">
      <header>
        {personalFormArr.length !== 0 && (
          <>
            <h1>{personalFormArr[0].name}</h1>
            <div className="details">
              <div>
                <img src={EmailIcon} alt="Email icon" />
                {personalFormArr[0].email}
              </div>
              <div>
                <img src={PhoneIcon} alt="Phone icon" />
                {personalFormArr[0].phone}
              </div>
              <div>
                <img src={AddressIcon} alt="Address icon" />
                {personalFormArr[0].address}
              </div>
            </div>
          </>
        )}
      </header>
      <div className="template-contents">
        <div className="template-content">
          {eduFormItems.length !== 0 && <h2>Educational Experience</h2>}
          {eduFormItems.map((item) => (
            <TemplateItem item={item} isEdu={true} key={item.id} />
          ))}
        </div>
        <div className="template-content">
          {proFormItems.length !== 0 && <h2>Professional Experience</h2>}
          {proFormItems.map((item) => (
            <TemplateItem item={item} isEdu={false} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
