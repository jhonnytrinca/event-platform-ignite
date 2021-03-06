import { CheckCircle, Lock } from 'phosphor-react';
import { isPast, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Link, useParams } from 'react-router-dom';
import { sidebarProps } from '../Header';
import { isNotMobile } from '../../pages/MainPage';

interface LessonProps extends sidebarProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class';
}

export const Lesson = ({
  title,
  slug,
  availableAt,
  type,
  setSidebarOpen
}: LessonProps) => {
  const isLessonAvailable = isPast(availableAt);
  const availableDate = format(availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: ptBR
  });
  const { slug: slugParam } = useParams<{ slug: string }>();
  const isActiveLesson = slugParam === slug;

  return (
    <Link
      to={`/event/lesson/${slug}`}
      className='group'
      onClick={() => !isNotMobile && setSidebarOpen((prev: boolean) => !prev)}
    >
      <span className='text-gray-300'>{availableDate}</span>
      <div
        className={`rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 ${
          isActiveLesson && 'bg-green-500'
        }`}
      >
        <header className='flex items-center justify-between'>
          {isLessonAvailable ? (
            <span
              className={`text-sm text-blue-500 font-medium flex items-center gap-2 ${
                isActiveLesson && 'text-white'
              }`}
            >
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className='text-sm text-orange-500 font-medium flex items-center gap-2'>
              <Lock size={20} />
              Em breve
            </span>
          )}

          <span
            className={`text-xs rounded px-2 py-[0.125rem] text-white border border-blue-300 font-bold uppercase ${
              isActiveLesson && 'border-white'
            }`}
          >
            {type === 'live' ? 'Ao vivo' : 'Aula prática'}
          </span>
        </header>
        <strong
          className={`text-gray-200 mt-5 block ${
            isActiveLesson && 'text-white'
          }`}
        >
          {title}
        </strong>
      </div>
    </Link>
  );
};
