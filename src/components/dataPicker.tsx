import React, { useState } from 'react';
import {View, Button, StyleSheet, Platform, Text, TouchableOpacity} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DataPicker = ({saveHandler}) => {
    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [dataChanged, setDataChanget] = useState(false);

    const handleDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowDatePicker(Platform.OS === 'ios');
        setDate(currentDate);
        saveHandler(date.toLocaleDateString())
        setDataChanget(true)
    };

    const showDatepicker = () => {
        setDataChanget(prevState => !prevState)
        setShowDatePicker(true);
    };

    return (
        <View style={styles.container}>
         <TouchableOpacity>
             <Text style={{fontSize: 12,
                 color: 'gray',
                 fontWeight: '400'}} onPress={showDatepicker}>{!dataChanged ? 'Установить дедлайн' : 'Изменить дедлайн'} </Text>
         </TouchableOpacity>
            {showDatePicker && (
                <DateTimePicker
                    value={date}
                    mode="date"
                    display="default"
                    onChange={handleDateChange}
                />
            )}
            <Text style={{ color: 'gray', marginTop: 10 }}>До: {date.toLocaleDateString()}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
});

export default DataPicker;
