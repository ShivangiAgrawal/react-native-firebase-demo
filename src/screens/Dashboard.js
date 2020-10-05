/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {
  FlatList,
  Text,
  View,
  ActivityIndicator,
  Image,
  StyleSheet,
  Button,
  TextInput,
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as dashboardActionCreator from '../redux/actions/dashboardAction';
import auth, {firebase} from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import FAB from 'react-native-fab';
import FabIcon from 'react-native-vector-icons/MaterialIcons';
import Modal from 'react-native-modal';

const styles = StyleSheet.create({
  dashboardContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5,
    marginBottom: 5,
  },
  dashbaordFlatlistSeparator: {
    height: 0.8,
    width: '100%',
    backgroundColor: '#000',
    marginTop: 10,
    marginBottom: 10,
  },
  dashboardImgMovies: {
    // flex: 0.4,
    width: 100,
    height: 100,
    borderRadius: 7,
    aspectRatio: 1.0,
    resizeMode: 'contain',
    justifyContent: 'center',
    marginLeft: 5,
  },
  dashboardTxtMovies: {
    width: '100%',
    textAlignVertical: 'center',
    padding: 5,
    color: '#000',
  },
  dashboardRatingMovies: {
    width: '100%',
    margin: 20,
  },
  dashboardTextUser: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
    margin: 30,
  },
  textInput: {
    height: 50,
    fontSize: 18,
    width: '90%',
    borderColor: '#9b9b9b',
    borderBottomWidth: 1,
    marginBottom: 30,
    marginVertical: 15,
  },
});

function Dashboard(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [visibleModal, setVisibleModal] = useState(null);
  const [name, setName] = useState('');
  const [thumbnail, setThumbnail] = useState({});

  useEffect(() => {
    props.dashboardActions.dashboardAction(props);
  }, []);

  useEffect(() => {
    const onUserListFetch = database()
      .ref('/users')
      .on('value', snapshot => {
        console.log('Users List retrieved:: ', snapshot.val());
        var users = [];
        snapshot.forEach(child => {
          users.push({
            name: child.val().name,
            _key: child.key,
          });
        });
        setData(users);
      });

    // Stop listening for updates when no longer required
    return () =>
      database()
        .ref('/users')
        .off('value', onUserListFetch);
  }, []);

  function addUser() {
    const newReference = database()
      .ref('/users')
      .push();

    console.log('Auto generated key: ', newReference.key);

    newReference
      .set({
        name: name,
      })
      .then(() => console.log('Data updated.'));
    setVisibleModal(null);
  }

  async function removeUser(uID) {
    await database()
      .ref('/users/' + uID)
      .remove();
  }

  const flatListItemSeparator = () => {
    return <View style={styles.dashbaordFlatlistSeparator} />;
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={data !== undefined ? data : []}
        renderItem={({item}) => (
          <View style={styles.dashboardContainer}>
            {/* <PDFView
              style={styles.dashboardImgMovies}
              onLoad={() => console.log('PDF rendered from url')}
              resource="https://staging-api.mocingbird.com/api/v1/files/8814/stream?token=eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxNTk5LCJyb2xlX2lkIjpudWxsLCJnZW5lcmF0ZWRfYXQiOiIyMDIwLTA5LTE2IDExOjAyOjI5ICswMDAwIn0.AvBO3RA7Ro17MKqlHjpWcv3ojzkGQn7mL41q7JpRAV8"
              resourceType="url"
            /> */}
            {/* <Image
              source={{uri: item.image}}
              style={styles.dashboardImgMovies}
              PlaceholderContent={<ActivityIndicator />}
            /> */}
            <View style={{flex: 0.6}}>
              <Text style={styles.dashboardTxtMovies}>{item.name}</Text>
              {/*<Text style={styles.dashboardTxtMovies}>{item.title}</Text>
            <Text style={styles.dashboardTxtMovies}>{item.genre}</Text>
            <Text style={styles.dashboardTxtMovies}>{item.releaseYear}</Text> */}
            </View>
          </View>
        )}
        ListHeaderComponent={
          <Text style={styles.dashboardTextUser}>
            Welcome!{'\n'}
            <Text style={{color: '#e93766', fontSize: 18}}>
              {firebase.auth().currentUser.email &&
                firebase.auth().currentUser.email}{' '}
            </Text>
          </Text>
        }
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={flatListItemSeparator}
      />
      <FAB
        buttonColor="#e93766"
        iconTextColor="#FFFFFF"
        onClickAction={() => {
          setName('');
          setVisibleModal('center');
        }}
        visible={true}
        iconTextComponent={<FabIcon name="add" />}
      />
      <Modal
        isVisible={visibleModal === 'center'}
        onSwipeComplete={() => setVisibleModal(null)}
        onRequestClose={() => setVisibleModal(null)}
        onBackdropPress={() => setVisibleModal(null)}
        style={{
          width: '80%',
          alignSelf: 'center',
        }}>
        <View
          style={{
            backgroundColor: '#ffffff',
            padding: 30,
            alignItems: 'center',
          }}>
          <Text style={{fontWeight: '700', fontSize: 20, marginBottom: 30}}>
            Add User
          </Text>
          <TextInput
            placeholder="Name"
            autoCapitalize="none"
            style={styles.textInput}
            onChangeText={nameTxt => setName(nameTxt)}
            value={name}
            keyboardType="default"
          />
          <Button title="Add User" color="#e93766" onPress={() => addUser()} />
        </View>
      </Modal>
    </View>
  );
}

const mapStateToProps = state => ({
  loading: state.appReducer.loading,
  dashboardData: state.dashboardReducer.dashboardData,
  dashboardError: state.dashboardReducer.dashboardError,
});

const mapDispatchToProps = dispatch => ({
  dashboardActions: bindActionCreators(dashboardActionCreator, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
