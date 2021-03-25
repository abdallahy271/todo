import React, {useState} from 'react'
import  { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

//Date Picker component
function Search({ startDate, setStartDate, endDate, setEndDate, setStatus, showSearch, setShowSearch }) {
    const history = useHistory()
   

    const selectionRange = {
        startDate: startDate
        ,
        endDate: endDate
        ,
        key: 'selection',
      };

    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)

    }

    function handleSearch() {
        setStatus('search')
        setShowSearch(!showSearch)
    }
    return (
        <div className='search'>
            <DateRangePicker
                ranges={[selectionRange]}
                onChange={handleSelect}/>
            <Button onClick={handleSearch}>
                Search Date
            </Button>
        </div>
    )
}

export default Search
