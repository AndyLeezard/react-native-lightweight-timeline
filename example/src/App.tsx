import React, { useMemo } from 'react';
import { Alert, StyleProp, StyleSheet, Text, TextStyle, View } from 'react-native';
import Timeline, { EventToRender } from 'react-native-lightweight-timeline';
import { Title } from './Resources';
import * as Icons from "./StaticResources"

export default function App() {

  const data: EventToRender[] = useMemo(() => {
    const descriptionStyle: StyleProp<TextStyle> = {
      marginTop: 10,
      fontSize: 12,
    }
    return [{
      title: (
        <Title date={`Date of the genesis block : ${new Date(1230980400000).toLocaleDateString()}`} title={"Bitcoin"} imgsrc={Icons.icon_btc} />
      ),
      description: (
        <Text
          style={descriptionStyle}
        >
          Founder: Satoshi Nakamoto
        </Text>
      ),
      time: {
        content: new Date(1230980400000).toLocaleDateString(),
        style: {
          paddingTop: 8,
        },
      },
      icon: (<></>),
      pressAction: () => Alert.alert("BTC", "")
    },
    {
      title: (
        <Title date={`Date of the genesis block : ${new Date(1339754400000).toLocaleDateString()}`} title={"XRP"} imgsrc={Icons.icon_xrp} />
      ),
      description: (
        <Text
          style={descriptionStyle}
        >
          Founder: Ripple Labs
        </Text>
      ),
      time: {
        content: new Date(1339754400000).toLocaleDateString(),
        style: {
          paddingTop: 8,
        },
      },
      icon: (<></>),
      pressAction: () => Alert.alert("XRP", "")
    }, {
      title: (
        <Title date={`Date of the genesis block : ${new Date(1438250400000).toLocaleDateString()}`} title={"Ethereum"} imgsrc={Icons.icon_eth} />
      ),
      description: (
        <Text
          style={descriptionStyle}
        >
          Founder: Vitalik Buterin
        </Text>
      ),
      time: {
        content: new Date(1438250400000).toLocaleDateString(),
        style: {
          paddingTop: 8,
        },
      },
      icon: (<></>),
      pressAction: () => Alert.alert("ETH", "")
    },
    {
      title: (
        <Title date={`Date of the genesis block : ${new Date(1500112800000).toLocaleDateString()}`} title={"BNB"} imgsrc={Icons.icon_bnb} />
      ),
      description: (
        <Text
          style={descriptionStyle}
        >
          Founder: CZ Binance
        </Text>
      ),
      time: {
        content: new Date(1500112800000).toLocaleDateString(),
        style: {
          paddingTop: 8,
        },
      },
      icon: (<></>),
      pressAction: () => Alert.alert("BNB", "")
    }, {
      title: (
        <Title date={`Date of the hard fork : ${new Date(1501581600000).toLocaleDateString()}`} title={"BCH"} imgsrc={Icons.icon_bch} />
      ),
      description: (
        <Text
          style={descriptionStyle}
        >
          Project fork of: Bitcoin
        </Text>
      ),
      time: {
        content: new Date(1501581600000).toLocaleDateString(),
        style: {
          paddingTop: 8,
        },
      },
      icon: (<></>),
      pressAction: () => Alert.alert("BCH", "")
    }, {
      title: (
        <Title date={`Date of the genesis block : ${new Date(1506506400000).toLocaleDateString()}`} title={"ADA"} imgsrc={Icons.icon_ada} />
      ),
      description: (
        <Text
          style={descriptionStyle}
        >
          Founder: Charles Hoskinson
        </Text>
      ),
      time: {
        content: new Date(1506506400000).toLocaleDateString(),
        style: {
          paddingTop: 8,
        },
      },
      icon: (<></>),
      pressAction: () => Alert.alert("ADA", "")
    }]
  }, [])

  return (
    <View style={styles.container}>
      <Timeline flatList={{ data }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
