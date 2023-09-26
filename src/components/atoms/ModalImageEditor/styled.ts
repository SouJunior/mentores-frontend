import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CropContainer = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  overflow: hidden;
`;

export const CropImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Controls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const SaveButton = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
