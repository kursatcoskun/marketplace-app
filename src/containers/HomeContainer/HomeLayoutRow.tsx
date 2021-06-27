import React from "react";
import styled from "styled-components";
import { Row } from "antd";
import { RowProps } from "antd/lib/row";

export const HomeLayoutRow: React.FunctionComponent<RowProps> = styled(Row)`
  padding-top: 41px;
  justify-content: center;
  padding-right: 7%;
  padding-left: 3%;
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
`;
