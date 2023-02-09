import React, { useContext } from "react";
import { FormContext } from "../Contexts/FormContext"

const SubmitInfo = () => {
  const {result, personData,handlePrevClick } = useContext(FormContext);
 
  const Result = () => {
     return (
        <p className="sent-text">Your application has been succesfully sent. We will contact you soon. Thank you for your trust! </p>
     )
  }
  return (
    <div className="container-submit">
      <div className="submit-info">
        <div className="submit-content">
          <div>
            <p> A-number</p>
            <h6>{personData.number}</h6>
            <hr />
          </div>
          <div>
            <p> First name </p>
            <h6>{personData.firstName}</h6>
            <hr />
          </div>
          <div>
            <p> Last name</p>
            <h6>{personData.lastName}</h6>
            <hr />
          </div>
          <div>
            <p> Data of birth</p>
            <h6>{personData.dateBirth}</h6>
            <hr />
          </div>
          <div>
            <p>Gender</p>
            <h6>{personData.gender}</h6>
            <hr />
          </div>
          <div>
            <p> Country of birth</p>
            <h6>{personData.place}</h6>
            <hr />
          </div>
          <div>
            <p>Nationality</p>
            <h6>{personData.nationality}</h6>
            <hr />
          </div>
          <div>
            <p>Phone</p>
            <h6>{personData.phone}</h6>
            <hr />
          </div>
          <div>
            <p> Email</p>
            <h6>{personData.email}</h6>
            <hr />
          </div>
          <div>
            <p>Address</p>
            <h6>{personData.address}</h6>
            <hr />
          </div>
          <div>

            <p>Have you or your family been threatened or harmed?</p>
            <h6>{personData.radio}</h6>
            <hr />
          </div>
          <div>
            <p>Who threatened or harmed you?</p>
            <h6>{personData.threat}</h6>
            <hr />
          </div>
          <div>
            <p>What happened? (describe any incidents of threats, harassment, and harm)?</p>
            <h6>{personData.reason}</h6>
            <hr />
          </div>
          <div>
            <p>When did these incidents of harm occur (approximate dates)?  </p>
            <h6>{personData.when}</h6>
            <hr />
          </div>
          <div>
            <p>Why were you threatened and/or harmed? </p>
            <h6>{personData.why}{personData.another}{personData.extra}</h6>
            <hr />
          </div>
          <div>
            <p>What will happen to you if you return to your country?</p>
            <h6>{personData.harm}</h6>
            <hr />
          </div>
          <div>
            <p>What else would you like to tell the lawyer?  </p>
            <h6>{personData.else}</h6>
            <hr />
          </div>
        </div>
        <div className="btns-submit">
        {result ? <Result/> : null}   
          <button onClick={handlePrevClick} className="btn3-prev">Back</button>
          <button type="submit" value="sendForm" className="btn-submit"> Send </button>
        </div>
      </div>
    </div>
  )
}

export default SubmitInfo