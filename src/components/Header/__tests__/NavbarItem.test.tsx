// MyComponent.test.js
import { shallow } from "enzyme";
import React from "react";
import NavbarItem from "../NavbarItem";
describe("NavbarItemComponent", () => {
  it("should render NavbarItem component", () => {
    const wrapper = shallow(<NavbarItem />);
  });

  it("should render initial layout", () => {
    const component = shallow(<NavbarItem />);
    expect(component.getElements()).toMatchSnapshot();
  });
});
