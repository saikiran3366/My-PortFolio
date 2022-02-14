import React,{useState} from'react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';



const CenterModal = ({showModal,closeModal,fname,lname,uname,email,password,shortBio,date,callBack}) => {

    const handleClear = () => {
        closeModal()
        callBack()
    }
    return(
            <div >
              <Modal
                open={showModal}
                onClose={closeModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <div style={{position: 'absolute',
                    justifyContent:'center',
                    display:'flex',
                    flexDirection:'column',
                    alignItems:'center',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    borderRadius:15,
                    height:600,
                    backgroundColor:'white',
                    p: 4,}}
                >
                  <h1>Your Deetails</h1>
                  <h4 >{"FirstName : " + fname}</h4>
                  <h4 >{"LastName : " + lname}</h4>
                  <h4 >{"Email : " + email}</h4>
                  <h4 >{"Password : " + password}</h4>
                  <h4 >{"ShortBio : " + shortBio}</h4>
                  <h4 >{"Date of Birth : " + date}</h4>
                  <Button  
                        onClick={()=>handleClear()}
                        variant="contained" 
                        style={{textDecoration: 'none',marginTop:30}}>
                        Close
                </Button> 
                </div>
              </Modal>
            </div>
    )
}

export default CenterModal;