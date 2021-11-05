import React from 'react'
import { 
  Menu
} from '../components/menu'
import {
  Header,
  Section
} from '../styles/main.styles'

export const Pane = (menu: any) => {
  return(
    <Header>
      <Section>
        <div>
          <Menu {...menu} />
          <div>
            Панель администрирования
          </div>
        </div>
      </Section>
    </Header>
  )
}