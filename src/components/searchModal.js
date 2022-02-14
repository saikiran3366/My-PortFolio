import React from 'react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'


const MoviesModal = ({ showModal, closeModal ,itemData}) => {

   console.log(itemData,"iitemData")
        
    
    return (
        <div>
            <Modal
                open={showModal}
                onClose={closeModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div style={{
                    position: 'absolute',
                    justifyContent: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 500,
                    bgcolor: 'background.paper',
                    borderRadius: 15,
                    height: 500,
                    backgroundColor: 'white',
                    p: 4,
                }}
                >
                    <div>
                        <img  src={itemData.Poster} style={{height:200,width:'100%'}}></img>
                        <h5> {itemData.Title}</h5>
                    </div>
                    <Button  
                        onClick={closeModal}
                        variant="contained" 
                        style={{textDecoration: 'none',marginTop:30}}>
                        Close
                </Button> 
                </div>
                
            </Modal>
        </div>
    )
}

export default MoviesModal;