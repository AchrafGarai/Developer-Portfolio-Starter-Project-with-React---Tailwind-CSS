import React, { useRef } from 'react'
import { useAlertContext } from '../context/AlerctContext';
import * as AlertDialog from '@radix-ui/react-alert-dialog';

function Alert() {
  const { isOpen, type, message, onClose, onOpen } = useAlertContext() as any;

  return (
      <AlertDialog.Root open={isOpen} >
        <AlertDialog.Portal>
          <AlertDialog.Overlay className="AlertDialogOverlay" />
          <AlertDialog.Content className="bg-white rounded-lg fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 p-8 shadow-lg border border-gray-200">
            <AlertDialog.Title className="text-xl my-2 font-bold text-gray-700">{type}</AlertDialog.Title>
            <AlertDialog.Description className=" text-gray-500">
              {message}
            </AlertDialog.Description>
            <div style={{ display: 'flex', gap: 25, justifyContent: 'flex-end' }}>
              <AlertDialog.Action asChild>
                <button className="bg-slate-900  text-white rounded-lg px-5 py-3 my-4" onClick={onClose}>Okay</button>
              </AlertDialog.Action>
            </div>
          </AlertDialog.Content>
        </AlertDialog.Portal>
      </AlertDialog.Root>
  )
}

export default Alert