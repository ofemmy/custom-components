import { keyframes } from "styled-components";
export const slideInFromRight = keyframes`
0%{
  opacity:0;
  transform:translateX(100%)
}
100%{
  opacity:1;
  transform:translateX(0)
}
`;
export const slideInFromLeft = keyframes`
0%{
  opacity:0;
  transform:translateX(-200%)
}
100%{
  opacity:1;
  transform:translateX(0)
}
`;
