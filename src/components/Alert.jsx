
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';

const Alert = ({ message }) => {
    alertify.success(message);
};

export default Alert;
