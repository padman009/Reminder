import React from 'react';
import { StyleSheet, Image,Dimensions } from 'react-native';
import { Container, Text, Button, List, ListItem, Icon} from 'native-base';
import { Ionicons } from '@expo/vector-icons';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
});

const {width} = Dimensions.get('screen')
const reminders = [
  {
    tittle:"Take phone!",
    description:"You should take a phone!",
    date:Date.now() + 10000,
  },
  {
    tittle:"Get a shower",
    description:"You should get a shower beacuse you very dirty!",
    date:Date.now() + 10000
  },
  {
    tittle:"Give money",
    description:"Give me your money",
    date:Date.now() + 10000
  }
]

function HomeScreen({navigation}) {
    return (
        <Container>
            <Image 
                source={require ('../assets/reminder_jpg.jpg')}
                style={{width, height: width*9/18}}
            />
            <List>
                {reminders.map((reminder,i) => (
                    <ListItem 
                        key={i}
                        onPress={() => navigation.navigate('Item',{reminder})}>
                    <Text>{reminder.tittle}</Text>
                </ListItem>
            ))}
            </List>
            <Button icon={true} style={{textAlign:'center', position:"absolute", top:width*9/18 - 50,right:10, borderRadius:100, width:50, height:50}} onPress={()=>alert("Hello")}>
              <Icon name='add'/>
            </Button>
        </Container>
    );
}

export default HomeScreen;