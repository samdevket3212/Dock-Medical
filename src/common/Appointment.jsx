const Appointment = ({ title, description }) => {
  return (
    <div className='w-full block relative py-20'>
      <div className='max-w-dcContainer mx-auto px-4'>
        <div className='dc__Title flex items-center jsutify-center flex-col text-center'>
          <div className='flex items-center gap-x-1.5 mb-5'>
            <span className='w-3 h-3 bg-dcBlue50 rounded-full' />
            <span className='w-3 h-3 bg-dcYellow400 rounded-full' />
            <span className='w-3 h-3 bg-dcGreen50 rounded-full' />
          </div>
          <h4 className='text-dcBlack100 font-medium text-dcH4 md:text-dcH2 mb-6 italic'>
            {title}
          </h4>
          <p className='text-black font-light text-dcBody3 md:text-dcBody1 w-4/5 md:w-3/5'>
            {description}
          </p>
        </div>

        <div class="flex justify-center">
          <button className='ml-6 bg-dcGreen400 w-auto px-8 py-2 rounded-md text-dcBody2 flex items-center my-10 text-white'>
            Book Now
          </button>
  </div>
      </div>
    </div>
  );
};

export default Appointment;
