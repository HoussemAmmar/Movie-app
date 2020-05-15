import React, { Component } from 'react'
import {Button, Modal} from 'react-bootstrap'



 class Description extends Component {
  
    state={show:false, 
        }
         
        
        handleClose=()=> {
             this.setState({
             show:false
         })
         }
     
         handleShow=()=>{
             this.setState({
                 show:true
             })
         }
    
    render() {
        return (
            <div>
             
                <>
        <Button  className='modale-btn ' variant="outline-light" onClick={this.handleShow}>
        Description
        </Button>
  
        <Modal     show={this.state.show} onHide={this.handleClose}  variant="dark">
          <Modal.Header className = "addModal " closeButton>
            <Modal.Title id="example-custom-modal-styling-title" >Description</Modal.Title>
          </Modal.Header>
          <Modal.Body className = "addModal ">
            <div className = "addBody ">
              
              <div className ="info ">
                <img className="img_descr" src ={this.props.movieEl.img}/> 
                <div>
                <h5>Title</h5>
                <p>{this.props.movieEl.name}</p>
                <h5>Year</h5>
                <p>{this.props.movieEl.year}</p>
                <h5>Duration</h5>
                <p>{this.props.movieEl.duration}</p>
                </div>
              </div>
              <h5>Description</h5>
              <p>{this.props.movieEl.description}</p>
            </div>
              
    
          </Modal.Body>
         
        </Modal>
      </>
            </div>
        )
    }
}

export default Description


































