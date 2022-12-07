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

export function RNVectorIcon({ family, iconName, size, color, style }) {
    const renderIcon = (family, iconName, size, color) => {
        const _args = { name: iconName, size, color };
        switch (family) {
            case "fa":
                return <FaIcon {..._args} />;
            case "fa5":
                return <Fa5Icon {..._args} />;
            case "ant":
                return <AntIcon {..._args} />;
            case "entypo":
                return <EntypoIcon {..._args} />;
            case "evil":
                return <EvilIcon {..._args} />;
            case "feather":
                return <FeatherIcon {..._args} />;
            case "fa5pro":
                return <Fa5ProIcon {..._args} />;
            case "fontisto":
                return <FontistoIcon {..._args} />;
            case "foundation":
                return <FoundationIcon {..._args} />;
            case "ionicon":
                return <IoniconIcon {..._args} />;
            case "materialCommunity":
                return <MaterialCommunityIcon {..._args} />;
            case "material":
                return <MaterialIcon {..._args} />;
            case "octicon":
                return <OcticonIcon {..._args} />;
            case "simpleline":
                return <SimpleLineIcon {..._args} />;
            case "zocial":
                return <ZocialIcon {..._args} />;
        }
    };

    return iconName.status === "available" && color.status === "available" && size.status === "available" ? (
        <View>{renderIcon(family, iconName.value, size.value * 1, color.value)}</View>
    ) : null;
}
