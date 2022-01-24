import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { connect } from 'react-redux';
import ListItem from './ListItem';

const LibraryList = ({List}) => {
  return (
    <View>
      <FlatList
        data = {List}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return <ListItem item={item}/>
        }}
      />
    </View>
  );
};

const mapStateToProps = state => {
  const { List } = state
  return { List }
}

export default connect(mapStateToProps)(LibraryList)

const styles = StyleSheet.create({});
