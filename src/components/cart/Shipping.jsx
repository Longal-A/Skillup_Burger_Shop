import React from "react";
import { Country, State } from "country-state-city";
import Popup from 'reactjs-popup';

const Shipping = () => {
  return (
    <section className="shipping">
      <main>
        <h1>Shipping Details</h1>
        <form>
          <div>
            <label>H.No.</label>
            <input type="text" placeholder="Enter House No." />
          </div>
          <div>
            <label>City</label>
            <input type="text" placeholder="Enter City" />
          </div>
          <div>
<<<<<<< HEAD
              {/* COUNTRY DROPDOWN*/}
=======
>>>>>>> e30e399b013b7b0370951066c43d060ac03ad515
            <label>Country</label>
            <select>
              <option value="">Country</option>
<<<<<<< HEAD
              {Country && Country.getAllCountries().map((country) => (
            <option value={country.isoCode} key={country.isoCode}>
              {country.name}        
=======
              {Country && Country.getAllCountries().map((i) => (
            <option value={i.isoCode} key={i.isoCode}>
              {i.name}
>>>>>>> e30e399b013b7b0370951066c43d060ac03ad515
                  </option>
                ))}
            </select>
          </div>
          <div>
<<<<<<< HEAD
            {/* STATE DROPDOWN */}
        <label>State</label>
        <select>
          <option value="">State</option>
          {State && State.getStatesOfCountry("IN").map((state) => (
            <option value={state.isoCode} key={state.isoCode}>
              {state.name}
            </option>
          ))}
        </select>           
=======
          <label>State</label>
        <select>
          <option value="">State</option>
          {State && State.getStatesOfCountry("IN").map((i) => (
            <option value={i.isoCode} key={i.isoCode}>
              {i.name}
            </option>
          ))}
        </select>
>>>>>>> e30e399b013b7b0370951066c43d060ac03ad515
          </div>
          <div>
            <label>Pin Code</label>
            <input type="number" placeholder="Enter Pincode" />
          </div>
<<<<<<< HEAD
        
        {/* Contact input */}
        <div>
        <label>Phone No.</label>
        <input type="tel" placeholder="Enter Phone No." />
        </div>           
          
=======
          <div>
        <label>Phone No.</label>
        <input type="number" placeholder="Enter Phone No." />
      </div>          
>>>>>>> e30e399b013b7b0370951066c43d060ac03ad515
          <Popup trigger=
                {<button type = "button">Confirm Order</button>}
                position="right center">
                <div style={{color:"red",position: 'absolute', top: '50%', right: '100%', transform: 'translateY(-50%)', backgroundColor: '#fff', padding: '10px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'}}>Order Placed</div>
               
            </Popup>
        </form>
      </main>
    </section>
  );
};

export default Shipping;