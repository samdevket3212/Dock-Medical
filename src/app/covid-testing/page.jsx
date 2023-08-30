"use client";
import Appointment from "@/common/Appointment";
import BetterSteps from "@/common/BetterSteps";
import { covidTestingArr } from "@/helpers/helper";
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
            covid-19 testing
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
              src="/assets/images/covidTesting.jpg"
              alt="Physical Exam Img"
              className="w-2/3 h-auto -z-1"
            />
            <div className="dc__ExamBox block w-2/3 bg-dcBlue50 ml-auto py-8 px-14 rounded-tl-3xl -mt-28 z-10  relative">
              <h4 className="text-dcBlack font-medium text-dcH1">3</h4>
              <h4 className="text-dcBlack font-medium text-dcBody3">
                types of testing offered
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
              Primary Care Retail Practice, that provides Covid-19 testing while
              following CDC Guidelines, social distancing, and frequent
              sanitization. Our team knows how to care for COVID-19 patients,
              while keeping everyone safe. Please ensure you are seeking medical
              attention immediately if you are having trouble breathing or feel
              chest pain.
            </p>

            <div class="flex">
              <button className="bg-dcGreen400 w-auto px-8 py-2 rounded-md text-dcBody2 my-10 text-white">
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
              offering three different types of COVID-19 testing
            </h4>
            <p className="text-black font-light text-dcBody1 w-3/5">
              {`Whether you are experiencing symptoms, getting back from a trip, or have been in contact with someone with COVID-19, come into our center to get tested today!`}
            </p>
          </div>
        </div>
      </div>
      <div className="block w-full dc__SliderOuterDiv preEmployment mb-24">
        <h4 className="text-dcBlack100 text-dcBody2 font-medium mb-8">
          types of testing
        </h4>
        <Slider {...settings}>
          {covidTestingArr?.map((slide) => (
            <div
              key={`PhysicalSliderKey${slide?.id}`}
              className={`dc__SliderDiv w-full flex items-center justify-center flex-col ${
                slide?.colorCode
              } ${slide?.id === 1 && "firstChild"}`}
            >
              <img
                src={`/assets/svgs/covidTesting/Icon${slide?.id}.svg`}
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
