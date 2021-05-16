import React, { useState, useEffect, useRef } from 'react';
import './Journal.scss'
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import CaretPositioning from '../components/EditCaretPositioning'
import EditModal from '../components/EditModal'
// import { useStateWithCallbackLazy } from 'use-state-with-callback';

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
  
  
let position = {caretPosition: {
    start: 0, end: 0
},
newValue: '', 
page: 1}


let position2 = {caretPosition: {
    start: 0, end: 0
},
newValue: '', 
page: 2}
let position3 = {caretPosition: {
    start: 0, end: 0
},
newValue: '', 
page: 3}

let perm = ''
let perm2 = ''
let perm3 = ''

let str_page = ''
const journalEntry = { entry: "" }

function Journal({ textCounter, setTextCounter, num, count, setCount }) {
    const [currentPage, setCurrentPage ] = useState("page-1")
    const [ htmlFor, setHtmlFor ] = useState("page-2")
    const [ page2, setPage2 ] = useState("page-2")
    const [modalStyle] = React.useState(getModalStyle);
    const [ openFirst, setOpenFirst ] = useState(false)
    const [ openSecond, setOpenSecond ] = useState(false)
    const [ openThird, setOpenThird ] = useState(false)
    const [ edit, setEdit ] = useState(false)
    const [ paste, setPaste ] = useState(false)
    const [ showValue, setShowValue ] = useState("");
    const [ disabled, setDisabled ] = useState('')

    const [ positioners, setPositioners ] = useState(
        [{
            caretPosition: {
                start: 0, end: 0
            },
            newValue: '', 
            page: 1
        },
        {
            caretPosition: {
                start: 0, end: 0
            },
            newValue: '', 
            page: 2
        },
        {
            caretPosition: {
                start: 0, end: 0
            },
            newValue: '',
            page: 3
        }
    ]
    )
   

    function createVariables(page){
        var accounts = [];
      
        for (var i = 0; i <= 5; ++i) {
            accounts[i] = {
                caretPosition: {
                    start: 0, end: 0
                },
                newValue: '', 
                page: 1
            };
        }
      
        return accounts;
      }


    const classes = useStyles()
    const firstContentRef = useRef()
    const secondContentRef = useRef()
    const thirdContentRef = useRef()

    const ref = useRef()
    const refFirst = useRef()
    const refLast = useRef()

    const editRef = useRef()
    const editRef2 = useRef()
    const editRef3 = useRef()


    const handleClick = (e) => {
        if (ref.current.checked) {
            setHtmlFor('page-3')
            setCurrentPage('page-2')
        }
       
    }
    const handleEdit = (e) => {
        setTextCounter(e.target.innerText.length)
        if (e.target.innerText.length >= 500){
            e.preventDefault()
            return false;
        }
        
    }

    const onChangeHandler = (event) => {
        let targetValue =  event.currentTarget.textContent;
        //save caret position(s), so can restore when component reloads
        let savedCaretPosition = CaretPositioning.saveSelection(event.currentTarget);
        setPositioners(
            positioners.map((positioner) => {
                str_page = positioner.page.toString()
                if(event.target.classList.contains(str_page)){
                    if (positioner.page === 1)
                        position = {caretPosition:savedCaretPosition, newValue: targetValue, page: positioner.page}
                    else if (positioner.page === 2)
                        position2 = {caretPosition:savedCaretPosition,newValue: targetValue, page: positioner.page}
                    else if (positioner.page === 3)
                        position3 = {caretPosition:savedCaretPosition,newValue: targetValue, page: positioner.page}
                    return (
                        {...positioner,
                            caretPosition: savedCaretPosition,
                            newValue: targetValue,
                        })
                    
                }
                return positioner
            })

        //     return (
        //         [ 
        //             {
        //             caretPosition: savedCaretPosition,
        //             newValue: targetValue,
        //             page: positioner[num-1].page
        //             },
        //             ...positioner
        //         ] 
        // )
        )
    }    

          
    const handlePaste = (e) => {
        setTextCounter(textCounter + e.clipboardData?.getData('Text').length)

        if (textCounter + e.clipboardData?.getData('Text').length >= 500){
            e.preventDefault()
            return false;
        }

    }

    const handleFirstClick = (e) => {
        if  (refFirst.current.checked) {
            setHtmlFor('page-2')
            setCurrentPage('page-1')

        }
    }

    const handleLastClick = (e) => {
        if  (refLast.current.checked) {
            setHtmlFor('page-1')
            setCurrentPage('page-3')
        }
       
    }

    function unfade(element) {
        let op = 0.05;  // initial opacity
        element.style.display = 'block';
        let timer = setInterval(function () {
            if (op >= 1){
                clearInterval(timer);
            }
            element.style.opacity = op;
            element.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op += op * 0.1;
        }, 50);
    }

    useEffect(() => {
        if (ref?.current?.checked){
            // setHtmlFor('page-3')
        }
    },[ htmlFor ])

    useEffect(() => {
        //restore caret position(s)
        if (openFirst && firstContentRef.current.childNodes[0]) {
            let a = firstContentRef.current?.childNodes[0]?.childNodes[2].childNodes[0]
            CaretPositioning.restoreSelection(a, position?.caretPosition)
        } else if (openSecond && secondContentRef.current.childNodes[0]) {
            let a = secondContentRef.current?.childNodes[0]?.childNodes[2].childNodes[0]
            CaretPositioning.restoreSelection(a, position2?.caretPosition)
        } else if (openThird && thirdContentRef.current.childNodes[0]) {
            let a = thirdContentRef.current?.childNodes[0]?.childNodes[2].childNodes[0]
            CaretPositioning.restoreSelection(a, position3?.caretPosition)
        }
    }, [firstContentRef, secondContentRef, thirdContentRef, openFirst, openSecond, openThird ])

    const buttonHandler = (page) => {
        switch (page){
            case 'page-2':
                return (
                    <>
                     {openFirst ? 
                        <div ref={editRef} className="frame frame-normal">
                            <Button  id="edit" onClick={() => setOpenFirst(false)}> Save</Button> 
                    </div>
                        :
                        <div ref={editRef} className="frame frame-normal">
                            <Button  id="edit" onClick={() => setOpenFirst(true)}> Edit </Button> 
                        </div>
                    }
                    </>
                            )
            case 'page-3':
                return (
                    <>
                     {openSecond ? 
                    <div ref={editRef2} className="frame frame-normal">
                        <Button  id="edit" 
                        onClick={() => {
                            setOpenSecond(false); 
                            }}> Save</Button> 
                    </div>
                    :
                    <div ref={editRef2} className="frame frame-normal">
                        <Button  id="edit" disabled={openThird} onClick={() => {
                            setOpenSecond(true); 
                            }}> Edit </Button> 
                    </div>
                }
                    
                    
                    {openThird ? 
                    <div ref={editRef3} className="frame frame-reverse">
                        <Button  id="edit"  
                        onClick={() => {
                            setOpenThird(false);
                        }}> Save</Button> 
                </div>
                    :
                    <div ref={editRef3} className="frame frame-reverse">
                        <Button  id="edit" disabled={openSecond} onClick={() => {
                            setOpenThird(true); 
                            }}> Edit </Button> 
                    </div>
                }
                            </>)
            default:
                return
        }
    }

    useEffect(() => {
        if (currentPage === 'page-2'){
            unfade(editRef.current)
        } else if (currentPage === 'page-3'){
            unfade(editRef2.current)
            unfade(editRef3.current)
        } 
    },[currentPage])
    
    function emptyStorage() {
        let result = []
        for (let i=0; i<=6; i++){
            result.push(JSON.parse(localStorage.getItem(`journal-${i}`))?.newValue)
            result.push(JSON.parse(localStorage.getItem(`journal2-${i}`))?.newValue)
            result.push(JSON.parse(localStorage.getItem(`journal3-${i}`))?.newValue)
        }
        console.log(result)
        return result.every((val) => (val === ''||val === undefined ))

    }

    const saveLocalJournal = () =>{
        console.log(emptyStorage())
        console.log(count)
        if (count === 0 && emptyStorage()){
            setCount(count+1)
            for (let i=0; i<=6; i++){
                localStorage.setItem(`journal-${i}`,JSON.stringify(position))
                localStorage.setItem(`journal2-${i}`,JSON.stringify(position2))
                localStorage.setItem(`journal3-${i}`,JSON.stringify(position3))
            }
        } else{
            localStorage.setItem(`journal-${num}`,JSON.stringify(position))
            localStorage.setItem(`journal2-${num}`,JSON.stringify(position2))
            localStorage.setItem(`journal3-${num}`,JSON.stringify(position3))
    
        }

        
    }
  
    const getLocalJournal = () =>{
      if (localStorage.getItem(`journal-${num}`) === null){
        localStorage.setItem(`journal-${num}`,JSON.stringify([]))
      }else{
        // localStorage.clear()
        let journalLocal = JSON.parse(localStorage.getItem(`journal-${num}`))
        position = journalLocal
      }
      if (localStorage.getItem(`journal2-${num}`) === null){
        localStorage.setItem(`journal2-${num}`,JSON.stringify([]))
      }else{
        let journalLocal2 = JSON.parse(localStorage.getItem(`journal2-${num}`))
        position2 = journalLocal2
      }
      if (localStorage.getItem(`journal3-${num}`) === null){
        localStorage.setItem(`journal3-${num}`,JSON.stringify([]))
      }else{
        let journalLocal3 = JSON.parse(localStorage.getItem(`journal3-${num}`))
        position3= journalLocal3
      }

    }

    useEffect(() => {
        getLocalJournal()
        perm = position.newValue
        perm2 = position2.newValue
        perm3 = position3.newValue
        // localStorage.clear()
    },[ ])
    
    useEffect(() => {
        saveLocalJournal()

    },[ position, position2, position3])
    
    return (
        <div className="journal">
        <div className="cover">
            <div className="book" id='book' >
            <label htmlFor="page-1"  className="book__page book__page--1">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/193203/1111.jpg" alt=""/>
            </label>
            
            <label htmlFor={htmlFor} className="book__page book__page--4">
                <div className="page__content">
                <h2 className="page__content-author">Chapter III</h2>
                    <div className="journalEntryThird" >{position2?.page === 2 && position2.newValue}</div>
                </div>
              
            </label>
                
            {/* <!-- Resets the page --> */}
            <input ref={refFirst} onClick={handleFirstClick} type="radio" name="page" id="page-1"/>
                
            {/* <!-- Goes to the second page --> */}
            <input ref={ref} onClick={handleClick} type="radio" name="page" id={page2}/>

             {/* <!-- Goes to the third page --> */}
             <input ref={refLast} onClick={handleLastClick} type="radio" name="page" id="page-3"/>

            <EditModal
            num={'1'}
            setOpen={setOpenFirst}
            open={openFirst}
            handleEdit={handleEdit}
            handlePaste={handlePaste}
            onChangeHandler={onChangeHandler} 
            showValue={showValue}
            contentRef={firstContentRef}
            val={perm}
            />

            <EditModal
            num={'2'}
            setOpen={setOpenSecond}
            open={openSecond}
            handleEdit={handleEdit}
            handlePaste={handlePaste}
            onChangeHandler={onChangeHandler} 
            showValue={showValue}
            contentRef={secondContentRef}
            val={perm2}

            />

            <EditModal
            num={'3'}
            setOpen={setOpenThird}
            open={openThird}
            handleEdit={handleEdit}
            handlePaste={handlePaste}
            onChangeHandler={onChangeHandler} 
            showValue={showValue}
            contentRef={thirdContentRef}
            val={perm3}

            />



             <label className="book__page book__page--3">
              <div className="book__page-front">
                <div className="page__content">
                    <h2 className="page__content-author">Chapter I</h2>
                    <div className="journalEntry" > {position?.page === 1 && position?.newValue} </div>

                </div>
            </div>

            <div className="book__page-back">
                <div className="page__content">
                <h2 className="page__content-author">Chapter II</h2>
                    <div className="journalEntryBack" > {position3?.page === 3 && position3?.newValue} </div>
                    
                </div>
            </div>

            </label>

            <label className="book__page book__page--2">
              <div className="book__page-front">
                <div className="page__content">
                    <h1 className="page__content-book-title">JOURNAL</h1>
                    <h2 className="page__content-author">Reflect on Your Day</h2>
                    
                    <p className="page__content-credits">
                    A Feature by 
                    <span>In Focus</span>
                    </p>
                    
                    <p className="page__content-credits">
                    Illustrations by 
                    <span>Yusuf Abdulmueez</span>
                    </p>
                    
                    <div className="page__content-copyright">
                    <p>Minerva Schools at KGI</p>
                    <p>San Francisco - MMXXI</p>
                    </div>
                </div>
                </div>
                <div className="book__page-back">
                <div className="page__content">
                    <h1 className="page__content-title">Contents</h1>
                    <table className="page__content-table">
                    <tr>
                        <td align="left">CH. I</td><td align="left">Gratitude</td><td align="right">4</td>
                    </tr>
                    <tr>
                        <td align="left">CH. II</td><td align="left">Reflection</td><td align="right">5</td>
                    </tr>
                    <tr>
                        <td align="left">CH. III</td><td 
                        align="left">Aspirations</td><td align="right">6</td>
                    </tr>
                    
                    </table>
                    
                    <div className="page__number">2</div>
                </div>
                </div>

            </label>
            </div>
           {buttonHandler(currentPage)}
        </div>
        </div>
    )
}

export default Journal
