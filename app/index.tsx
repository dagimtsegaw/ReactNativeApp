import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";

const index = () => {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text>Aora!</Text>
      <StatusBar style="auto" />
      <Link href="/profile" style={{ color: "blue" }}>
        Go to Profile
      </Link>
    </View>
  );
};

export default index;
