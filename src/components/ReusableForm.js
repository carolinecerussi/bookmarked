import React from "react";
import PropTypes from "prop-types";
// import { NonceProvider } from "react-select";
// import CurrencyInput  from 'react-currency-input-field';


function ReusableForm(props){
  const buttonStyle ={
    backgroundColor: 'transparent',
    color: 'pink',
    fontSize: '20pt',
    fontFamily:"KiTestRings",
    textAlign: 'center',
    borderColor: 'transparent',
  }

  const inputStyle = {
    width: "auto",
    marginLeft: "12pt",
    borderRadius: '5pt',
    borderWidth: '1pt',
    backgroundColor: 'transparent'
  }
  const styleOfForm = {
    color: "black",
    fontFamily: "KiTestRings",
    fontSize: "20pt",
    textAlign: "left",
    marginLeft: "10%",
    borderRadius: '5pt',
  }

  
  return (
    <React.Fragment>
      <form style={styleOfForm} onSubmit={props.formSubmissionHandler}>
      <h1>Book Info</h1>
      <br></br>
        <div className='mb-3'>
          <label htmlFor='title' className='form-label'> Title:</label>
          <input style={inputStyle} type='text' className='form-control' name='name' required={true} />
          <br></br>
        </div>
        <div className='mb-3'>
          <label htmlFor='author' className='form-label'>Author:</label>
          <input style={inputStyle} type='string' className='form-control' name='author' required={true} />
        </div>
        <br></br>
        <div className='mb-3'> 
        <label htmlFor='genre' className='form-label'>Genre</label>
          <select style={inputStyle}  name="genre"  required={true} id='dropdown'>
            <option value='AdventureFiction'>Adventure Fiction</option>
            <option value='ArtsMedia'>Arts & Media</option>
            <option value='BiographiesMemoirs'>Biographies & Memoirs</option>
            <option value='Childrens'>Adventure Fiction</option>
            <option value='ForeignLiterature'>Foreign Literature</option>
            <option value='ClassicLiterature'>Classic Literature</option>
            <option value='Crime'>Crime</option>
            <option value='DetectiveFiction'>Detective Fiction</option>
            <option value='Erotica'>Erotica</option>
            <option value='Fantasy'>Fantasy</option>
            <option value='HistoricalFiction'>Historical Fiction</option>
            <option value='History'>History</option>
            <option value='LGBTQA+Literature'>LGBTQA+ Literature</option>
            <option value='LoveStoryRomance'>Love Story / Romance</option>
            <option value='MysteryThrillerSuspense'>Mystery, Thriller, & Suspense</option>
            <option value='Nonfiction'>Nonfiction</option>
            <option value='PhilosophySpirituality'>Philosophy & Spirituality</option>
            <option value='Plays'>Plays</option>
            <option value='Poetry'>Poetry</option>
            <option value='Psychology'>Physchology</option>
            <option value='ScienceFiction'> Science Fiction</option>
            <option value='SelfHelp'>Self Help</option>
            <option value='Sports'>Sports</option>
            <option value='YoungAdult'> Young Adult</option>

          </select> 
         </div>
         <br></br>

           <div className='mb-3'>  
          <label htmlFor='price' className='form-label'>Price:  </label>
          <input style={inputStyle}  prefix='Read or Not' name="price" type="number" data-number-to-fixed="2" data-number-stepfactor="100" placeholder="$" allowDecimals decimalsLimit="2" />
        </div> 
        <br></br>

        <div className='mb-3'> 
       <label htmlFor='description' className='form-label'> Review: </label>
<textarea style={inputStyle}  required={true} name="description" />
        </div>
        <br></br>

        <div className='mb-3'>  
        <label htmlFor='stars' className='form-label'>Rating: </label>
        <input  style={inputStyle} type="number" className='form-control' name='stars'required={true} placeHolder="0" />
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