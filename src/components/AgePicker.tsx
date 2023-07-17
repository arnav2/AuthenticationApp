import React from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export enum AgeEnum {
    TEEN = 'Teens (12 - 18)',
    YOUNGADULTS = 'Young Adults (18 - 40)',
    ADULTS = 'Adult (40-65)',
    SENIOR = 'Senior (65+)',
}

interface AgePickerProps {
    selectedAge: string | undefined;
    onAgeChange: (selectedAge: string) => void;
    pickerText: string;
    pickerLabel: string;
  }

const AgePicker: React.FC<AgePickerProps> = ({selectedAge, onAgeChange, pickerText, pickerLabel}) => {

  const handleAgeChange = (itemValue: string) => {
    onAgeChange(itemValue);
  };

  return (
    <View>
      <Text>{pickerText}</Text>
      <Picker
        selectedValue={selectedAge}
        onValueChange={handleAgeChange}
      >
        <Picker.Item label={pickerLabel} value="" />
        {Object.values(AgeEnum).map((ageOption) => (
          <Picker.Item
            key={ageOption}
            label={ageOption}
            value={ageOption}
          />
        ))}
      </Picker>
    </View>
  );
};

export default AgePicker;