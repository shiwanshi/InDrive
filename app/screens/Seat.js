import { StyleSheet, Text, View, TouchableOpacity, Alert, Image } from 'react-native';
import React, { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';

const Seat = () => {
  const [counters, setCounters] = useState({
    item1: 0,
    item2: 0,
    item3: 0,
    item4: 0,
  });

  const seatPrices = {
    item1: 99,
    item2: 129,
    item3: 149,
    item4: 199,
  };

  const increaseCount = (item) => {
    setCounters((prevState) => ({
      ...prevState,
      [item]: prevState[item] + 1,
    }));
  };

  const decreaseCount = (item) => {
    setCounters((prevState) => ({
      ...prevState,
      [item]: prevState[item] > 0 ? prevState[item] - 1 : 0,
    }));
  };

  const getTotalCount = () => {
    return Object.values(counters).reduce((total, count) => total + count, 0);
  };

  const getTotalCost = () => {
    let totalCost = 0;
    Object.keys(counters).forEach((item) => {
      totalCost += counters[item] * seatPrices[item];
    });
    return totalCost.toFixed(2);
  };

  const handleConfirm = () => {
    Alert.alert("Order Confirmed!", "Checkout Cart");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.cartIcon}>
        <FontAwesome name="shopping-cart" size={34} color="black" />
      </TouchableOpacity>

      <View style={styles.itemContainer}>
        <View style={styles.itemRow}>
        <Image
       source={{
        uri:"https://cdn-icons-png.flaticon.com/512/7890/7890168.png",
       }}
        fadeDuration={0}
        style={{ width: 100, height: 100, marginBottom:50 }}
      />
          <Text style={styles.totalText}>Choose Baby Seats :</Text>
        </View>

        <View style={styles.itemRow}>
          <Image
          source={{
            uri:"https://cdn-icons-png.flaticon.com/512/3366/3366689.png",
           }}
          fadeDuration={0}
          style={{ width: 80, height: 90 }}
          />
          <View style={styles.itemDetailsContainer}>
            <View style={styles.itemInfoContainer}>
              <Text style={styles.boldText}>Infant car seat</Text>
              <TouchableOpacity onPress={() => Alert.alert('Suitable for', 'Age : 0 - 2 years \n Weight : 30 - 35 lbs \n Height : Under 50 cm')}>
                <Text style={styles.moreText}>More</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.priceCounterContainer}>
              <View style={styles.priceContainer}>
                <Text style={styles.priceText}>Price : Rs.{seatPrices.item1} </Text>
              </View>
              <View style={styles.counterContainer}>
                <TouchableOpacity onPress={() => decreaseCount('item1')}>
                  <Text> -  </Text>
                </TouchableOpacity>
                <Text style={styles.counterText}>{counters.item1}</Text>
                <TouchableOpacity onPress={() => increaseCount('item1')}>
                  <Text> + </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.itemRow}>
          <Image
            source={{
                uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDPjs1Crsplfphtwv85_EcQrzzJu8_r5pfI96R4uQNNmyGEi7rqEtVpa-1VpPJSRI0N78&usqp=CAU",
               }}
            fadeDuration={0}
            style={{ width: 80, height: 90}}
          />
          <View style={styles.itemDetailsContainer}>
            <View style={styles.itemInfoContainer}>
              <Text style={styles.boldText}>  Baby rear-facing</Text>
              <TouchableOpacity onPress={() => Alert.alert('Baby seats for', 'Age : 0 - 2 years \n Weight : 30 - 35 lbs \n Height : Under 50 cm')}>
                <Text style={styles.moreText}>   More</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.priceCounterContainer}>
              <View style={styles.priceContainer}>
                <Text style={styles.priceText}>Price: Rs.{seatPrices.item2}</Text>
              </View>
              <View style={styles.counterContainer}>
                <TouchableOpacity onPress={() => decreaseCount('item2')}>
                  <Text> -  </Text>
                </TouchableOpacity>
                <Text style={styles.counterText}>{counters.item2}</Text>
                <TouchableOpacity onPress={() => increaseCount('item2')}>
                  <Text> + </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.itemRow}>
          <Image
            source={{
                uri:"https://media.istockphoto.com/id/851548398/vector/vector-illustration-of-happy-smiling-child-sitting-in-a-car-seat-on-a-white-background.jpg?s=612x612&w=0&k=20&c=TYOHE1_AYm2FDrlS6G6xwgzzu0YtkDJzjXttsBm2ay8=",
               }}
            fadeDuration={0}
            style={{ width: 80, height: 100 }}
          />          
            <View style={styles.itemDetailsContainer}>
            <View style={styles.itemInfoContainer}>
              <Text style={styles.boldText}> Baby front-facing</Text>
              <TouchableOpacity onPress={() => Alert.alert('Convertible seats for', 'Age : 2 - 4 years \n Weight : 60 - 90 lbs \n Height : 50 - 100 cm')}>
                <Text style={styles.moreText}>  More</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.priceCounterContainer}>
              <View style={styles.priceContainer}>
                <Text style={styles.priceText}>Price: Rs.{seatPrices.item3}</Text>
              </View>
              <View style={styles.counterContainer}>
                <TouchableOpacity onPress={() => decreaseCount('item3')}>
                  <Text> -  </Text>
                </TouchableOpacity>
                <Text style={styles.counterText}>{counters.item3}</Text>
                <TouchableOpacity onPress={() => increaseCount('item3')}>
                  <Text> + </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View> 

        <View style={styles.itemRow}>
          <Image
            source={{
                uri:"https://thumbs.dreamstime.com/b/baby-sitting-car-seat-silhouette-icon-infant-safety-child-restraint-system-isolated-vector-illustration-197601652.jpg",
               }}
            fadeDuration={0}
            style={{ width: 80, height: 100 }}
          />          
          <View style={styles.itemDetailsContainer}>
            <View style={styles.itemInfoContainer}>
              <Text style={styles.boldText}> Kid cushion seats</Text>
              <TouchableOpacity onPress={() => Alert.alert('Suitable for', 'Age : 6 - 11 years \n Weight : 80 - 125 lbs \n Height : 100 - 125 cm')}>
                <Text style={styles.moreText}> More</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.priceCounterContainer}>
              <View style={styles.priceContainer}>
                <Text style={styles.priceText}>Price: Rs.{seatPrices.item4}</Text>
              </View>
              <View style={styles.counterContainer}>
                <TouchableOpacity onPress={() => decreaseCount('item4')}>
                  <Text> -  </Text>
                </TouchableOpacity>
                <Text style={styles.counterText}>{counters.item4}</Text>
                <TouchableOpacity onPress={() => increaseCount('item4')}>
                  <Text> + </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>    
      </View>

      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total Seats : {getTotalCount()}</Text>
        <View style={styles.totalCost}>
          <Text style={styles.totalCostText}>Total Cost:</Text>
          <Text style={styles.totalCostValue}>Rs.{getTotalCost()}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
        <Text>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor:'white'
  },
  boldText:{
    fontWeight:'bold',
    fontSize:17
  },
  cartIcon: {
    position: 'absolute',
    top: 35,
    right: 16,
  },
  itemContainer: {
    marginTop: 60,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  moreText: {
    fontSize: 12,
    color: 'blue',
  },  
  priceContainer: {
    backgroundColor: 'lightyellow',
    paddingHorizontal: 3,
    paddingVertical: 4,
    borderRadius: 4,
    marginTop: 4,
  },
  priceText: {
    fontSize: 13,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalCost: {
    backgroundColor: 'lightgray',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  totalCostText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  totalCostValue: {
    fontSize: 16,
  },
  itemDetailsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemInfoContainer: {
    marginRight: 8,
    fontWeight: 'bold',
  },
  priceCounterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
  },

  priceCounterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto', 
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'lightblue', 
    paddingHorizontal: 3,
    paddingVertical: 4,
    borderRadius: 4,
    marginLeft: 8,
  },
  counterText: {
    fontSize: 14,
  },
  
  
  confirmButton: {
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32,
    padding: 16,
  },
});

export default Seat;