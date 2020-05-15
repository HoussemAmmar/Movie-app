import React, { Component } from 'react'
import {Button, Modal} from 'react-bootstrap'



 class AddMovie extends Component {
  
    
    
    render() {
        return (
            <div>
             
                <>
        <Button  className='modale-btn button-add' variant="danger" onClick={this.props.handleShow}>
         Add Movies
        </Button>
  
        <Modal  show={this.props.show} onHide={this.props.handleClose}  variant="dark">
          <Modal.Header className = "addModal" closeButton>
            <Modal.Title >Add a movie</Modal.Title>
          </Modal.Header>
          <Modal.Body className = "addModal">
            <div className = "addBody">
              
              <input className = "inputAdd" type='text' onChange={this.props.handleChange} placeholder='URL image' name='img' value={this.props.img}/>
              <input className = "inputAdd" type='text' onChange={this.props.handleChange} placeholder='Name' name='name' value={this.props.name}/>
              <input className = "inputAdd" type='text' onChange={this.props.handleChange} placeholder='duration' name='duration' value={this.props.duration}/>
              <input className = "inputAdd" type='text' onChange={this.props.handleChange} placeholder='Year' name='year' value={this.props.year}/>
              <input className = "inputAdd" type='text' onChange={this.props.handleChange} placeholder='Rating ' name='star' value={this.props.star}/>
              <textarea rows="4" cols="25" className = "inputAdd"  type='text' onChange={this.props.handleChange} placeholder='description' name='description' value={this.props.description}/>
              
            </div>
              
    
          </Modal.Body>
          <Modal.Footer className = "addModal">
            <Button variant="light" onClick={this.props.handleClose}>
              Close
            </Button>
            <Button variant="danger" onClick={this.props.handleAdd}>
              Save Changes
            </Button>

          </Modal.Footer>
        </Modal>
      </>
            </div>
        )
    }
}

export default AddMovie

