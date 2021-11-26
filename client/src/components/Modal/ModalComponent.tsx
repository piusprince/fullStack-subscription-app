import React, {useState} from 'react'

import { Modal, Button, InputGroup, FormControl } from 'react-bootstrap'

interface ModalProps {
  text: string;
  variant: "primary" | "danger"
}

const ModalComponent = ({text, variant}: ModalProps) => {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
       <>
         <Button 
          variant={variant} 
          size="lg" 
          style={{marginRight: "1rem", padding: "0.7rem 3rem" }} 
          onClick={handleShow}
          >{text}</Button>
         <Modal show={show} onHide={handleClose}>
           <Modal.Header closeButton>
              <Modal.Title>{text}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <InputGroup className="mb-3">
                <InputGroup.Text>E-mail</InputGroup.Text>
                <FormControl type="email" />
              </InputGroup>
              <InputGroup>
                <InputGroup.Text>Password</InputGroup.Text>
                <FormControl type="password" />
              </InputGroup>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="primary">{text}</Button>
              <Button variant="secondary" onClick={handleClose}>Close</Button>
            </Modal.Footer>
         </Modal>
       </>
    )
}

export default ModalComponent
