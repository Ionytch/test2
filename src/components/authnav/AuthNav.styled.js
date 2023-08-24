import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const AuthLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: blue;
  }
`;

// .link {
//   display: inline-block;
//   text-decoration: none;
//   padding: 12px;
//   font-weight: 700;
//   color: #2a363b;
// }

// .link.active {
//   color: #e84a5f;
// }
