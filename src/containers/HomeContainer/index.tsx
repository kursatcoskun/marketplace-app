import { Button, Col, List, Row } from "antd";
import "antd/dist/antd.css";
import { HomeLayoutRow } from "./HomeLayoutRow";
import SortingTypeSelection from "./SortingTypeSelection";
import { Selection } from "../../core/models/Selection";
import FilterSelection from "./FilterSelection";
import { ShoppingCartCard } from "./ShoppingCartCard";
import { CartItem } from "../../core/models/CartItem";
import Text from "antd/lib/typography/Text";
import { Space } from "antd";
import { Divider } from "antd";
import Products from "./Products";

export interface HomeContainerProps {}

const HomeContainer: React.FunctionComponent<HomeContainerProps> = () => {
  const options: Selection[] = [
    {
      id: 1,
      label: "sample",
      selected: false,
      shortCode: "",
    },
    {
      id: 2,
      label: "sample 2",
      selected: false,
      shortCode: "",
    },
    {
      id: 3,
      label: "sample 3",
      selected: false,
      shortCode: "",
    },
    {
      id: 4,
      label: "sample 4",
      selected: false,
      shortCode: "",
    },
    {
      id: 5,
      label: "sample 5",
      selected: false,
      shortCode: "",
    },
    {
      id: 6,
      label: "sample 6",
      selected: false,
      shortCode: "",
    },
  ];

  const cartItems: CartItem[] = [
    {
      id: 1,
      label: "Sample Product",
      price: 10,
      quantity: 2,
    },
    {
      id: 2,
      label: "Sample Product",
      price: 10,
      quantity: 2,
    },
    {
      id: 3,
      label: "Sample Product",
      price: 10,
      quantity: 2,
    },
    {
      id: 4,
      label: "Sample Product",
      price: 10,
      quantity: 2,
    },
  ];
  return (
    <HomeLayoutRow>
      <Col
        flex="auto"
        xs={{ span: 24, offset: 1 }}
        sm={{ span: 24, offset: 1 }}
        lg={{ span: 5, offset: 1 }}
        xl={{ span: 5, offset: 1 }}
        xxl={{ span: 5, offset: 1 }}
      >
        <SortingTypeSelection title="Sorting" />
        <FilterSelection
          title="Brands"
          inputPlaceholder="Search brand"
          options={options}
        />
        <FilterSelection
          title="Tags"
          inputPlaceholder="Search tag"
          options={options}
        />
      </Col>
      <Col
        flex="auto"
        xs={{ span: 24, offset: 1 }}
        sm={{ span: 24, offset: 1 }}
        lg={{ span: 11, offset: 1 }}
        xl={{ span: 11, offset: 1 }}
        xxl={{ span: 11, offset: 1 }}
      >
        <Products />
      </Col>
      <Col
        flex="auto"
        xs={{ span: 24, offset: 1 }}
        sm={{ span: 24, offset: 1 }}
        lg={{ span: 5, offset: 1 }}
        xl={{ span: 5, offset: 1 }}
        xxl={{ span: 5, offset: 1 }}
      >
        <ShoppingCartCard>
          <List
            style={{ width: "100%" }}
            itemLayout="horizontal"
            bordered={false}
            dataSource={cartItems}
            renderItem={(item) => (
              <List.Item style={{ display: "flex", justifyContent: "center" }}>
                <Row style={{ justifyContent: "center" }}>
                  <Col
                    style={{ justifyContent: "center" }}
                    xs={{ span: 17, offset: 1 }}
                    sm={{ span: 17, offset: 1 }}
                    lg={{ span: 23, offset: 1 }}
                    xl={{ span: 17, offset: 1 }}
                    xxl={{ span: 17, offset: 1 }}
                  >
                    <Space direction="vertical">
                      <Text>{item.label}</Text>
                      <Text style={{ color: "#1ea4ce", fontWeight: "bold" }}>
                        &#8378;{item.price}
                      </Text>
                    </Space>
                  </Col>
                  <Col
                    style={{ display: "flex", justifyContent: "center" }}
                    xs={{ span: 5, offset: 1 }}
                    sm={{ span: 5, offset: 1 }}
                    lg={{ span: 23, offset: 1 }}
                    xl={{ span: 5, offset: 1 }}
                    xxl={{ span: 5, offset: 1 }}
                  >
                    <Button
                      type="text"
                      style={{ color: "#1ea4ce", fontWeight: "bold" }}
                    >
                      -
                    </Button>
                    <Button
                      type="text"
                      style={{
                        backgroundColor: "#1ea4ce",
                        color: "white",
                        cursor: "unset",
                      }}
                    >
                      {item.quantity}
                    </Button>
                    <Button
                      style={{
                        color: "#1ea4ce",
                        fontWeight: "bold",
                      }}
                      type="text"
                    >
                      +
                    </Button>
                  </Col>
                </Row>
              </List.Item>
            )}
          />
          <Divider />
          <Row style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              type="link"
              style={{
                border: "3px solid #1ea4ce",
                color: "#1ea4ce",
                cursor: "unset",
              }}
            >
              &#8378;39,97
            </Button>
          </Row>
        </ShoppingCartCard>
      </Col>
    </HomeLayoutRow>
  );
};

export default HomeContainer;
