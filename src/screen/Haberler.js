import React from 'react'
import { SafeAreaView, ScrollView } from 'react-native';
import HaberItem from './HaberItem'
import haberler from './../haber.json'



export default function Haberler() {
  return (
    <SafeAreaView>
      <ScrollView>
        {
          haberler.data.map((haber) =>
            <HaberItem key={haber.id} data={haber} />
          )}
      </ScrollView>
    </SafeAreaView>
  )
}
