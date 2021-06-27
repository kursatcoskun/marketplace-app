import { Card, Col } from "antd";
import Checkbox from "antd/lib/checkbox/Checkbox";
import { Row } from "antd";
import { LeftBarCard } from "./LeftBarCard";
import Text from "antd/lib/typography/Text";
export interface SortingTypeSelectionProps {
  title: String;
}

const SortingTypeSelection: React.FunctionComponent<SortingTypeSelectionProps> =
  (props) => {
    return (
      <div>
        <Text>{props.title}</Text>
        <LeftBarCard bordered={false}>
          <Row>
            <Checkbox>Price low to high</Checkbox>
          </Row>
          <Row>
            <Checkbox>Price high to low</Checkbox>
          </Row>
          <Row>
            <Checkbox>New to old</Checkbox>
          </Row>
          <Row>
            <Checkbox>Old to new</Checkbox>
          </Row>
        </LeftBarCard>
      </div>
    );
  };

export default SortingTypeSelection;
