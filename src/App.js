import React from 'react';
import AddLead from "./components/AddLead";
import GetLeadsInfo from "./components/GetLeadsInfo";

const App = () => {
  return (
      <div>
        <h1>Добавление задачи</h1>
          <AddLead />
          <GetLeadsInfo />
      </div>
  );
};

export default App;
