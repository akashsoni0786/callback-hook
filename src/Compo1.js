import React, { useCallback, useState } from "react";
import { TextField } from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";
import Compo2 from "./Compo2";
const Compo1 = (props) => {

  const [value, setValue] = useState("");

  const handleChange = useCallback((newValue) => {
    setValue(newValue);
    props.getText(newValue)
    console.log("Component 1 function")
  }, [value]);

 
  return (
    <div>
      <TextField
        placeholder="Component 1 input"
        label="Component 1"
        value={value}
        onChange={handleChange}
        autoComplete="off"
      />
      &nbsp;
       
    </div>
  );
};

export default Compo1;
