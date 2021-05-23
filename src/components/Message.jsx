import React from 'react';
import {Alert} from "reactstrap";

const Message = ({varient,children}) => {
    return (
        <Alert varient={varient}>
            {children}
            
        </Alert>
    );
};

export default Message;