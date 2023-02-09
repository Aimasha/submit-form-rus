import React, { useContext } from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FormContext } from "../Contexts/FormContext"


const PersonInfo = () => {

  const { setPage,page,setValidated, validated, personData, setPersonData, handleClickNext } = useContext(FormContext)

  return (
    <div className="container">

      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          A-number
        </InputGroup.Text>
        <Form.Control
          type="text"
          name="number"
          value={personData.number}
          onChange={(e) => setPersonData({ ...personData, number: e.target.value })}
          aria-label="Large"
          aria-describedby="inputGroup-sizing-default"
        />

      </InputGroup>
      <InputGroup
        className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          First name
        </InputGroup.Text>
        <Form.Control
          type="text"
          name="first_name"
          value={personData.firstName}
          onChange={(e) => setPersonData({ ...personData, firstName: e.target.value })}
          aria-label="Large"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Last name
        </InputGroup.Text>
        <Form.Control
          type="text"
          name="last_name"
          value={personData.lastName}
          onChange={(e) => setPersonData({ ...personData, lastName: e.target.value })}
          aria-label="Large"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <div>
        <select name="gender" value={personData.gender} onChange={(e) => setPersonData({ ...personData, gender: e.target.value })} >
          <option value="gender">Gender</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="other">Other</option>
        </select>
      </div>


      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
           Date of birth
        </InputGroup.Text>
        <Form.Control
          name="date_birth"
          value={personData.dateBirth}
          onChange={(e) => setPersonData({ ...personData, dateBirth: e.target.value })}
          type="date" />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
         Country of birth
        </InputGroup.Text>
        <Form.Control
          type="text"
          name="place_birth"
          value={personData.place}
          onChange={(e) => setPersonData({ ...personData, place: e.target.value })}
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Nationality
        </InputGroup.Text>
        <Form.Control
          type="text"
          name="nation"
          value={personData.nationality}
          onChange={(e) => setPersonData({ ...personData, nationality: e.target.value })}
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>

      <div className="number-email">
        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            Phone
          </InputGroup.Text>
          <Form.Control
            type="number"
            name="phone"
            value={personData.phone}
            onChange={(e) => setPersonData({ ...personData, phone: e.target.value })}
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            Email
          </InputGroup.Text>
          <Form.Control
            type="email"
            name="email"
            value={personData.email}
            onChange={(e) => setPersonData({ ...personData, email: e.target.value })}
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />

        </InputGroup>

      </div>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Address
        </InputGroup.Text>
        <Form.Control
          type="text"
          name="address"
          value={personData.address}
          onChange={(e) => setPersonData({ ...personData, address: e.target.value })}
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <button
        onClick={handleClickNext}
        className="btn-next">
        Next
      </button>

    </div>
  )
}

export default PersonInfo