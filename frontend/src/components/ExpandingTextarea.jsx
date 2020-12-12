import { React, useState } from 'react';
import PropTypes from 'prop-types';
import { StyledExpandingTextArea } from '../styles/StyledComponents';

const ExpandingTextArea = (props, { minRows = 5, maxRows = 20 }) => {
  const [rows, setRows] = useState(minRows);
  const handleChange = (event) => {
    const inputValue = { [event.target.name]: event.target.value };
    console.log(inputValue);
    props.setState((prev) => ({
      ...prev,
      ...inputValue,
    }));
    const lineheight = 20;

    const f = Math.floor(event.target.scrollHeight / lineheight);
    console.log(f);

    if (f >= maxRows) {
      event.target.scrollTop = event.target.scrollHeight;
      setRows(maxRows);
    }
    if (f <= minRows) setRows(minRows);
    if (f > minRows && f < maxRows) {
      setRows(f);
    }
  };
  return (
    <>
      <StyledExpandingTextArea
        placeholder="Skriv artikkelen din her, feltet vil vokse når det du skriver overgår feltets grenser."
        onChange={handleChange}
        lineheight={20}
        rows={rows}
        name="content"
      />
    </>
  );
};
ExpandingTextArea.propTypes = {
  setState: PropTypes.func,
};
export default ExpandingTextArea;
