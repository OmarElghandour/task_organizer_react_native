import { View, Text, StyleSheet, Label, Button } from 'react-native'
import React from 'react'
import { Stack, TextInput, IconButton } from "@react-native-material/core";
import { LinearGradient } from 'expo-linear-gradient';
// import { Text, View, TextInput, Button, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";
import CreateCategory from './CreateCategory';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useEffect} from 'react';

export default function NewTask({ navigation }) {

  const [indexes, setIndexes] = React.useState([]);
  const [categoroiesForms, setCategoroiesForms] = React.useState([]);
  const [counter, setCounter] = React.useState(0);
  // const { register, handleSubmit } = useForm();


  const addFriend = () => {
    setIndexes(prevIndexes => [...prevIndexes, counter]);
    setCounter(prevCounter => prevCounter + 1);
  };

  const removeFriend = index => () => {
    setIndexes(prevIndexes => [...prevIndexes.filter(item => item !== index)]);
    setCounter(prevCounter => prevCounter - 1);
  };

  const clearFriends = () => {
    setIndexes([]);
  };
  
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      firstName: '',
      lastName: ''
    }
  });
  const onSubmit = data => console.log(data);


  const addCategory = () => { 
    setCounter(prevCounter => prevCounter + 1);
    setCategoroiesForms(prevCategoroiesForms => [...prevCategoroiesForms, {index: counter}]);
  }

  useEffect(() => { 
    console.log("counter", counter);
  },
   [counter]);

   useEffect(() => {
    console.log("categoroiesForms", categoroiesForms);
   },
    [categoroiesForms]);


  const callback = (formValue) => {
    const categoroiesFormsValue = [...categoroiesForms];

    let curruntIndex = categoroiesFormsValue.find(form => (form.index === formValue.index));

    if (curruntIndex) {
      curruntIndex.value = formValue.value;
    }

    setCategoroiesForms(categoroiesFormsValue)

  }

  const categoroies = [{ name: 'Category A' }, { name: 'Category B' }, { name: 'Category C' }, { name: 'Category D' }]
  const styles = StyleSheet.create({
    container: {
      flex: 1,

    },

    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });
  return (
    <View>
      <Text>NewTask</Text>

      <TextInput
        label="Title"
        variant="standard"
      />

      <TextInput
        label="Description"
        variant="standard"
      />

      <Text style={{fontSize: 20}}>Category</Text>

      <View style={{
        justifyContent: 'space-between',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}>
        {categoroies.map(function (category) {
          return (
            <LinearGradient
              style={{
                margin: 20,
                padding: 30,
                fontSize: 20,
                borderRadius: 30,
              }}

              key={category.name}
              colors={['#00898a', '#08737f']}
              end={{ x: .2, y: .9 }}
            >
              <Text style={{ color: 'white' }}>
                {category.name}
              </Text>
            </LinearGradient>
          )
        })
        }
      </View>
       {
        
        // <Text>{categoroiesForms.length}</Text>
        categoroiesForms.map(function (category) {
          return (
            <View key={category.index}>
             <CreateCategory func={callback} index={category.index} />
            </View>
          )
        })
       }
         <Button onPress={addCategory} title='+ Add new category' style={{fontSize: 15}}> </Button>
    </View>    
  )
}