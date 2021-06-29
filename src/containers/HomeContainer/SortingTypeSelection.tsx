import { Radio } from "antd";
import { LeftBarCard } from "./LeftBarCard";
import Text from "antd/lib/typography/Text";
import { Space } from "antd";
import { useState } from "react";
import { bindActionCreators, Dispatch } from "redux";
import { lowToHigh, newToOld } from "../../core/redux/actions/ShoppingActions";
import { connect } from "react-redux";
export interface SortingTypeSelectionProps {
  title: String;
  actions: any;
}

const SortingTypeSelection: React.FunctionComponent<SortingTypeSelectionProps> =
  (props) => {
    const [value, setValue] = useState(null);

    const lowToHigh = () => {
      props.actions.lowToHigh("low");
    };

    const highToLow = () => {
      props.actions.lowToHigh("high");
    };

    const newToOld = () => {
      props.actions.newToOld("new");
    };

    const oldToNew = () => {
      props.actions.newToOld("old");
    };

    const onChange = (e: any) => {
      setValue(e.target.value);
      if (e.target.value === 1) {
        lowToHigh();
      } else if (e.target.value === 2) {
        highToLow();
      } else if (e.target.value === 3) {
        newToOld();
      } else if (e.target.value === 4) {
        oldToNew();
      }
    };
    return (
      <div>
        <Text>{props.title}</Text>
        <LeftBarCard bordered={false}>
          <Radio.Group onChange={onChange} value={value}>
            <Space direction="vertical">
              <Radio value={1}>Price low to high</Radio>
              <Radio value={2}>Price high to low</Radio>
              <Radio value={3}>New to old</Radio>
              <Radio value={4}>Old to new</Radio>
            </Space>
          </Radio.Group>
        </LeftBarCard>
      </div>
    );
  };

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    actions: {
      lowToHigh: bindActionCreators(lowToHigh, dispatch),
      newToOld: bindActionCreators(newToOld, dispatch),
    },
  };
};

export default connect(null, mapDispatchToProps)(SortingTypeSelection);
