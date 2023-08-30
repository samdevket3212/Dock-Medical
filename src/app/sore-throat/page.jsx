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
            Sore Throat
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
              src='/assets/images/sorethroattop.jpg'
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
              Primary Care Retail Practice, that is here to help you manage your
              flu symptoms. The flu (or influenza) is a respiratory illness
              caused by influenza viruses. There are many different strains of
              the virus. Each year, different strains may appear out in the
              community. Some of these strains may cause more severe symptoms -
              including shortness of breath, hospitalization and even death.
            </p>
            <div class="flex ">
              <button className="bg-dcGreen400 w-auto px-8 py-2 rounded-md text-dcBody2 flex items-center my-10 text-white">
                Book Now
              </button>
            </div>
          </div>
        </div>
        <div className='dc__Info w-full block mb-24'>
          <div className='dc__Title flex items-center jsutify-center flex-col text-center'>
            <div className='flex items-center gap-x-1.5 mb-5'>
              <span className='w-3 h-3 bg-dcBlue50 rounded-full' />
              <span className='w-3 h-3 bg-dcYellow400 rounded-full' />
              <span className='w-3 h-3 bg-dcGreen50 rounded-full' />
            </div>
            <h4 className='text-dcBlack100 font-medium text-dcH4 md:text-dcH2 mb-10'>
              Navigating Sore Throat Treatment: Trust Your Care to Dock.
            </h4>
            <p className='text-black font-light text-dcBody3 md:text-dcBody1 w-full md:w-3/5'>
              {`It can be confusing to know what to do for sore throat treatment. Tough it out? Use sore throat medicine? Gargle saltwater? See your health care provider?`}
            </p>
            <p className='text-black font-light text-dcBody3 md:text-dcBody1 w-full mt-5'>
              Let your dock. Care Captains provide some clarity by scheduling an
              appointment.
            </p>
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
                  make an appointment if
                  <div className='flex items-center gap-x-1.5 mt-5'>
                    <span className='w-3 h-3 bg-dcBlue50 rounded-full' />
                    <span className='w-3 h-3 bg-dcYellow400 rounded-full' />
                    <span className='w-3 h-3 bg-dcGreen50 rounded-full' />
                  </div>
                </h2>
                <div className='dc__FluContent flex flex-col justify-center bg-dcBlue50 p-10'>
                  <p className='text-black font-light text-dcBody3 md:text-dcBody1'>
                    You should schedule an appointment with a dock. Physician if
                    any of the below applies to you:
                  </p>
                  <ul className='w-full list-disc font-light text-dcBody3 md:text-dcBody1 my-5'>
                    <li className='w-full list-inside list-disc'>
                      Your sore throat does not get better in a few days.
                    </li>
                    <li className='w-full list-inside list-disc'>
                      You develop a rash or joint pain.
                    </li>
                    <li className='w-full list-inside list-disc'>
                      Your symptoms worsen.
                    </li>
                    <li className='w-full list-inside list-disc'>
                      You have a fever of more than 101 degrees that lasts
                      longer than one to two days.
                    </li>
                    <li className='w-full list-inside list-disc'>
                      You have difficulty swallowing liquids or trouble
                      breathing because your throat is blocked by swollen
                      tonsils or adenoids.
                    </li>
                  </ul>
                </div>
                <div class="flex">
            <button className=" bg-dcGreen400 w-auto px-8 py-2 rounded-md text-dcBody2 flex items-center my-10 text-white">
              Book Now
            </button>
          </div>
                
              </div>
              <div className='dc__FluImgDiv'>
                <img
                  src='/assets/images/sorethroatbottom.jpg'
                  alt='StrepThroatImg'
                  className='w-full h-auto mb-10'
                />
                <p className='text-black font-normal text-dcBody3 md:text-dcBody1 w-11/12 ml-auto'>
                  {`These symptoms could mean that you have a bacterial infection.
                  If that’s the case, your dock. Care Captain can provide an
                  antibiotic and help get you back on track!`}
                </p>
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
