import React from "react";
import TestUtils from "react-addons-test-utils";
import expect from "expect";
import Hello from "../src/hello.js";
import jsdom from "mocha-jsdom"; // Importamos a integração do mocha e jsdom,

jsdom() // iniciamos a magica e ta feito.

describe("<Hello />", () => {

  it("should return an h1 with 'hello' string", () => {

    const component = TestUtils.renderIntoDocument(
      <Hello />
    );

    const h1 = TestUtils.findRenderedDOMComponentWithTag(
      component, "h1"
    );

    expect(h1.textContent).toEqual("Hello");

  });

});