'use client';
import Appointment from '@/common/Appointment';
import BetterSteps from '@/common/BetterSteps';
import { fluArray } from '@/helpers/helper';
import Slider from 'react-slick';

const SoreThroat = () => {
  const settings = {
    dots: false,
    infinite: false,
    arrows: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    nextArrow: (
      <button className='prevArrow text-black'>
        <img
          src='/assets/svgs/nextArrow.svg'
          alt='prevArrow'
          className='w-6 h-auto'
        />
      </button>
    ),
    prevArrow: (
      <button className='prevArrow text-black'>
        <img
          src='/assets/svgs/prevArrow.svg'
          alt='prevArrow'
          className='w-6 h-auto'
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
    <div className='dc__PageExam bg-white pt-20 relative w-full block'>
      <div className='max-w-dcContainer mx-auto px-4'>
        <div className='dc__Title flex justify-center w-full mb-16'>
          <h2 className='relative text-dcBlack100 text-dcH1 font-semibold'>
            Rash and Itching
            <div className='flex items-center gap-x-1.5 mt-5'>
              <span className='w-3 h-3 bg-dcBlue50 rounded-full' />
              <span className='w-3 h-3 bg-dcYellow400 rounded-full' />
              <span className='w-3 h-3 bg-dcGreen50 rounded-full' />
            </div>
          </h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-16 mb-32'>
          <div className='dc__ImgDiv block w-full z-10 relative'>
            <img
              src='/assets/images/rashImg1.jpg'
              alt='Physical Exam Img'
              className='w-2/3 h-auto -z-1'
            />
            <div className='dc__ExamBox block w-2/3 bg-dcYellow400 ml-auto py-8 px-14 rounded-tl-3xl -mt-28 z-10  relative'>
              <h4 className='text-dcBlack font-medium text-dcH4 md:text-dcH1'>
                0
              </h4>
              <h4 className='text-dcBlack font-medium text-dcCaption md:text-dcBody3'>
                stress for our patients
              </h4>
            </div>
          </div>
          <div className='w-full dc__ContentDiv'>
            <h5 className='text-black text-dcBody3 mb-4 font-medium'>
              the future of your healthcare is based on
            </h5>
            <h3 className='text-dcBlack100 font-medium text-dcH4 md:text-dcH2 mb-10'>
              customized, continuous, and comprehensive care.
            </h3>
            <p className='text-black text-dcBody3 md:text-dcBody1'>
              That starts with primary care. dock. is a highly accessible
              Primary Care Retail Practice, that can help diagnose and treat a
              variety of rashes. Rashes can come in many forms, depending on the
              cause. While most are minor issues, some rashes can signal serious
              infections that require timely medical care. Because oftentimes it
              can be challenging to tell the difference when you are dealing
              with an uncomfortable skin condition or a major concern, we have
              outlined some of the differences.
            </p>
            <div class='flex '>
              <button className='bg-dcGreen400 w-auto px-8 py-2 rounded-md text-dcBody2 flex items-center my-10 text-white'>
                Book Now
              </button>
            </div>
          </div>
        </div>
        <div className='dc__Info w-full block mb-24'>
          <div className='dc__Title flex items-center jsutify-center flex-col text-center'>
            <div className='flex items-center gap-x-1.5 mt-10 mb-5'>
              <span className='w-3 h-3 bg-dcBlue50 rounded-full' />
              <span className='w-3 h-3 bg-dcYellow400 rounded-full' />
              <span className='w-3 h-3 bg-dcGreen50 rounded-full' />
            </div>
            <h4 className='text-dcBlack100 font-medium text-dcH4 md:text-dcH2 mb-10'>
              we have you covered.
            </h4>
          </div>
        </div>
        <div className='grid mb-24'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='block w-full'>
              <h2 className='relative text-dcBlack100 text-dcH4 md:text-dcH2 font-medium mb-5'>
                Understanding the Causes of Skin Rashes
                <div className='flex items-center gap-x-1.5 mt-5'>
                  <span className='w-3 h-3 bg-dcBlue50 rounded-full' />
                  <span className='w-3 h-3 bg-dcYellow400 rounded-full' />
                  <span className='w-3 h-3 bg-dcGreen50 rounded-full' />
                </div>
              </h2>
              <div className='dc__FluContent flex flex-col justify-center bg-dcYellow400 p-10'>
                <p className='text-black font-light text-dcBody3 md:text-dcBody1 mb-3'>
                  Typical Causes
                </p>
                <p className='text-black font-light text-dcBody3 md:text-dcBody1 mb-3'>
                  {`The term “rash” refers to any type of inflammation or
                  discoloration that changes the skin’s normal appearance.
                  Several ailments can cause the skin to break out in blotches,
                  blisters or welts.`}
                </p>
                <p className='text-black font-light text-dcBody3 md:text-dcBody1'>
                  Among the most common include:
                </p>
                <ul className='w-full list-disc font-light text-dcBody3 md:text-dcBody1 my-5'>
                  <li className='w-full list-inside list-disc'>
                    Allergic reactions
                  </li>
                  <li className='w-full list-inside list-disc'>
                    Poison ivy or oak
                  </li>
                </ul>
              </div>
            </div>
            <div className='dc__FluImgDiv'>
              <img
                src='/assets/images/rashImg2.jpg'
                alt='StrepThroatImg'
                className='w-full h-auto mb-10'
              />
              <ul className='text-black font-normal text-dcBody3 md:text-dcBody1 w-11/12 ml-auto'>
                <li className='w-full list-inside list-disc'>
                  Eczema • Fungal or parasitic infections, such as ring worm or
                  scabies
                </li>
                <li className='w-full list-inside list-disc'>Psoriasis</li>
                <li className='w-full list-inside list-disc'>
                  Viral and bacterial infections, such as staph, shingles or
                  chickenpox
                </li>
              </ul>
              <button className='bg-dcGreen400 w-auto px-8 py-2 rounded-md text-dcBody2 flex items-center my-10 text-white'>
                Book Now
              </button>
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-16'>
            <div className='dc__FluImgDiv'>
              <img
                src='/assets/images/rashImg3.jpg'
                alt='StrepThroatImg'
                className='w-full h-auto mb-10'
              />
              <p className='text-black font-light text-dcBody3 md:text-dcBody1 mb-3'>
                Sometimes, a rash can point toward a serious health issue,
                requiring immediate medical intervention. If you experience any
                of the following, visit your local emergency room:
              </p>
              <ul className='text-black font-normal text-dcBody3 md:text-dcBody1 w-11/12 ml-auto'>
                <li className='w-full list-inside list-disc'>
                  Breathing difficulties
                </li>
                <li className='w-full list-inside list-disc'>
                  A blistering rash that spreads to the genitals, mouth or the
                  skin around your eyes
                </li>
                <li className='w-full list-inside list-disc'>
                  Signs of a serious infection, including green or yellow fluid,
                  crusting, pain, swelling or a red streak spreading from the
                  rash
                </li>
              </ul>
              <button className='bg-dcGreen400 w-auto px-8 py-2 rounded-md text-dcBody2 flex items-center my-10 text-white'>
                Book Now
              </button>
            </div>
            <div className='block w-full'>
              <h2 className='relative text-dcBlack100 text-dcH4 md:text-dcH2 font-medium mb-5'>
                Understanding the Severity of Your Rash: When to Visit dock.
                <div className='flex items-center gap-x-1.5 mt-5'>
                  <span className='w-3 h-3 bg-dcBlue50 rounded-full' />
                  <span className='w-3 h-3 bg-dcYellow400 rounded-full' />
                  <span className='w-3 h-3 bg-dcGreen50 rounded-full' />
                </div>
              </h2>
              <div className='dc__FluContent flex flex-col justify-center bg-dcYellow400 p-10'>
                <p className='text-black font-light text-dcBody3 md:text-dcBody1 mb-3'>
                  When to visit dock.
                </p>
                <p className='text-black font-light text-dcBody3 md:text-dcBody1 mb-3'>
                  {`Most of the time, rashes will get better on their own. In some cases, however, a rash can be a sign of an underlying health issue. If you notice any of the following, it’s important to visit the dock. team to help treat and manage your rash.`}
                </p>
                <ul className='w-full list-disc font-light text-dcBody3 md:text-dcBody1 my-5'>
                  <li className='w-full list-inside list-disc'>
                    A rash covering your entire body
                  </li>
                  <li className='w-full list-inside list-disc'>
                    A rash that occurs along with a fever
                  </li>
                  <li className='w-full list-inside list-disc'>
                    A rash that appears suddenly and spreads rapidly
                  </li>
                  <li className='w-full list-inside list-disc'>
                    A rash that begins to blister
                  </li>
                  <li className='w-full list-inside list-disc'>
                    A rash that causes pain
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='dc__Info w-full block mb-24'>
          <div className='dc__Title flex items-center jsutify-center flex-col text-center'>
            <div className='flex items-center gap-x-1.5 mt-10 mb-5'>
              <span className='w-3 h-3 bg-dcBlue50 rounded-full' />
              <span className='w-3 h-3 bg-dcYellow400 rounded-full' />
              <span className='w-3 h-3 bg-dcGreen50 rounded-full' />
            </div>
            <h4 className='text-dcBlack100 font-medium text-dcH4 md:text-dcH2 mb-10'>
              we have you covered.
            </h4>
          </div>
        </div>
      </div>
      <div className='block w-full dc__SliderOuterDiv physicalTherapy mb-24'>
        <h4 className='text-dcBlack100 text-dcBody2 font-medium mb-8'>
          our values
        </h4>
        <Slider {...settings}>
          {fluArray?.map((slide) => (
            <div
              key={`PhysicalSliderKey${slide?.id}`}
              className={`dc__SliderDiv w-full flex items-center justify-center flex-col ${
                slide?.colorCode
              } ${slide?.id === 1 && 'firstChild'}`}
            >
              <img
                src={`/assets/svgs/flu/FluSvg${slide?.id}.svg`}
                alt='Icon'
                className='w-auto h-20 mb-8'
              />
              <p className='text-back font-semibold text-dcBody2 mb-3'>
                {slide?.title}
              </p>
              <p className='text-back font-light text-dcBody3 md:text-dcBody2'>
                {slide?.description}
              </p>
            </div>
          ))}
        </Slider>
      </div>
      <div className='dc__PageAbout w-full pb-20'>
        <div className='max-w-dcContainer mx-auto px-4'>
          <div className='dc__Info w-full block mb-24'>
            <div className='dc__Title flex items-center jsutify-center flex-col text-center'>
              <div className='flex items-center gap-x-1.5 mt-10 mb-5'>
                <span className='w-3 h-3 bg-dcBlue50 rounded-full' />
                <span className='w-3 h-3 bg-dcYellow400 rounded-full' />
                <span className='w-3 h-3 bg-dcGreen50 rounded-full' />
              </div>
              <h4 className='text-dcBlack100 font-medium text-dcH4 md:text-dcH2 mb-10  w-3/5'>
                Urgent Rash Care: Get Treated Quickly and Effectively at dock.
              </h4>
              <p className='text-black font-light text-dcBody1 w-3/5 mb-5'>
                {`When a rash points toward serious complications, an ER facility
                can provide life-saving care. That said, for minor rashes, it’s
                not always practical to sit for hours at an emergency room.`}
              </p>
              <p className='text-black font-light text-dcBody1 w-3/5'>
                At dock., you can get timely, walk-in treatment from a team who
                is happy to help and get you feeling back to your best self!
              </p>
            </div>
          </div>
        </div>
      </div>
      <BetterSteps />
      <Appointment
        title='your doctor when you need it.'
        description='Urgent or ongoing, we promise to deliver immediate and effective primary care throughout your entire healthcare journey.'
      />
    </div>
  );
};

export default SoreThroat;
