import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import ExerciseCard from '../components/ExerciseCard';
import { IExercise } from '../interfaces/interfaces';
import axios from 'axios';
import ErrorCard from '../components/ErrorCard';

async function fetchDataByExerciseId(id: string) {
    try {
      // Make a request to your backend API
      const response = await axios.get(`https://your-backend-api.com/data/${id}`);
  
      // Process the response and extract the data
      const data = response.data;
  
      // Return the fetched data
      return data;
    } catch (error) {
      // Handle any errors that occur during the request
      throw new Error('Failed to fetch data due to technical reasons: ', error);
    }
}

const ExerciseScreen: React.FC<{exerciseId: string}> = ({exerciseId}) => {

    const [exerciseData, setExerciseData] = useState<IExercise | null>(null);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        fetchDataById();
    }, []);
    
    const fetchDataById = async () => {
        try {
            const data = await fetchDataByExerciseId(exerciseId);
            setExerciseData(data);
        } catch(error) {
            console.error('Error fetching exercise data: ', error)
            setErrorMessage(error)
        } finally {
            setLoading(false)
        }

    }  
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            {exerciseData === null ? 
            <ErrorCard errorMessage={errorMessage}/>
            : 
                <ExerciseCard
                    exerciseId={exerciseData.exerciseId}
                    exerciseImage={exerciseData.exerciseImage}
                    exerciseName={exerciseData.exerciseName}
                    exerciseDescription={exerciseData.exerciseDescription}
                    exerciseReps={exerciseData.exerciseReps}
                />
            }
        </SafeAreaView>
    );
};

export default ExerciseScreen;