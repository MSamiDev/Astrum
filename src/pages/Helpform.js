import React, { useState } from 'react'
import '../css/cssfiles/helpform.css'
import axios from "axios";

const Helpform = () => {
    const [loc, setloc] = useState("");
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            console.log("Error");
        }
    }
    function showPosition(position) {
        setloc(`${position.coords.longitude} ${position.coords.latitude}`)
    }
    return (
        <div className='forms'>
            <div class="form">
                <div class="title">Welcome</div>
                <div class="subtitle">Let us know Your Problem!</div>
                <div class="input-container ic1">
                    <input id="firstname" class="input" type="text" placeholder="" required />
                    <div class="cut"></div>
                    <label for="firstname" class="placeholder">First name</label>
                </div>
                <div class="input-container ic2">
                    <input id="lastname" class="input" type="text" placeholder="" required={true} />
                    <div class="cut"></div>
                    <label for="lastname" class="placeholder">Last name</label>
                </div>
                <div class="input-container ic2">
                    <input id="gender" class="input" type="text" placeholder="" required={true} />
                    <div class="cut cut-short"></div>
                    <label for="email" class="placeholder">Gender</label>
                </div>
                <div class="input-container ic2">
                    <input id="email" class="input" type="number" placeholder="" required />
                    <div class="cut cut-short"></div>
                    <label for="email" class="placeholder">Age Group</label>
                </div>
                <div class="input-container ic2">
                    <input id="email" class="input" type="number" placeholder="" required />
                    <div class="cut cut-short"></div>
                    <label for="email" class="placeholder">Phone</label>
                </div>
                <div class="input-container ic2">
                    <input id="email" class="input" type="text" placeholder="" />
                    <div class="cut cut-short"></div>
                    <label for="email" class="placeholder">Email</label>
                </div>
                <div class="input-container ic2">
                    <input id="text" style={{ marginBottom: "10px" }} class="input" value={loc} type="text" placeholder="" required />
                    <div class="cut cut-short"></div>
                    <label for="email" class="placeholder">Location</label>
                    <a onClick={getLocation} className='text-green-600 font-semibold cursor-pointer'>Locate Me</a>
                </div>

                <button type="text" class="submit">Submit</button>
            </div>
        </div>
    )
}

export default Helpform;
