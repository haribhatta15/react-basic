import { useState } from "react";
import { Form } from "./Form";
import { Display } from "./Display";

const App = () => {
  const [ddt, setDdt] = useState([]);

  const handleOnSubmit = (newData) => {
    setDdt([...ddt, newData]);
  };

  console.log(ddt);
  return (
    <div className="App">
      <Form handleOnSubmit={handleOnSubmit} />
      <hr />
      <Display ddt={ddt} />
    </div>
  );
};

export default App;

// submit garda replace haina value add hune banaaune
