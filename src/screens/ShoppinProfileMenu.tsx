// File: GoogleProfileMenu.tsx

import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { scale, ScaledSheet } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface MenuItemProps {
  icon: string;
  text: string;
  subtitle?: string;
}

const ShoppinProfileMenu: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="close" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.time}>18:24</Text>
      </View>

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <View style={styles.profileImage}>
          <Text style={styles.profileInitial}>A</Text>
        </View>
        <View style={styles.profileDetails}>
          <Text style={styles.profileName}>Your Name</Text>
          <Text style={styles.profileEmail}>your-email@example.com</Text>
        </View>
        <TouchableOpacity style={styles.dropdownIcon}>
          <Icon name="keyboard-arrow-down" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Manage Account Button */}
      <TouchableOpacity style={styles.manageAccountButton}>
        <Text style={styles.manageAccountText}>Manage your Google Account</Text>
      </TouchableOpacity>

      {/* Options Menu */}
      <ScrollView style={styles.options}>
        <MenuItem icon="incognito" text="Turn on Incognito" />
        <MenuItem icon="history" text="Search history" subtitle="Saving" />
        <MenuItem icon="delete" text="Delete last 15 mins" />
        <MenuItem icon="shield" text="SafeSearch" />
        <MenuItem icon="star-outline" text="Interests" />
        <MenuItem icon="vpn-key" text="Passwords" />
        <MenuItem icon="person-outline" text="Your profile" />
        <MenuItem icon="tune" text="Search personalisation" />
        <MenuItem icon="settings" text="Settings" />
        <MenuItem icon="help-outline" text="Help and feedback" />
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerLink}>Privacy Policy</Text>
        <Text style={styles.footerSeparator}> • </Text>
        <Text style={styles.footerLink}>Terms of Service</Text>
      </View>
    </View>
  );
};

const MenuItem: React.FC<MenuItemProps> = ({ icon, text, subtitle }) => (
  <TouchableOpacity style={styles.menuItem}>
    <Icon name={icon} size={24} color="#fff" />
    <View style={styles.menuTextContainer}>
      <Text style={styles.menuText}>{text}</Text>
      {subtitle && <Text style={styles.menuSubtitle}>{subtitle}</Text>}
    </View>
  </TouchableOpacity>
);

const styles = ScaledSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#303134',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: scale(15),
      paddingTop: scale(10),
      paddingBottom: scale(5),
    },
    time: {
      color: '#fff',
      fontSize: scale(16),
    },
    profileSection: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: scale(15),
      paddingVertical: scale(10),
    },
    profileImage: {
      width: scale(40),
      height: scale(40),
      borderRadius: scale(20),
      backgroundColor: '#4a4a4a',
      justifyContent: 'center',
      alignItems: 'center',
    },
    profileInitial: {
      color: '#fff',
      fontSize: scale(18),
      fontWeight: 'bold',
    },
    profileDetails: {
      flex: 1,
      marginLeft: scale(10),
    },
    profileName: {
      color: '#fff',
      fontSize: scale(16),
      fontWeight: 'bold',
    },
    profileEmail: {
      color: '#bbb',
      fontSize: scale(14),
    },
    dropdownIcon: {
      padding: scale(5),
    },
    manageAccountButton: {
      backgroundColor: '#3c4043',
      paddingVertical: scale(10),
      paddingHorizontal: scale(15),
      marginHorizontal: scale(15),
      borderRadius: scale(5),
      marginTop: scale(10),
    },
    manageAccountText: {
      color: '#1a73e8',
      fontSize: scale(16),
      textAlign: 'center',
    },
    options: {
      marginTop: scale(10),
    },
    menuItem: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: scale(15),
      paddingVertical: scale(12),
    },
    menuTextContainer: {
      marginLeft: scale(15),
    },
    menuText: {
      color: '#fff',
      fontSize: scale(16),
    },
    menuSubtitle: {
      color: '#bbb',
      fontSize: scale(14),
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: scale(15),
      borderTopWidth: 1,
      borderTopColor: '#4a4a4a',
    },
    footerLink: {
      color: '#1a73e8',
      fontSize: scale(14),
    },
    footerSeparator: {
      color: '#fff',
      fontSize: scale(14),
    },
  });

export default ShoppinProfileMenu;

