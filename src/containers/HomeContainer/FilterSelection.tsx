import Checkbox from "antd/lib/checkbox/Checkbox";
import { List, Row } from "antd";
import { LeftBarCard } from "./LeftBarCard";
import Text from "antd/lib/typography/Text";
import { Input } from "antd";
import { Selection } from "../../core/models/Selection";
import { useState } from "react";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import {
  applyBrandFilter,
  applyTagFilter,
} from "../../core/redux/actions/ShoppingActions";
import { State } from "../../core/models/State";
import { Filter } from "../../core/models/filter";
export interface FilterSelectionProps {
  title: string;
  inputPlaceholder: string;
  options: Selection[];
  actions: any;
  selectedBrandFilter?: Filter;
  selectedTagFilter?: Filter;
}

const FilterSelection: React.FunctionComponent<FilterSelectionProps> = (
  props
) => {
  const [value, setValue] = useState("");

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  const onCheckboxChange = (e: any, item: Selection) => {
    if (props.title === "Brands") {
      props.actions.setBrandFilter({
        type: "brand",
        filters: e.target.checked
          ? props.selectedTagFilter &&
            props.selectedTagFilter?.filters &&
            props.selectedTagFilter?.filters.length
            ? [...props.selectedTagFilter?.filters, item.shortCode]
            : [item.shortCode]
          : [],
      });
    }
    if (props.title === "Tags") {
      props.actions.setBrandFilter({
        type: "tag",
        filters: e.target.checked
          ? props.selectedBrandFilter &&
            props.selectedBrandFilter?.filters &&
            props.selectedBrandFilter?.filters.length
            ? [...props.selectedBrandFilter?.filters, item.shortCode]
            : [item.shortCode]
          : [],
      });
    }
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
                <Checkbox onChange={(e) => onCheckboxChange(e, item)}>
                  {item.label}
                </Checkbox>
              </List.Item>
            )}
          />
        </Row>
      </LeftBarCard>
    </div>
  );
};

const mapStateToProps = (state: State) => {
  return {
    selectedBrandFilter: state.shoppingItem.selectedBrandFilter,
    selectedTagFilter: state.shoppingItem.selectedTagFilter,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    actions: {
      setBrandFilter: bindActionCreators(applyBrandFilter, dispatch),
      setTagFilter: bindActionCreators(applyTagFilter, dispatch),
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterSelection);
