import React from 'react';

import '../App.css';

function Header(){
 
return(

<div className="Header">


{/*syle is located inside App.css */}
<div className='AddressDiv'>

{/*LOGO */}
<div className='logo' style={logoStyle}>PEAKREACH</div>

{/*TIME ICON */}

<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none"
style={iconStyle}>
  <circle cx="31.5879" cy="32" r="31" fill="#EBEBEB" stroke="#273270"/>
  <path d="M32.0879 42.5C38.163 42.5 43.0879 37.5751 43.0879 31.5C43.0879 25.4249 38.163 20.5 32.0879 20.5C26.0128 20.5 21.0879 25.4249 21.0879 31.5C21.0879 37.5751 26.0128 42.5 32.0879 42.5Z" stroke="#F6B426"/>
  <path d="M32.0879 22.5V31.7058L37.0879 35.5" stroke="#F6B426"
  
  />
</svg>


<div className='sundayText'
style={textStyle}
>Mon - Sat 9.00 - 18.00
Sunday Closed</div>

{/*EMAIL ICON */}
<svg xmlns="http://www.w3.org/2000/svg" width="64"
 height="64" viewBox="0 0 64 64" fill="none"
 style={iconStyle}>
  <circle cx="31.5879" cy="32" r="31" fill="#EBEBEB" stroke="#273270"/>
  <path d="M41.0839 23.5H23.0919C22.5374 23.5 22.0879 23.8755 22.0879 24.3387V37.6613C22.0879 38.1245 22.5374 38.5 23.0919 38.5H41.0839C41.6384 38.5 42.0879 38.1245 42.0879 37.6613V24.3387C42.0879 23.8755 41.6384 23.5 41.0839 23.5Z" stroke="#F6B426"/>
  <path d="M22.0879 23.5L32.5126 30.5L42.0879 23.7294" stroke="#F6B426"/>
</svg>

<div className='EmailText'
style={textStyle}>Email
contact@logistics.com</div>


{/*PHONE ICON */}
<svg xmlns="http://www.w3.org/2000/svg" width="64" height="63" viewBox="0 0 64 63" fill="none" 
style={iconStyle}>
  <circle cx="31.5879" cy="31.5" r="31" fill="#EBEBEB" stroke="#273270"/>
  <path d="M24.0619 22.1408C23.9273 22.1449 23.795 22.1743 23.6727 22.2272C23.5504 22.28 23.4407 22.3554 23.3501 22.4487C23.2594 22.542 23.1897 22.6514 23.145 22.7704C23.1003 22.8894 23.0815 23.0156 23.0898 23.1416C23.2243 25.3015 23.8583 30.5716 26.8938 33.8583C30.5288 37.8181 35.2627 39.1824 40.1196 38.9808C40.3799 38.9662 40.6247 38.8596 40.8044 38.6826C40.9841 38.5055 41.0854 38.2712 41.0879 38.0268V34.5674C41.0849 34.2446 40.9662 33.9322 40.7508 33.6802C40.5355 33.4282 40.2361 33.2513 39.9006 33.1779L37.4683 32.6739C37.1675 32.6138 36.8543 32.6397 36.5693 32.7481C36.2844 32.8566 36.0407 33.0427 35.8698 33.2823L35.3319 34.0454C35.2825 34.1153 35.2087 34.1668 35.1231 34.1911C35.0375 34.2154 34.9456 34.211 34.8631 34.1786C33.6258 33.6783 28.696 31.5184 28.1542 27.8753C28.1436 27.805 28.1554 27.7333 28.1882 27.6692C28.221 27.6051 28.2734 27.5516 28.3386 27.5154L29.3146 26.9574C29.5823 26.802 29.7926 26.5732 29.917 26.3022C30.0413 26.0311 30.0739 25.7308 30.0101 25.4419L29.476 23.1236C29.3979 22.7988 29.2021 22.5093 28.9218 22.3045C28.6416 22.0998 28.2943 21.9923 27.939 22.0004L24.0619 22.1408Z" stroke="#F6B426"/>
</svg>

<div className='phoneText' style={textStyle}>Call Us :08168766206
</div>

</div>

</div>

);

}



//styles


// CSS styles for elements
const logoStyle = {
  color: '#FFF',
  fontFamily: 'Rubik',
  fontSize: '30px',
  fontWeight: 600,
  lineHeight: 'normal',
};

const iconStyle = {
  width: '40px',
  height: '40px',
  flexShrink: 0,
};

const textStyle = {
  width: '176px',
  height: '40px',
  flexShrink: 0,
  color: '#FFF',
  fontFamily: 'Krub',
  fontSize: '14px',
  fontWeight: 500,
  lineHeight: '135.023%',
};

export default Header;