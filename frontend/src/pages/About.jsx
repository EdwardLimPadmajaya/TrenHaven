import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'
const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>We’re a community that celebrates style, self-expression, and quality craftsmanship. From everyday essentials to statement pieces, we carefully design each item to complement your unique lifestyle</p>
          <p>We believe in timeless style with a modern edge. Our carefully crafted collections are designed for those who appreciate quality, elegance, and versatility. From classic silhouettes to contemporary trends, every piece is made to elevate your wardrobe with effortless sophistication. Fashion fades, but style is forever—and we’re here to help you define yours.</p>
          <b className='text-gray-800'>Our mission</b>
          <p>Our mission is to bring you stylish, high-quality pieces that let you express yourself effortlessly. From everyday essentials to statement looks, we curate collections that blend trend, comfort, and versatility. Because fashion should be bold, empowering, and uniquely yours.</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Quality is at the heart of everything we do. We carefully select premium fabrics, focus on expert craftsmanship, and ensure every piece meets our high standards for durability, comfort, and style. From design to production, each item goes through strict quality checks to guarantee the best fit and feel. Our commitment to excellence means you can shop with confidence, knowing that every purchase is made to last.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <p>Convenience:</p>
          <p className='text-gray-600'>We make fashion easy and accessible. Enjoy a seamless shopping experience with fast shipping, hassle-free returns, and secure payment options. Whether you're browsing from home or on the go, our user-friendly website ensures a smooth and enjoyable process. Shop with confidence and convenience—because great style should always be stress-free!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <p>Exceptional Customer Service:</p>
          <p className='text-gray-600'>Our friendly and responsive customer service team is here to assist you with any questions, from product inquiries to order support. We’re committed to providing a smooth and hassle-free shopping experience, ensuring you feel valued every step of the way.</p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  )
}

export default About
