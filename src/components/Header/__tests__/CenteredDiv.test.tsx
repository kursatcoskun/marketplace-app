// MyComponent.test.js
import React from "react";
import { shallow } from "enzyme";
import { CenteredDiv } from "../CenteredDiv";
describe("CenteredDivComponent", () => {
  it("should render CenteredDiv component", () => {
    const wrapper = shallow(<CenteredDiv />);
  });

  it("should render initial layout", () => {
    const component = shallow(<CenteredDiv />);
    expect(component.getElements()).toMatchSnapshot();
  });
});
