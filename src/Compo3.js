import React, { useCallback, useState } from "react";
import { TextField } from "@shopify/polaris";

const Compo3 = (props) => {
  const [value, setValue] = useState("");
  const handleChange = useCallback((newValue) => {
    setValue(newValue);
    props.getText(newValue);
    console.log("Component 3 function");
  }, [value]);

  return (
    <div>
      &nbsp;
      <h2>Component 3 : {props.compo2PassedVal}</h2>
      &nbsp;
      <TextField
        placeholder="Component 3 input"
        label="Component 3"
        value={value}
        onChange={handleChange}
        autoComplete="off"
      />
    </div>
  );
};

export default Compo3;
