import styled from 'styled-components'
import { Accordion as MuiAccordion } from '@mui/material'

export const FaqContainer = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  footer {
    margin-top: auto;
  }
`

export const FaqMain = styled.section`
  display: flex;
  justify-content: center;
  gap: 74px;
  padding-top: 6rem;
  padding-bottom: 3rem;
`

export const ImageContainer = styled.div`
  margin-top: 80px;
`
export const AccordionContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 43.75rem;
`

export const Accordion = styled(MuiAccordion)`
  & + & {
    border-top: 1px solid #cbcbcb;
  }

  svg {
    width: 1.2rem;
    height: 1.2rem;
    rotate: 270deg;
    color: #323232;
  }

  & {
    [aria-expanded] {
      padding: 0 1.5rem;
    }

    [aria-expanded='false']:hover {
      background-color: #dedede;
    }

    .MuiAccordionSummary-content {
      margin: 1rem 0;
    }

    .MuiAccordionDetails-root {
      padding: 1rem 1.5rem;
    }
  }

  a {
    color: ${(props) => props.theme.colors.blue[500]};
  }
`

export const AccordionContent = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
`

export const AccordionTitle = styled.span`
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #002c66;
`

export const TitleSpan = styled.h1`
  color: #002c66;
  font-size: 32px;
  font-weight: 600;
  line-height: 38px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 1.5rem;
`
