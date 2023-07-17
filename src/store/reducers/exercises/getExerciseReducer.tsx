import { GET_EXERCISE_DATA, GET_EXERCISE_DATA_SUCCESS, GET_EXERCISE_DATA_FAILURE } from "../../actions/types";

// Define initial state
const initialState = {
    exerciseData: null,
    pastExercises: [],
    loading: false,
    error: null,
};

// Define the reducer function
const getExerciseReducer = (state = initialState, action: { type: string; payload: any; }) => {
    switch (action.type) {
      case GET_EXERCISE_DATA:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case GET_EXERCISE_DATA_SUCCESS:
        const exerciseToAdd = action.payload;
        const existingExercises = state.pastExercises;
        // Check if the exercise already exists in the list
        const isDuplicate = existingExercises.some(exercise => exercise.id === exerciseToAdd.id);
  
        if (isDuplicate) {
          return {
            ...state,
            exerciseData: action.payload,
            loading: false,
            error: null,
          };
        }
        // Add the new exercise to the list
        const newPastExercises = [...existingExercises, exerciseToAdd];
        
        // Limit the list to a maximum of 5 exercises
        if (newPastExercises.length > 5) {
          newPastExercises.splice(0, newPastExercises.length - 5);
        }
        return {
          ...state,
          pastExercises: newPastExercises,
          exerciseData: action.payload,
          loading: false,
          error: null,
        };
      
      case GET_EXERCISE_DATA_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
};

export default getExerciseReducer;