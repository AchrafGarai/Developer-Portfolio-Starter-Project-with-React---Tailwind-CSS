import {createContext, ReactNode, useContext, useState} from "react";


export type AlertType = {
  isOpen : boolean ,
  type : string,
  message : string,
  onOpen  (type : string, message : string) : void ,
  onClose () : void 
} 

type AlertStateType = {
  isOpen : boolean ,
  type : string,
  message : string,
} 

const AlertContext = createContext({
    isOpen: false,
    type: 'success',
    message: 'Message',
  })

export const AlertProvider = ({ children } : { children : ReactNode}) => {
  const [state, setState] = useState<AlertStateType>({
    isOpen: false,
    type: 'success',
    message: 'Message',
  })

  const value : AlertType = {
    ... state , 
     onOpen: (type : string, message : string) => setState({ isOpen: true, type, message }),
     onClose: () => setState({ isOpen: false, type: '', message: '' }),
  }


  return (
    <AlertContext.Provider
      value={value} >
      {children}
    </AlertContext.Provider>
  );
};

export const useAlertContext = () => useContext(AlertContext);
