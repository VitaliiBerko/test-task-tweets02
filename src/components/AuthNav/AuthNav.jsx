import { StyledLink, Wrapper } from "./AuthNav.styled";

export const AuthNav = () => {
  return (
    <Wrapper>
      <li>
        <StyledLink to="/">Home</StyledLink>
      </li>
      <li>
        <StyledLink to="/tweets">Tweets</StyledLink>
      </li>
    </Wrapper>
  );
};
