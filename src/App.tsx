import React from 'react';
import VCardGenerator from './VcardGenerator';

const App: React.FC = () => {
  return (
    <div className="App">
      <VCardGenerator
        firstName="Jean"
        lastName="Dupont"
        email="jean.dupont@example.com"
        phoneNumber="123-456-7890"
      />
    </div>
  );
};

export default App;
