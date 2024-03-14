import React, { useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import {
  useFonts,
  Montserrat_800ExtraBold,
  Montserrat_400Regular_Italic,
} from "@expo-google-fonts/montserrat";

const Load = () => {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    Montserrat_800ExtraBold,
    Montserrat_400Regular_Italic,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("Home");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Image
          source={require("../../assets/logo.png")}
          style={styles.logo}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212834',
    paddingBottom: 20,
  },
  containerLogo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  containerLogoText: {
    color: "#fff",
    fontSize: 38,
    fontFamily: "Montserrat_800ExtraBold",
  },
  logo: {
    width: 155, 
    height: 109, 
  },
});

export default Load;
