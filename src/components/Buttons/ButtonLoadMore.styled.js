import styled from "styled-components";


export const  Btn = styled.button`
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 18px;
    line-height: 21.94px;
  
    color: var(--secondary-text-color);
    background-color: var(--primery-text-color);
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
    border-radius: 10.3108px;
  
    width: 168px;
    height: 50px;
  
    padding: 14px 28px;
    display: block;
  
    margin-left: auto;
    margin-right: auto;
  
    &:hover {
      color: white;
      background-color: var(--active);
    }
  `