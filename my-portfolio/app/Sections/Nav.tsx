'use client';
import { Menu, X } from 'lucide-react';
import {
  KeyboardEvent,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Link } from 'react-scroll';

const NavItem = ({
  children,
  onClick,
}: PropsWithChildren<{
  onClick?: () => void;
}>) => (
  <button
    role='button'
    onClick={() => onClick && onClick()}
    className='mx-10 cursor-pointer text-inherit p-2 rounded-4xl transition-all '
    style={{ textDecoration: 'inherit' }}
  >
    {children}
  </button>
);

const Item = ({
  name,
  children,
  onClick,
}: PropsWithChildren<{
  name: string;
  onClick?: () => void;
}>) => {
  return (
    <Link
      spy
      activeClass='underline' // highlight active link
      smooth
      duration={400}
      to={name}
      className='cursor-pointer w-fit'
    >
      <NavItem onClick={onClick}>{children}</NavItem>
    </Link>
  );
};

const NavItems = ({ onClick }: { onClick?: () => void }) => (
  <>
    <Item onClick={onClick} name='home'>
      Home
    </Item>
    <Item onClick={onClick} name='about'>
      About
    </Item>
    <Item onClick={onClick} name='projects'>
      Projects
    </Item>
    <Item onClick={onClick} name='contact'>
      Contact
    </Item>
  </>
);
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (e: Event) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeMenu();
      }
      return;
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      // @ts-expect-error: addEventListener expects 'this' context, safe to ignore
      document.addEventListener('keydown', handleEsc);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
      // @ts-expect-error: addEventListener expects 'this' context, safe to ignore
      document.removeEventListener('keydown', handleEsc);
    }

    // Cleanup listener
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <>
      <div className='h-[57px] sm:block hidden' />
      <div className='fixed left-0 w-full'>
        <div className='bg-[#112D4E] py-2 justify-center hidden sm:flex font-bold m-auto border-b-1'>
          <NavItems />
        </div>
        <button
          onClick={toggleMenu}
          className='sm:hidden p-2 focus:outline-none cursor-pointer fixed right-4 top-4'
        >
          {isOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
        </button>
        {isOpen && (
          <div
            className='fixed items-center text-2xl top-0 right-0 w-full h-full bg-[#F9F7F7] pt-6 pr-6 flex flex-col text-black'
            ref={menuRef}
          >
            <button
              onClick={toggleMenu}
              className='self-end mb-4 focus:outline-none'
            >
              <X className='w-6 h-6 text-gray-700' />
            </button>
            <NavItems onClick={closeMenu} />
          </div>
        )}
      </div>
    </>
  );
};

export default Nav;
