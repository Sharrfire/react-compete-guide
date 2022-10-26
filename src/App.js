import { Routes, Route } from 'react-router-dom';
import './App.css';
import AuthenSection from './components/AuthenSection';
import CourseGoalsSection from './components/CourseGoalsSection';
import ExpenseSection from './components/ExpensesSection';
import FoodOrderSection from './components/FoodOrderSection';
import UserSection from './components/UserSection';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/authen' element={<AuthenSection />} />
        <Route path='/user' element={<UserSection />} />
        <Route path='/course' element={<CourseGoalsSection />} />
        <Route path='/expense' element={<ExpenseSection />} />
        <Route path='/food' element={<FoodOrderSection />} />
      </Routes>
    </div>
  );
}

export default App;
