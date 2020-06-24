import React, {useState} from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import {BrowserRouter} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import languageContext from './languageContext';


const App = () =>  {
  const [lang, setLang] = useState('pl')
  
  return (
  <BrowserRouter>
    <languageContext.Provider value={lang}>
      <Header onLanguageChange={setLang} />
      <Main />
    </languageContext.Provider>
  </BrowserRouter>
  )

}

export default App;

