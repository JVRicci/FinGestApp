import BackButton from "@/components/BackButton";
import statusBarHeight from "@/utils/statusBarHeight";
import { View } from "react-native";

export default function Entries() {
  return (
    <View style={{ paddingTop: statusBarHeight() }}>
      <View className="ps-10 pe-10 ">
        <BackButton />
      </View>
    </View>
  );
}
