/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ProductPricingField
// ====================================================

export interface ProductPricingField_pricing_discount_gross {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductPricingField_pricing_discount_net {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductPricingField_pricing_discount {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: ProductPricingField_pricing_discount_gross;
  /**
   * Amount of money without taxes.
   */
  net: ProductPricingField_pricing_discount_net;
}

export interface ProductPricingField_pricing_priceRangeUndiscounted_start_gross {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductPricingField_pricing_priceRangeUndiscounted_start_net {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductPricingField_pricing_priceRangeUndiscounted_start {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: ProductPricingField_pricing_priceRangeUndiscounted_start_gross;
  /**
   * Amount of money without taxes.
   */
  net: ProductPricingField_pricing_priceRangeUndiscounted_start_net;
}

export interface ProductPricingField_pricing_priceRangeUndiscounted_stop_gross {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductPricingField_pricing_priceRangeUndiscounted_stop_net {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductPricingField_pricing_priceRangeUndiscounted_stop {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: ProductPricingField_pricing_priceRangeUndiscounted_stop_gross;
  /**
   * Amount of money without taxes.
   */
  net: ProductPricingField_pricing_priceRangeUndiscounted_stop_net;
}

export interface ProductPricingField_pricing_priceRangeUndiscounted {
  __typename: "TaxedMoneyRange";
  /**
   * Lower bound of a price range.
   */
  start: ProductPricingField_pricing_priceRangeUndiscounted_start | null;
  /**
   * Upper bound of a price range.
   */
  stop: ProductPricingField_pricing_priceRangeUndiscounted_stop | null;
}

export interface ProductPricingField_pricing_priceRange_start_gross {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductPricingField_pricing_priceRange_start_net {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductPricingField_pricing_priceRange_start {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: ProductPricingField_pricing_priceRange_start_gross;
  /**
   * Amount of money without taxes.
   */
  net: ProductPricingField_pricing_priceRange_start_net;
}

export interface ProductPricingField_pricing_priceRange_stop_gross {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductPricingField_pricing_priceRange_stop_net {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductPricingField_pricing_priceRange_stop {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: ProductPricingField_pricing_priceRange_stop_gross;
  /**
   * Amount of money without taxes.
   */
  net: ProductPricingField_pricing_priceRange_stop_net;
}

export interface ProductPricingField_pricing_priceRange {
  __typename: "TaxedMoneyRange";
  /**
   * Lower bound of a price range.
   */
  start: ProductPricingField_pricing_priceRange_start | null;
  /**
   * Upper bound of a price range.
   */
  stop: ProductPricingField_pricing_priceRange_stop | null;
}

export interface ProductPricingField_pricing {
  __typename: "ProductPricingInfo";
  /**
   * Whether it is in sale or not.
   */
  onSale: boolean | null;
  /**
   * The discount amount if in sale (null otherwise).
   */
  discount: ProductPricingField_pricing_discount | null;
  /**
   * The undiscounted price range of the product variants.
   */
  priceRangeUndiscounted: ProductPricingField_pricing_priceRangeUndiscounted | null;
  /**
   * The discounted price range of the product variants.
   */
  priceRange: ProductPricingField_pricing_priceRange | null;
}

export interface ProductPricingField_pricingInUsd_discount_gross {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductPricingField_pricingInUsd_discount_net {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductPricingField_pricingInUsd_discount {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: ProductPricingField_pricingInUsd_discount_gross;
  /**
   * Amount of money without taxes.
   */
  net: ProductPricingField_pricingInUsd_discount_net;
}

export interface ProductPricingField_pricingInUsd_priceRangeUndiscounted_start_gross {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductPricingField_pricingInUsd_priceRangeUndiscounted_start_net {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductPricingField_pricingInUsd_priceRangeUndiscounted_start {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: ProductPricingField_pricingInUsd_priceRangeUndiscounted_start_gross;
  /**
   * Amount of money without taxes.
   */
  net: ProductPricingField_pricingInUsd_priceRangeUndiscounted_start_net;
}

export interface ProductPricingField_pricingInUsd_priceRangeUndiscounted_stop_gross {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductPricingField_pricingInUsd_priceRangeUndiscounted_stop_net {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductPricingField_pricingInUsd_priceRangeUndiscounted_stop {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: ProductPricingField_pricingInUsd_priceRangeUndiscounted_stop_gross;
  /**
   * Amount of money without taxes.
   */
  net: ProductPricingField_pricingInUsd_priceRangeUndiscounted_stop_net;
}

export interface ProductPricingField_pricingInUsd_priceRangeUndiscounted {
  __typename: "TaxedMoneyRange";
  /**
   * Lower bound of a price range.
   */
  start: ProductPricingField_pricingInUsd_priceRangeUndiscounted_start | null;
  /**
   * Upper bound of a price range.
   */
  stop: ProductPricingField_pricingInUsd_priceRangeUndiscounted_stop | null;
}

export interface ProductPricingField_pricingInUsd_priceRange_start_gross {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductPricingField_pricingInUsd_priceRange_start_net {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductPricingField_pricingInUsd_priceRange_start {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: ProductPricingField_pricingInUsd_priceRange_start_gross;
  /**
   * Amount of money without taxes.
   */
  net: ProductPricingField_pricingInUsd_priceRange_start_net;
}

export interface ProductPricingField_pricingInUsd_priceRange_stop_gross {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductPricingField_pricingInUsd_priceRange_stop_net {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductPricingField_pricingInUsd_priceRange_stop {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: ProductPricingField_pricingInUsd_priceRange_stop_gross;
  /**
   * Amount of money without taxes.
   */
  net: ProductPricingField_pricingInUsd_priceRange_stop_net;
}

export interface ProductPricingField_pricingInUsd_priceRange {
  __typename: "TaxedMoneyRange";
  /**
   * Lower bound of a price range.
   */
  start: ProductPricingField_pricingInUsd_priceRange_start | null;
  /**
   * Upper bound of a price range.
   */
  stop: ProductPricingField_pricingInUsd_priceRange_stop | null;
}

export interface ProductPricingField_pricingInUsd {
  __typename: "ProductPricingInfo";
  /**
   * Whether it is in sale or not.
   */
  onSale: boolean | null;
  /**
   * The discount amount if in sale (null otherwise).
   */
  discount: ProductPricingField_pricingInUsd_discount | null;
  /**
   * The undiscounted price range of the product variants.
   */
  priceRangeUndiscounted: ProductPricingField_pricingInUsd_priceRangeUndiscounted | null;
  /**
   * The discounted price range of the product variants.
   */
  priceRange: ProductPricingField_pricingInUsd_priceRange | null;
}

export interface ProductPricingField {
  __typename: "Product";
  /**
   * Lists the storefront product's pricing, the current price and discounts, only meant for displaying.
   */
  pricing: ProductPricingField_pricing | null;
  /**
   * Lists the storefront product's pricing, the current price and discounts, only meant for displaying.
   */
  pricingInUsd: ProductPricingField_pricingInUsd | null;
}
