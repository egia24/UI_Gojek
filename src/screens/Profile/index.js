import { Flash, Logout, LogoutCurve, Notification, Setting3, ShoppingCart, DirectInbox, Coin1, TicketDiscount } from 'iconsax-react-native';
import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity, FlatList, ScrollView, YellowBox } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={{ paddingHorizontal: 20, marginTop: 20, marginBottom: 10}}>
        <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold'}}>Profil</Text>
      </View>
      <ScrollView >
        <View style={{ marginTop: 10 }}>
          <View style={{ ...styles.imageContainer, paddingHorizontal: 20, marginBottom: 20, backgroundColor: 'green', borderRadius :20}}>
            <Image
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf8Ktg-J8M1nMUu0n9DRZyKfq5ra26HUKUMA&usqp=CAU',
              }}
              style={{ ...styles.profileImage }}
            />
            <View style={{ marginLeft: 10, height : 100 }}>
              <Text style={styles.profileName}>Egia Suranta</Text>
              <View style={{ alignItems: 'center', flexDirection: 'row', }}>
              <Text style={{ color: 'gold', fontSize: 12, fontWeight: 'bold'}}>Member GOLD </Text>
              </View>
              <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold'}}>Pembelian 4 | Cancel 0</Text>
            </View>
          </View>

          <View style={{}}>
            <View style={{ paddingHorizontal: 20, marginBottom: 10 }}>
              <Text style={{ ...styles.profileInfo, color: 'black', fontWeight: 'bold', }}>Akun</Text>
            </View>
            <View style={{ flexDirection: 'row', paddingHorizontal: 24, marginBottom: 25, }}>
              <DirectInbox color={'green'} variant="Linear" size={24} />
              <View style={{ flexDirection: 'column' }}>
                <Text style={styles.profileSetting}>Inbox</Text>
                <Text style={styles.profileSettingDesc}>Berisi pesan promo, driver, toko, dll</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', paddingHorizontal: 24, marginBottom: 25, }}>
              <ShoppingCart color={'green'} variant="Linear" size={24} />
              <View style={{ flexDirection: 'column' }}>
                <Text style={styles.profileSetting}>Keranjang</Text>
                <Text style={styles.profileSettingDesc}>Semua pembelian saat dikirim dan riwayat pembelian</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', paddingHorizontal: 24, marginBottom: 25, }}>
              <Coin1 color={'green'} variant="Linear" size={24} />
              <View style={{ flexDirection: 'column' }}>
                <Text style={styles.profileSetting}>Koin Gojek</Text>
                <Text style={styles.profileSettingDesc}>Semua koin yang kamu dapat bisa kamu tukarkan menjadi saldo</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', paddingHorizontal: 24, marginBottom: 25}}>
              <TicketDiscount color={'green'} variant="Linear" size={24} />
              <View style={{ flexDirection: 'column' }}>
                <Text style={styles.profileSetting}>Voucher</Text>
                <Text style={styles.profileSettingDesc}>Voucher yang bisa kamu gunakan untuk potongan harga</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', paddingHorizontal: 24, marginBottom: 25, }}>
              <Setting3 color={'green'} variant="Linear" size={24} />
              <View style={{ flexDirection: 'column' }}>
                <Text style={styles.profileSetting}>Pengaturan Akun</Text>
                <Text style={styles.profileSettingDesc}>Edit alamat, kartu rekening, keamanan akun</Text>
              </View>
          </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 80,
  },
  darkOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 15,
  },
  card: {
    width: '48%',
    marginVertical: 5,
    borderRadius: 8,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 100 / 2,
    borderWidth: 3,
  },
  profileName: {
    color: 'white',
    fontSize: 16,
    marginTop : 20,
    fontWeight: 'bold'
  },
  profileBio: {
    color: 'black',
    fontSize: 16,
    marginTop: 5,
  },
  profileNumber: {
    color: 'black',
    fontSize: 16,
    marginTop: 5,
    fontWeight: 'bold',
  },
  profileSetting: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  profileSettingDesc: {
    color: 'black',
    fontSize: 14,
    fontWeight: '400',
    paddingHorizontal: 10,
  },
  profileInfo: {
    color: 'black',
    fontSize: 16,
    fontWeight: '300',
  },
  likedPhotosText: {
    color: 'black',
    fontSize: 16,
    marginTop: 5,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  buttonEdit: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: 'rgba(128, 128, 128, 0.1)',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 14,
    color: 'black',
  },
  informationContainer: {
    backgroundColor: 'lightgrey',
    marginHorizontal: 24,
    marginVertical: 24,
    flexDirection: 'row',
    borderRadius: 25,
    padding: 10,
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  }
});