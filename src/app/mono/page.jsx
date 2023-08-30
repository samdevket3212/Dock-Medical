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
            Mono
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
              src='/assets/images/monoImg1.jpeg'
              alt='Physical Exam Img'
              className='w-2/3 h-auto -z-1'
            />
            <div className='dc__ExamBox block w-2/3 bg-dcGreen50 ml-auto py-8 px-14 rounded-tl-3xl -mt-28 z-10  relative'>
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
              Managing and Treating Mono with dock.
            </h4>
            <p className='text-black font-light text-dcBody1 w-3/5'>
              Fortunately, it is rare for long term complications to occur. Our
              dock. team can assist with testing and can help you manage your
              mono symptoms. It is important to receive a diagnosis so you can
              take precautions to prevent others from acquiring it.
            </p>
            <p className='text-black font-light text-left text-dcBody3 md:text-dcBody1 w-full md:w-3/5 mb-5'>
              Mono is a viral infection and most often it is caused by the
              Epstein-Barr virus; however, you may also develop mono from the
              following viruses:
            </p>
            <ul className='text-black text-left font-light text-dcBody3 md:text-dcBody2 w-full md:w-3/5 pl-3'>
              <li className='w-full list-inside list-disc mb-1'>HIV</li>
              <li className='w-full list-inside list-disc mb-1'>Rubella</li>
              <li className='w-full list-inside list-disc mb-1'>
                Cytomegalovirus (CMV)
              </li>
              <li className='w-full list-inside list-disc mb-1'>
                Hepatitis A, B, or C
              </li>
              <li className='w-full list-inside list-disc mb-1'>Adenovirus</li>
              <li className='w-full list-inside list-disc mb-1'>
                Toxoplasmosis
              </li>
            </ul>
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
            <div className='grid grid-cols-1 md:grid-cols-2'>
              <div className='dc__FluImgDiv'>
                <img
                  src='/assets/images/monoImg2.jpg'
                  alt='StrepThroatImg'
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='block w-full'>
                <div className='dc__FluContent flex flex-col justify-center bg-dcGreen50 p-10'>
                  <h2 className='relative text-dcBlack100 text-dcH4 md:text-dcH2 font-medium mb-5'>
                    <div className='flex items-center gap-x-1.5 mt-5'>
                      <span className='w-3 h-3 bg-dcBlue50 rounded-full' />
                      <span className='w-3 h-3 bg-dcYellow400 rounded-full' />
                      <span className='w-3 h-3 bg-dcGreen50 rounded-full' />
                    </div>
                    Mono Symptoms and Testing at dock.
                  </h2>
                  <p className='text-black font-light text-dcBody3 md:text-dcBody1 mb-3'>
                    Adults can build up immunity to the Epstein-Barr virus, so
                    they may not experience any symptoms from it. In other
                    words, this infection most often affects both young adults
                    and adolescents. Fortunately, in younger children, the
                    symptoms are usually mild.
                  </p>
                  <p className='text-black font-light text-dcBody3 md:text-dcBody1'>
                    If you develop this a mono infection though, you may
                    experience any of the following symptoms:
                  </p>
                  <ul className='w-full list-disc font-light text-dcBody3 md:text-dcBody1 my-5'>
                    <li className='w-full list-inside list-disc'>Fever</li>
                    <li className='w-full list-inside list-disc'>
                      Sore throat
                    </li>
                    <li className='w-full list-inside list-disc'>
                      Swollen armpit and neck lymph nodes
                    </li>
                    <li className='w-full list-inside list-disc'>Fatigue</li>
                    <li className='w-full list-inside list-disc'>Headache</li>
                    <li className='w-full list-inside list-disc'>
                      Swollen tonsils
                    </li>
                    <li className='w-full list-inside list-disc'>Skin rash</li>
                  </ul>
                  <p className='text-black font-light text-dcBody3 md:text-dcBody1 my-3'>
                    Generally, the symptoms you experience will last between
                    four to six weeks. Typically, younger children may not
                    experience symptoms for this long.
                  </p>
                  <p className='text-black font-light text-dcBody3 md:text-dcBody1'>
                    If you think you are showing symptoms of mono, visit our
                    dock. facilities and we can help to test and start to manage
                    the symptoms to get you back to feeling yourself!
                  </p>
                </div>
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
