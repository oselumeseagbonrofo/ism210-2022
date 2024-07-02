import { StyleSheet, ScrollView, SafeAreaView, KeyboardAvoidingView, Platform, Image } from 'react-native';
import { View } from '@/components/Themed';
import Component1 from '@/components/core/Component1';
import Component2 from '@/components/core/Component2';
import Component3 from '@/components/core/Component3';
import Component4 from '@/components/core/Component4';
import Component5 from '@/components/core/component5/Component5';
import Component6 from '@/components/core/Component6';

const Seperator: React.FC = () => {
  return <View style={styles.separator} />
}

const TabOneScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.container}>
        <ScrollView>
          <View style={styles.screenHeader}>
            <Image style={styles.logo}
              source={require('../../assets/images/favicon.png')} />
          </View>
          <Component1 />
          <Seperator />
          <Component2 />
          <Seperator />
          <Component2 name="Aluya" />
          <Seperator />
          <Component3 />
          <Seperator />
          <Component4 />
          <Seperator />
          <Component5 />
          <Seperator />
          <Component6 />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    backgroundColor: '#eee',
    height: 3,
    width: '100%',
    margin: 9
  },
  text: {
    color: '#fff',
    fontSize: 20,
    backgroundColor: 'blue',
    padding: 6,
    alignItems: 'center'
  },
  screenHeader: {
    flex: 1,
    paddingTop: 27,
    justifyContent: 'center',
    backgroundColor: 'darkblue'
  },
  screenBody: {
    flex: 6,
    justifyContent: 'center'
  },
  logo: {
    alignSelf: 'center',
    width: 200,
    height: 82,
    margin: 9
  }

});
export default TabOneScreen;