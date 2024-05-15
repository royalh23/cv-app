import { useState } from 'react';
import TemplateForm from './components/TemplateForm';
import Template from './components/Template';
import './App.css';

function App() {
  const [personalFormArr, setPersonalFormArr] = useState([]);
  const [eduFormItems, setEduFormItems] = useState([]);
  const [proFormItems, setProFormItems] = useState([]);

  return (
    <>
      <TemplateForm
        personalFormArr={personalFormArr}
        setPersonalFormArr={setPersonalFormArr}
        eduFormItems={eduFormItems}
        setEduFormItems={setEduFormItems}
        proFormItems={proFormItems}
        setProFormItems={setProFormItems}
      />
      <Template
        personalFormArr={personalFormArr}
        eduFormItems={eduFormItems}
        proFormItems={proFormItems}
      />
    </>
  );
}

export default App;
