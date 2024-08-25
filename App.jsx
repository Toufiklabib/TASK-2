import { View, Text, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

const App = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [teams, setTeam] = useState(null);
  const [items, setItems] = useState([
    {label: 'Argentina', value: 'argentina'},
    {label: 'Brazil', value: 'brasil'},
    {label: 'Germany', value: 'germany'},
    {label: 'England', value: 'england'},
  ]);
  const argentinas = [
    { id: 1, name: 'Leo Messi', age: 37 },
    { id: 2, name: 'Di María', age: 37 },
    { id: 3, name: 'Lautaro Martinez', age: 37 },
    { id: 5, name: 'Rodrigo de Paul', age: 37 },
    { id: 6, name: 'Enzo Farnadez', age: 37 },
    { id: 7, name: 'Mac Alister', age: 37 },
    { id: 8, name: 'Lisandro Matrinez', age: 37 },
    { id: 9, name: 'Cristian Romero ', age: 37 },
    { id: 10, name: 'Nuhuel Molina', age: 37 },
    { id: 11, name: 'Emiliano Matrinez ', age: 37 },
  ];
  const brasils = [
    { id: 12, name: 'Neymar Jr', age: 37 },
    { id: 13, name: 'Raphinha', age: 37 },
    { id: 14, name: 'Rodrygo', age: 37 },
    { id: 21, name: 'Endrik', age: 37 },
    { id: 22, name: 'Lucas Paqueta', age: 37 },
    { id: 23, name: 'Gabriel', age: 37 },
    { id: 24, name: 'Danilo', age: 37 },
    { id: 25, name: 'Marquinhos', age: 37 },
    { id: 26, name: 'Éder Militao', age: 37 },
    { id: 27, name: 'Alisson Becker', age: 37 },
    { id: 28, name: 'Éderson', age: 37 },
  ];
  const germanys = [
    { id: 15, name: 'Thomas Mular', age: 37 },
    { id: 16, name: 'Antonio Rüdiger', age: 37 },
    { id: 17, name: 'Joshua Kimmich', age: 37 },
  ];
  const englands = [
    { id: 18, name: 'Phil Foden', age: 37 },
    { id: 19, name: 'Cole Palmar', age: 37 },
    { id: 20, name: 'Harry Kane', age: 37 },
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
     else{
      setTeam('');
     }
  };

  useEffect(() => {
    if (value) {
      handleValueChange(value);
    }
  },[value] );

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
        placeholder="Select Your Favorite Team"
      />
       {
        teams && (
          <Text  style={styles.selecttam} >Your Team {value}</Text>
        )
       }


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
     marginTop:15,
     marginBottom:140,
     marginLeft:15,
     marginRight:15,
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
   heading:{
       color: 'black',
       fontSize:25,
       textAlign:'center',
   },
   selecttam:{
    color: 'black',
    fontSize:25,
    textAlign:'center',
     textTransform: 'uppercase',
   },

});

export default App;



