import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import React from 'react';
import { selectLibrary } from './redux/actions'
import { connect } from 'react-redux';
const ListItem = ({ item, libraryId, selectLibrary }) => {
  return (
    <View>
      <TouchableWithoutFeedback onPress={() => selectLibrary(item.id)}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>{item.title}</Text>
      </TouchableWithoutFeedback>
      {libraryId == item.id
        ? <View>
          <Text>{item.description}</Text>
        </View>
        : null}
    </View>
  );
};

const mapStateToProps = ({ libraryId }) => {
  return { libraryId }
}

export default connect(mapStateToProps, { selectLibrary })(ListItem)

const styles = StyleSheet.create({
});
