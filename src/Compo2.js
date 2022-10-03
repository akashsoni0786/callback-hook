import React, { memo, useCallback, useState } from "react";
import { TextField } from "@shopify/polaris";

const Compo2 = (props) => {
  console.log("compo 2")
  const [value, setValue] = useState("");
  const handleChange = useCallback((newValue) => {
    setValue(newValue);
    props.getText(newValue);
    console.log("Component 2 function");
  }, [value]);

  const fun2 =()=>{
    console.log("Fun 2")
  }

  return (
    <div>
      <h2>Component 2 : {props.compo1PassedVal}</h2>
      &nbsp;
      <TextField
        placeholder="Component 2 input"
        label="Component 2"
        value={value}
        onChange={handleChange}
        autoComplete="off"
      />
    </div>
  );
};

export default memo(Compo2);
