import Checkbox from "antd/lib/checkbox/Checkbox";
import { List, Row } from "antd";
import { LeftBarCard } from "./LeftBarCard";
import Text from "antd/lib/typography/Text";
import { Input } from "antd";
import { Selection } from "../../core/models/Selection";
import { useState } from "react";
export interface FilterSelectionProps {
  title: string;
  inputPlaceholder: string;
  options: Selection[];
}

const FilterSelection: React.FunctionComponent<FilterSelectionProps> = (
  props
) => {
  const [value, setValue] = useState("");

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };
  return (
    <div style={{ marginTop: "24px" }}>
      <Text>{props.title}</Text>
      <LeftBarCard bordered={false} style={{ height: "274px" }}>
        <Row style={{ marginBottom: "20px" }}>
          <Input
            value={value}
            onChange={handleChange}
            size="large"
            placeholder={props.inputPlaceholder}
          />
        </Row>
        <Row>
          <List
            style={{ width: "100%", height: "170px", overflow: "auto" }}
            itemLayout="horizontal"
            bordered={false}
            split={false}
            dataSource={props.options.filter((x) => x.label.includes(value))}
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
