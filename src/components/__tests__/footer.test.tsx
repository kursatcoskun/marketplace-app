// MyComponent.test.js
import React from "react";
import { shallow } from "enzyme";
import Footer from "../Footer";
describe("FooterComponent", () => {
  it("should render footer component", () => {
    const wrapper = shallow(<Footer />);
  });
});
