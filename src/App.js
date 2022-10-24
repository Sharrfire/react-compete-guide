import { Routes, Route } from 'react-router-dom';
import './App.css';
import AuthenSection from './components/AuthenSection';
import CourseGoalsSection from './components/CourseGoalsSection';
import ExpenseSection from './components/ExpensesSection';
import UserSection from './components/UserSection';

function App() {
  return (
    <div className=''>
      <Routes>
        <Route path='/authen' element={<AuthenSection />} />
        <Route path='/user' element={<UserSection />} />
        <Route path='/course' element={<CourseGoalsSection />} />
        <Route path='/expense' element={<ExpenseSection />} />
      </Routes>
    </div>
  );
}

export default App;
