import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateSelector = ({ passedDateProp }) => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleChange = (date) => {
        console.log("date:", date);
        console.log("selectedDate:", selectedDate);
        // convert to YYYY-MM-DD
        const year = date.getFullYear()
        let month = (date.getMonth() + 1);
        let day = date.getDate();

        if (month < 10) {
            month = `0${month}`
        }
        if (day < 10) {
            day = `0${day}`
        }
        console.log("year, month, day", year, month, day)

        let formattedDate = `${year}-${month}-${day}`
        console.log("formattedDate:", formattedDate);


        setSelectedDate(formattedDate)
        passedDateProp(formattedDate)
    }
    console.log("selectedDate-Two:", selectedDate);

    return (
        <ReactDatePicker dateFormat="yyyy/MM/dd" selected={selectedDate} onChange={handleChange} />
    )
}
export default DateSelector