import React from 'react';
import styled from "styled-components";

function Input(props: any) {
    return (
        <>
            <CustomInput type={props.type} onChange={props.handleChange} value={props.value} {...props} />
        </>
    );
}

export default Input;

const CustomInput = styled.input`
  color: black;
  font-size: 1em;
  margin: 0.5em;
  padding: 0.5em 1em;
  border: 2px solid #6c6c6c;
  border-radius: 5px;
`
