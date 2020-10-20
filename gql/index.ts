import { gql } from "@apollo/client";

export const GET_PRODUCT_LIST = gql`
  query ProductList {
    productList {
      id,
      name,
      price {
        current_price,
        original_price
      },
      image_key
    }
  }
`;

export const GET_PRODUCT = gql`
  query Product($id: String!) {
    product(id: $id) {
      id,
      name,
      offer_ids,
      price {
        current_price,
        original_price
      },
      information {
        section_text,
        section_title
      },
      image_key
    }
  }
`;

export const GET_USER = gql`
  query User($id: String!) {
    user(id: $id) {
      id,
      available_badges,
      offers {
        id,
        title,
        type
      }
    }
  }
`;

export const GET_PRODUCT_AND_USER = gql`
  query ($id: String!, $user: String!) {
    product(id: $id) {
      id,
      name,
      offer_ids,
      price {
        current_price,
        original_price
      },
      information {
        section_text,
        section_title
      },
      image_key
    }
    user(id: $user) {
      id,
      available_badges,
      offers {
        id,
        title,
        type
      }
    }
  }
`;