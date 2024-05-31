import React from 'react'
import { BsQrCode } from "react-icons/bs";

function QRScanner() {
  return (
    <div className='_QRScanner'>
        <div className="pageTitle">SWIPE TO SCAN QR CODE</div>
        <BsQrCode className='qrIcon' />
    </div>
  )
}

export default QRScanner