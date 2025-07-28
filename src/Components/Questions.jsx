import React from "react";
import Process from "./Process";

const Questions = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center md:justify-start md:ml-23 gap-5 mt-12">
        <div>
          <button className="bg-[#B9FF66] py-2 px-3 mx-auto rounded-md text-4xl">
            Frequently Asked Questions
          </button>
        </div>
      </div>

      <Process
        number=""
        title="Are there any additional fees or charges that may apply ?"
        content="Our pricing plans include a wide range of digital marketing services,
        including website design and development, SEO, PPC advertising, social media marketing,
        content marketing, and more. We also offer custom packages that can be tailored to meet
        the specific needs of your business."
      />
      <Process
        number=""
        title="Can I change or cancel my plan at any time ?"
        content="During the initial consultation,
     we will discuss your business goals and objectives,
     target audience, and current marketing efforts. This
     will allow us to understand your needs and tailor our
     services to best fit your requirements."
      />
      <Process
        number=""
        title="Do you offer a free trail or consulation?"
        content="During the initial consultation,
     we will discuss your business goals and objectives,
     target audience, and current marketing efforts. This
     will allow us to understand your needs and tailor our
     services to best fit your requirements."
      />
      <Process
        number=""
        title="How do you bill and invoice you clients ?"
        content="During the initial consultation,
     we will discuss your business goals and objectives,
     target audience, and current marketing efforts. This
     will allow us to understand your needs and tailor our
     services to best fit your requirements."
      />
      <Process
        number=""
        title="Are you services guaranteed to deliever results ?"
        content="During the initial consultation,
     we will discuss your business goals and objectives,
     target audience, and current marketing efforts. This
     will allow us to understand your needs and tailor our
     services to best fit your requirements."
      />
      <Process
        number=""
        title="Do oyou offer contract-based or monthly retainer-based pricing ?"
        content="During the initial consultation,
     we will discuss your business goals and objectives,
     target audience, and current marketing efforts. This
     will allow us to understand your needs and tailor our
     services to best fit your requirements."
      />
    </>
  );
};

export default Questions;
