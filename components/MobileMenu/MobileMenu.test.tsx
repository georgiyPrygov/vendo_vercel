import React from "react";
import MobileMenu from "./MobileMenu";
import { shallow } from "enzyme";

describe("Mobile menu", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(<MobileMenu />);
    expect(wrapper.html()).toMatchSnapshot();
  });
  it("renders correctly", () => {
    const wrapper = shallow(<MobileMenu />);
    expect(wrapper.length).toBe(1);
  });
  it("Menu opens on click", () => {
    const wrapper = shallow(<MobileMenu />);
    wrapper.find("button").simulate("click");
    expect(wrapper.find(".container__content").hasClass("active")).toBeTruthy();
  });
});
