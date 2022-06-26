import { List, X } from 'phosphor-react';
import { Dispatch, SetStateAction } from 'react';
import { Logo } from '../../assets/Logo';

export interface sidebarProps {
  sidebarOpen?: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

export const Header = ({ sidebarOpen, setSidebarOpen }: sidebarProps) => {
  return (
    <header className='w-full py-5 px-4 flex items-center justify-between lg:justify-center bg-gray-700 border-b border-gray-600'>
      <Logo />
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className='flex lg:hidden items-center gap-2'
      >
        Aulas
        {sidebarOpen ? <X size={32} /> : <List size={32} />}
      </button>
    </header>
  );
};
