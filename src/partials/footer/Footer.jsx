import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='w-full block relative bg-dcGray50 pt-10 pb-16'>
      <div className='max-w-dcContainer mx-auto px-4'>
        <div className='flex flex-col md:flex-row items-center md:items-end justify-between'>
          <div className='dc__FooterLinks flex items-center md:items-end flex-col md:flex-row'>
            <img
              src='/assets/svgs/logo.svg'
              alt='Logo'
              className='footerLogo w-24 h-auto'
            />
            <div className='flex flex-wrap justify-center items-center md:items-end dc__Links ml-8 gap-x-5 my-5 md:my-0'>
              <Link href='/' className='block text-dcBlack100 text-dcBody2'>
                schedule
              </Link>
              <Link href='/' className='block text-dcBlack100 text-dcBody2'>
                visits
              </Link>
              <Link href='/' className='block text-dcBlack100 text-dcBody2'>
                my health
              </Link>
              <Link href='/' className='block text-dcBlack100 text-dcBody2'>
                services
              </Link>
              <Link href='/' className='block text-dcBlack100 text-dcBody2'>
                about dock.
              </Link>
            </div>
          </div>
          <p className='text-dcBlack100 text-dcBody2'>HIPPA Secure</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
