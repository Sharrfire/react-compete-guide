import config from '../config';

import CourseGoalsSection from '../components/CourseGoalsSection';
import ExpenseSection from '../components/ExpensesSection';
import FoodOrderSection from '../components/FoodOrderSection';
import AuthenSection from '../components/AuthenSection';
import MovieSection from '../components/MovieSection';
import UserSection from '../components/UserSection';
import ReduxSection from '../components/ReduxSection';

const publicRoutes = [
  // { name: 'course', path: config.routes.course, component: CourseGoalsSection },
  { name: 'expense', path: config.routes.expense, component: ExpenseSection },
  { name: 'food', path: config.routes.food, component: FoodOrderSection },
  { name: 'movie', path: config.routes.movie, component: MovieSection },
  { name: 'redux', path: config.routes.redux, component: ReduxSection },
  // { name: 'authen', path: config.routes.authen, component: AuthenSection },
  // { name: 'user', path: config.routes.user, component: UserSection },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
