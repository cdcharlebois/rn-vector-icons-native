import { createElement } from "react";
import { View } from "react-native";
import FaIcon from "react-native-vector-icons/FontAwesome";
import Fa5Icon from "react-native-vector-icons/FontAwesome5";
import AntIcon from "react-native-vector-icons/AntDesign";
import EntypoIcon from "react-native-vector-icons/Entypo";
import EvilIcon from "react-native-vector-icons/EvilIcons";
import FeatherIcon from "react-native-vector-icons/Feather";
import Fa5ProIcon from "react-native-vector-icons/FontAwesome5Pro";
import FontistoIcon from "react-native-vector-icons/Fontisto";
import FoundationIcon from "react-native-vector-icons/Foundation";
import IoniconIcon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import OcticonIcon from "react-native-vector-icons/Octicons";
import SimpleLineIcon from "react-native-vector-icons/SimpleLineIcons";
import ZocialIcon from "react-native-vector-icons/Zocial";
// import { HelloWorld } from "./components/HelloWorld";
/*
Use https://oblador.github.io/react-native-vector-icons/ to searxh for icons
 */

export function RNVectorIcon({ library, iconName, size, color, style }) {
    const renderIcon = (library, iconName, size, color) => {
        switch (library) {
            case "fa":
                return <FaIcon name={iconName} size={size} color={color} />
            case "fa5":
                return <Fa5Icon name={iconName} size={size} color={color} />
            case "ant":
                return <AntIcon name={iconName} size={size} color={color} />
        }
    }
    return (
        <View>
            {renderIcon("fa", "rocket", 30, "red")}
            {renderIcon("fa5", "rocket", 30, "red")}
            {renderIcon("ant", "upcircleo", 30, "red")}
        </View>
    );
    // return <HelloWorld name={yourName} style={style} />;
}
