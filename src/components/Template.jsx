import { Fragment } from 'react';
import '../styles/Template.css';
import EmailIcon from '../assets/email.svg';
import PhoneIcon from '../assets/phone.svg';
import AddressIcon from '../assets/location.svg';

export default function Template({
  personalFormArr,
  eduFormItems,
  proFormItems,
}) {
  return (
    <section className="template">
      <header>
        {personalFormArr.map((item) => (
          <Fragment key={item.id}>
            <h1>{item.name}</h1>
            <div className="details">
              <div>
                <img src={EmailIcon} alt="Email icon" />
                {item.email}
              </div>
              <div>
                <img src={PhoneIcon} alt="Phone icon" />
                {item.phone}
              </div>
              <div>
                <img src={AddressIcon} alt="Address icon" />
                {item.address}
              </div>
            </div>
          </Fragment>
        ))}
      </header>
      <div className="template-contents">
        <div className="template-content">
          {eduFormItems.length !== 0 && <h2>Educational Experience</h2>}
          {eduFormItems.map((item) => (
            <div key={item.id}>
              <div>
                <p>
                  {item.startDate} - {item.endDate}
                </p>
                <p>{item.location}</p>
              </div>
              <div>
                <h3>{item.school}</h3>
                <p>{item.degree}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="template-content">
          {proFormItems.length !== 0 && <h2>Professional Experience</h2>}
          {proFormItems.map((item) => (
            <div key={item.id}>
              <div>
                <p>
                  {item.startDate} - {item.endDate}
                </p>
                <p>{item.location}</p>
              </div>
              <div>
                <h3>{item.company}</h3>
                <p>{item.position}</p>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
