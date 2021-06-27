import React from "react";
import styled from "styled-components";
import { Row } from "antd";
import { RowProps } from "antd/lib/row";

export const ProductListLayout: React.FunctionComponent<RowProps> = styled(Row)`
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 800px) {
    flex-direction: row;
  }
`;
