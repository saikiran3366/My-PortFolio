import React from 'react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'


const CalculatorModal = ({ showModal, closeModal }) => {
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
                    <div style={{ backgroundColor: 'grey', height: '90%', width: '90%' }}>
                        <div style={{ height: '100%' }}>
                            <div style={{ height: '30%', backgroundColor: 'white', border: '2px solid black' }}>
                                <div style={{ height: '67%' }}>

                                </div>
                                <TextField
                                    // value={shortBio}
                                    // onChange={(e)=>setShortBio(e.target.value)} 
                                    id="outlined"
                                    placeholder="0"
                                    border="none"
                                    outline="none"
                                    type="tel"
                                    style={{ width: '100%', margin: 0 }}
                                />
                            </div>
                            <div style={{ height: '70%', backgroundColor: 'grey',display:'flex',justifyContent: 'center',alignItems: 'center'}}>
                                <div>
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <ButtonKey item={7} />
                                    <ButtonKey item={8} />
                                    <ButtonKey item={9} />
                                    <div style={{ marginLeft: 30 }}>
                                        <ButtonKey item={"CE"} bgc="blue" />
                                        <ButtonKey item={"C"} bgc="violet" />
                                    </div>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <ButtonKey item={4} />
                                    <ButtonKey item={5} />
                                    <ButtonKey item={6} />
                                    <div style={{ marginLeft: 30 }}>
                                        <ButtonKey item={"/"} bgc="white" style={{ color: "black" }} />
                                        <ButtonKey item={"*"} bgc="white" style={{ color: "black" }} />
                                    </div>
                                </div>
                                <div style={{ margin: 0, display: 'flex', flexDirection: 'row' }}>
                                    <ButtonKey item={1} />
                                    <ButtonKey item={2} />
                                    <ButtonKey item={3} />
                                    <div style={{ marginLeft: 30 }}>
                                        <ButtonKey item={"-"} bgc="white" style={{ color: "black" }} />
                                        <ButtonKey item={"%"} bgc="white" style={{ color: "black" }} />
                                    </div>
                                </div>
                                <div style={{ margin: 0, display: 'flex', flexDirection: 'row' }}>
                                    <ButtonKey item={0} wid={220} />
                                    <ButtonKey item={"."} />
                                    <div style={{ marginLeft: 30 }}>
                                        <ButtonKey item={"="} bgc="yellow" style={{ color: "black" }} />
                                        <ButtonKey item={"+"} bgc="green" style={{ color: "black" }} />
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </Modal>
        </div>
    )
}

const ButtonKey = ({ item, bgc = "white", ht = 60, wid = 100 }) => {
    return (
        <Button
            variant="contained"
            style={{ textDecoration: 'none', height: ht, backgroundColor: bgc, width: wid, margin: 10, color: 'black', fontWeight: "bold" }}>
            <h2>{item}</h2>
        </Button>
    )
}
export default CalculatorModal;