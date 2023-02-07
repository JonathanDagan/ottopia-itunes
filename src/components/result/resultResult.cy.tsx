import { mount } from '@cypress/react18'
import { Result } from './result'

import {resultExample} from '../../_codux/boards/result/result'

describe('<Result>', () => {
  it('mounts', () => {
    mount(<Result result={resultExample}/>)
  })
  it('renders', () => {
    mount(<Result result={resultExample}/>)
    cy.get('div').should('exist')
  })
  it('renders an image', () => {
    mount(<Result result={resultExample}/>)
    cy.get('img').should('exist')
  })
  it('renders a track name', () => {
    mount(<Result result={resultExample}/>)
    cy.get('h2').should('have.text', resultExample.trackName)
  })
  it('renders an artist name', () => {
    mount(<Result result={resultExample}/>)
    cy.get('p').should('exist')
  })
  it('renders an audio preview', () => {
    mount(<Result result={resultExample}/>)
    cy.get('audio').should('exist')
  })
})