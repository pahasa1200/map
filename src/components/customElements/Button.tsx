import React from 'react';
import styled from "styled-components";

const Button: React.FC = (props:any) => {
    return (
        <>
            <CustomButton onClick={props.func} type={"button"} value={'Sign in'} {...props} />
        </>
    );
}

export default Button;

const CustomButton = styled.input`
      color: black;
      font-size: 1em;
      margin: 1em;
      padding: 0.25em 1em;
      border: 2px solid #6c6c6c;
      border-radius: 5px;
      background-color: white;
      cursor: pointer;
      font-weight: 700;
    `

