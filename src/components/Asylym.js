import React, { useContext } from "react";
import { FormContext } from "../Contexts/FormContext"

const Asylym = () => {
    const { personData, setPersonData, handleClickNext, handlePrevClick } = useContext(FormContext)

    return (

        <div className="service-container">

            <h4 className="asylym-title">Asylem:</h4>
            <ol>
                <li>Have you or your family been threatened or harmed?</li>

                <div className="radio1">
                    <input
                        required
                        value="Да"
                        name="yesno"
                        type="radio"
                        onChange={(e) => setPersonData({ ...personData, radio: e.target.value })}
                    />
                    Yes
                </div>
                <div className="radio">
                    <input
                        required
                        value="Нет"
                        name="yesno"
                        type="radio"
                        onChange={(e) => setPersonData({ ...personData, radio: e.target.value })}
                    />
                    No
                </div>

                <li>Who threatened or harmed you?</li>

                <textarea required name="threat" value={personData.threat} onChange={(e) => setPersonData({ ...personData, threat: e.target.value })} id="story"
                    rows="1" cols="70">
                </textarea>

                <li>What happened? (describe any incidents of threats, harassment, and harm)?</li>

                <textarea required value={personData.reason} onChange={(e) => setPersonData({ ...personData, reason: e.target.value })} id="story" name="reason"
                    rows="8" cols="70">
                </textarea>

                <li>When did these incidents of harm occur (approximate dates)?</li>

                <textarea required value={personData.when} onChange={(e) => setPersonData({ ...personData, when: e.target.value })} id="story" name="when"
                    rows="1" cols="70">
                </textarea>

                <li>Why were you threatened and/or harmed? (select all that apply to you and explain below)?</li>

                <div onChange={(e) => setPersonData({ ...personData, why: e.target.value })} className="rd">
                    <input
                        required
                        value="Расовая или этническая нетерпимость"
                        name="race"
                        type="radio"
                        onChange={(e) => setPersonData({ ...personData, why: e.target.value })}
                    />
                    <label > Racial or ethnic intolerance.</label>
                </div>

                <div onChange={(e) => setPersonData({ ...personData, another: e.target.value })} className="rd" >
                    <input
                        required
                        value="Религиозная нетерпимость"
                        name="religion"
                        type="radio"
                        onChange={(e) => setPersonData({ ...personData, why: e.target.value })}
                    />
                    <label > Religious intolerance. </label>
                </div>

                <div onChange={(e) => setPersonData({ ...personData, another: e.target.value })} className="rd" >
                    <input
                        required
                        value="Из-за политических убеждений"
                        name="political"
                        type="radio"
                        onChange={(e) => setPersonData({ ...personData, why: e.target.value })}
                    />
                    Because of political opinions.
                </div>

                <div onChange={(e) => setPersonData({ ...personData, another: e.target.value })} className="rd" >
                    <input
                        required
                        value=" Сексуальная ориентация, Пол"
                        name="psg"
                        type="radio"
                        onChange={(e) => setPersonData({ ...personData, why: e.target.value })}
                    />
                    Sexual orientation, Gender </div>

                <div className="rd" >
                    <input
                        required
                        value="Другое"
                        name="other"
                        type="radio"
                        onChange={(e) => setPersonData({ ...personData, another: e.target.value })}
                    />
                    Other                </div>

                <textarea required value={personData.extra} onChange={(e) => setPersonData({ ...personData, extra: e.target.value })} id="story" name="why"
                    rows="3" cols="70">
                </textarea>

                <li>What will happen to you if you return to your country?</li>

                <textarea required value={personData.harm} onChange={(e) => setPersonData({ ...personData, harm: e.target.value })} id="story" name="harm"
                    rows="3" cols="70">
                </textarea>

                <li>What else would you like to tell the lawyer? </li>

                <textarea required value={personData.else} onChange={(e) => setPersonData({ ...personData, else: e.target.value })} id="story" name="else"
                    rows="8" cols="70">
                </textarea>

            </ol>

            <div className="btns">
                <button
                    className="btn-prev"
                    onClick={handlePrevClick}
                >
                    Back</button>
                <button
                    onClick={handleClickNext}
                    className="btn2-next">
                    Next
                </button>
            </div>

        </div>

    )
}

export default Asylym;