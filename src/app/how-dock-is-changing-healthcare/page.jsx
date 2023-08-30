'use client';
import Appointment from '@/common/Appointment';
import BetterSteps from '@/common/BetterSteps';
import CareTesting from '@/components/how-dock-is-changing-healthcare/CareTesting';
import HealthCare from '@/components/how-dock-is-changing-healthcare/HealthCare';
import Treatments from '@/components/how-dock-is-changing-healthcare/Treatments';

const PhysicalExam = () => {
  return (
    <div className='dc__PageExam bg-white pt-20 relative w-full block'>
      <div className='max-w-dcContainer mx-auto px-4'>
        <div className='dc__Title flex justify-center w-full mb-16'>
          <h2 className='relative text-dcBlack100 text-dcH2 md:text-dcH1 font-semibold'>
            how dock. is changing the healthcare industry
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
              src='/assets/images/preEmployment.jpg'
              alt='Physical Exam Img'
              className='w-4/5 md:w-2/3 h-auto -z-1'
            />
            <div className='dc__ExamBox block w-3/5 md:w-2/3 bg-dcYellow400 ml-auto py-5 md:py-8 px-10 md:px-14 rounded-tl-3xl -mt-20 md:-mt-28 z-10  relative'>
              <h4 className='text-dcBlack font-medium text-dcH4 md:text-dcH1'>
                0
              </h4>
              <h4 className='text-dcBlack font-medium text-dcCaption md:text-dcBody3'>
                practices doing what we do
              </h4>
            </div>
          </div>
          <div className='w-full dc__ContentDiv'>
            <h5 className='text-black text-dcBody3 mb-4 font-medium'>
              why we stand apart
            </h5>
            <h3 className='text-dcBlack100 font-medium text-dcH4 md:text-dcH2 mb-10'>
              your healthcare journey starts here...and stays here.
            </h3>
            <p className='text-black text-dcBody3 md:text-dcBody1 mb-5'>
              With no wait times, concierge service and better care delivery, we
              are where you need us, when you need us - day or night. In your
              neighborhood, or on your phone, we are there throughout your
              entire continuum of care.
            </p>
            <p className='text-black text-dcBody3 md:text-dcBody1'>{`dock. offers a hybrid of urgent and primary care in convenient neighborhood locations.  Luxurious welcoming facilities are always prepared to care for all patients’ primary and urgent needs whether it’s just once or throughout a lifetime.`}</p>
          
            <div class="flex justify-center">
            <button className="bg-dcGreen400 w-auto px-8 py-2 rounded-md text-dcBody2 flex items-center my-10 text-white">
              Book Now
            </button>
          </div>
          </div>
        </div>
        
      </div>
      
      <Treatments />
      <CareTesting />
      <HealthCare />
      <BetterSteps />
      <Appointment
        title='your doctor when you need it.'
        description='Urgent or ongoing, we promise to deliver immediate and effective primary care throughout your entire healthcare journey.'
      />
    </div>
  );
};

export default PhysicalExam;
