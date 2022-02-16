import React from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faClose} from '@fortawesome/free-solid-svg-icons'
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'


const CovidModal = ({ showModal, closeModal ,rowData}) => {

    console.log(rowData ,"check row")
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
                    width: 700,
                    bgcolor: 'background.paper',
                    borderRadius: 15,
                    height: 600,
                    backgroundColor: 'white',
                    p: 4,
                    
                }}
                >
                    <div>
                        <div style={{width:680,
                            display:'flex',
                            justifyContent:'flex-end',
                            marginTop:0,
                            position: 'absolute',
                            left: 0,
                            right: 0,
                            top: 10,
                            bottom: 10}}
                        >
                            <FontAwesomeIcon 
                                onClick={closeModal}
                                style={{paddingLeft:20,color:"red"}}
                                size="3x" icon= {faClose} 
                            >
                            </FontAwesomeIcon>
                        </div>
                        <div style={{display:'flex',justifyContent:'center'}}> 
                            <h1 style={{color:'purple',fontSize:40,paddingLeft:20,paddingRight:10}}>{rowData.state}</h1>
                        </div>
                        <div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
                            <h2>Confirmed : {rowData.confirmed}</h2>
                            <h2>Recovered : {rowData.recovered}</h2>
                            <h2>Active : {rowData.active}</h2>
                            <h2 style={{color:'red'}}>Deaths : {rowData.deaths}</h2>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default CovidModal;