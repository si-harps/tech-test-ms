import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Detail from "../components/Detail";
import { priceConversion } from "../src/helpers";

describe('Detail', () => {

  let expectedProps;

  beforeEach( () => {
    expectedProps = {
      id: "2",
      name: "Shirt",
      currentPrice: 1000,
      originalPrice: 1500,
      text: 'Lorem ipsum'
    }
  })

  test('should render name, current price and original price', () => {

    const { getByText } = render(<Detail {...expectedProps} />);
    const name = getByText(expectedProps.name);
    const currentPrice = getByText(`£${priceConversion(expectedProps.currentPrice)}`);
    const originalPrice = getByText(`Original Price: £${priceConversion(expectedProps.originalPrice)}`);
    const text = getByText(expectedProps.text);

    expect(name).toBeVisible();
    expect(currentPrice).toBeVisible();
    expect(originalPrice).toBeVisible();
    expect(text).toBeVisible();
  });

  test('matches snapshot', () => {
    const { asFragment } = render(<Detail {...expectedProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
})