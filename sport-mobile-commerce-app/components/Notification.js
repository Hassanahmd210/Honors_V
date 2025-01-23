import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const notifications = [
  {
    id: '1',
    time: 'Today, 10:20',
    title: 'LIMITED-TIME PROMO - UP TO 50% OFF!',
    description: 'Don\'t miss out on this special opportunity! Get up to 50% off on all our sports shoes. Check out our latest collection now!',
    new: true,
  },
  {
    id: '2',
    time: 'Today, 09:05',
    title: 'FLASH SALE ALERT - SAVE BIG TODAY!',
    description: 'Hurry, our flash sale is live now! Grab your favorite sports shoes at unbeatable prices. This offer won\'t last long!',
    new: true,
  },
  {
    id: '3',
    time: 'Yesterday, 08:10',
    title: 'GOOD MORNING, RUNNER!',
    description: 'It’s time to step out and run. Give your best to your body today. Find comfort in every step.',
    new: false,
  },
  {
    id: '4',
    time: 'July 13, 2023, 17:30',
    title: 'EXCLUSIVE DISCOUNT JUST FOR YOU',
    description: 'Hello loyal customers! We want to reward you with an exclusive 15% discount on all our shoe products. Use the code \'EXCLUSIVE15\' at checkout.',
    new: false,
  },
];

const Notification = () => {
  const renderNotification = ({ item }) => {
    const isToday = item.time.startsWith('Today'); // Check if the notification arrived today
    const backgroundColor = isToday ? '#fff3e0' : '#f9f9f9'; // Light orange for today's notifications, gray for others

    return (
      <View style={[styles.notificationCard, { backgroundColor }]}>
        <View style={styles.notificationHeader}>
          <Text style={styles.time}>{item.time}</Text>
          {item.new && <View style={styles.newIndicator} />}
        </View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>NOTIFICATION</Text>
        <TouchableOpacity>
          <Text style={styles.markAsReadText}>Mark as read</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={notifications}
        renderItem={renderNotification}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.notificationList}
      />
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#f1f1f1',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  markAsReadText: {
    color: 'orange',
    fontSize: 14,
  },
  notificationList: {
    paddingVertical: 10,
  },
  notificationCard: {
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
  },
  notificationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  time: {
    fontSize: 12,
    color: '#888',
  },
  newIndicator: {
    width: 8,
    height: 8,
    backgroundColor: 'orange',
    borderRadius: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
});
