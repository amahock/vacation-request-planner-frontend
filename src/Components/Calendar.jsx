
import React, { useState } from "react";
import {format,
   startOfWeek,
   addDays,
   startOfMonth,
   endOfMonth,
   endOfWeek,
   isSameMonth,
   isSameDay,
   addMonths,subMonths} from "date-fns";

import "../Styles/Calendar.css";

// import "../Styles/CalendarClass.css";

const Calendar = () => {

   const dateFormattemp = 'dd-MM-yyyy';

   const [currentDate, setCurrentDate] = useState(new Date());
   const [currentSystemDate, setCurrentSystemDate] = useState(new Date());
   const [selectedDates, setSelectedDates] = useState([]);


   const header = () => {
      const dateFormat = "MMMM yyyy";
         return (
            <div className="header d-flex flex-row justify-content-between">
               <div className="column col-start">
                  <div className="icon" onClick={prevMonth}>
                     chevron_left
                  </div>
               </div>
               <div className="column col-center">
                  <span>{format(currentDate, dateFormat)}</span>
               </div>
               <div className="column col-end">
                  <div className="icon" onClick={nextMonth}>
                     chevron_right
                  </div>
               </div>
            </div>
         );
   };


   const days = () => {
      const dateFormat = "ddd";
      const days = [];
      let startDate = startOfWeek(currentDate);
      const tempDays = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
      for (let i = 0; i < 7; i++) {
            // days.push(
            //    <div className="column col-center" key={i}>
            //    {format(addDays(startDate, i), dateFormat)}
            //    </div>
            // );
            days.push(
               <div className="flex-fill" key={i}>
               {tempDays[i]}
               </div>
            );
         }
      return <div className="days row">{days}</div>;
   };

   const isSelectedDate = (day) =>{
      const tempDate = format(day,dateFormattemp);
      if (selectedDates.includes(tempDate)) {
         console.log("came into isselectdate function");
      
         return true;
      } else {
         
         return false;
      }
   }

   const isCurrentSystemDate = (day) =>{
      const tempDate = format(day,dateFormattemp);
      if (currentSystemDate === tempDate) {   
         return true;
      } else {
         return false;
      }
   }

   const cells = () => {
         const monthStart = startOfMonth(currentDate);
         const monthEnd = endOfMonth(monthStart);
         const startDate = startOfWeek(monthStart);
         const endDate = endOfWeek(monthEnd);
         const dateFormat = "d";
         const rows = [];
         let days = [];
         let day = startDate;
         let formattedDate = "";
         while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
            formattedDate = format(day, dateFormat);
            const cloneDay = day;
         days.push(
               <div 
               className={`cell flex-fill ${!isSameMonth(day, monthStart)
               ? "disabled" :  isSelectedDate(day) ? "selected":"" }
               ${isSameDay(day,currentSystemDate)?"selecteddatesstyle":""}
               `} 
               key={day} 
               onClick={() => onDateClick(cloneDay)}
               > 
               <span className="number">{formattedDate}</span>
               <span className="bg">{formattedDate}</span>
            </div>
            );
            day = addDays(day, 1);
         }
         rows.push(
               <div className="row" key={day}> {days} </div>
            );
            days = [];
         }
         return <div className="body d-flex flex-column">{rows}</div>;
   }


   const nextMonth = () => {
      setCurrentDate(addMonths(currentDate, 1));
      addMonths(currentDate, 1);
   };

   const prevMonth = () => {
      setCurrentDate(subMonths(currentDate, 1));
   };

   const onDateClick = day => {
      const parsedDate = format(day,dateFormattemp);
      if (selectedDates.includes(parsedDate)) {
         setSelectedDates(
         selectedDates.filter(st => {
            return st !== parsedDate;
         })
         );
      } else {
         setSelectedDates([...selectedDates, parsedDate]);
      }
      // let noOfDatesSelected = selectedDates.length;
   }


return (
   <div className="calendar">
      <div className="font-weight-bold">
         <h2 className="text-success">Selected Dates : </h2>
         {selectedDates.toString()}
      </div>
      {/* <div>Current Date : {currentDate.toString()}</div>
      <div>Current System Date : {currentSystemDate.toString()}</div> */}
      <div>{header()}</div>
      <div className="d-flex col-center">{days()}</div>
      <div className="">{cells()}</div>
   </div>
  );
};


export default Calendar;