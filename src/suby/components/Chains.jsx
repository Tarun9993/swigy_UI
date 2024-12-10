import React, { useState, useEffect } from 'react';
import { API_URL } from '../api';
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { RotatingLines } from 'react-loader-spinner'
const Chains = () => {
    const [vendorData, setVendorData] = useState([]);
    const [scroolPosition, setScrollPosition] = useState(0);
    const [loading, setLoading] = useState(true)
    const vendorFirmHandler = async () => {
        try {
            const response = await fetch(`${API_URL}/vendor/all-vendors`);
            const newData = await response.json();
            setVendorData(newData.vendors || []); // Ensure vendors is set properly
           setLoading(false)
        } catch (error) {
            alert('Error fetching vendor data');
            setLoading(true)
        }
    };

    useEffect(() => {
        vendorFirmHandler();
    }, []);

    const handleScroll = (direction) =>{
    const gallery = document.getElementById("chainGallery");
    const scrollAmount  = 500;
    if(direction === "left"){
        gallery.scrollTo({
            left:gallery.scrollLeft - scrollAmount,
            behavior: "smooth"
        })
    } else if (direction === "right"){
        gallery.scrollTo({
            left:gallery.scrollLeft + scrollAmount,
            behavior: "smooth"
        })
    }
    }
    return (
      <div className='mediaChainSection'>
     <div className='loaderSection'>
     {loading && 
       <>
       <div className='loader'>Your 🥣 is Loading</div>
      <RotatingLines
  visible={true}
  height="96"
  width="96"
  color="grey"
  strokeWidth="5"
  animationDuration="0.75"
  ariaLabel="rotating-lines-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
       </>
      }
     </div>
      <div className="btnSection">
        <button onClick={() => handleScroll("left")}> <FaRegArrowAltCircleLeft className='btnIcons'/></button>
        <button onClick={() => handleScroll("right")}> <FaRegArrowAltCircleRight className='btnIcons'/></button>
      </div>
            <h3>Top restaurant chains in Hyderabad</h3>

         <section className="chainSection" id="chainGallery" onScroll={(e) => setScrollPosition(e.target.scrollLeft)}>
            {vendorData.length > 0 ? (
                vendorData.map((vendor, vendorIndex) => (
                    <div className="vendorBox" key={vendorIndex}>
                        {vendor.firm.map((item, index) => {
                            return (
                                <>
                                    <div key={index}>
                                        {/* {item.firmName} */}
                                    </div>
                                    <div className='firmImage'>
                                        <img src={`${API_URL}/uploads/${item.image}`} alt="" />
                                    </div>
                                </>
                            )
                        })}
                    </div>
                ))
            ) : (
                <p>No vendor data available</p>
            )}
        </section>
      </div>
    );
};

export default Chains;
