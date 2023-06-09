import styled from "styled-components";

export const UserCards = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 16px;

  padding-top: 16px;
  padding-bottom: 16px;
`
export const Wrapper= styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
`

export const Btn =styled.button`
  font-size: 18px;

  color: var(--secondary-text-color);
  border: 1px solid transparent;

  padding: 4px 16px;

  border-radius: 6px;
  &:hover,
  &:focus {
    color: var(--active);
    border: solid 1px;
    box-shadow: 4px 4px 1px 0px rgba(0, 0, 0, 0.3);
  }
`
