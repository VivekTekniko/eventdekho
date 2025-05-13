"use client"
import React, { useEffect, useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa';
import { PiPhoneCallFill } from "react-icons/pi";

const WhatApp = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // adjust breakpoint as needed
        };

        handleResize(); // initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const phoneNumber = '9140734396';
    const message = 'Hello, I found you on your website!';
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    const styles = {
        floatingButton: {
            position: 'fixed',
           bottom: isMobile ? '70px' : '20px',
            right: '10%',
            backgroundColor: '#25D366',
            color: '#fff',
            borderRadius: '50%',
            padding: '8px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            zIndex: 1000,
            textDecoration: 'none',
        },
        floatingButton2: {
            position: 'fixed',
           bottom: isMobile ? '70px' : '20px',
            left: '10%',
            backgroundColor: '#043732',
            color: '#fff',
            borderRadius: '50%',
            padding: '12px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            zIndex: 1000,
            textDecoration: 'none',
        },
    };

    return (
        <div>
            <a href={whatsappURL} target="_blank" rel="noopener noreferrer" style={styles.floatingButton}>
                <button >
                    <FaWhatsapp className=' pt-[5px]' style={{fontSize:"60px"}} />

                </button>
            </a>

            <a
                href={`tel:${phoneNumber}`}
                style={styles.floatingButton2}
            >
                <PiPhoneCallFill className=' pt-[5px]' style={{fontSize:"60px"}} />
            </a>
        </div>
    )
}



export default WhatApp