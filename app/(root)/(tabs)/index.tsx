import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-3xl py-10 font-rubik">This is good for estate</Text>
      <Link href={'/sign-in'}>SignIn</Link>
      <Link href={'/explore'}>Explore</Link>
      <Link href={'/profile'}>Profile</Link>
      <Link href="/properties/[id]">Property</Link>
    </View>
  );
}
