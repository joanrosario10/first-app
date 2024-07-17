import React from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";

const GoalsList = ({
  enteredText,
  submitText,
  submittedText,
  modelActive,
  endClick,
}) => {
  return (
    <Modal animationType="slide" visible={modelActive}>
      <View style={styles.container}>
        <Image
          source={require("../assets/image/Screenshot_2024-07-17_063817-removebg-preview.png")}
          style={styles.imageStyle}
        />

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Input your text"
            placeholderTextColor="#D5DBDB"
            onChangeText={enteredText}
            value={submittedText}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="Add Text" onPress={submitText} />
            </View>
            <View style={styles.button}>
              <Button title="Close" onPress={endClick} />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "white",
  },
  inputContainer: {
    width: "90%",
    alignItems: "center",
  },
  textInput: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#D5DBDB",
    padding: 8,
    marginBottom: 16,
    borderRadius: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  button: {
    width: "45%",
    borderRadius: 8,
  },
  imageStyle: {
    width: 200,
    height:200,
    marginBottom: 24,
  },
});

export default GoalsList;
