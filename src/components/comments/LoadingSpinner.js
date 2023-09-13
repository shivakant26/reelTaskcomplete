import React from "react";
import ReactLoading from 'react-loading';

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <ReactLoading 
        type='bars' 
        color={'red'} 
        height={35} 
        width={35} 
      />
    </div>
  );
};
export default LoadingSpinner;