import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  WebView,
  TouchableOpacity,
  Alert,
  ListView
} from 'react-native';
import TabBar from '~/ui/components/TabBar';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
import IconEvilIcons from 'react-native-vector-icons/EvilIcons';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, List, ListItem } from 'native-base';

const datas = [
  'Simon Mignolet',
  'Nathaniel Clyne',
  'Dejan Lovren',
  'Mama Sakho',
  'Alberto Moreno',
  'Emre Can',
  'Joe Allen',
  'Phil Coutinho',
];

export default class AnatomyExample extends Component {
    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            calenderr: true,
            listt: false,
            basic: true,
            listViewData: datas,
        };
    }

     deleteRow(secId, rowId, rowMap) {
        rowMap[`${secId}${rowId}`].props.closeRow();
        const newData = [...this.state.listViewData];
        newData.splice(rowId, 1);
        this.setState({ listViewData: newData });
  }


  render() {
      const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    return (
      <Container>
        <Header style={{ backgroundColor: 'red'}}>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title style={{ fontSize: 18}}>Job - Today</Title>
          </Body>
          <Right />
          <Right>
              <Icon name="md-notifications-outline" style={{ color: "white", fontSize: 22, paddingLeft: 20 }}></Icon>
              <IconFontAwesome name="filter" style={{ color: "white", fontSize: 22, paddingLeft: 20 }}></IconFontAwesome>
              <IconFontAwesome name="search" style={{ color: "white", fontSize: 22, paddingLeft: 20 }}></IconFontAwesome>
          </Right>
          
        </Header>
        <Content style={{ backgroundColor: 'red'}}>
            <TabBar 
                    titleActive="Calender" 
                    titleNonActive="List" 
                    onPressActive={() => { this.setState({ info: !this.state.calenderr }); }}
                    onPressNonActive={() => { this.setState({ info: !this.state.calenderr }); }} 
                />
          <View style={{ paddingTop: 20 }}>
              <List
                dataSource={this.ds.cloneWithRows(this.state.listViewData)}
                renderRow={data =>
                <ListItem>
                    <Text> {data} </Text>
                </ListItem>}
                renderLeftHiddenRow={data =>console.log('data')}
                renderRightHiddenRow={(data, secId, rowId, rowMap) =>
                <Button style={{ alignItems: 'center', justifyContent: 'center'}} danger onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
                    <View style={{width: '100%'}}>
                        <Icon active name="remove-circle" />
                    </View>
                </Button>}
                rightOpenValue={-75}
            />
          </View>
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}