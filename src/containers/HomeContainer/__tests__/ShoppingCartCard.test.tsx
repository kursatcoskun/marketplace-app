// MyComponent.test.js
import { shallow } from "enzyme";
import React from "react";
import { ShoppingCartCard } from "../ShoppingCartCard";
describe("LeftBarCardComponent", () => {
  it("should render ShoppingCartCard component", () => {
    const wrapper = shallow(<ShoppingCartCard />);
  });

  it("should render initial layout", () => {
    const component = shallow(<ShoppingCartCard />);
    expect(component.getElements()).toMatchSnapshot();
  });
});
