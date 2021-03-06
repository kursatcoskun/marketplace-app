import Text from "antd/lib/typography/Text";
import { Row, Col, Image } from "antd";
import { Button } from "antd";
import { Card } from "antd";
import { Space } from "antd";
import { Pagination } from "antd";
import { ProductListLayout } from "./ProductListLayout";
import { Item } from "../../core/models/Item";
import { chunk } from "../../utilities/ArrayUtils";
import { useState } from "react";
import { bindActionCreators, Dispatch } from "redux";
import { State } from "../../core/models/State";
import { addToCart } from "../../core/redux/actions/ShoppingActions";
import { connect } from "react-redux";
import { ShoppingCart } from "../../core/models/ShoppingCart";
import { Filter } from "../../core/models/filter";
export interface ProductsProps {
  actions: any;
  items: Item[];
  productTypes?: string[];
  selectedProductType?: string;
  brandSearchFilter?: Filter;
}

const Products: React.FunctionComponent<ProductsProps> = (props) => {
  const [page, setPage] = useState(0);
  const [selectedProductType, setSelectedProductType] = useState("");

  const addToCart = (cart: ShoppingCart) => {
    props.actions.addToCart(cart);
  };

  const clickProductType = (type: string) => {
    setSelectedProductType(type);
  };

  function prevNextButtonsRender(
    current: number,
    type: string,
    originalElement: any
  ) {
    if (type === "prev") {
      return (
        <a href="#0" style={{ color: "#1ea4ce" }}>
          Previous
        </a>
      );
    }
    if (type === "next") {
      return (
        <a href="#0" style={{ color: "#1ea4ce" }}>
          Next
        </a>
      );
    }
    return originalElement;
  }

  const getChunkArrayForShoppingItems = (): Item[][] => {
    let items = props.items;
    if (selectedProductType) {
      items = items.filter((x) => x.itemType === selectedProductType);
    }
    if (
      props.brandSearchFilter &&
      props.brandSearchFilter?.type === "brand" &&
      props.brandSearchFilter.filters?.length
    ) {
      items = items.filter((x) =>
        props.brandSearchFilter?.filters.includes(x.manufacturer)
      );
    }
    if (
      props.brandSearchFilter &&
      props.brandSearchFilter?.type === "tag" &&
      props.brandSearchFilter.filters?.length
    ) {
      items = items.filter((x) =>
        props.brandSearchFilter?.filters.some((filter) =>
          x.tags.includes(filter)
        )
      );
    }
    return chunk(items, 16);
  };

  function sizeChanged(page: number) {
    setPage(page - 1);
  }

  return (
    <div>
      <Text
        style={{
          color: "#6F6F6F",
          fontFamily: "Open Sans",
          fontSize: "20px",
          lineHeight: "25px",
        }}
      >
        Products
      </Text>
      <Row
        style={{
          display: "flex",
          justifyContent: "flex-start",
          marginTop: "10px",
        }}
      >
        {props.productTypes?.map((productType) => (
          <Button
            key={productType}
            onClick={() => clickProductType(productType)}
            style={{
              marginLeft: "10px",
              backgroundColor:
                productType === selectedProductType ? "#1ea4ce" : "#F2F0FD",
              color: productType === selectedProductType ? "white" : "#1ea4ce",
              cursor: "unset",
            }}
          >
            {productType}
          </Button>
        ))}
      </Row>
      <div
        style={{ backgroundColor: "white", marginTop: "10px" }}
        className="site-card-wrapper"
      >
        <ProductListLayout>
          {getChunkArrayForShoppingItems()[page]?.map((product) => (
            <Col
              key={product.slug}
              xs={{ span: 12 }}
              sm={{ span: 12 }}
              xl={{ span: 6 }}
              xxl={{ span: 6 }}
              lg={{ span: 6 }}
            >
              <Card key={product.slug} bordered={false}>
                <Space
                  direction="vertical"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <Image
                    src="https://via.placeholder.com/80"
                    style={{
                      border: "2px solid lightgray",
                      padding: "10px",
                      borderRadius: "5px",
                    }}
                  />
                  <Text style={{ color: "#1ea4ce", fontWeight: "bold" }}>
                    &#8378; {product.price}
                  </Text>
                  <Text style={{ fontWeight: "bold" }}>{product.name}</Text>
                  <Button
                    block={true}
                    style={{
                      backgroundColor: "#1ea4ce",
                      color: "white",
                    }}
                    type="text"
                    onClick={() =>
                      addToCart({
                        quantity: 1,
                        item: product,
                        totalPrice: product.price,
                      })
                    }
                  >
                    Add
                  </Button>
                </Space>
              </Card>
            </Col>
          ))}
        </ProductListLayout>
      </div>
      <Row>
        <Col span={24} style={{ display: "flex", justifyContent: "center" }}>
          <Pagination
            showSizeChanger={false}
            total={getChunkArrayForShoppingItems()?.length}
            defaultPageSize={1}
            onChange={sizeChanged}
            itemRender={prevNextButtonsRender}
            style={{ marginBottom: "80px", marginTop: "10px" }}
          />
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = (state: State) => {
  return {
    productTypes: state.shoppingItem.productTypes,
    brandSearchFilter: state.shoppingItem.selectedBrandFilter,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    actions: {
      addToCart: bindActionCreators(addToCart, dispatch),
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
