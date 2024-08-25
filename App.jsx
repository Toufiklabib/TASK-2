import { View, Text, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

const App = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [teams, setTeam] = useState(null);
  const [items, setItems] = useState([
    {label: 'Argentina', value: 'argentina'},
    {label: 'Brasil', value: 'brasil'},
    {label: 'Germany', value: 'germany'},
    {label: 'England', value: 'england'},
  ]);
  const argentinas = [
    { id: 1, name: 'Leo Messi', age: 37 },
    { id: 2, name: 'Di María', age: 37 },
    { id: 3, name: 'Paredes', age: 37 },
  ];
  const brasils = [
    { id: 4, name: 'Neymar Jr', age: 37 },
    { id: 5, name: 'Raphinha', age: 37 },
    { id: 6, name: 'Vini Js', age: 37 },
  ];
  const germanys = [
    { id: 7, name: 'Thomas Mular', age: 37 },
    { id: 8, name: 'Antonio Rüdiger', age: 37 },
    { id: 9, name: 'Joshua Kimmich', age: 37 },
  ];
  const englands = [
    { id: 7, name: 'Phil Foden', age: 37 },
    { id: 8, name: 'Cole Palmar', age: 37 },
    { id: 9, name: 'Harry Kane', age: 37 },
  ];

  // Function to handle value change
  const handleValueChange = (team) => {
    console.log('Selected value:', team);
     if(team === 'argentina')
     {
        setTeam(argentinas);
     }
     else if (team === 'brasil') {
      setTeam(brasils);
     }
     else if (team === 'germany') {
      setTeam(germanys);
     }
     else if (team === 'england') {
      setTeam(englands);
     }
  };

  useEffect(() => {
    if (value) {
      handleValueChange(value);
    }
  }, [value]);

  return (
    <View style={styles.continer} >
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        style={styles.dropDown}
      />
      {
        teams && teams.map(player=>(
          <View  key={player.id} >
           <Text style={styles.text}  >{player.name}</Text>
          </View>
        ))

      }
    </View>
  );
};

const styles = StyleSheet.create({
   dropDown :{
    width:380,
    margin: 15,
     backgroundColor: 'orange',
     color: 'white',
     fontWeight: 'bold',
   },
   continer :{
     marginBottom :500,
   },
   text:{
       backgroundColor:'skyblue',
       fontSize:20,
       padding:10,
       margin:5,
       textAlign:'center',
       color:'black',
       borderRadius:8,
   },
});

export default App;

