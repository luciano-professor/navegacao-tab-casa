import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

import { StyleSheet, View } from 'react-native';

//Importando as Screens
import Feed from './screens/Feed';
import Mensagens from './screens/Mensagens';
import Reels from './screens/Reels';
import Pesquisa from './screens/Pesquisa';
import Perfil from './screens/Perfil';

const Tab = createBottomTabNavigator();

const NavegacaoTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'coral',
        tabBarInactiveTintColor: 'darkseagreen',
        tabBarStyle: styles.fundoTabBar,
      }}
    >
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={24}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Mensagens"
        component={Mensagens}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome
              name={focused ? 'send' : 'send-o'}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Reels"
        component={Reels}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View
              style={[
                styles.reelsContainer,
                focused && styles.reelsContainerSelecionado,
              ]}
            >
              <Ionicons
                name={focused ? 'videocam' : 'videocam-outline'}
                size={40}
                color={color}
              />
            </View>
          ),
          tabBarLabel: '',
        }}
      />
      <Tab.Screen
        name="Pesquisa"
        component={Pesquisa}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'search' : 'search-outline'}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'person-circle' : 'person-circle-outline'}
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default NavegacaoTab;

const styles = StyleSheet.create({
  fundoTabBar: {
    backgroundColor: 'lavender',
  },
  reelsContainer: {
    borderWidth: 1,
    borderColor: 'darkseagreen',
    padding: 10,
    width: 65,
    height: 65,
    borderRadius: 50,
    marginTop: -25,
    backgroundColor: 'lavender',
    alignItems: 'center',
  },
  reelsContainerSelecionado: {
    borderColor: 'coral',
  },
});
