import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Sidebar, Header, Video } from '../components';

export const isNotMobile = window.innerWidth >= 1024;
//1024px lg breakpoint on Tailwind

export const MainPage = () => {
  const { slug } = useParams<{
    slug: string;
  }>();
  const [sidebarOpen, setSidebarOpen] = useState(isNotMobile);

  useEffect(() => {
    setSidebarOpen(isNotMobile);
  }, []);

  return (
    <div className='flex flex-col min-h-screen relative'>
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className='flex flex-1'>
        {slug ? <Video lessonSlug={slug} /> : <div className='flex-1'></div>}
        {sidebarOpen ? (
          <div className='absolute lg:static w-full lg:w-auto z-50'>
            <Sidebar setSidebarOpen={setSidebarOpen} />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
