import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoTimeOutline } from "react-icons/io5";

const INFORMATION: { id: string; label: string; value: string; type?: "email"; icon: React.JSX.Element }[] = [
  { id: "1", label: "Email", value: "ngocle.ng1001@gmail.com", icon: <FaEnvelope />, type: "email" },
  { id: "2", label: "Location", value: "Ho Chi Minh City, Vietnam", icon: <FaLocationDot /> },
  {
    id: "3",
    label: "Working Hours",
    value: "Monday to Friday: 8:00 AM to 5:00 PM, Vietnam Standard Time (UTC+7)",
    icon: <IoTimeOutline />
  }
];

const CONNECTS = [
  { id: "1", icon: "github", link: "https://github.com/lexe-nguyenngoc" },
  { id: "2", icon: "linkedin", link: "https://www.linkedin.com/" }
];

const Contact = () => {
  return (
    <div className="container mx-auto bg-primary/10 p-10 rounded-xl">
      <h3 className="text-xl text-white font-bold">Contact Information</h3>

      {INFORMATION.map((x) => (
        <div key={x.id} className="flex items-center mt-5 gap-4">
          <div className="text-primary bg-primary/20 w-12 h-12 rounded-full flex items-center justify-center text-xl">
            {x.icon}
          </div>

          <div>
            <h4 className="text-gray-300 text-sm font-semibold">{x.label}</h4>
            {x.type === "email" ? (
              <a href={`mailto:${x.value}`} className="text-white">
                {x.value}
              </a>
            ) : (
              <p className="text-white">{x.value}</p>
            )}
          </div>
        </div>
      ))}

      <h4 className="text-sm text-gray-300 font-semibold mt-10 mb-3">Connect with me</h4>

      <div className="flex items-center gap-4">
        {CONNECTS.map((x) => (
          <a key={x.id} href={x.link} target="_blank" className="text-white text-xl">
            <i className={`devicon-${x.icon}-plain`}></i>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
