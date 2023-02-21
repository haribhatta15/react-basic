import { useState } from "react";
import { Chat } from "./Chat";

export const Form = ({ handleOnSubmit }) => {
  const [frmDt, setFrmDt] = useState("");

  const getDataFromInputFieldAsWeType = (event) => {
    const { value } = event.target;
    setFrmDt(value);
  };

  const handleOnFormSubmit = (e) => {
    e.preventDefault(); // prevent from browsers to reload
    handleOnSubmit(frmDt);
  };

  return (
    <div>
      {/* sending props called frmDt to chat */}
      <Chat frmDt={frmDt} />

      <form onSubmit={handleOnFormSubmit}>
        <input
          onChange={getDataFromInputFieldAsWeType}
          type="text"
          name=""
          placeholder="Name"
          id=""
          required
        />{" "}
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};
