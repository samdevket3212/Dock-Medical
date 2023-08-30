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
            Cuts and Lacerations
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
              src='/assets/images/cuts.jpg'
              alt='Physical Exam Img'
              className='w-2/3 h-auto -z-1'
            />
            <div className='dc__ExamBox block w-2/3 bg-dcBlue50 ml-auto py-8 px-14 rounded-tl-3xl -mt-28 z-10  relative'>
              <h4 className='text-dcBlack font-medium text-dcH4 md:text-dcH1'>
                0
              </h4>
              <h4 className='text-dcBlack font-medium text-dcCaption md:text-dcBody3'>
                commitments or memberships
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
              Primary Care Retail Practice, that can help treat your allergy and
              asthma needs. Millions suffer from seasonal allergies from
              irritants such as pollen, pet dander, mold, and dust mites, making
              certain times of the year unbearable. The good news is dock.
              offers same-day treatment for allergy symptoms!
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
          <div className='grid'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              <div className='block w-full'>
                <h2 className='relative text-dcBlack100 text-dcH4 md:text-dcH2 font-medium mb-5'>
                  When to Seek Medical Attention for Cuts and Lacerations
                  <div className='flex items-center gap-x-1.5 mt-5'>
                    <span className='w-3 h-3 bg-dcBlue50 rounded-full' />
                    <span className='w-3 h-3 bg-dcYellow400 rounded-full' />
                    <span className='w-3 h-3 bg-dcGreen50 rounded-full' />
                  </div>
                </h2>
                <div className='dc__FluContent flex flex-col justify-center bg-dcBlue50 p-10'>
                  <p className='text-black font-light text-dcBody3 md:text-dcBody1 mb-5'>
                    The terms cuts and small lacerations can be used
                    interchangeably. Both terms refer to an opening or break in
                    the skin. Larger lacerations and cuts are often referred to
                    as gashes; whereas deeper wounds caused by nails or animal
                    bites are referred to as punctures.
                  </p>
                  <p className='text-black font-light text-dcBody3 md:text-dcBody1'>
                    To help you determine if you need to see a provider for your
                    wound, consider the following:
                  </p>
                  <ul className='w-full list-disc font-light text-dcBody3 md:text-dcBody1 my-5'>
                    <li className='w-full list-inside list-disc'>
                      Does your cut appear to be deeper than a fourth of an
                      inch?
                    </li>
                    <li className='w-full list-inside list-disc'>
                      Are you unable to control the bleeding within 10 minutes?
                    </li>
                    <li className='w-full list-inside list-disc'>
                      Is the cut on your face, near your mouth or eyes?
                    </li>
                  </ul>
                </div>
              </div>
              <div className='dc__FluImgDiv'>
                <img
                  src='/assets/images/handCuts.jpg'
                  alt='StrepThroatImg'
                  className='w-full h-auto mb-10'
                />
                <p className='text-black font-normal text-dcBody3 md:text-dcBody1 w-11/12 ml-auto'>
                  If you answered yes to any of these questions, it is important
                  to contact us right away to receive proper treatment.
                </p>
                <p className='text-black font-normal text-dcBody3 md:text-dcBody1 w-11/12 ml-auto'>
                  {`We’ll also help you determine if your cut requires stitches to
                  help avoid potential infections, promote faster healing, and
                  reduce scarring.`}
                </p>
                <button className='bg-dcGreen400 w-auto px-8 py-2 rounded-md text-dcBody2 flex items-center my-10 text-white'>
                  Book Now
                </button>
              </div>
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
