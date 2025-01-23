import Wishlist from './components/Wishlist'; 
import Notification from './components/Notification'; 
import bannerImage from './assets/sale.jpg'; 

import { View, Text, FlatList, Image, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

const data = [
  { id: '1', image: 'https://5.imimg.com/data5/ECOM/Default/2023/12/371718919/JW/SH/FN/115422180/1-db9c6a95-6d09-4613-b1c1-a38f24d8ee98-500x500.png', title: 'Air Leggings', price: 'Rp150.000' },

  { id: '2', image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/j/u/w/7-1522-multi-shozie-multicolor-original-imagegdaad9g8mvs-bb.jpeg?q=90&crop=false', title: 'Sneakers', price: 'Rp200.000' },

  { id: '3', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIsN7VnCBWB90-yExigNhvp5jgngHE3os1cQ&s', title: 'Gym Bag', price: 'Rp75.000' },

  { id: '4', image: 'https://cdn.thewirecutter.com/wp-content/media/2024/05/runningshoesforyou-2048px-2251.jpg?auto=webp&quality=75&crop=1.91:1&width=1200', title: 'Running Shoes', price: 'Rp300.000' },
];

function HomeScreen() {
  const renderItem = ({ item }) => (
    <View style={styles.productCard}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text style={styles.productTitle}>{item.title}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>  Sport Shoes</Text>
      
      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={20} color="orange" style={styles.searchIcon} />
        <TextInput placeholder="Search items" style={styles.searchInput} />
      </View>

      <View style={styles.balanceContainer}>
        <View style={styles.balanceBlock}>
          <FontAwesome name="money" size={24} color="black" style={styles.icon} />
          <View>
            <Text style={styles.balanceText}>Wallet Balance</Text>
            <Text style={styles.amount}>Rp1.000.000</Text>
          </View>
        </View>
        
        <View style={styles.balanceBlock}>
          <Ionicons name="add-circle-outline" size={24} color="black" style={styles.icon} />
          <View>
            <Text style={styles.balanceText}>Top Up Balance</Text>
            <Text style={styles.topUpText}>+ Top Up</Text>
          </View>
        </View>
      </View>

      <View style={styles.bannerContainer}>
        <Image source={bannerImage} style={styles.bannerImage} />
      </View>

      <Text style={styles.categoryHeading}>  Shop by Category</Text>
      <View style={styles.categoryContainer}>
        <TouchableOpacity style={styles.categoryBlock}>
          <MaterialCommunityIcons name="shoe-print" size={40} color="black" />
          <Text style={styles.categoryText}>Footwear</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBlock}>
          <Ionicons name="bag-outline" size={40} color="black" />
          <Text style={styles.categoryText}>Bags</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBlock}>
          <Ionicons name="shirt-outline" size={40} color="black" />
          <Text style={styles.categoryText}>Apparel</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.categoryHeading}>  For You</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.flatListContainer}
      />
    </ScrollView>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer theme={DefaultTheme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home-outline';
            } else if (route.name === 'Wishlist') {
              iconName = 'heart-outline';
            } else if (route.name === 'Notification') {
              iconName = 'notifications-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'orange',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Wishlist" component={Wishlist} />
        <Tab.Screen name="Notification" component={Notification} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
  fontSize: 24,
  fontWeight: 'bold',
  color: 'orange',
  marginVertical: 16,
  fontStyle: 'italic', 
},

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    borderRadius: 15,
    paddingHorizontal: 16,
    marginBottom: 28,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 8,
    fontSize: 16,
  },
  balanceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  balanceBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
  },
  icon: {
    marginRight: 8,
  },
  balanceText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  amount: {
    fontSize: 16,
    color: 'black',
  },
  topUpText: {
    fontSize: 16
  },
  bannerContainer: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  bannerImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  categoryHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  categoryBlock: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    paddingVertical: 20,
    marginHorizontal: 5,
  },
  categoryText: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
  flatListContainer: {
    paddingBottom: 20,
  },
  productCard: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  productImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
  },
  productTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 14,
    color: '#ff6347',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
