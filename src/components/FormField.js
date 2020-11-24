import 'bulma/css/bulma.css';
import React from 'react'


const FormField = props => {
    return (
      <div className='field'>
      <form>
        <label className='label'>{props.label}</label>
        <input className= 'input' placeholder= {props.placeholder}></input>
      </form>
      </div>
    );
  };

  export default FormField;

