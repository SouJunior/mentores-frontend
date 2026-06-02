import styled from 'styled-components';

export const InfoContainer = styled.span<Partial<{ right: number }>>`
  display: flex;
  justify-content: flex-end;
  height: 24px;
  position: absolute;
  right: ${props => props.right}px;
  cursor: pointer;
  z-index: 40;

  svg {
    width: 1rem;
    height: 1rem;
  }
`;

export const Tooltip = styled.div<{ isVisible: boolean }>`
  position: absolute;
  background-color: #fff;
  border-radius: 0.5rem;
  opacity: ${props => (props.isVisible ? 1 : 0)};
  visibility: ${props => (props.isVisible ? 'visible' : 'hidden')};
  transition: opacity 0.3s ease-in-out;
  z-index: 9999;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 400px;
`;

export const Title = styled.h3`
  color: ${props => props.theme.colors.blue[400]};
  font-size: 1rem;
  font-weight: 700;
`;

export const CriteriaList = styled.ul`
  list-style: none;
  margin-top: 0.8rem;
  position: relative;
  padding: 0 1rem;
`;

export const Criterion = styled.li`
  color: ${props => props.theme.colors.gray[700]};
  line-height: 150%;
`;

export const Line = styled.span`
  position: absolute;
  left: 0rem;
  top: 50%;
  transform: translateY(-50%);
  bottom: 0;
  width: 3px;
  height: 80%;
  border-radius: 9999px;
  background-color: ${props => props.theme.colors.gray[700]};
`;
