import React from "react";
import { View, Text } from "react-native";
import styles from "./style";

const Scoreboard = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.column}>
        {/* <Text style={styles.title}>Scoreboard</Text> */}
        <View style={styles.row}>
          <Text style={styles.cell}>Rank</Text>
          <Text style={styles.cell}>Name</Text>
          <Text style={styles.cell}>Score</Text>
        </View>
        {props.scores.map((item, i) => {
          return (
            <View style={styles.row}>
              <Text style={styles.cell}>{i + 1}</Text>
              <Text style={styles.cell}>{item.name}</Text>
              <Text style={styles.cell}>{item.score}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default Scoreboard;