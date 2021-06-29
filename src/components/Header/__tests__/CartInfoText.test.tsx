// MyComponent.test.js
import React from "react";
import { shallow } from "enzyme";
import { CartInfoText } from "../CartInfoText";
describe("CartInfoTextComponent", () => {
  it("should render CartInfoText component", () => {
    const wrapper = shallow(<CartInfoText />);
  });

  it("should render initial layout", () => {
    const component = shallow(<CartInfoText />);
    expect(component.getElements()).toMatchSnapshot();
  });
});
