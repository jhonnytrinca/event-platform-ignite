import { Sidebar, Header, Video } from '../components';

export const MainPage = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <div className='flex flex-1'>
        <Video />
        <Sidebar />
      </div>
    </div>
  );
};
