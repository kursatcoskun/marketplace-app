// MyComponent.test.js
import { shallow } from "enzyme";
import ShoppingCartInfo from "../ShoppingCartInfo";
describe("ShoppingCartInfoComponent", () => {
  it("should render ShoppingCartInfo component", () => {
    const wrapper = shallow(<ShoppingCartInfo cartTotal={1111} />);
  });

  it("should render initial layout", () => {
    const component = shallow(<ShoppingCartInfo cartTotal={1111} />);
    expect(component.getElements()).toMatchSnapshot();
  });
});
