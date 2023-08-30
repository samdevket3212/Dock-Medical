"use client";
import Appointment from "@/common/Appointment";
import BetterSteps from "@/common/BetterSteps";
import { preEmploymentArr } from "@/helpers/helper";
import Slider from "react-slick";

const PhysicalExam = () => {
  const settings = {
    dots: false,
    infinite: false,
    arrows: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    nextArrow: (
      <button className="prevArrow text-black">
        <img
          src="/assets/svgs/nextArrow.svg"
          alt="prevArrow"
          className="w-6 h-auto"
        />
      </button>
    ),
    prevArrow: (
      <button className="prevArrow text-black">
        <img
          src="/assets/svgs/prevArrow.svg"
          alt="prevArrow"
          className="w-6 h-auto"
        />
      </button>
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="dc__PageExam bg-white pt-20 relative w-full block">
      <div className="max-w-dcContainer mx-auto px-4">
        <div className="dc__Title flex justify-center w-full mb-16">
          <h2 className="relative text-dcBlack100 text-dcH1 font-semibold">
            pre-employment <br /> post-offer exams
            <div className="flex items-center gap-x-1.5 mt-5">
              <span className="w-3 h-3 bg-dcBlue50 rounded-full" />
              <span className="w-3 h-3 bg-dcYellow400 rounded-full" />
              <span className="w-3 h-3 bg-dcGreen50 rounded-full" />
            </div>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
          <div className="dc__ImgDiv block w-full z-10 relative">
            <img
              src="/assets/images/preEmployment.jpg"
              alt="Physical Exam Img"
              className="w-2/3 h-auto -z-1"
            />
            <div className="dc__ExamBox block w-2/3 bg-dcBlue50 ml-auto py-8 px-14 rounded-tl-3xl -mt-28 z-10  relative">
              <h4 className="text-dcBlack font-medium text-dcH1">4</h4>
              <h4 className="text-dcBlack font-medium text-dcBody3">
                parts to a pre-employment exam
              </h4>
            </div>
          </div>
          <div className="w-full dc__ContentDiv">
            <h5 className="text-black text-dcBody3 mb-4 font-medium">
              the future of your healthcare is based on
            </h5>
            <h3 className="text-dcBlack100 font-medium text-dcH2 mb-10">
              customized, continuous, and comprehensive care.
            </h3>
            <p className="text-black text-dcBody1">
              That starts with primary care. dock. is a highly accessible
              Primary Care Retail Practice, that provides you with exams needed
              for pre-employment or post-offer. These exams are often required
              by employers prior to a candidate being hired and beginning their
              new position and show that the new employee is capable and
              physically equipped to handle any given task required at the
              workplace.
            </p>

            <div class="flex justify-center">
              <button className="bg-dcGreen400 w-auto px-8 py-2 rounded-md text-dcBody2 flex items-center my-10 text-white">
                Book Now
              </button>
            </div>
          </div>
        </div>
        <div className="dc__Info w-full block mb-24">
          <div className="dc__Title flex items-center jsutify-center flex-col text-center">
            <div className="flex items-center gap-x-1.5 mb-5">
              <span className="w-3 h-3 bg-dcBlue50 rounded-full" />
              <span className="w-3 h-3 bg-dcYellow400 rounded-full" />
              <span className="w-3 h-3 bg-dcGreen50 rounded-full" />
            </div>
            <h4 className="text-dcBlack100 font-medium text-dcH2 mb-10">
              we have you covered.
            </h4>
            <p className="text-black font-light text-dcBody1 w-3/5">
              {`The purpose of these exams is to protect you from any potential injuries on the job. They are customized to the specific responsibilities of the job and only screens for skills that are needed on a regular basis. These types of physicals can help lower the risk of injury due to physical inability of the worker to perform the job duties and reduces workers’ compensation claims. `}
            </p>
          </div>
        </div>
      </div>
      <div className="block w-full dc__SliderOuterDiv preEmployment mb-24">
        <h4 className="text-dcBlack100 text-dcBody2 font-medium mb-8">
          exams include
        </h4>
        <Slider {...settings}>
          {preEmploymentArr?.map((slide) => (
            <div
              key={`PhysicalSliderKey${slide?.id}`}
              className={`dc__SliderDiv w-full flex items-center justify-center flex-col ${
                slide?.colorCode
              } ${slide?.id === 1 && "firstChild"}`}
            >
              <img
                src={`/assets/svgs/preEmployment/Icon${slide?.id}.svg`}
                alt="Icon"
                className="w-auto h-20 mb-10"
              />
              <p className="text-back font-semibold text-dcBody2">
                {slide?.text}
              </p>
            </div>
          ))}
        </Slider>
      </div>
      <BetterSteps />
      <Appointment
        title="your doctor when you need it."
        description="Urgent or ongoing, we promise to deliver immediate and effective primary care throughout your entire healthcare journey."
      />
    </div>
  );
};

export default PhysicalExam;
