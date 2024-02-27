import styled from 'styled-components'
import * as Tabs from '@radix-ui/react-tabs'
import { Form } from 'formik'
import { Button } from '@/components/atoms/Button'

export const TabContainer = styled(Tabs.Content)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const TitleTab = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.8rem;

  padding-top: 0.25rem;
  padding-bottom: 0.5rem;
`

export const SubtitleTab = styled.p`
  font-size: 0.875rem;
  line-height: 1rem;

  span {
    color: ${(props) => props.theme.colors.blue[700]};
  }
`

export const PersonalInfoContent = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 36.3rem;
`

export const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.gray[700]};
`

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-left: auto;
`

export const ButtonLoading = styled(Button)`
  height: 43px;
  padding: 0;
  width: 6rem;

  &:disabled {
    background-color: ${(props) => props.theme.colors.blue[800]};
    border-color: ${(props) => props.theme.colors.blue[800]};
    cursor: wait;
  }
`
