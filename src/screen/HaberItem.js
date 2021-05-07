import React from 'react'
import { Image, } from 'react-native';
import { Card, 
  CardItem, Thumbnail, Text, Button, Icon, Left, Body} from 'native-base';

export default function Haberler({data}) {
    return (
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Body>
                  <Text>{data.baslik}</Text>
                  <Text note>{data.tarih}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
              <Image
          style={{
            width: '100%',
            height: 200,
            resizeMode: 'stretch',
          }}
          source={{
            uri: data.gorsel,
          }}
        />
                <Text>
                  {data.icerik}
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="eye" />
                  <Text>{data.goruntulenme} görüntülenme</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
    )
}
