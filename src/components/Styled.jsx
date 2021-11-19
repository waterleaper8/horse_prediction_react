import styled from "styled-components";
import img_mv from "../assets/mv.jpg";
import img_product1 from "../assets/product4re.jpg";
import img_product2 from "../assets/product2g.jpg";

export const SMv = styled.div`
  background-image: url(${img_mv});
  background-size: cover;
  width: 100%;
  height: 420px;
`;

export const STitle = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
`;

export const SProduct1 = styled.div`
  background-size: cover;
  background-image: url(${img_product1});
`;

export const SProduct2 = styled.div`
  background-size: cover;
  background-image: url(${img_product2});
`;

export const SLinkHover = styled.div`
  transition: opacity 0.5s;
  &:hover {
    opacity: 0.6;
  }
`;
