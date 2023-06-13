import { NavMenu, NavItem, StyledLink } from './Header.styled';
const Header = () => {
  return (
    <nav>
      <NavMenu>
        <NavItem>
          <StyledLink to="/">Home</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/Movies">Movies</StyledLink>
        </NavItem>
      </NavMenu>
    </nav>
  );
};
export default Header;
