// MyComponent.test.js
import { shallow } from "enzyme";
import React from "react";
import { LeftBarCard } from "../LeftBarCard";
describe("LeftBarCardComponent", () => {
  it("should render LeftBarCard component", () => {
    const wrapper = shallow(<LeftBarCard />);
  });

  it("should render initial layout", () => {
    const component = shallow(<LeftBarCard />);
    expect(component.getElements()).toMatchSnapshot();
  });
});
