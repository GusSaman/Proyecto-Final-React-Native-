import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react'
import { Alert, Image, StyleSheet, Switch, View } from 'react-native'
import Button from '../../components/Button';
import Input from '../../components/Input';
import { createTask, updateTask } from '../../services/api';
import { AuthContext } from '../../services/Context';

export const EditTask = () => {
    const { user,setUser,backPressed, setBackPressed } = useContext(AuthContext);
    const [tarea,setTarea] = useState('')
    const navigation = useNavigation()
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    useEffect(() => {
      setTarea(user.task.description)
    }, [])
    
    useEffect(() => {
      setBackPressed(false); // me aseguro de reinicializar el estado para q se pueda listar las tareas al regregar
    }, [])
    
    const volver = () => {
        setBackPressed(true);
        navigation.goBack();
    }
    const editar = () => {
        let d = {
            task_id:user.task.id,
            token:user.token,
            task: {"description": tarea}
        }
        updateTask(d).then(r=>{
            Alert.alert("Tarea editada con exito")
        })
    }

  return (
    <View >
      <View style={estiloEditTask.seccImg}>
        <Image 
          source={require('../../assets/images/elipse.png')}
        />
      </View>
      <View style={estiloEditTask.vista}>

        <View style={{marginBottom:10,marginTop:10,alignItems:'center'}}>
          <Input
            placeholder={"Agregar tarea"}
            name="tarea"
            text={tarea}
            changeText={setTarea}
          />
           <Switch
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </View>

        <View>

          <Button text={"Editar tarea"} pres={editar}/>
          <Button text={"volver"} pres={volver}/>

        </View>
      </View>

    </View>
  )


}
const estiloEditTask = new StyleSheet.create({
    vista:{
      width:"80%",
      marginTop:-100,
      alignSelf:'center'
     // margin:30
    },
    seccImg:{
      right:50,
      marginLeft:-40,
      marginTop:-90
    },
  });