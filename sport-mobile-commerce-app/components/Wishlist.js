import { View, Text, FlatList, Image, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';

const products = [
  {
    id: '1',
    title: 'Nike Hypervenom',
    category: 'Footwear',
    price: 'Rp400.000',
    image: 'https://staticg.sportskeeda.com/wp-content/uploads/2016/03/nike-hypervenom-phantom-ii-neymar-jr.-edition-1458060678-800.jpg',
  },
  {
    id: '2',
    title: 'Tenis Run Bounce',
    category: 'Footwear',
    price: 'Rp389.000',
    image: 'https://staticg.sportskeeda.com/wp-content/uploads/2016/03/tenis-run-bounce-s3-porsche-design-1458060780-800.jpg',
  },
  {
    id: '3',
    title: 'SPORT SNEAKERS',
    category: 'Footwear',
    price: 'Rp200.000',
    image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/p/j/r/6-wf-834-a-6-zixer-red-original-imaghmp5pppg6hqe.jpeg?q=90&crop=false',
  },
  {
    id: '4',
    title: 'SPORT+ walking shoes',
    category: 'Footwear',
    price: 'Rp399.000',
    image: 'https://c02.purpledshub.com/uploads/sites/47/2023/03/HokaAnacapaLow11-58-36SNY0042-62b34b7-1.jpg?webp=1&w=1200',
  },
];

const ProductCard = ({ title, category, price, image }) => (
  <View style={styles.productCard}>
    <Image source={{ uri: image }} style={styles.productImage} />
    <Text style={styles.productTitle}>{title}</Text>
    <Text style={styles.productCategory}>{category}</Text>
    <Text style={styles.productPrice}>{price}</Text>
  </View>
);

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>WISHLIST</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <ProductCard
            title={item.title}
            category={item.category}
            price={item.price}
            image={item.image}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 60,
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
  productCategory: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 14,
    color: '#ff6347',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});