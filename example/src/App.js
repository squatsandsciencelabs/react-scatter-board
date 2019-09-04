import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ScatterBoard } from 'react-scatter-board'

// get the Bootstrap column width
const rootElem = document.getElementById('root')
const colWidth = rootElem.clientWidth * 0.75

// 2d example
const dataUrl2 = 'https://amp.pharm.mssm.edu/l1000fwd/graph/A549_kNN_5'
const board2d = (
  <ScatterBoard
    url={dataUrl2}
    shapeKey='Time'
    colorKey='MOA'
    labelKeys={['sig_id', 'MOA']}
    searchKeys={['MOA', 'Phase']}
    width={colWidth}
    height={colWidth}
  />
)

// 3d example
const dataUrl3 = 'https://amp.pharm.mssm.edu/scavi/graph/GSE48968/tSNE/3'
const board3d = (
  <ScatterBoard
    url={dataUrl3}
    shapeKey='strain'
    colorKey='description'
    labelKeys={['sample_id', 'description']}
    searchKeys={['sample_id', 'description', 'source_name_ch1']}
    is3d={true}
    width={colWidth}
    height={colWidth}
  />
)

// 3d example (disable search)
const board3dNoSearch = (
  <ScatterBoard
    url={dataUrl3}
    shapeKey='strain'
    colorKey='description'
    labelKeys={['sample_id', 'description']}
    is3d={true}
    width={colWidth}
    height={colWidth}
  />
)

export default class App extends Component {
  render() {
    return (
      <Container fluid={true}>
        <Row>
          <Col xs={3}>
            <h1>2d Example:</h1>
          </Col>
          <Col xs={9}>{board2d}</Col>
        </Row>
        <Row>
          <Col xs={3}>
            <h1>3d Example:</h1>
          </Col>
          <Col xs={9}>{board3d}</Col>
        </Row>
        <Row>
          <Col xs={3}>
            <h1>3d Example: disabling search</h1>
          </Col>
          <Col xs={9}>{board3dNoSearch}</Col>
        </Row>
      </Container>
    )
  }
}
