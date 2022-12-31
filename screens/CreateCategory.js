import { Text, View, TextInput, Button } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useEffect , useState } from "react";


export default function CreateCategory(props) {

    const [value, setValue] = useState('');
    const [indexes, setIndexes] = useState([]);

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
          firstName: '',
          lastName: ''
        }
      });
      const onSubmit = data => console.log(data);
      const Tab = createMaterialBottomTabNavigator();
      
      useEffect(() => {
        props.func(value);
        // console.log("value", value);
       }, 
      [value]);
      function onValueChange(formValue) {
        setValue({value: formValue, index: props.index});
      } 

  return (
    <View>
      <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: {  } }) => (
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={(value) => onValueChange(value)}
            value={value}
          />
        )}
        name="firstName"
      />
      {errors.firstName && <Text>This is required.</Text>}

    </View>
  )
}