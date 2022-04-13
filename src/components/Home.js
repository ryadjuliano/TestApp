import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  StatusBar,
  View,
  SafeAreaView,
  RefreshControl,
} from 'react-native';

const Home = ({navigation}) => {
  const [refreshing, setRefreshing] = React.useState(false);

  const [dataWeather, setWeather] = useState([]);
  const [timezones, settimezone] = useState();
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();
  const [pressure, setpressure] = useState();
  const [humidity, sethumidity] = useState();
  const [wind_speed, setwind_speed] = useState();
  
  const getOpenWeather = async () => {
    // return fetch('https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=6610a72937e73529483a4013e6c23f73')
    //   .then((response) => response.json())
    //   .then((json) => {
    //       console.log(json)
    //     return json;
    //   })
    //   .catch((error) => {    
    //     console.error(error);
    //   });

    const response = await fetch('https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=6610a72937e73529483a4013e6c23f73');
    const json = await response.json();
 
    settimezone(json.timezone)
    setLat(json.lat)
    setLon(json.lon)
    setpressure(json.current.pressure)
    sethumidity(json.current.humidity)
    setwind_speed(json.current.wind_speed)
    setWeather(json.current.weather)
    // console.log(json.weather)  

    //   this.setState({ data: json.movies });
  }

  const list = () => {
    
    return dataWeather.map((element) => {
      return (
        <View style={{width:"100%", height:100, backgroundColor:'white', borderRadius:10, borderColor:'#8b8b8b',borderWidth:0.5}}>

        <View style={{marginHorizontal:16,marginTop:10,}}>
            <Text>ID : {element.id}</Text>
            <Text>Main :{element.main}</Text>
            <Text>Description : {element.description}</Text>
        </View>
      </View>
      )
    })}
//   const CallData
  useEffect( () => {
    getOpenWeather()
  })
    // 
    // console.log()




  return (
    // <LinearGradient colors={['#67c3c0', '#83cecc', '#9fd9d7']} style={styles.linearGradient}>

    <View style={styles.container}>
        
    <View style={{marginBottom:10,marginTop:10,flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',}}>

        <View style={{width:300, height:150, backgroundColor:'skyblue'}}>
            <View>
                <Text style={{fontSize:24, textAlign:'center',paddingTop:50}}>
                {timezones}
                </Text> 
            </View>
        </View>

    </View>

      <View style={{marginHorizontal:8}}>

          <View style={{flexDirection:'row', justifyContent:'space-between',}}>
              <View style={{width:70, height:70, backgroundColor:'powderblue',}}>
              <View>
                <Text style={{fontSize:18, textAlign:'center',}}>
                lat
                </Text>
                <Text style={{fontSize:18, textAlign:'center',}}>
                {lat}
                </Text>
            </View>
              </View>
              <View style={{width:70, height:70, backgroundColor:'yellow'}}>
              <View>
                <Text style={{fontSize:18, textAlign:'center',}}>
                lon
                </Text>
                <Text style={{fontSize:18, textAlign:'center',}}>
                {lon}
                </Text>
            </View>
            </View>
            <View style={{width:70, height:70, backgroundColor:'powderblue'}}>
            <View>
                <Text style={{fontSize:18, textAlign:'center',}}>
                pressure
                </Text>
                <Text style={{fontSize:18, textAlign:'center',}}>
                {pressure}
                </Text>
            </View>
            </View>
            <View style={{width:70, height:70, backgroundColor:'green'}}>
            <View>
                <Text style={{fontSize:18, textAlign:'center',}}>
                humidity
                </Text>
                <Text style={{fontSize:18, textAlign:'center',}}>
                {humidity}
                </Text>
            </View>
            </View>
            <View style={{width:70, height:70, backgroundColor:'gray'}}>
            <View>
                <Text style={{fontSize:18, textAlign:'center',}}>
                Wind Speed
                </Text>
                <Text style={{fontSize:18, textAlign:'center',}}>
                {wind_speed}
                </Text>
            </View>
            </View>

          </View>

      <View style={{paddingTop:10,}}>
         {list()}
      </View>


      </View>

     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',

    // margin:5,
    // paddingVertical:20,
    // marginTop:5,
    backgroundColor: '#f4fbfa',
    // paddingBottom: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

export default Home;
