import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 450px;
  padding: 30px;
  margin: 30px auto;
  background: #161e2e;
  border: 1px solid #293958;
  border-radius: 12px;
  color: #f1f5f9;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 18px;
  font-weight: 600;
`;

export const Input = styled.input`
  padding: 14px 16px;
  background: #111827;
  border: 1px solid #405780;
  border-radius: 10px;
  font-size: 16px;
`;

export const Button = styled.button`
  padding: 14px;
  background: #3478f6;
  border: none;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 600;
`;