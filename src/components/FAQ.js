import React from 'react'
import { Accordion } from 'react-bootstrap'
import { cryptoFAQ } from '../utils/constant'
const FAQ = () => {

     
  return (
    <>
    
 <div className='mt-15'>

  <h2 className='ml-4 mb-5 text-2xl'>Frequently Asked You Question</h2>
 <Accordion   defaultActiveKey="0">
      {cryptoFAQ.map((item, index) => (
        <Accordion.Item eventKey={index.toString()} key={index}>
          <Accordion.Header className='py-1' >{item.question}</Accordion.Header>
          <Accordion.Body className='py-2' >{item.answer}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
      
     
 </div>
     
    </>
  )
}

export default FAQ

