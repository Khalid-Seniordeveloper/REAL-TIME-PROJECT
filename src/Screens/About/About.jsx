import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import PagesBanner from '../../Components/PagesBanner/PagesBanner'
import { BadgeCheck, CarTaxiFront, CircleDollarSign, ShieldCheck, ThumbsUp, Wallet } from 'lucide-react'
import { FaCar, FaMoneyBillTrendUp } from 'react-icons/fa6'
// import AboutCard from '../../Components/AboutCard/AboutCard'

const About = () => {

  return (
    <>
    <Navbar/>
    <PagesBanner one="Our" two="Breif" three="History" para="Explore our journey and discover insights about our mission, vision, and values." btn="See More"/>


{/* About section  */}
<div className='w-[100%] flex justify-center mt-[4rem] mb-[4rem]'>

    
<div className='font-[Poppins] w-[70%]'>

<h1 className='text-red-500 text-center text-[2.5rem]'>(Since-1994)</h1>
<h2 className='text-white text-center text-[3.8rem]'>Welcome To Drivco</h2>
<p className='text-red-500 text-center text-[2rem]'>We're passionate car agency
we're thrilled to have you join our community of automotive enthusiasts and professionals. Whether you're a passionate driver, a car owner, or someone who loves all things automotive, you've come to the right place.At Drivco, we strive to create a space where people can connect, share knowledge, and explore the exciting world of automobiles. From discussing the latest car models and technologies to sharing driving tips and tricks, we're here to fuel your love for everything on wheels.Feel free to ask any questions you have, seek advice, or simply engage in friendly conversations with fellow members. Our community is full of experts and enthusiasts who are eager to share their insights and experiences. Buckle up and enjoy your journey with Drivco!</p>
</div>

</div>



<div className='font-[Poppins]'>


<h1 className=' text-white text-center text-[2.5rem]'>Best Car Agency</h1>
<h2 className=' text-red-500 text-center text-[3.8rem]'>Why Only Choose Drivco</h2>

</div>

 <div className='w-[100%] h-full flex justify-center items-center gap-[3rem] flex-wrap mt-[4rem]'>

<div className='w-[36rem] h-[22.5rem] bg-[white] rounded-[1rem] about-card-container border-[1rem] font-[Poppins] py-[4rem] pl-[2rem] '>
<div className='w-[80%] h-[5rem] gap-[2rem] flex items-center justify-center'>

<Wallet className='text-[white] w-[4rem] h-[4rem]'/>
<h1 className='text-white text-[2.3rem] '><span className='text-red-500'>Affordable</span>Price</h1>
</div>

<div className='w-[80%] h-[100%] pl-[1rem] mt-[1.5rem]'>
    <p className='text-[white] text-[1.4rem]'>An affordable price for a luxury car may be significantly higher than an affordable price for a budget car...</p>
</div>

</div> 

<div className='w-[36rem] h-[22.5rem] bg-[white] rounded-[1rem] about-card-container border-[1rem] font-[Poppins] py-[4rem] pl-[2rem] '>
<div className='w-[80%] h-[5rem] gap-[1rem] flex items-center justify-center'>

<CircleDollarSign className='text-[white] w-[5rem] h-[5rem]'/>
<h1 className='text-white text-[2.3rem] '><span className='text-red-500'>Money Back</span>Guarantee</h1>
</div>

<div className='w-[80%] h-[100%] pl-[1rem] mt-[1.5rem]'>
    <p className='text-[white] text-[1.4rem]'>ome may offer a full refund with no questions asked, others may require the customer to provide...</p>
</div>

</div> 




<div className='w-[36rem] h-[22.5rem] bg-[white] rounded-[1rem] about-card-container border-[1rem] font-[Poppins] py-[4rem] pl-[2rem] '>
<div className='w-[80%] h-[5rem] gap-[2rem] flex items-center justify-center'>

<BadgeCheck  className='text-[white] w-[4rem] h-[4rem]'/>
<h1 className='text-white text-[2.3rem] '><span className='text-red-500'>8 Month</span> Warranty</h1>
</div>

<div className='w-[80%] h-[100%] pl-[1rem] mt-[1.5rem]'>
    <p className='text-[white] text-[1.4rem]'>During this 8-month period, if the product fails to function properly due to a defect or malfunction...</p>
</div>

</div> 

  </div>





<div className='w-[100%] h-full py-[4rem] flex justify-center items-center font-[Poppins] main-container-of-progress flex-wrap'>


<div className='w-[29rem] h-[7rem] gap-[1rem] flex justify-start items-center main-progress-container  pl-[1rem] '>
  
<CarTaxiFront className='w-[7rem] h-[7rem]  text-red-500' />
<h1 className='text-[white] text-[2rem]'>600K + <br /> <span>Car Available</span></h1>
</div>

<div className='w-[29rem] h-[7rem] gap-[1rem] flex justify-start items-center main-progress-container  pl-[1.5rem]'>
  
<FaMoneyBillTrendUp className='w-[5rem] h-[5rem]  text-red-500' />
<h1 className='text-[white] text-[2rem]'>104K+<br /> <span>Car Sold</span></h1>
</div>
<div className='w-[29rem] h-[7rem] gap-[1rem] flex justify-start items-center main-progress-container pl-[1rem]'>
  
<FaCar  className='w-[6rem] h-[6rem]  text-red-500 ' />
<h1 className='text-[white] text-[2rem]'>100K+<br /> <span>Used Cars</span></h1>
</div>
<div className='w-[31rem] h-[7rem] gap-[1rem] flex justify-start items-center   pl-[1rem]'>
  
<ThumbsUp  className='w-[6rem] h-[6rem]  text-red-500' />
<h1 className='text-[white] text-[2rem]'>98.50%<br /> <span>Customer Satisfaction</span></h1>
</div>


</div>


    <Footer/>
    </>
  )
}

export default About











