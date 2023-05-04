import styled from "styled-components";
import { grey, black, pink } from "../../../styles/colors";

export const FormContainer = styled.div`
  p {
    font-family: "Kim jung chul Myungjo";
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    color: ${black};
    margin: 0px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputStyle = styled.input`
  width: 323px;
  padding: 5px;
  border-radius: 5px;
  border-color: ${grey[100]};

  font-family: "SUIT";
  font-weight: 500;
  font-size: 14px;
`;

export const TextAreaStyle = styled.textarea`
  height: 80px;
  width: 323px;
  padding: 5px;
  border: 1.8px solid ${grey[300]};
  border-radius: 5px;
  resize: none;

  font-family: "SUIT";
  font-weight: 500;
  font-size: 14px;
`;

export const InputDiv = styled.div`
  margin-bottom: 20px;
`;

export const PreviewImgStyle = styled.img`
  width: 300px;
  height: 200px;
  align-self: center;

  @media screen and (max-width: 768px) {
    width: 200px;
  }
`;

export const BtnContainer = styled.div`
  margin-top: 25px;
  padding-top: 10px;
  margin-left: -2rem;
  border-top: 1px solid ${grey[200]};
  width: 400px;

  display: flex;
  justify-content: end;
`;

export const BtnDiv = styled.div`
  margin-right: 15px;
`;
