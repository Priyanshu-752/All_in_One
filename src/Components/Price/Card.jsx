import React from 'react'
import { Link } from 'react-router-dom'
const Card = ({ path, standOutBg, marginMiddle, Package, Price, image,Feature1,Feature2,Feature3,Feature4,Feature5,Feature6, iconColor1,iconColor2,iconColor3,iconColor4,iconColor5,iconColor6, buttonBg,buttonTextColor,hoverBgButton  }) => {
  return (
    <div
      className={`w-full shadow-xl flex flex-col p-4 my-4 ${standOutBg} ${marginMiddle} rounded-lg hover:scale-105 duration-300`}
    >
      <img
        src={image}
        alt="image1"
        className="w-20 mx-auto mt-[-3rem] bg-white rounded-md"
      />
      <h2 className="text-2xl font-bold text-center">{Package}</h2>
      <Link to="quespaper">

      <button className={`justify-center flex mx-auto w-[200px] ${path} ${buttonBg} ${hoverBgButton} ${buttonTextColor} rounded-md font-medium my-6 py-3`}>
        Check Out
      </button>
      </Link>
    </div>
  );
};

export default Card