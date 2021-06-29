import { Button, Col, List, Row } from "antd";
import "antd/dist/antd.css";
import { HomeLayoutRow } from "./HomeLayoutRow";
import SortingTypeSelection from "./SortingTypeSelection";
import FilterSelection from "./FilterSelection";
import { ShoppingCartCard } from "./ShoppingCartCard";
import Text from "antd/lib/typography/Text";
import { Space } from "antd";
import { Divider } from "antd";
import Products from "./Products";
import { bindActionCreators, Dispatch } from "redux";
import { getAllCompanies } from "../../core/redux/actions/CompanyActions";
import { connect } from "react-redux";
import { useEffect } from "react";
import { Company } from "../../core/models/Company";
import {
  addToCart,
  getAllShoppingItems,
  removeToCart,
} from "../../core/redux/actions/ShoppingActions";
import { Item } from "../../core/models/Item";
import * as _ from "lodash";
import { State } from "../../core/models/State";
import { ShoppingCart } from "../../core/models/ShoppingCart";

export interface HomeContainerProps {
  actions: any;
  companies: Company[];
  shoppingItems: Item[];
  shoppingCartItems: ShoppingCart[];
}

const HomeContainer: React.FunctionComponent<HomeContainerProps> = (props) => {
  useEffect(() => {
    getAllCompanies();
    getAllItems();
  }, [props.actions]);

  const getAllCompanies = () => {
    props.actions.getCompanies();
  };

  const getAllItems = () => {
    props.actions.getItems();
  };

  const getTotalPrice = () => {
    return props.shoppingCartItems
      ?.reduce((pv, cv) => pv + (cv.totalPrice || 0), 0)
      .toFixed(2);
  };

  const addToCart = (cart: ShoppingCart) => {
    props.actions.addToCart(cart);
  };

  const removeToCart = (cart: ShoppingCart) => {
    props.actions.removeToCart(cart);
  };

  function getFlattenTags() {
    const tags = props.shoppingItems.map((item) => item.tags).flat();
    return _.uniq(tags);
  }

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
          options={props?.companies?.map((company, index) => ({
            id: index,
            shortCode: company.slug,
            label: company.name,
            selected: false,
          }))}
        />
        <FilterSelection
          title="Tags"
          inputPlaceholder="Search tag"
          options={getFlattenTags().map((tag, index) => ({
            id: index,
            label: tag,
            shortCode: tag,
            selected: false,
          }))}
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
        <Products items={props.shoppingItems} />
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
            dataSource={props?.shoppingCartItems}
            renderItem={(cart) => (
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
                      <Text>{cart?.item?.name}</Text>
                      <Text style={{ color: "#1ea4ce", fontWeight: "bold" }}>
                        &#8378;{cart?.totalPrice}
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
                      onClick={() =>
                        removeToCart({
                          quantity: -1,
                          item: cart.item,
                          totalPrice: cart.item.price,
                        })
                      }
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
                      {cart?.quantity}
                    </Button>
                    <Button
                      style={{
                        color: "#1ea4ce",
                        fontWeight: "bold",
                      }}
                      type="text"
                      onClick={() =>
                        addToCart({
                          quantity: 1,
                          item: cart.item,
                          totalPrice: cart.item.price,
                        })
                      }
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
              &#8378;{getTotalPrice()}
            </Button>
          </Row>
        </ShoppingCartCard>
      </Col>
    </HomeLayoutRow>
  );
};

const mapStateToProps = (state: State) => {
  return {
    companies: state.company.companies,
    shoppingItems: state.shoppingItem.items,
    shoppingCartItems: state.shoppingItem.shoppingCart,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    actions: {
      getCompanies: bindActionCreators(getAllCompanies, dispatch),
      getItems: bindActionCreators(getAllShoppingItems, dispatch),
      addToCart: bindActionCreators(addToCart, dispatch),
      removeToCart: bindActionCreators(removeToCart, dispatch),
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
