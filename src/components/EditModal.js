import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function getModalStyle() {
    const top = 50 
    const left = 50 
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[1],
      padding: theme.spacing(2, 4, 3),
    },
  }));
  
  
function EditModal({ open, setOpen, handleEdit, handlePaste, onChangeHandler, showValue, contentRef, num, val }) {
    const [modalStyle] = React.useState(getModalStyle);
    const classes = useStyles()
    const a = val

    return (
        <div ref={contentRef}> 
            <Modal
                id="modal"
                open={open}
                onClose={()=> setOpen(false)}
                container={() => contentRef.current}
                keepMounted={true}>
                <div style={modalStyle} className={classes.paper} >
                    <div  className={`journalEntry ${num}`} id="editEntry"      
                    contentEditable="true" onKeyPress={handleEdit} onPaste={handlePaste} onInput={onChangeHandler}
                    suppressContentEditableWarning={true} 
                    > {a} </div>
                </div>
            </Modal>
        </div>
    )
}

export default EditModal
