import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card from "../components/Card";
import { priceConversion } from "../src/helpers";

describe('Card', () => {

  let expectedProps;

  beforeEach( () => {
    expectedProps = {
      id: "2",
      name: "Shirt",
      currentPrice: 1000,
      originalPrice: 1500
    }
  })

  test('should render name, current price and original price', () => {

    const { getByText } = render(<Card {...expectedProps} />);
    const name = getByText(expectedProps.name);
    const currentPrice = getByText(`£${priceConversion(expectedProps.currentPrice)}`);
    const originalPrice = getByText(`Original Price: £${priceConversion(expectedProps.originalPrice)}`);

    expect(name).toBeVisible();
    expect(currentPrice).toBeVisible();
    expect(originalPrice).toBeVisible();
  });

  test('matches snapshot', () => {
    const { asFragment } = render(<Card {...expectedProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
})