import styled from "styled-components";

export const Footer = () => {
  return (
    <SFooter
      id="footer"
      className="row bg-dark text-light border-top border-light p-3"
    >
      <div className="col-6"></div>
      <div className="col-6 align-self-end text-end">
        <small>Copyright &copy; 2021 waterleaper All Rights Reserved.</small>
      </div>
    </SFooter>
  );
};

const SFooter = styled.div`
  height: 150px;
`;
