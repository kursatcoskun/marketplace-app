// MyComponent.test.js
import { shallow } from "enzyme";
import React from "react";
import Header from "../Header";
describe("CartInfoTextComponent", () => {
  it("should render Header component", () => {
    const wrapper = shallow(<Header />);
  });

  it("should render initial layout", () => {
    const component = shallow(<Header />);
    expect(component.getElements()).toMatchSnapshot();
  });
});
