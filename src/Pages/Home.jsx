import React from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Nav from '../Components/Nav';
import Hero from "../Components/Hero";
import Services from "../Components/Services";
import Cta from "../Components/Cta";
import Case from "../Components/Case";
import Process from "../Components/Process";
import Team from "../Components/Team";
import Testimonials from "../Components/Testimonials";
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Cta />
      <Case />
      <Process 
      number='01' 
      title='Consulation' 
      content='During the initial consultation,
     we will discuss your business goals and objectives,
     target audience, and current marketing efforts. This
     will allow us to understand your needs and tailor our
     services to best fit your requirements.'/>
     <Process 
      number='02' 
      title='Research and Strategy Development' 
      content='During the initial consultation,
     we will discuss your business goals and objectives,
     target audience, and current marketing efforts. This
     will allow us to understand your needs and tailor our
     services to best fit your requirements.'/>
     <Process 
      number='03' 
      title='Implementation' 
      content='During the initial consultation,
     we will discuss your business goals and objectives,
     target audience, and current marketing efforts. This
     will allow us to understand your needs and tailor our
     services to best fit your requirements.'/>
     <Process 
      number='04' 
      title='Monitoring and Optimization' 
      content='During the initial consultation,
     we will discuss your business goals and objectives,
     target audience, and current marketing efforts. This
     will allow us to understand your needs and tailor our
     services to best fit your requirements.'/>
     <Process 
      number='05' 
      title='Reporting and Communication' 
      content='During the initial consultation,
     we will discuss your business goals and objectives,
     target audience, and current marketing efforts. This
     will allow us to understand your needs and tailor our
     services to best fit your requirements.'/>
     <Process 
      number='06' 
      title='Continual Improvement' 
      content='During the initial consultation,
     we will discuss your business goals and objectives,
     target audience, and current marketing efforts. This
     will allow us to understand your needs and tailor our
     services to best fit your requirements.'/>
     <Team />
     <Testimonials />
     <Contact />
     
    </>
  )
}

export default Home