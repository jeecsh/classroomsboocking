import React from "react";
import "./featured.css";
import Sorf from "./empty_classroom.1.jpg";
// import { useState, useEffect } from "react";
// import { from } from "array-flatten";

function itemList() {
  // const [items, setItems] = useState([]);
  const arrayUser = [
    {
      classroomId: "id1",
      classroomName: "en12",
      capacity: 200,
      availableFrom: "8:14pm",
      availableTo: "9:13pm"
    },

    {
      classroomId: "id2",
      classroomName: "en13",
      capacity: "30",
      availableFrom: "7:10pm",
      availableTo: "8:11pm"
    }
  ];

  // useEffect(() => {
  //   fetch(arrayUser)
  //     .then(Response => Response.json())
  //     .then(data => setItems(data));
  // });

  return (
    <div className="features">
      {arrayUser.map(item => (
        <div key={item.classroomId} className="featureitem">
          <img src={Sorf} alt="img not loading" />
          <div className="featuretitles">
            <h1>{item.classroomName}</h1>
            <h3 className="yy">second floor,tower</h3>

            <span className="rate">
              available from {item.availableFrom} to {item.availableTo}
            </span>
            <span className="capacity">capacity :{item.capacity} </span>
            <div classname="form">
              <span className="a">
                projector required <input type="checkbox" />
              </span>
              <div className="ee">
                time required
                <input
                  type="text"
                  placeholder="maximum 1 day"
                  className="modalsearchinput"
                />
              </div>
              <div className="ww">
                add a file <input type="file" />
              </div>
              <button className="booking">Book now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
{
  /* <div className="features">
        <div className="featureitem">
          <img src={Sorf} alt="img not loading" />
          <div className="featuretitles">
            <h1>en22</h1>
            <h3 className="2">second floor,tower</h3>
            <span className="capacity">capacity : 300</span>
            <span className="rate">rate: excellent</span>

            <span className="a">
              {" "}
              projector required <input type="checkbox" />
            </span>
            <div>
              time required
              <input
                type="text"
                placeholder="maximum 1 day"
                className="modalsearchinput"
              />
            </div>
            <div>
              add a file <input type="file" />
            </div>
            <button className="booking">Book now</button>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="featureitem">
          <img src={Sorf} alt="img not loading" />
          <div className="featuretitles">
            <h1>en23</h1>
            <h3 className="2">second floor,tower</h3>
            <span className="capacity">capacity : 200</span>
            <span className="rate">rate: excellent</span>
            <span className="a">
              {" "}
              projector required <input type="checkbox" />
            </span>
            <div>
              time required
              <input
                type="text"
                placeholder="maximum 1 day"
                className="modalsearchinput"
              />
            </div>
            <div>
              add a file <input type="file" />
            </div>
            <button className="booking">Book now</button>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="featureitem">
          <img src={Sorf} alt="img not loading" />
          <div className="featuretitles">
            <h1>en24</h1>
            <h3 className="2">second floor,tower</h3>
            <span className="capacity">capacity : 300</span>
            <span className="rate">rate: very good</span>
            <span className="a">
              {" "}
              projector required <input type="checkbox" />
            </span>
            <div>
              time required
              <input
                type="text"
                placeholder="maximum 1 day"
                className="modalsearchinput"
              />
            </div>
            <div>
              add a file <input type="file" />
            </div>
            <button className="booking">Book now</button>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="featureitem">
          <img src={Sorf} alt="img not loading" />
          <div className="featuretitles">
            <h1>en25</h1>
            <h3 className="2">second floor,tower</h3>
            <span className="capacity">capacity : 500</span>
            <span className="rate">rate: excellent</span>
            <span className="a">
              projector required <input type="checkbox" />
            </span>
            <div>
              time required
              <input
                type="text"
                placeholder="maximum 1 day"
                className="modalsearchinput"
              />
            </div>
            <div>
              add a file <input type="file" />
            </div>

            <button className="booking">Book now</button>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="featureitem">
          <img src={Sorf} alt="img not loading" />
          <div className="featuretitles">
            <h1>en26</h1>
            <h3 className="2">second floor,tower</h3>
            <span className="capacity">capacity : 250</span>
            <span className="rate">rate: good</span>
            <span className="a">
              {" "}
              projector required <input type="checkbox" />
            </span>
            <div>
              time required
              <input
                type="text"
                placeholder="maximum 1 day"
                className="modalsearchinput"
              />
            </div>
            <div>
              add a file <input type="file" />
            </div>
            <button className="booking">Book now</button>{" "}
          </div>
//         </div> */
}
//       </div>
//     </div>
//   );
// };

export default itemList;
// // {/* <div className="maincontainer">
// <div className="modalcontainer">
//   <h1>book a class room </h1>
//   <span>
//     projector required <input type="checkbox" />
//   </span>
//   <div>
//     time required
//     <input
//       type="text"
//       placeholder="maximum 1 day"
//       className="modalsearchinput"
//     />
//   </div>
//   <div>
//     add a file <input type="file" />
//   </div>
// </div>
// </div>
