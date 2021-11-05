import React from 'react'
import ReactDOM from 'react-dom'
import '/css/site.css'
import { 
  Pane
} from '../components/header'
import { 
  Content,
  Section,
  Viewport
} from '../styles/main.styles'

const CONTENT = document.getElementById("content");

const data = [
  'Главная','Каталог','Контакты'
]

const Site = (data: any) => {
  return(
    <Content>
      <Pane {...data} />
      <Section>
        <Viewport>
          Content
        </Viewport>
      </Section>
    </Content>
  )
}

ReactDOM.render(<Site data={data} />, CONTENT)