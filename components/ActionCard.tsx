import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink:string){
        Linking.openURL(websiteLink);
    }
  return (
    <View>
      <Text style = {styles.headingText}>BlogCard</Text>
      <View style = {[styles.card,styles.flatCard]}>
        <View style = {styles.headingContainer}>
            <Text style = {styles.headerText}>
                Why do you want to learn React Native?
            </Text>
        </View>
        <Image style = {styles.cardImage}
        source={{
            uri:'https://img.freepik.com/free-vector/hacker-operating-laptop-cartoon-icon-illustration-technology-icon-concept-isolated-flat-cartoon-style_138676-2387.jpg?w=740&t=st=1696357698~exp=1696358298~hmac=4a52be9ef2288ab38634fcb9b7a0050ecb515978be56630005bdc0650bd24b8f'
        }}
        />
        <View style = {styles.bodyContainer}>
            <Text numberOfLines={3}>
                Thats because i am familliar with React and it would be
                easier to transition into React Native rather than doing Android or 
                IOS dev, Also React Native can work in both, you dont need 
                to code separately for it.
            </Text>
        </View>
        <View style = {styles.footerContainer}>
           <TouchableOpacity onPress={() => openWebsite('https://www.youtube.com/watch?v=eL5qYJ7y68k&list=PLRAV69dS1uWSjBBJ-egNNOd4mdblt1P4c&index=16&t=24s')}>
            <Text style = {styles.socialLink}>Lets Study</Text>
           </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText : {
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:10,
        color:'#BDAE86'
    },
    card:{
        width:350,
        height:360,
        borderRadius:6,
        marginLeft:18,
        marginVertical:12,
    },
    flatCard:{
        backgroundColor:'#EEC6B0'
    },
    headingContainer:{
        height:40,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    headerText:{
        fontSize:18,
        fontWeight:'500'
    },
    cardImage:{height:200,
        
        marginHorizontal:70,
        borderRadius:100,
    },
    bodyContainer:{
        padding:10
    },
    footerContainer:{
        paddingHorizontal:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'

    },
    socialLink: {
        fontSize: 16,
        backgroundColor: '#BDAE86',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {
          width: 5,
          height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5, // This is for Android
      },
})