import styled from "styled-components";

export const FormContainer = styled.div`
  width: 500px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const FormGroup = styled.div`
	color: black;
    display: block;
	width: 300px;
	margin: 50px auto;
`;

export const Label = styled.label`
	margin-bottom: 0.5em;
	color: black;
    display: block;
`;

export const Input = styled.input`
	color: black;
	border: 1px solid black;
	border-radius: 3px;
	width: 300px;
	margin-bottom: 0.5em;
`;

export const Message = styled.label`
	margin-bottom: 0.5em;
	color: red;
    display: block;
`;

export const Button = styled.button`
    color: black;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid gray;
    border-radius: 3px;
    width: 300px;
    margin: auto;
`;