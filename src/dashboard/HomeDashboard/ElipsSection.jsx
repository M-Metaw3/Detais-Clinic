import React from 'react';
import { Box,CircularProgress } from '@chakra-ui/react';
const radius = 100;
const circumference = 2 * Math.PI * radius;
const offset = circumference - (50 / 100) * circumference;
const ElipsSection = () => {
    return (
    //     <svg width="236.50" height="236.56">
    //     {/* Outer circle with black stroke */}
    //     <circle
    //       cx="118.25"
    //       cy="118.28"
    //       r={radius}
    //       fill="transparent"
    //       stroke="black"
    //       strokeWidth="10"
    //     />
  
    //     {/* Inner circle with colored stroke */}
    //     <circle
    //       cx="118.25"
    //       cy="118.28"
    //       r={radius}
    //       fill="transparent"
    //       stroke="#00bcd4"
    //       strokeWidth="10"
    //       strokeDasharray={circumference}
    //       strokeDashoffset={offset}
    //     />
  
    //     {/* Transparent circle with larger radius for creating space and rounded end */}
    //     <circle
    //       cx="118.25"
    //       cy="118.28"
    //       r={radius + 5} // Adjust the radius to create space
    //       fill="transparent"
    //     />
  
    //     {/* Text */}
    //     <text x="118.25" y="118.25" textAnchor="middle" dy="0.3em" fontSize="16" fill="#000">
    //       aa
    //     </text>
    //   </svg>
    <div className="Group848" style={{width: "98%", height: 370, position: 'relative'}}>
  <div className="Rectangle172" style={{width:"100%", height: 370, left: 0, top: 0, position: 'absolute', background: 'white', boxShadow: '0px 12px 34px -10px rgba(58, 77, 233, 0.15)', borderRadius: 16}} />
  <div className="Vector137" style={{width: 10.88, height: 16.85, left: 444.89, top: 35, position: 'absolute', border: '3px #314CFF solid'}}></div>
  <div className="Vector140" style={{width: 10.88, height: 16.85, left: 45.09, top: 35, position: 'absolute', transform: 'rotate(180deg)', transformOrigin: '0 0', border: '3px #314CFF solid'}}></div>
  <div className="March2019" style={{left: 197, top: 34, position: 'absolute', color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>March 2019</div>
  <div className="VisitorsThisMonth" style={{left: 172, top: 207.79, position: 'absolute', opacity: 0.50, color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>visitors this month</div>
  <div className="950" style={{left: 207, top: 181, position: 'absolute', color: 'black', fontSize: 18, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>21,950</div>
  <div className="Ellipse217" style={{width: 236.50, height: 236.56, left: 241.86, top: 370, position: 'absolute', transform: 'rotate(-135.21deg)', transformOrigin: '0 0', background: '#F99963', borderRadius: 9999}} />
  <div className="Ellipse218" style={{width: 238.85, height: 234.19, left: 144.50, top: 70.02, position: 'absolute', transform: 'rotate(9.15deg)', transformOrigin: '0 0', background: '#3353F4', borderRadius: 9999}} />
</div>
    );
}

export default ElipsSection;
