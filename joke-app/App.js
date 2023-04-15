import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { styles } from "./src/styles";

export default function App() {
  const [jokes, setJokes] = useState();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch("https://api.sampleapis.com/jokes/goodJokes")
      .then((res) => res.json())
      .then(setJokes); // oops no catch
  }, []);

  const getNextJoke = () => {
    if (index < jokes.length - 1) setIndex(index + 1);
    else setIndex(0);
  };

  return (
    <View style={styles.container}>
      {!jokes ? (
        <Text style={styles.text}>
          Open up App.js to start working on your app!
        </Text>
      ) : (
        <>
          <Text style={styles.text}>{jokes[0].setup}</Text>
          <Text style={styles.punchline}>{jokes[0].punchline}</Text>
        </>
      )}

      <StatusBar style="auto" />
    </View>
  );
}