import { gql, useQuery } from '@apollo/client';
import { MainPage } from './pages/MainPage';

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`;

interface Lesson {
  id: string;
  title: string;
}

function App() {
  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY);
  return (
    <div>
      <MainPage />
      {/* {data?.lessons.map((lesson) => (
        <span key={lesson.id}>{lesson.title}</span>
      ))} */}
    </div>
  );
}

export default App;
