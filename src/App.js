import React, {Component} from 'react';
import {Webcam} from 'react-webcam'


class App extends Component{

   WebcamCapture = () => {
    const [deviceId, setDeviceId] = React.useState({});
    const [devices, setDevices] = React.useState([]);
   
    const handleDevices = React.useCallback(
      mediaDevices =>
        setDevices(mediaDevices.filter(({ kind }) => kind === "videoinput")),
      [setDevices]
    );
   
    React.useEffect(
      () => {
        navigator.mediaDevices.enumerateDevices().then(handleDevices);
      },
      [handleDevices]
    );
   
      return (
        <>
          {devices.map((device, key) => (
                <div>
                  <Webcam audio={false} videoConstraints={{ deviceId: device.deviceId }} />
                  {device.label || `Device ${key + 1}`}
                </div>
    
            ))}
        </>
      );
  };
}
export default App