import EntriesForm from '@/pages/EntriesForm';
import { Component } from 'react';
import { View } from 'react-native';

export default class EntriesFormRoute extends Component {
  
  render() {

    return (
      <View >
        <EntriesForm />
      </View>
    )
  }
}