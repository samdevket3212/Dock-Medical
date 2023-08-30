import { careTestingTable } from '@/helpers/helper';
import { Fragment } from 'react';

const CareTesting = () => {
  return (
    <div className='dc__PageExam bg-dcGray100 py-20 relative w-full block'>
      <div className='max-w-dcContainer mx-auto px-4'>
        <div className='dc__Info w-full block mb-24'>
          <div className='dc__Title flex items-center jsutify-center flex-col text-center'>
            <div className='flex items-center gap-x-1.5 mb-5'>
              <span className='w-3 h-3 bg-dcBlue50 rounded-full' />
              <span className='w-3 h-3 bg-dcYellow400 rounded-full' />
              <span className='w-3 h-3 bg-dcGreen50 rounded-full' />
            </div>
            <h4 className='text-dcBlack100 font-medium text-dcH4 md:text-dcH2 mb-10'>
              on-site point of care testing
            </h4>
          </div>
          <div className='dc__TableGrid w-full '>
            <div className='dc__TableHead w-full flex md:grid grid-cols-6 text-center'>
              <h3 className='border-l-0 border-t-0 col-span-3 border border-dcBlack100 p-5 text-dcBody2 font-medium'></h3>
              <h3 className='border-t-0 border border-dcBlack100 p-5 text-dcBody2 font-medium'>
                typical <br /> urgent care
              </h3>
              <h3 className='border-t-0 border border-dcBlack100 p-5 text-dcBody2 font-medium'>
                typical <br /> primary care
              </h3>
              <h3 className='border-r-0 border-t-0 border border-dcBlack100 p-5 text-dcBody2 font-medium'>
                dock.
              </h3>
            </div>
            <div className='dc__TableBody w-full'>
              {careTestingTable?.map((list) => (
                <div
                  className='w-full flex md:grid grid-cols-6'
                  key={`ListTabelTestingKey${list?.id}`}
                >
                  <div className='border-l-0 border-t-0 col-span-3 border border-dcBlack100 p-5'>
                    <h6 className='text-dcBody2 font-medium mb-2'>
                      {list?.title}
                    </h6>
                    <p className='text-dcBody2 text-dcBlack100'>
                      {list?.description}
                    </p>
                  </div>
                  <div className='border border-dcBlack100 w-full flex items-center justify-center p-5'>
                    {list?.urgentCare === 'unavailable' ? (
                      <img
                        src='/assets/svgs/unavailableYellow.svg'
                        alt='unavailable'
                        className='w-10 h-10'
                      />
                    ) : list?.urgentCare === 'tick' ? (
                      <img
                        src='/assets/svgs/tickYellow.svg'
                        alt='tick'
                        className='w-10 h-10'
                      />
                    ) : (
                      <span className='text-white bg-dcYellow400 text-dcBody2 rounded-full p-2 block mx-auto'>
                        {list?.urgentCare}
                      </span>
                    )}
                  </div>
                  <div className='border border-dcBlack100 w-full flex items-center justify-center p-5'>
                    {list?.primaryCare === 'unavailable' ? (
                      <img
                        src='/assets/svgs/unavailableBlue.svg'
                        alt='unavailable'
                        className='w-10 h-10'
                      />
                    ) : list?.primaryCare === 'tick' ? (
                      <img
                        src='/assets/svgs/tickBlue.svg'
                        alt='tick'
                        className='w-10 h-10'
                      />
                    ) : (
                      <span className='text-white bg-dcBlue50 text-dcBody2 rounded-full p-2 block mx-auto'>
                        {list?.primaryCare}
                      </span>
                    )}
                  </div>
                  <div className='border-r-0  border border-dcBlack100 w-full flex items-center justify-center p-5'>
                    <img
                      src='/assets/svgs/tickGreen.svg'
                      alt='unavailable'
                      className='w-10 h-10'
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareTesting;
