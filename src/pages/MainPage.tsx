import { useParams } from 'react-router-dom';
import { Sidebar, Header, Video } from '../components';

export const MainPage = () => {
  const { slug } = useParams<{
    slug: string;
  }>();

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <div className='flex flex-1'>
        {slug ? <Video lessonSlug={slug} /> : <div className='flex-1'></div>}
        <Sidebar />
      </div>
    </div>
  );
};
