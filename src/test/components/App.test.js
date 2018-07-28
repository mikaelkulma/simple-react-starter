import React from "react";
import { shallow } from "enzyme";
import App from "../../main/components/App";

it("should have a header!", () => {
  const wrapped = shallow(<App />);

  expect(wrapped.find("h1").length).toEqual(1);
});
