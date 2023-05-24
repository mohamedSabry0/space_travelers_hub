import { configureStore } from '@reduxjs/toolkit';
import missionSlice from './mission/missionSlice';
import rocketsReducer from './rockets/rocketsSlice';

const store = configureStore({
  reducer: {
    mission: missionSlice,
    rockets: rocketsReducer,
  },
});

export default store;

// export default configureStore({
//   reducer: {
//     books: booksReducer,
//     categories: categoriesReducer,
//   },
// });
