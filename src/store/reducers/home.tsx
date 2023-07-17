import homeData from '../../assets/data/workoutData';
import subCategories from '../../assets/data/subCategories';

export interface HomeState {
  feedData: any[]; // Define the actual type for feedData
  subData: ReadonlyArray<any>; // Define the actual type for subData
  selectID: number;
  userData: any; // Define the actual type for userData
}

const INITIAL_STATE: HomeState = {
  feedData: homeData,
  subData: subCategories,
  selectID: 0,
  userData: {}
};

const homeReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    // case GET_FEED_DATA:
    //   return { ...state, feedData: action.payload };
    // case SET_USER_DATA:
    //   return { ...state, userData: action.payload };
    // case SET_SUBCATEGORY_DATA:
    //   return { ...state, subData: action.payload };
    // case SET_SELECT_ID:
    //   return { ...state, selectID: action.payload };
    // case SET_HOME_DATA:
    //   return { ...state, selectID: action.payload };
    // case RESET_FEED_DATA:
    //   return { ...state, feedData: homeData, subData: subCategories };
    default:
      return state;
  }
};

export default homeReducer;
