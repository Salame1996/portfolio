import React from 'react'
import '@coreui/coreui/dist/css/coreui.min.css'
import { CCard, CCardImage, CCardBody, CCardTitle, CCardText, CListGroup, CListGroupItem, CCardLink } from '@coreui/react';

function Project() {
  return (
    <div><CCard style={{ width: '18rem', height: '350px' }}>
    <CCardImage orientation="top" src={'https://www.eluniverso.com/resizer/56e0--K-qpX10kJEGWXZoxyaxEE=/2010x1340/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/2N3FNPCDZARSRLDIJJB2CBXABM.jpg'} />
    <CCardBody>
      <CCardTitle>Card title</CCardTitle>
      <CCardText>
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </CCardText>
    </CCardBody>
    <CListGroup flush>
      <CListGroupItem>Cras justo odio</CListGroupItem>
      <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
      <CListGroupItem>Vestibulum at eros</CListGroupItem>
    </CListGroup>
    <CCardBody>
      <CCardLink href="#">Card link</CCardLink>
      <CCardLink href="#">Another link</CCardLink>
    </CCardBody>
  </CCard></div>
  )
}

export default Project