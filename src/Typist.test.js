import React from "react";
import { shallow } from "enzyme";
import Typist from "./Typist";

describe("Typist", () => {
  it("should render with passed text", () => {
    const text = "Text will be here";
    const component = shallow(<Typist text={text} />);
    expect(component.text()).toBe(text);
    component.unmount();
  });

  it("should throw an error by not passing text prop", () => {
    const componentMaker = () => shallow(<Typist />);
    expect(componentMaker).toThrowError();
  });

  it("should render matching snapshot", () => {
    const component = shallow(
      <Typist
        text="Hello there!"
        color="#868686"
        fontSize="2em"
        fontFamily="monospace"
        blinkTime={3}
        typingTime={10}
      />
    );
    expect(component).toMatchSnapshot();
    component.unmount();
  });
});
