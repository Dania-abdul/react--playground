import React, { useCallback } from 'react';
import ReactDOM from 'react-dom';


export class TestProject extends React.Component {

    render(){
        function getCurrentTime(onSuccess, onFail) {
            // Get the current 'global' time from an API
            return setTimeout(function() {
              // randomly decide if the date is retrieved or not
              var didSucceed = Math.random() >= 0.5;
              if (didSucceed) {
                var currentTime = new Date();
                onSuccess(currentTime);
              } else {
                onFail('Unknown error');
              }
            }, 2000);
          }
          getCurrentTime(function(currentTime) {
            console.log('The current time is: ' + currentTime);
          }, function(error) {
            console.log('There was an error fetching the time');
          });

        return(
            <div>
                
            </div>
        );
    }
}

export default TestProject;