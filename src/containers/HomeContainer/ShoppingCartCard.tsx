import { Card, CardProps } from "antd";
import React from "react";
import styled from "styled-components";

export const ShoppingCartCard: React.FunctionComponent<CardProps> = styled(
  Card
)`
  width: 296;
  height: auto;
  border: 8px solid #1ea4ce;
  background-color: #ffffff;
  border-radius: 2px;
  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
`;
