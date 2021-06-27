import Text from "antd/lib/typography/Text";
import { Row, Col, Image } from "antd";
import { Button } from "antd";
import { Card } from "antd";
import { Space } from "antd";
import { Product } from "../../core/models/Product";
import { Pagination } from "antd";
import { ProductListLayout } from "./ProductListLayout";
export interface ProductsProps {}

const Products: React.FunctionComponent<ProductsProps> = () => {
  function itemRender(current: number, type: string, originalElement: any) {
    if (type === "prev") {
      return <a style={{ color: "#1ea4ce" }}>Previous</a>;
    }
    if (type === "next") {
      return <a style={{ color: "#1ea4ce" }}>Next</a>;
    }
    return originalElement;
  }

  const products: Product[] = [
    {
      id: 1,
      label: "Georgious office mug",
      price: 14.99,
    },
    {
      id: 2,
      label: "Georgious office mug",
      price: 14.99,
    },
    {
      id: 3,
      label: "Georgious office mug",
      price: 14.99,
    },
    {
      id: 4,
      label: "Georgious office mug",
      price: 14.99,
    },
    {
      id: 5,
      label: "Georgious office mug",
      price: 14.99,
    },
    {
      id: 5,
      label: "Georgious office mug",
      price: 14.99,
    },
    {
      id: 5,
      label: "Georgious office mug",
      price: 14.99,
    },
    {
      id: 5,
      label: "Georgious office mug",
      price: 14.99,
    },
    {
      id: 5,
      label: "Georgious office mug",
      price: 14.99,
    },
    {
      id: 5,
      label: "Georgious office mug",
      price: 14.99,
    },
    {
      id: 5,
      label: "Georgious office mug",
      price: 14.99,
    },
    {
      id: 5,
      label: "Georgious office mug",
      price: 14.99,
    },
    {
      id: 5,
      label: "Georgious office mug",
      price: 14.99,
    },
    {
      id: 5,
      label: "Georgious office mug",
      price: 14.99,
    },
    {
      id: 5,
      label: "Georgious office mug",
      price: 14.99,
    },
    {
      id: 5,
      label: "Georgious office mug",
      price: 14.99,
    },
  ];
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
        <Button
          type="text"
          style={{
            backgroundColor: "#1ea4ce",
            color: "white",
            cursor: "unset",
          }}
        >
          mug
        </Button>

        <Button
          type="text"
          style={{
            marginLeft: "10px",
            backgroundColor: "#F2F0FD",
            color: "#1ea4ce",
            cursor: "unset",
          }}
        >
          shirt
        </Button>
      </Row>
      <div
        style={{ backgroundColor: "white", marginTop: "10px" }}
        className="site-card-wrapper"
      >
        <ProductListLayout>
          {products.map((product) => (
            <Col
              xs={{ span: 12 }}
              sm={{ span: 12 }}
              xl={{ span: 6 }}
              xxl={{ span: 6 }}
              lg={{ span: 6 }}
            >
              <Card bordered={false}>
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
                  <Text style={{ fontWeight: "bold" }}>{product.label}</Text>
                  <Button
                    block={true}
                    style={{
                      backgroundColor: "#1ea4ce",
                      color: "white",
                    }}
                    type="text"
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
            total={100}
            itemRender={itemRender}
            style={{ marginBottom: "80px", marginTop: "10px" }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Products;
