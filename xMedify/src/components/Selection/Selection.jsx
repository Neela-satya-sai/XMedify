import React from "react";
import Styles from "./Selection.module.css";

const Selection = ({
  data = [],
  name = "",
  current = "",
  handlerfun,
  isvisible = false,
}) => {
  // console.log(data);
  return (
    <div id={name}>
      <select
        className={Styles.select}
        value={current}
        disabled={!isvisible}
        onChange={handlerfun}
      >
        <option value="" disabled>
          {" "}
          select the {name}
        </option>
        {data.map((item, idx) => (
          <option key={idx} value={item}>
            {" "}
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Selection;
