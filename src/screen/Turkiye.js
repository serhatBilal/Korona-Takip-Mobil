import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native'

export default function Turkiye() {
  const [data, setData] = useState([]);


  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await fetch('https://api.covid19api.com/country/turkey/status/confirmed/live?from=2020-12-26T00:00:00Z&to=2020-12-26T12:00:00Z');
    const veri = await response.json();
    setData(veri);
  }

  return (
    <View style={{
      flex: 1, flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFF'
    }}>
      <Text style={{ fontSize: 28, fontWeight: '400' }}>Türkiyedeki toplam vaka sayısı:</Text>
      <Text style={{ fontSize: 24, fontWeight: '400', marginTop: 8, color: 'red' }}>{data[0] ? data[0].Cases : 'Yükleme hatası'}</Text>
      <Text style={{ fontSize: 24, fontWeight: '400', marginTop: 8 }}>Son güncellenme tarihi: {data[0] ? data[0].Date : 'Yükleme hatası'}</Text>

      <View style={{ marginTop: 150 }}>
        <Image
          style={{
            width: 300,
            height: 200,
            resizeMode: 'stretch',
          }}
          source={{
            uri: 'https://hibya.com/images/2020_06/2020_06_15/hayat-eve-sigar-uygulamasi-huawei-appgalleryde-yerini-aldi-15062009_m2.jpg',
          }}
        />
        <Text style={{ alignSelf: 'center', fontWeight: '400', color: 'green', fontSize: 24, paddingTop: 8 }}>Hayat Eve Sığar</Text>
        <Text style={{ alignSelf: 'center', fontWeight: '400', color: 'green', fontSize: 20, paddingTop: 8 }}>#evdekal</Text>
      </View>
    </View>
  )
}
