import {StyleSheet, View, Text, Pressable} from 'react-native';

function GoalsItem(props) {
     return (
       <View style={styles.textGoalList}>
         <Pressable
           android_ripple={{color:"#BB8FCE"}}
           onPress={props.onDelete.bind(this, props.id)}
         >
           <Text style={styles.textColor}>{props.text}</Text>
         </Pressable>
       </View>
     );
}
const styles = StyleSheet.create({
  textGoalList: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#A569BD",
  },
  textColor: {
    color: "#ffffff",
    padding: 8,
  },
});


export default GoalsItem;