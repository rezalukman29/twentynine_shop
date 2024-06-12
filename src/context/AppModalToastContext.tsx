import React, {createContext, useState} from 'react';

type ModalToastType = 'success' | 'error' | 'warning';

interface ModalToastContextInterface {
  isShowToast: boolean;
  type: ModalToastType;
  setType: (value: ModalToastType) => void;
  setIsShowToast: (value: boolean) => void;
  toastMessage: string;
  setToastMessage: (value: string) => void;
  openToast: (variant: 'error' | 'success', message: string) => void;
}

export const ModalToastContext = createContext<ModalToastContextInterface>({
  isShowToast: false,
  type: 'success',
  setType: () => undefined,
  setIsShowToast: () => undefined,
  toastMessage: '',
  setToastMessage: () => undefined,
  openToast: () => undefined,
});

function AppModalToastContext({
  children,
}: Readonly<{children: React.ReactNode}>) {
  const [isShowToast, setIsShowToast] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState('');
  const [type, setType] = useState<ModalToastType>('success');
  const openToast = (variant: 'error' | 'success', message: string) => {
    setIsShowToast(true);
    setType(variant);
    setToastMessage(message);
  };
  return (
    <ModalToastContext.Provider
      value={{
        type,
        setType,
        isShowToast,
        setIsShowToast,
        toastMessage,
        setToastMessage,
        openToast,
      }}>
      {children}
    </ModalToastContext.Provider>
  );
}

export default AppModalToastContext;
