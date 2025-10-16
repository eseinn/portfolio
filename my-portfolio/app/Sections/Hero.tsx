import { H1 } from '@/app/Components';
import Image from 'next/image';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <>
      <H1>Welcome to my portfolio</H1>
      <div className='flex justify-between flex-col sm:flex-row m-auto'>
        <div className='m-auto space-y-2 sm:space-y-4'>
          <div className='sm:text-4xl text-2xl'>Hi!</div>
          <div>
            I´m
            <span className='font-bold text-2xl'> Einar Smári Einarsson</span>
          </div>
          <div>
            An experienced <span className=''>Full Stack Web Developer</span>{' '}
            based in Reykjavík, Iceland.
          </div>{' '}
          <br />
          <div className=''>
            <Link smooth duration={400} to='projects'>
              <button
                type='button'
                tabIndex={0}
                className='w-full sm:w-auto cursor-pointer bg-[#112D4E] transition-all border border-[#DBE2EF] focus:outline-none hover:bg-[#2567B0] focus:ring-4 focus:ring-gray-100 font-medium rounded-xl text-sm px-5 py-2.5 me-2  '
              >
                View Projects
              </button>
            </Link>
          </div>
        </div>
        <div className='sm:m-auto flex flex-col sm:items-center'>
          <Image
            src='/Einar_1.png'
            alt='hero image'
            className='rounded-xl'
            width={200}
            height={300}
          />
          <div className='border-2 p-4 space-y-2 rounded-xl mt-4 text-center'>
            <div className=' text-4xl text-nowrap'>8+ years</div>{' '}
            <div className='text-sm'>Experience in Web Development</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
