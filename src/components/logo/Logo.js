import React from 'react'
import './style.css'

 const Logo= ()=>{
    
        return (
            <>
         <div className='logo'>
               
        <svg width="29" height="25" className='second' viewBox="0 0 29 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28.0222 23.6646C28.0494 23.983 27.8009 24.2566 27.4846 24.2566H1.46924C1.15373 24.2566 0.90553 23.9843 0.931564 23.6665L2.7959 0.912269C2.8191 0.629618 3.05287 0.412109 3.33372 0.412109H25.5426C25.8226 0.412109 26.0561 0.628527 26.0801 0.910361L28.0222 23.6646Z" fill="#1DCF65"/>
            </svg>
            <svg width="33" height="30" className='first' viewBox="0 0 33 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M32.0988 28.6014C32.1313 28.9985 31.8211 29.339 31.4268 29.339H1.59438C1.2009 29.339 0.890922 29.0002 0.922082 28.6037L3.06376 1.34718C3.09168 0.992702 3.38426 0.719727 3.73606 0.719727H29.1958C29.5468 0.719727 29.8391 0.991612 29.868 1.34499L32.0988 28.6014Z" fill="url(#paint0_linear_150_1107)"/>
            <defs>
            <linearGradient id="paint0_linear_150_1107" x1="25.8733" y1="25.3337" x2="7.51325" y2="3.9008" gradientUnits="userSpaceOnUse">
            <stop stop-color="#52D67A"/>
            <stop offset="1" stop-color="#5AEE87"/>
            </linearGradient>
            </defs>
            </svg>


          <svg width="8" height="10" 
           className='smile' viewBox="0 0 15 10" fill="none"
            xmlns="http://www.w3.org/2000/svg">
<path d="M7.92324 9.69529C4.04024 9.69529 0.881348 5.86314 0.881348 1.15278C0.881348 0.90747 1.07815 0.708496 1.32109 0.708496C1.56403 0.708496 1.76084 0.907334 1.76084 1.15278C1.76084 5.3732 4.52531 8.80672 7.92337 8.80672C11.3214 8.80672 14.0859 5.3732 14.0859 1.15278C14.0859 0.90747 14.2827 0.708496 14.5257 0.708496C14.7686 0.708496 14.9654 0.907334 14.9654 1.15278C14.9653 5.86314 11.8062 9.69529 7.92324 9.69529Z" fill="white" />
</svg>
{/* <svg xmlns="./icons/arrow-up.svg"/> */}
<span className='up'>^</span>
</div>
    
            </>
        )
    }
    export default Logo
