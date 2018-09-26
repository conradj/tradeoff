import React from 'react'
import styled from 'styled-components'
import { size, color } from '../../theme'
import RouteResultList from '../map/RouteResultList'

const results = [
  {
    id: 1,
    duration: 145,
    mode: 'WALKING',
    distance: 3.14,
    cost: 217,
    calories: 1000
  },
  {
    id: 2,
    duration: 213,
    mode: 'CHOOCHOO',
    distance: 420,
    cost: 1578,
    calories: 23
  }
]

const StyledSidebar = styled.section`
  position: absolute;
  height: 100vh;
  overflow-y: auto;
  width: 20%;
  min-width: ${size.sidebarWidth};
  z-index: 1001;
  color: ${color.text};
  background-color: ${color.background};
`

const Sidebar = () => (
  <StyledSidebar>
    <RouteResultList results={results} />
  </StyledSidebar>
)

export default Sidebar
