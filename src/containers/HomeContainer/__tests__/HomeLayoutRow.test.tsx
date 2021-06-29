// MyComponent.test.js
import { shallow } from "enzyme";
import { HomeLayoutRow } from "../HomeLayoutRow";
describe("HomeLayoutRowComponent", () => {
  it("should render HomeLayoutRow component", () => {
    const wrapper = shallow(<HomeLayoutRow />);
  });

  it("should render initial layout", () => {
    const component = shallow(<HomeLayoutRow />);
    expect(component.getElements()).toMatchSnapshot();
  });
});
