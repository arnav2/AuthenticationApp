export interface LibraryState {
  routineLibrary: any[]; // Define the actual type for routineLibrary
}

const INITIAL_STATE: LibraryState = {
  routineLibrary: [],
};

const libraryReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    // case SET_EXERCISE_LIBRARY:
    //   return { ...state, routineLibrary: action.payload };
    default:
      return state;
  }
};

export default libraryReducer;