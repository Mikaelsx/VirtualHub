// IMPORTS
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
const BottomTab = createBottomTabNavigator();

// SCREENS
import { Home } from '../Home/Home';
import { Perfil } from '../Perfil/Perfil';

// STYLE
import { ContentIcon, TextIcon } from './style';

import { FontAwesome, FontAwesome5} from '@expo/vector-icons'


// EXPORT
export const Main = () => {
    return(
        <BottomTab.Navigator
            initialRouteName="Home"

            screenOptions={({ route }) => ({
                tabBarStyle : {backgroundColor: "#FFFFFF", height: 80, paddingTop: 10 },
                tabBarActiveBackgroundColor: "transparent",
                tabBarShowLabel: false,
                headerShown: false,
                
                tabBarIcon: ({ focused }) => {
                    if ( route.name === "Main") {
                        return(
                            <ContentIcon
                                tabBarActiveBackgroundColor={ focused ? "#ECF2FF" : "transparent"}
                            >
                                <FontAwesome name='calendar' size={18} color="#4E4B59" />
                                { focused && <TextIcon>Agenda</TextIcon>}
                            </ContentIcon>
                        )
                    }else{
                        // FontAwesome5 = user-circle
                        return(
                            <ContentIcon
                                tabBarActiveBackgroundColor={ focused ? "#ECF2FF" : "transparent"}
                            >
                                <FontAwesome5 name='user-circle' size={18} color="#4E4B59" />
                                { focused && <TextIcon>Perfil</TextIcon>}
                            </ContentIcon>
                        )
                    }
                }
            })}
        >
            <BottomTab.Screen 
                name='Home'
                component={Home}
            />
            <BottomTab.Screen 
                name='Perfil'
                component={Perfil}
            />
        </BottomTab.Navigator>
    )
}