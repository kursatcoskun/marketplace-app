// MyComponent.test.js
import { shallow } from "enzyme";
import NavbarTitle from "../NavbarTitle";
describe("NavbarTitleComponent", () => {
  it("should render NavbarItem component", () => {
    const wrapper = shallow(<NavbarTitle />);
  });

  it("should render initial layout", () => {
    const component = shallow(<NavbarTitle />);
    expect(component.getElements()).toMatchSnapshot();
  });
});
