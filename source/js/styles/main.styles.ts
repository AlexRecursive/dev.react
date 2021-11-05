import styled from 'styled-components'
import * as styles from './set.styles'

// console.log(styles.media)

export const NavLi = styled.li`
  display: block;
`
export const Nav = styled.ul`
  display: flex;
  align-items: center;
  grid-column-gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0;
`
export const Section = styled.section`
  display: block;
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
  max-width: 1240px;
`
export const Viewport = styled.section`
  display: block;
  padding: 20px 0;
`
export const Content = styled.div`
  display: block;
  padding-top: 40px;
`
export const Header = styled.header`
  display: block;
  position: fixed;
  background: ${styles.colors.cover};
  height: 40px;
  top: 0;
  left: 0;
  width: 100vw;
  ${Section}{
    height: 100%;
    &>div{
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`