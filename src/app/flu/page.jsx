'use client';
import Appointment from '@/common/Appointment';
import BetterSteps from '@/common/BetterSteps';
import { fluArray } from '@/helpers/helper';
import Slider from 'react-slick';

const FLU = () => {
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
            Flu.
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
              src='/assets/images/flutop.jpg'
              alt='Physical Exam Img'
              className='w-2/3 h-auto -z-1'
            />
            <div className='dc__ExamBox block w-2/3 bg-dcGreen200 ml-auto py-8 px-14 rounded-tl-3xl -mt-28 z-10  relative'>
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
              Protect Your Loved Ones from the Flu: Get Vaccinated Today
            </h4>
            <p className='text-black font-light text-dcBody3 md:text-dcBody1 w-full md:w-3/5'>
              {`The best way to prevent the flu is to get an annual flu vaccine. The vaccine is safe for children, babies and adults. Our dock. Care Captains offer the flu vaccine every year. With convenient evening and weekend hours, and no appointments necessary, we’re making it easier for your family to get the vaccine and stay well.`}
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
      <div className='dc__Relief w-full pb-20'>
        <div className='max-w-dcContainer mx-auto px-4'>
          <div className='grid'>
            <div className='grid grid-cols-1 md:grid-cols-2'>
              <div className='dc__FluImgDiv'>
                <img
                  src='/assets/images/flubottom.jpg'
                  alt='FluImg'
                  className='w-full h-auto'
                />
              </div>
              <div className='dc__FluContent flex flex-col justify-center bg-dcGreen50 p-10'>
                <span className='block font-medium text-black mb-3 text-dcCaption'>
                  {`you’re not on your own`}
                </span>
                <h5 className='text-dcH4 md:text-dcH2 font-medium text-dcBlack100 mb-5'>
                  Finding Relief from the Flu: Care and Medicines at Dock
                </h5>
                <p className='text-black font-light text-dcBody3 md:text-dcBody1'>
                  {`While their aren’t medications to directly treat the flu, some
                  medicines can relieve your symptoms and shorten the duration
                  and severity of your illness. There are side effects of each
                  of these medications. Antiviral medicine is often only given
                  to individuals at risk for developing complications from the
                  flu or those experiencing severe symptoms. At dock., we will
                  help you find the care you need to start feeling better!`}
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

export default FLU;
