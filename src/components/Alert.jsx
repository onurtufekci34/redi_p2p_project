import { useEffect } from 'react';
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';

const Alert = ({ message }) => {
  useEffect(() => {
    if (message) {
      alertify.success(message);
    }
  }, [message]);

  return null; 
};

export default Alert;
