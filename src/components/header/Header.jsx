import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import "./header.css";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { data } from "browserslist";
const Header = () => {
  const [openDate, setOpenDate] = useState(false);

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection"
    }
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    capacity: 300
  });

  const handleOption = (name, operation) => {
    setOptions(prev => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 100 : options[name] - 100
      };
    });
  };

  return (
    <div className="header">
      <div className="headerlist">
        {" "}
        University of Khartoum Classrooms Booking System
      </div>
      <div className="headersearch">
        <div className="headersearchitem">
          <FontAwesomeIcon icon={faDoorOpen} id="hhh" />
          <span className="headersearchinput">
            projector required <input type="checkbox" />
          </span>
        </div>
        <div className="headersearchitem">
          <FontAwesomeIcon icon={faCalendarDays} />
          <span
            onClick={() => setOpenDate(!openDate)}
            className="headersearchtext"
          >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
            date[0].endDate,
            "MM/dd/yyyy"
          )} `}</span>
          {openDate && (
            <DateRange
              editableDateInputs={true}
              onChange={item => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="date"
            />
          )}
        </div>
        <div className="headersearchitem">
          <FontAwesomeIcon icon={faPerson} />
          <span
            onClick={() => setOpenOptions(!openOptions)}
            className="headersearchtext"
          >{`${options.capacity} `}</span>
          {openOptions && (
            <div className="options">
              <div className="optionitem">
                <span className="optiontext"></span>
                <button
                  disabled={options.capacity <= 1}
                  className="optioncounterbutton"
                  onClick={() => handleOption("capacity", "d")}
                >
                  -
                </button>
                <span className="optioncounter"> {options.capacity}</span>
                <button
                  className="optioncounterbutton"
                  onClick={() => handleOption("capacity", "i")}
                >
                  +
                </button>
              </div>
            </div>
          )}
        </div>
        <a href="/Booking">
          <button className="headerbtn"> search </button>
        </a>
        {/* <div className="list result">
        { loading ? "loading " : <>
        {arrayUser.map(item=>(
          <featured item={item} key= {item.id}/>

        ))}
        </>
        
        }
        </div> */}
      </div>
    </div>
  );
};
export default Header;
