import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 16px;
  box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.3);
`;

export const StyledLink = styled(NavLink)`
  color: var(--secondary-text-color);
  padding: 4px 16px;

  &:hover,
  &:focus {
    color: var(--active);
    border-radius: 8px;
    border: 1px solid var(--active);
    box-shadow: 4px 4px 1px 0px rgba(0, 0, 0, 0.3);

    &.active {
      color: var(--active);
    }
  }
`;
