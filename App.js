import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, FlatList, Button,  } from "react-native";
import GoalsItem from "./components/GoalsItem";
import GoalsList from "./components/GoalsList"; // Make sure the import path is correct

export default function App() {
  const [submittedText, setSubmittedText] = useState("");
  const [submittedTextLength, setSubmittedTextLength] = useState([]);
  const [modelActive, setModelActive] = useState(false);

  function enteredText(textEntered) {
    setSubmittedText(textEntered);
  }

  function submitText() {
    setSubmittedTextLength((current) => [
      ...current,
      { text: submittedText, id: Math.random().toString() },
    ]);
    setSubmittedText(""); // Optional: Clear the input after submission
    setModelActive(false);
  }

  function onDelete(id) {
    setSubmittedTextLength((currentText) => {
      return currentText.filter((goal) => goal.id !== id);
    });
  }

  function firstClick() {
    setModelActive(true);
  }

  function endClick() {
    setModelActive(false);
  }

  return (
    <View style={styles.container}>
      <Button title="CLICK ADD TEXT" onPress={firstClick} />
      <GoalsList
        enteredText={enteredText}
        submitText={submitText}
        submittedText={submittedText}
        modelActive={modelActive}
        endClick={endClick} // Pass endClick instead of closeModal
      />
      <FlatList
        style={styles.goalsList}
        data={submittedTextLength}
        renderItem={(itemData) => {
          return (
            <GoalsItem
              text={itemData.item.text}
              onDelete={onDelete}
              id={itemData.item.id}
            />
          );
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 18,
    backgroundColor: "#F0F3F4",
  },
  goalsList: {
    flex: 4,
  },
});
