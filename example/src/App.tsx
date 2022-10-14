import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
// import { multiply,sum, labeledText,loginCmp } from 'react-native-ex2';
import {labeledText, loginCmp, sum,multiply} from 'react-native-ex2'

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();
  const [sumvalue, setSum] = React.useState<number | undefined>();

  React.useEffect(() => {
    multiply(3, 7).then(setResult);
    sum(3, 7).then(setSum);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <Text style={{color:'blue'}}>sum: {sumvalue}</Text>
      {labeledText("hello","this is cmp")}
      {loginCmp("sh mobilepls")}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
