import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View >
      <Text style ={styles.headingText}>FlatCards</Text>
      <ScrollView horizontal style = {styles.box}>
        <View style={[styles.card,styles.cardOne]}>
            <Text style={styles.insideText}>Red</Text>
        </View>
        <View style={[styles.card,styles.cardTwo]}>
            <Text style={styles.insideText}>Blue</Text>
        </View>
        <View style={[styles.card,styles.cardThree]}>
            <Text style={styles.insideText}>Green</Text>
        </View>
        <View style={[styles.card,styles.cardThree]}>
            <Text style={styles.insideText}>Green</Text>
        </View>
        <View style={[styles.card,styles.cardTwo]}>
            <Text style={styles.insideText}>Green</Text>
        </View>
       
      </ScrollView>
      <View style={styles.mainCard}>
      <Image source={{uri:'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/71/ae/2c.jpg'}} 
      style = {styles.cardImg}
      />
      <Text style={styles.headingText}>AKSHARDHAM</Text>
      <Text style = {styles.para}>Akshardham Temple, located in Delhi, India, is a magnificent and spiritually significant Hindu temple complex. It is renowned for its intricate architectural design, showcasing the rich cultural and artistic heritage of India. The temple's centerpiece is the breathtaking Akshardham Mandir, dedicated to Bhagwan Swaminarayan, and it attracts visitors from around the world .</Text>
      </View>
      
      
      
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:10
    },
    insideText:{
        color:'white'
    },
    box:{
        
        flex:1,
        flexDirection:'row'
       // Border thickness
       
    },
    card:{
        
        margin:8,
        flex:1,
        width: 100,
        height: 100,
        alignItems:'center',
        justifyContent:'center', 
        borderRadius:10,
    },
    cardOne:{
        backgroundColor:'red'
    },
    cardTwo:{
        backgroundColor:'BF4848',

        
    },
    cardThree:{
        backgroundColor:'green',
        
    },
    mainCard:{
        height:500,
        width:350,
        margin:20,
        borderRadius:13,
        backgroundColor:'#D8BBAA'
    },
    cardImg:{
        height:250,
        
        
    },
    para:{
        fontSize:13,
        
        padding:15,
        alignItems:'center'
    }
})