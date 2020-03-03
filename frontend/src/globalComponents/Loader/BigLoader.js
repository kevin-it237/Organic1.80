import React from 'react';
import Loader from 'react-loader-spinner';

export default class App extends React.Component {
   render() {
    return(
        <div className="d-flex flex-column justify-content-center align-items-center loader-wrapper">
            <Loader
               type="Oval"
               color="#3257A8"
               height={150}
               width={150}
            />
        </div>
    );
   }
}