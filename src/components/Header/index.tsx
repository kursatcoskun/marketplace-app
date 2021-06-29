import Header from "./Header";
import NavbarTitle from "./NavbarTitle";
import NavbarItem from "./NavbarItem";
import ShoppingCartInfo from "./ShoppingCartInfo";
import { connect } from "react-redux";
import { State } from "../../core/models/State";
import { ShoppingCart } from "../../core/models/ShoppingCart";

export interface HeaderLayoutProps {
  title: String;
  shoppingCartItems?: ShoppingCart[];
}

const HeaderLayout: React.FunctionComponent<HeaderLayoutProps> = (props) => {
  const getTotalPrice = () => {
    return props.shoppingCartItems
      ?.reduce((pv, cv) => pv + (cv.totalPrice || 0), 0)
      .toFixed(2);
  };

  return (
    <Header>
      <NavbarTitle>{props.title}</NavbarTitle>
      <NavbarItem>
        <ShoppingCartInfo cartTotal={getTotalPrice() || 0} />
      </NavbarItem>
    </Header>
  );
};

const mapStateToProps = (state: State) => {
  return {
    shoppingCartItems: state.shoppingItem.shoppingCart,
  };
};

export default connect(mapStateToProps, null)(HeaderLayout);
