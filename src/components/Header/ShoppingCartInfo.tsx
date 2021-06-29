import { ShoppingCartOutlined } from "@ant-design/icons";
import { CartInfoText } from "./CartInfoText";
import { CenteredDiv } from "./CenteredDiv";
export interface ShoppingCartInfoProps {
  cartTotal: string | number;
}

const ShoppingCartInfo: React.FunctionComponent<ShoppingCartInfoProps> = (
  props
) => {
  return (
    <CenteredDiv>
      <ShoppingCartOutlined style={{ fontSize: "200%" }} />
      <CartInfoText>&#8378;{props.cartTotal}</CartInfoText>
    </CenteredDiv>
  );
};

export default ShoppingCartInfo;
