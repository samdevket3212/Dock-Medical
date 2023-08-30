'use client';
import { Fragment, useState } from 'react';
import {
  Dialog,
  Disclosure,
  Popover,
  Transition,
  Menu,
} from '@headlessui/react';
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  ChevronRightIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from '@heroicons/react/20/solid';
import Link from 'next/link';
import {
  aboutDockDropDown,
  myHealthDropDown,
  servicesDropDown,
} from '@/helpers/helper';

const products = [
  {
    name: 'Analytics',
    description: 'Get a better understanding of your traffic',
    href: '#',
    icon: ChartPieIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers',
    href: '#',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'Security',
    description: 'Your customers’ data will be safe and secure',
    href: '#',
    icon: FingerPrintIcon,
  },
  {
    name: 'Integrations',
    description: 'Connect with third-party tools',
    href: '#',
    icon: SquaresPlusIcon,
  },
  {
    name: 'Automations',
    description: 'Build strategic funnels that will convert',
    href: '#',
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
];
const company = [
  { name: 'About us', href: '#' },
  { name: 'Careers', href: '#' },
  { name: 'Support', href: '#' },
  { name: 'Press', href: '#' },
  { name: 'Blog', href: '#' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className='bg-white block w-full relative z-50'>
      <nav
        className='mx-auto flex max-w-dcContainer items-center justify-start p-6 lg:px-8'
        aria-label='Global'
      >
        <div className='flex w-full justify-between lg:justify-start items-end'>
          <div className='flex'>
            <Link href='/' className='-m-1.5 p-1.5'>
              <img
                className='h-16 w-auto'
                src='/assets/svgs/logo.svg'
                alt='Logo'
              />
            </Link>
          </div>
          <div className='flex lg:hidden'>
            <button
              type='button'
              className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-dcBlack100'
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className='sr-only'>Open main menu</span>
              <Bars3Icon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <Popover.Group className='hidden lg:flex lg:gap-x-7 mx-8'>
            <Link
              href='/schedule'
              className='text-dcBody2 leading-6 text-dcBlack100'
            >
              schedule
            </Link>

            <Link
              href='/visits'
              className='text-dcBody2 leading-6 text-dcBlack100'
            >
              visits
            </Link>

            <Popover className='relative'>
              <Popover.Button className='flex items-end text-dcBody2 leading-6 text-dcBlack100 focus:outline-none'>
                my health
                <ChevronRightIcon className='h-4 w-4 pb-1' aria-hidden='true' />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter='transition ease-out duration-200'
                enterFrom='opacity-0 translate-y-1'
                enterTo='opacity-100 translate-y-0'
                leave='transition ease-in duration-150'
                leaveFrom='opacity-100 translate-y-0'
                leaveTo='opacity-0 translate-y-1'
              >
                <Popover.Panel className='absolute right-0 top-full z-10 mt-3 w-96 bg-white px-5 pt-4 shadow-lg ring-1 ring-white/5'>
                  {myHealthDropDown.map((item) => (
                    <Link
                      key={item.text}
                      href={item.link}
                      className='border-b border-scBlack100 py-4 block text-dcBody2 font-semibold leading-6 text-scBlack'
                    >
                      {item.text}
                    </Link>
                  ))}
                </Popover.Panel>
              </Transition>
            </Popover>

            <Popover className='relative'>
              <Popover.Button className='flex items-end text-dcBody2 leading-6 text-dcBlack100 focus:outline-none'>
                services
                <ChevronRightIcon className='h-4 w-4 pb-1' aria-hidden='true' />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter='transition ease-out duration-200'
                enterFrom='opacity-0 translate-y-1'
                enterTo='opacity-100 translate-y-0'
                leave='transition ease-in duration-150'
                leaveFrom='opacity-100 translate-y-0'
                leaveTo='opacity-0 translate-y-1'
              >
                <Popover.Panel className='absolute right-0 top-full z-10 mt-3 w-96 bg-white px-5 pt-4 shadow-lg ring-1 ring-white/5'>
                  {servicesDropDown.map((item) => (
                    <Link
                      key={item.text}
                      href={item.link}
                      className='border-b border-scBlack100 py-4 block text-dcBody2 font-semibold leading-6 text-scBlack'
                    >
                      {item.text}
                    </Link>
                  ))}
                </Popover.Panel>
              </Transition>
            </Popover>

            <Popover className='relative'>
              <Popover.Button className='flex items-end text-dcBody2 leading-6 text-dcBlack100 focus:outline-none'>
                about dock.
                <ChevronRightIcon className='h-4 w-4 pb-1' aria-hidden='true' />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter='transition ease-out duration-200'
                enterFrom='opacity-0 translate-y-1'
                enterTo='opacity-100 translate-y-0'
                leave='transition ease-in duration-150'
                leaveFrom='opacity-100 translate-y-0'
                leaveTo='opacity-0 translate-y-1'
              >
                <Popover.Panel className='absolute right-0 top-full z-10 mt-3 w-96 bg-white px-5 pt-4 shadow-lg ring-1 ring-white/5'>
                  {aboutDockDropDown.map((item) => (
                    <Link
                      key={item.text}
                      href={item.link}
                      className='border-b border-scBlack100 py-4 block text-dcBody2 font-semibold leading-6 text-scBlack'
                    >
                      {item.text}
                    </Link>
                  ))}
                </Popover.Panel>
              </Transition>
            </Popover>
          </Popover.Group>
        </div>
        <div className='hidden lg:flex items-center mt-5 ml-24'>
          <Menu as='div' className='relative inline-block text-left'>
            <div>
              <Menu.Button className='bg-dcGreen400 w-20 h-20 rounded-full flex items-center justify-center text-white'>
                <svg className='w-10 h-10' viewBox='0 0 48 44' fill='none'>
                  <path
                    d='M24.0859 10.4453V42.1875'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-miterlimit='10'
                    strokeLinecap='round'
                  />
                  <path
                    d='M40.7656 29.9219C40.7656 36.9696 33.2965 42.6736 24.1006 42.6736C14.9047 42.6736 7.42188 36.9696 7.42188 29.9219'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-miterlimit='10'
                    strokeLinecap='round'
                  />
                  <path
                    d='M14.5938 17.418H33.6022'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-miterlimit='10'
                    strokeLinecap='round'
                  />
                  <path
                    d='M24.1026 3.55626C24.1688 3.06784 24.3654 2.60633 24.6717 2.22026C24.978 1.83419 25.3827 1.53788 25.8431 1.36245C26.3033 1.18029 26.8059 1.13382 27.2917 1.22859C27.7775 1.32336 28.226 1.55538 28.584 1.89718C28.9637 2.23094 29.2393 2.66703 29.3779 3.15334C29.5164 3.63965 29.5119 4.1556 29.3651 4.63948C29.0938 5.66006 28.5816 6.60052 27.8714 7.38178C26.8125 8.57731 25.5732 9.59976 24.1984 10.412C24.1501 10.4384 24.0959 10.4523 24.0408 10.4523C23.9858 10.4523 23.9316 10.4384 23.8833 10.412C22.1884 9.44128 20.7174 8.1237 19.5662 6.54538C19.1029 5.90253 18.7807 5.16892 18.6207 4.39269C18.4972 3.70002 18.6447 2.98638 19.0324 2.39939C19.4201 1.81241 20.0185 1.39699 20.7038 1.23905C21.3765 1.09194 22.0799 1.20349 22.6741 1.55155C23.2682 1.8996 23.7097 2.45865 23.9107 3.11752C24.0203 3.25464 24.0478 3.37801 24.1026 3.55626Z'
                    stroke='currentColor'
                    stroke-width='2'
                    strokeLinecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M1.78906 35.3252L7.42171 28.1541L14.5893 33.7895'
                    stroke='currentColor'
                    stroke-width='2'
                    strokeLinecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M46.3803 35.3254L40.7613 28.1543L33.5938 33.7897'
                    stroke='currentColor'
                    stroke-width='2'
                    strokeLinecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-75'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'
            >
              <Menu.Items className='absolute right-0 z-10 mt-2 w-72 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                <div className='py-2 px-5'>
                  <h6 className='text-sm text-scBlack text-center mb-1 font-semibold'>
                    Meet Your Care Captain
                  </h6>
                  <p className='text-xs text-scBlack text-center'>
                    Your personal advocate, navigating all your healthcare
                    needs.
                  </p>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          <button className='ml-6 bg-dcGreen400 w-auto px-8 py-2 rounded-md text-dcBody2 flex items-center justify-center text-white'>
            connect
          </button>
        </div>
      </nav>
      <Dialog
        as='div'
        className='lg:hidden relative z-50'
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className='fixed inset-0' />
        <Dialog.Panel className=' z-9999 fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 '>
          <div className='flex items-center justify-between'>
            <Link href='/' className='-m-1.5 p-1.5'>
              <img
                className='h-16 w-auto'
                src='/assets/svgs/logo.svg'
                alt='Logo'
              />
            </Link>
            <button
              type='button'
              className='-m-2.5 rounded-md p-2.5 text-dcBlack100'
              onClick={() => setMobileMenuOpen(false)}
            >
              <XMarkIcon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
                <Link
                  href='/schedule'
                  className='-mx-3 block rounded-lg py-2 px-3 text-dcBody2 leading-7 text-dcBlack100 border-b border-scBlack100'
                >
                  schedule
                </Link>

                <Link
                  href='/visits'
                  className='-mx-3 block rounded-lg py-2 px-3 text-dcBody2 leading-7 text-dcBlack100 border-b border-scBlack100'
                >
                  visits
                </Link>
                <Disclosure
                  as='div'
                  className='-mx-3 border-b border-scBlack100'
                >
                  {({ open }) => (
                    <>
                      <Disclosure.Button className='flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base leading-7 hover:bg-gray-50'>
                        my health
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'rotate-180' : '',
                            'h-5 w-5 flex-none'
                          )}
                          aria-hidden='true'
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className='mt-2 space-y-2 px-5'>
                        {myHealthDropDown.map((item) => (
                          <Link
                            key={item.text}
                            href={item.link}
                            className='border-b border-scBlack100 py-4 block text-dcBody3 leading-6 text-scBlack'
                          >
                            {item.text}
                          </Link>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure
                  as='div'
                  className='-mx-3 border-b border-scBlack100'
                >
                  {({ open }) => (
                    <>
                      <Disclosure.Button className='flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base leading-7 hover:bg-gray-50'>
                        services
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'rotate-180' : '',
                            'h-5 w-5 flex-none'
                          )}
                          aria-hidden='true'
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className='mt-2 space-y-2 px-5'>
                        {servicesDropDown.map((item) => (
                          <Link
                            key={item.text}
                            href={item.link}
                            className='border-b border-scBlack100 py-4 block text-dcBody3 leading-6 text-scBlack'
                          >
                            {item.text}
                          </Link>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure
                  as='div'
                  className='-mx-3 border-b border-scBlack100'
                >
                  {({ open }) => (
                    <>
                      <Disclosure.Button className='flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base leading-7 hover:bg-gray-50'>
                        about dock.
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'rotate-180' : '',
                            'h-5 w-5 flex-none'
                          )}
                          aria-hidden='true'
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className='mt-2 space-y-2 px-5'>
                        {aboutDockDropDown.map((item) => (
                          <Link
                            key={item.text}
                            href={item.link}
                            className='border-b border-scBlack100 py-4 block text-dcBody3 leading-6 text-scBlack'
                          >
                            {item.text}
                          </Link>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
