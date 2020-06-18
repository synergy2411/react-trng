import React from "react";

const FuncCmp = (props) => {
  let [value, setValue] = React.useState(100)
    // React.use

    // const componentDidUpdate = () => {
    //     React.useEffect();
    // }
  return (
    <div>
      <p>Value : {value} </p>
      <button
        onClick={() => {
          setValue(value++);
        }}
      >
        Increase
      </button>
    </div>
  );
};

export default FuncCmp;
