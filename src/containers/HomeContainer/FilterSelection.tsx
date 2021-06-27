import Checkbox from "antd/lib/checkbox/Checkbox";
import { List, Row } from "antd";
import { LeftBarCard } from "./LeftBarCard";
import Text from "antd/lib/typography/Text";
import { Input } from "antd";
import { Selection } from "../../core/models/Selection";
export interface FilterSelectionProps {
  title: string;
  inputPlaceholder: string;
  options: Selection[];
}

const FilterSelection: React.FunctionComponent<FilterSelectionProps> = (
  props
) => {
  return (
    <div style={{ marginTop: "24px" }}>
      <Text>{props.title}</Text>
      <LeftBarCard bordered={false} style={{ height: "274px" }}>
        <Row style={{ marginBottom: "20px" }}>
          <Input size="large" placeholder={props.inputPlaceholder} />
        </Row>
        <Row>
          <List
            style={{ width: "100%", height: "170px", overflow: "auto" }}
            itemLayout="horizontal"
            bordered={false}
            split={false}
            dataSource={props.options}
            renderItem={(item) => (
              <List.Item>
                <Checkbox>{item.label}</Checkbox>
              </List.Item>
            )}
          />
        </Row>
      </LeftBarCard>
    </div>
  );
};

export default FilterSelection;
