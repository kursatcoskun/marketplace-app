import { ShoppingCartOutlined } from "@ant-design/icons";
import { CartInfoText } from "./CartInfoText";
import { CenteredDiv } from "./CenteredDiv";
export interface ShoppingCartInfoProps {}

const ShoppingCartInfo: React.FunctionComponent<ShoppingCartInfoProps> = () => {
  return (
    <CenteredDiv>
      <ShoppingCartOutlined style={{ fontSize: "200%" }} />
      <CartInfoText>&#8378;39,99</CartInfoText>
    </CenteredDiv>
  );
};

export default ShoppingCartInfo;
