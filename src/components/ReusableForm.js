import React from "react";
import PropTypes from "prop-types";
// import { NonceProvider } from "react-select";
// import CurrencyInput  from 'react-currency-input-field';


function ReusableForm(props){
  const buttonStyle ={
    backgroundColor: 'transparent',
    color: 'black',
    fontSize: '18pt',
    fontFamily:"Andale Mono",
    textAlign: 'center',
    borderRadius: '5pt',
    borderWidth: '1pt'

  }

  const inputStyle = {
    width: "auto",
    marginLeft: "15pt",
    borderRadius: '5pt',
    borderWidth: '1pt'
  }
  const styleOfForm = {
    color: "black",
    fontFamily: "Andale Mono",
    fontSize: "15pt",
    textAlign: "left",
    marginLeft: "10%",
    borderRadius: '5pt',
  }

  
  return (
    <React.Fragment>
      <form style={styleOfForm} onSubmit={props.formSubmissionHandler}>
      <h1>Bean Information</h1>
      <br></br>
        <div className='mb-3'>
          <label htmlFor='name' className='form-label'> Coffee Name:</label>
          <input style={inputStyle} type='text' className='form-control' name='name' required={true} />
          <br></br>
        </div>
        <br></br>

        <div className='mb-3'>
          <label htmlFor='origin' className='form-label'>Origin:</label>
          <input style={inputStyle} type='string' className='form-control' name='origin' required={true} />
        </div>
        <br></br>

        <div className='mb-3'> 
        <label htmlFor='roast' className='form-label'>Roast</label>
          <select style={inputStyle}  name="roast"  required={true} id='dropdown'>
            <option value='Light'>Light</option>
            <option value='Medium'>Medium</option>
            <option value='Dark'>Dark</option>
          </select> 
         </div>
         <br></br>

           <div className='mb-3'>  
          <label htmlFor='price' className='form-label'>Price per lb:  </label>
          <input style={inputStyle}  prefix='$' name="price" type="number" data-number-to-fixed="2" data-number-stepfactor="100" placeholder="$" allowDecimals decimalsLimit="2" />
        </div> 
        <br></br>

        <div className='mb-3'> 
       <label htmlFor='description' className='form-label'> Flavor Profiles:    </label>
<textarea style={inputStyle}  required={true} name="description" />
        </div>
        <br></br>

        <div className='mb-3'>  
        <label htmlFor='quantity' className='form-label'>Quantity: </label>
        <input  style={inputStyle} type="number" className='form-control' name='quantity'required={true} placeHolder="0" />
        </div> 

      <br></br>
      <button style={buttonStyle}  type='submit' className='btn btn-success' >{props.buttonText}</button>       
        <br></br>
      </form>
      <br></br>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusableForm;