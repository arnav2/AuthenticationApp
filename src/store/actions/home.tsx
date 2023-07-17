import { Dispatch } from 'redux';
import homeData from '../../assets/data/workoutData';
import { RootState } from '../reducers/index';
import { SET_USER_DATA } from './types';

// const getFeedData = (data: any) => {
//     return async (dispatch: Dispatch) => {
//         dispatch({
//             type: actions.GET_FEED_DATA,
//             payload: data,
//         });
//     };
// };

const setUserData = (data: any) => {
    return async (dispatch: Dispatch) => {
        dispatch({
            type: SET_USER_DATA,
            payload: data,
        });
    };
};

// const setHomeData = (selectID: number, workoutDifficulty: string) => {
//     return async (dispatch: Dispatch, getState: () => RootState) => {
//         const filterFeedData = homeData.filter(
//             (item) => item.workoutDifficulty === workoutDifficulty,
//         );

//         const subDataState = getState().home.subData;

//         const filterSubData = subDataState.map((element) => {
//         if (element.id === selectID) {
//             return { ...element, selected: true };
//         } else {
//             return { ...element, selected: false };
//         }
//         });

//         // getFeedData(filterFeedData);
        
//         dispatch({
//             type: SET_SUBCATEGORY_DATA,
//             payload: filterSubData,
//         });
        
//         dispatch({
//             type: SET_SELECT_ID,
//             payload: selectID,
//         });
//     };
// };

// const resetCategoryData = () => {
//     return async (dispatch: Dispatch) => {
//         dispatch({
//             type: SET_SELECT_ID,
//             payload: 0,
//         });
//         dispatch({
//             type: RESET_FEED_DATA,
//             payload: true,
//         });
//     };
// };

export const homeActions = {
    // getFeedData,
    // setHomeData,
    // resetCategoryData,
    setUserData,
};
