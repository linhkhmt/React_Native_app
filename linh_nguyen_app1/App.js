/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { Component } from 'react';
 import type {Node} from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,Button
 } from 'react-native';
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 
 
 class TrigerComponent extends Component{
   render(){
     return (
       <View style={styles.triger}>
       <Button color='#2E61D7' onPress={this.props.updateCount} title="Update">Update
         </Button>
         </View>
     );
   }
 }
 class TextCounterComponent extends Component{
   
   render(){
     return (
 <View>
 <Text style={styles.message}>{this.props.mes}</Text>
   <Text style={styles.couter}>{this.props.counter}</Text>
 </View>
     );
 
   }
 }
 
 class App extends Component {
   message="Hi, I am Linh"
   constructor(props){
     super(props);
     this.sate={counter:0}
   }
   // isDarkMode = useColorScheme() === 'dark';
 
   // ackgroundStyle = {
   //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
   // };
   updateCount(){
     this.sate.counter++
     this.setState({counter:this.sate.counter})
     console.log(this.sate.counter)
   }
 render(){
   return (
     <View>
       <TextCounterComponent mes={this.message} counter={this.sate.counter}></TextCounterComponent>
       {/* <Button type="button" title="ahihi" onPress={()=>this.updateCount()}>ahihi</Button> */}
       {/* <Text>{this.sate.counter}</Text> */}
       <TrigerComponent updateCount={this.updateCount.bind(this)}></TrigerComponent>
     </View>
   )
 }
 };
 
 const styles = StyleSheet.create({
   message: {
     marginTop:100,
     padding: 40,
     backgroundColor:"#C6D4F4",
     textAlign:'center',
     fontSize:30,
     // color:''
 
   },
   couter: {
     marginTop:50,
     marginBottom:50,
     fontSize: 24,
     borderRadius:100,
     marginLeft:100,
     marginRight:100,
     padding:60,
     backgroundColor:'#8DA9E9',
     textAlign:'center',
     fontSize:50,
     color:'blue'
   },
   triger: {
     marginTop: 20,
     fontSize: 18,
     padding:20,
     fontWeight: '400',
     backgroundColor:'#D9E2F8',
     color:'black'
   },
   highlight: {
     fontWeight: '700',
   },
 });
 
 export default App;
 