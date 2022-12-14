import { View, Text, TextInput, StyleSheet, Dimensions, Alert, Pressable, Image, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import RadioGroup from 'react-native-radio-buttons-group'
// import RadioForm,{RadioButton,RadioButtonInput,RadioButtonLabel} from 'react-native-simple-radio-button';
import { RadioButton } from 'react-native-paper';
import Svg, {Path} from 'react-native-svg';

import PropTypes from 'prop-types';
import React from 'react';
import {fontSize} from '~utils';

// const BirthdayContent = ({width, height, style}) => {
//   return (
//     <Svg
//       style={style}
//       width={width}
//       height={height}
//       viewBox="0 0 24 24"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg">
//       <Path
//         fillRule="evenodd"
//         clipRule="evenodd"></Path>
//   )
// }
const width = Dimensions.get('window').width; //dimensions, ekran boyutunu almaya yarar.
const height = Dimensions.get('window').height;

////17-18-19.Gün (Register)
const radioButtonsData = [
  {
    id: '1',
    label: 'Erkek',
    value: 'Erkek',
  },
  {
    id: '2',
    label: 'Kadın',
    value: 'Kadın',
  },
  {
    id: '3',
    label: 'Belirtmek İstemiyorum',
    value: 'Belirtmek İstemiyorum',
  }
];
export default function App(){
  const [radioButtons, setRadioButtons] = useState(radioButtonsData);
  function onPressRadioButton(radioButtonsArray){
    setRadioButtons(radioButtonsArray);
  }
  const [checked, setChecked] = React.useState('first');

  return(
    <View>
           <View style={styles.binIn}>

             <View>
               <Text   style={styles.binText}>BİN</Text>
             </View>
            
             <View style={styles.inBackground}>
               <Text   style={styles.inText}>İN</Text>
             </View>
          
           </View>
    
           <Text style={styles.nameSurnameText}>İsim soyisim</Text>
           <TextInput style={styles.nameSurname}>
              <Image color={'#656F77'} source={require('./Message.png')}></Image>
              <Text style={styles.inputText}>   Turgut Kurt</Text>
           </TextInput>

          <Text style={styles.mailText}>E-mail adresiniz</Text>
          <TextInput style={[styles.mailBox, {paddingLeft:15}]}>
            <Image source={require('./Message.png')}></Image>
            <Text style={styles.inputText}>   turgut@softcand.com</Text>
          </TextInput>

          <Text style={styles.dateOfBirthText}>Doğum Tarihi</Text>
          <TextInput style={[styles.dateOfBirthBox,  {paddingLeft:15}]}>
            <Image color={'#656F77'} source={require('./Message.png')}></Image>
            <Text style={styles.inputText}>   18 Ocak 1993</Text>
          </TextInput>

        <Text style={styles.radioButtonText}>Cinsiyetiniz</Text>
        <View style={{position:'absolute',top:height/100*54,left: width/100*6.33, flexDirection:'row'}}>
           <RadioButton 
              color='#3F3D56'
              value='first'
              status={checked ==='first'? 'checked' : 'unchecked'}
              onPress={()=>Alert.alert('Butona Tıklandı')}
           ></RadioButton>
           <Text style={{marginTop:10,fontSize:12,fontWeight:'300',color:'#596475'}}>Erkek    </Text>
        
           <RadioButton 
              color='#3F3D56'
              value='second'
              status={checked ==='second'? 'checked' : 'unchecked'}
              onPress={()=>Alert.alert('Butona Tıklandı')}
           ></RadioButton>
           <Text style={{marginTop:10,fontSize:12,fontWeight:'300',color:'#596475'}}>Kadın    </Text>
        
           <RadioButton 
              color='#3F3D56'
              value='third'
              status={checked ==='third'? 'checked' : 'unchecked'}
              onPress={()=>Alert.alert('Butona Tıklandı')}
           ></RadioButton>
           <Text style={{marginTop:10,fontSize:12,fontWeight:'300',color:'#596475'}}>Belirtmek istemiyorum</Text>
        
        </View>
          
          
          
           {/* <Text style={styles.radioButtonText}>Cinsiyetiniz</Text>
            <View style={styles.radioButtonBox}>
              <RadioGroup
                radioButtons={radioButtons}
                onPress={onPressRadioButton}
                layout='row'
              />
            </View> */}

           

      {/* <View position={'absolute'} top={height/100*54}>
        <RadioForm
          formHorizontal={true}
          animation={false}
        >
          {
            radio_props.map((obj, i) => (
              <RadioButton labelHorizontal={true} key={i} >
                <RadioButtonInput
                  obj={obj}
                  index={i}
              
                  borderWidth={1}
                  buttonInnerColor={'#ffffff'}
                  buttonOuterColor={'#656F77'}
                  buttonSize={1}
                  buttonOuterSize={15}
                  buttonStyle={{}}
                />
                <RadioButtonLabel
                  obj={obj}
                  index={i}
                  labelHorizontal={true}
                 
                  labelStyle={{ fontSize: 16, color: '#656F77' }}
                  labelWrapStyle={{}}
                />
              </RadioButton>
            ))
          }
        </RadioForm>
      </View> */}

           <Text style={styles.passwordText}>Şifreniz</Text>
           <TextInput style={[styles.passwordBox,  {paddingLeft:20}]}>
           <Image color={'#656F77'} source={require('./Lock.png')}></Image>
           <Text style={styles.inputText}>   ****************</Text>
           </TextInput>
        
        <View style={{position:'absolute',top:height/100*72.29,left: width/100*6.13, flexDirection:'row'}}>
           <RadioButton 
              color='#3F3D56'
              value='first'
              status={checked ==='first'? 'checked' : 'unchecked'}
              onPress={()=>Alert.alert('Butona Tıklandı')}
           ></RadioButton>
           <Text style={{marginTop:10,fontSize:12,fontWeight:'300',color:'#596475'}}>Gizlilik sözleşmesini okudum, onaylıyorum</Text>
        </View>
        
           <Pressable
            style={styles.button}
            onPress={() => Alert.alert('Butona Tıklandı')}>
            <Text style={styles.buttonText}>Üye Ol</Text>
          </Pressable>
    
          <View style={styles.accountRegisterDiv}>
            <Text style={styles.account}>Hesabınız var mı?</Text>
            <Text style={styles.register}> Giriş Yap</Text>
          </View> 
    </View>
      
    
  )
}

const styles= StyleSheet.create({
  binIn: {
    paddingTop:15,
    paddingBottom:13,
    height: 110,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  binText: {
    fontFamily:'AkayaTelivigala-Regular',
    fontSize: 60,
    fontWeight: '400',
    //textAlign: 'center',
    color: '#3F3D56',
  },
  inText: {
    fontFamily:'AkayaTelivigala-Regular',
    fontSize: 60,
    fontWeight: '400',
    //textAlign: 'center', ->ortalama için denendi gereksiz
    color: '#ffffff',
  },
  inBackground:
  {
    backgroundColor: '#3F3D56',
    
  },
  inputText:{
    fontWeight:'400',
    fontSize:16,
    marginLeft:10,
  },
  nameSurnameText:{
    fontWeight:'400',
    color: '#656F77',
    position: 'absolute',
    left: width / 100 * 5.6,
    top: height / 100 * 15.15,
    fontSize: 14,
  },
  nameSurname:{
    paddingLeft:15,
    paddingBottom:17,
    borderWidth: 1,
    borderColor: '#656F77',
    width: 335,
    height: 51,
    marginTop: 5,
    borderRadius: 36,
    position: 'absolute',
    left: (width - 335) / 2,
    right: (width - 335) / 2,
    top: height / 100 * 18.72,
  },
  mailText: {
    fontWeight:'400',
    color: '#656F77',
    position: 'absolute',
    left: width / 100 * 5.6,
    top: height / 100 * 27.09,
    fontSize: 14,
  },
  dateOfBirthText:{
    fontWeight:'400',
    color: '#656F77',
    position: 'absolute',
    left: width / 100 * 5.6,
    top: height / 100 * 39.04,
    fontSize: 14,
  },
  passwordText: {
    position: 'absolute',
    left: width / 100 * 5.6,
    top: height / 100 * 59.73,
    fontSize: 14,
  },
  radioButtonText:{
    fontWeight:'400',
    color: '#656F77',
    position: 'absolute',
    left: width / 100 * 5.6,
    top: height / 100 * 51,
    fontSize: 14,
  },
  dateOfBirthBox:{
    borderWidth: 1,
    borderColor: '#656F77',
    width: 335,
    height: 51,
    marginTop: 5,
    borderRadius: 36,
    position: 'absolute',
    left: (width - 335) / 2,
    right: (width - 335) / 2,
    top: height / 100 * 42.61,
  },
  mailBox: {
    borderWidth: 1,
    borderColor: '#656F77',
    width: 335,
    height: 51,
    marginTop: 5,
    borderRadius: 36,
    position: 'absolute',
    left: (width - 335) / 2,
    right: (width - 335) / 2,
    top: height / 100 * 30.67,
  },
  radioButtonBox:{
    width:width,
    height:20,
    paddingRight:20,
    position: 'absolute',
    left: 15,
    right: (width - 335) / 2,
    top: height / 100 * 54, 
  },
  radioButton:{
    color:'#ffffff',

  },
  passwordBox: {
    borderWidth: 1,
    borderColor: '#656F77',
    width: 335,
    height: 51,
    marginTop: 5,
    borderRadius: 36,
    position: 'absolute',
    left: (width - 335) / 2,
    right: (width - 335) / 2,
    top: height / 100 * 63.3,
  },
  button: {
    width: 335,
    height: 51,
    backgroundColor: '#ffffff',
    borderColor:'#3F3D56',
    borderWidth:2,
    borderRadius: 60,
    position: 'absolute',
    left: (width - 335) / 2,
    right: (width - 335) / 2,
    top: height / 100 * 78,
    justifyContent: 'center',
    //shadowColor:'black', //28 ve üstü api ler için
    elevation:8, //api 28 altı olan device lar için gölge vermede kullanılan komut
  },
  buttonText: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20,
    color: '#3F3D56',
  },

  forgotPassword: {
    width: 169,
    color: '#3F3D56',
    fontSize: 20,
    position: 'absolute',
    left: (width - 169) / 2,
    top: height / 100 * 60.22,
  },

  accountRegisterDiv: {
    width: 215,
    height: 43,
    position: 'absolute',
    left: (width - 215) / 2,
    top: height / 100 * 87.6,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  account: {
    color: '#656F77',
    fontSize: 14,

  },
  register: {
    color: '#3F3D56',
    fontSize: 16,
    fontWeight: '600',
  },

});
































// //// 13-14-15-16. GÜNLER 

// export default function App() {
//   const [PASS, setPASS] = useState('1234')
//   const [MAIL, setMAIL] = useState('xyz@gmail.com')

//   return (
//     <View>
//       <View style={styles.binIn}>

//         <View>
//           <Text   style={styles.binText}>BİN</Text>
//         </View>

        
//         <View style={styles.inBackground}>
//           <Text   style={styles.inText}>İN</Text>
//         </View>
        

//       </View>

//       {/* 
//       <TextInput placeholder='turgut@softcand.com' placeholderTextColor={'#272727'} style={styles.mailBox}></TextInput>

//       <TextInput placeholder='**************' placeholderTextColor={'#272727'} style={styles.passwordBox}></TextInput>

//       <Pressable
//         style={styles.button}
//         onPress={() => Alert.alert('Butona Tıklandı')}>
//         <Text style={styles.buttonText}>Giriş Yap</Text>
//       </Pressable> */}

//       <Text style={[styles.mailText]}>E-mail adresiniz</Text>
//       <TextInput style={[styles.mailBox, {paddingLeft:15}]}>
//              <Image source={require('./Message.png')}></Image>
//              <Text style={styles.inputText}>   turgut@softcand.com</Text>
//       </TextInput>

//       <Text style={styles.passwordText}>Şifreniz</Text>
//       <TextInput style={[styles.passwordBox,  {paddingLeft:20}]}>
//             <Image color={'#656F77'} source={require('./Lock.png')}></Image>
//             <Text style={styles.inputText}>   ****************</Text>
//       </TextInput>

//       <Pressable
//         style={styles.button}
//         onPress={() => Alert.alert('Butona Tıklandı')}>
//         <Text style={styles.buttonText}>Giriş Yap</Text>
//       </Pressable>

//       <Text style={styles.forgotPassword}>Şifreni mi unuttun?</Text>

//       <View style={styles.accountRegisterDiv}>
//         <Text style={styles.account}>Hesabınız yok mu?</Text>
//         <Text style={styles.register}> Şimdi kayıt ol</Text>
//       </View>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   binIn: {
//     height: 176,
//     justifyContent: 'center',
//     alignItems: 'center',
//     flexDirection: 'row',
    
//   },
//   binText: {
//     fontFamily:'AkayaTelivigala-Regular',
//     fontSize: 60,
//     fontWeight: '400',
//     //textAlign: 'center',
//     color: '#3F3D56',
//   },
//   inText: {
//     fontFamily:'AkayaTelivigala-Regular',
//     fontSize: 60,
//     fontWeight: '400',
//     //textAlign: 'center', ->ortalama için denendi gereksiz
//     color: '#ffffff',
//   },
//   inBackground:
//   {
//     backgroundColor: '#3F3D56',
    
//   },
//   mailText: {
//     fontWeight:'600',
//     color: '#656F77',
//     position: 'absolute',
//     left: width / 100 * 5.6,
//     top: height / 100 * 27.09,
//     fontSize: 14,
//   },
//   passwordText: {
//     position: 'absolute',
//     left: width / 100 * 5.6,
//     top: height / 100 * 39.18,
//     fontSize: 14,
//   },
//   mailBox: {
//     borderWidth: 1,
//     borderColor: '#656F77',
//     width: 335,
//     height: 51,
//     marginTop: 5,
//     borderRadius: 36,
//     position: 'absolute',
//     left: (width - 335) / 2,
//     right: (width - 335) / 2,
//     top: height / 100 * 30.67,
//   },
//   passwordBox: {
//     borderWidth: 1,
//     borderColor: '#656F77',
//     width: 335,
//     height: 51,
//     marginTop: 5,
//     borderRadius: 36,
//     position: 'absolute',
//     left: (width - 335) / 2,
//     right: (width - 335) / 2,
//     top: height / 100 * 41.75,
//   },
//   button: {
//     width: 335,
//     height: 51,
//     backgroundColor: '#3F3D56',
//     borderRadius: 60,
//     position: 'absolute',
//     left: (width - 335) / 2,
//     right: (width - 335) / 2,
//     top: height / 100 * 53,
//     justifyContent: 'center',
//     elevation:8, //sonradan eklendi
//   },
//   buttonText: {
//     textAlign: 'center',
//     justifyContent: 'center',
//     fontSize: 20,
//     color: 'white',
//   },

//   forgotPassword: {
//     width: 169,
//     color: '#3F3D56',
//     fontSize: 20,
//     position: 'absolute',
//     left: (width - 169) / 2,
//     top: height / 100 * 62.22,
//   },

//   accountRegisterDiv: {
//     width: 215,
//     height: 43,
//     position: 'absolute',
//     left: (width - 215) / 2,
//     top: height / 100 * 87.6,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

//   account: {
//     color: '#656F77',
//     fontSize: 14,

//   },
//   register: {
//     color: '#3F3D56',
//     fontSize: 16,
//     fontWeight: '600',
//   },
// })














































// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React from 'react';
// //import type {Node} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// const Section = ({children, title}): Node => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

// const App: () => Node = () => {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     // <SafeAreaView style={backgroundStyle}>
//     //   <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//     //   <ScrollView
//     //     contentInsetAdjustmentBehavior="automatic"
//     //     style={backgroundStyle}>
//     //     <Header />
//     //     <View
//     //       style={{
//     //         backgroundColor: isDarkMode ? Colors.black : Colors.white,
//     //       }}>
//     //       <Section title="Step One">
//     //         Edit <Text style={styles.highlight}>App.js</Text> to change this
//     //         screen and then come back to see your edits.
//     //       </Section>
//     //       <Section title="See Your Changes">
//     //         <ReloadInstructions />
//     //       </Section>
//     //       <Section title="Debug">
//     //         <DebugInstructions />
//     //       </Section>
//     //       <Section title="Learn More">
//     //         Read the docs to discover what to do next:
//     //       </Section>
//     //       <LearnMoreLinks />
//     //     </View>
//     //   </ScrollView>
//     // </SafeAreaView>
//     <Text>Paragraf</Text>
//   );
// };

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;
