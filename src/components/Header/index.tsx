import Header from "./Header";
import NavbarTitle from "./NavbarTitle";
import NavbarItem from "./NavbarItem";
import ShoppingCartInfo from "./ShoppingCartInfo";

export interface HeaderLayoutProps {
  title: String;
}

const HeaderLayout: React.FunctionComponent<HeaderLayoutProps> = (props) => {
  return (
    <Header>
      <NavbarTitle>{props.title}</NavbarTitle>
      <NavbarItem>
        <ShoppingCartInfo />
      </NavbarItem>
    </Header>
  );
};

export default HeaderLayout;
