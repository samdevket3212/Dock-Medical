const BetterSteps = () => {
  return (
    <div className='bg-dcGray100 w-full relative block py-20'>
      <div className='max-w-dcContainer mx-auto px-4'>
        <div className='dc__Title flex items-center jsutify-center flex-col text-center mb-16'>
          <div className='flex items-center gap-x-1.5 mb-5'>
            <span className='w-3 h-3 bg-dcBlue50 rounded-full' />
            <span className='w-3 h-3 bg-dcYellow400 rounded-full' />
            <span className='w-3 h-3 bg-dcGreen50 rounded-full' />
          </div>
          <h4 className='text-dcBlack100 font-medium text-dcH4 md:text-dcH2 mb-6'>
            your dock. will see you now.
          </h4>
          <p className='text-black font-light text-dcBody2 md:text-dcBody1 w-4/5 md:w-3/5'>
            Three simple steps to better healthcare.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-20'>
          <div className='dc__StepContent block w-full'>
            <h6 className='relative dc__StepHead text-scBlack100 font-medium text-dcH4 mb-10'>
              make an <br /> appointment easily.
            </h6>
            <p className='text-black text-dcBody3 md:text-dcBody2 font-light'>
              Choose from hundreds of available same-day appointments for urgent
              care, primary care, and much more. And with specialty care coming
              soon, you can rest easy knowing all your care is under one roof.
            </p>
          </div>
          <div className='dc__StepContent block w-full'>
            <h6 className='relative dc__StepHead second text-scBlack100 font-medium text-dcH4 mb-10'>
              be seen <br /> immediately.
            </h6>
            <p className='text-black text-dcBody3 md:text-dcBody2 font-light'>
              Your healthcare journey starts here...and stays here. Our doctors,
              healthcare professionals and care captains will guide you through
              your care. From proactive check-ins to illness and injury, we have
              you covered.
            </p>
          </div>
          <div className='dc__StepContent block w-full'>
            <h6 className='relative dc__StepHead third text-scBlack100 font-medium text-dcH4 mb-10'>
              continue your care smoothly.
            </h6>
            <p className='text-black text-dcBody3 md:text-dcBody2 font-light'>
              {`We’re here to coordinate your healthcare comprehensively. From the
              pharmacy to specialty physicians. Through efficiency and
              technology, we’re providing the treatment you deserve, without
              complexity or hassle.`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BetterSteps;
