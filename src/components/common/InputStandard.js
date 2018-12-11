import React from 'react';

const InputStandard = ({...props}) =>{
    
    const {input,label,type,meta:{touched,error,invalid}} = props; 
     
    return(
        <div className={`form-group ${touched && invalid ? 'has-danger' : ''}`}>
        <label>{label}</label>
        <input className="form-control" {...input} type={type}/>
        <div className="text-help" style={{color: 'red'}}>
          { touched ? error : '' }
        </div>
      </div>
    );
}

export default InputStandard;