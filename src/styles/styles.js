import { Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ADD8E6',

    },

    TextTitles:{
      marginTop:80,
      fontSize:30,
      marginLeft:15
    },

    TextLabel:{
      justifyContent:"flex-start",
      fontSize:18,
      marginLeft:15,
      marginTop:8,
      marginBottom:10,

    },

    TextInput:{
      backgroundColor:'#FFF',
      height:35,
      width:'80%',
      color:'#00008B',
      borderRadius:7,
      marginLeft:15
    },

    ButtonCad:{
      backgroundColor:'#1E90FF',
      height:35,
      width:'80%',
      marginTop:35,
      marginLeft:'10%',
      borderRadius:7,
      fontSize: 14,
      fontWeight:'bold',
      justifyContent:"center",
      alignItems:"center"

    },
    ButtonText:{
      fontSize: 14,
      color: '#FFF',
      fontWeight:'bold',
    }

});

export default styles;