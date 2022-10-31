import config from '../config';

import AuthenSection from '../components/AuthenSection';
import UserSection from '../components/UserSection';
import CourseGoalsSection from '../components/CourseGoalsSection';
import ExpenseSection from '../components/ExpensesSection';
import FoodOrderSection from '../components/FoodOrderSection';
import MovieSection from '../components/MovieSection';

const publicRoutes = [
  { name: 'authen', path: config.routes.authen, component: AuthenSection },
  { name: 'course', path: config.routes.course, component: CourseGoalsSection },
  { name: 'expense', path: config.routes.expense, component: ExpenseSection },
  { name: 'food', path: config.routes.food, component: FoodOrderSection },
  { name: 'user', path: config.routes.user, component: UserSection },
  { name: 'movie', path: config.routes.movie, component: MovieSection },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
