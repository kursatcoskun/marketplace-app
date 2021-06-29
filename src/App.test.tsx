// MyComponent.test.js
import { shallow } from "enzyme";
import App from "./App";
describe("App", () => {
  it("should render App", () => {
    const wrapper = shallow(<App />);
  });

  it("should render initial layout", () => {
    const component = shallow(<App />);
    expect(component.getElements()).toMatchSnapshot();
  });
});
