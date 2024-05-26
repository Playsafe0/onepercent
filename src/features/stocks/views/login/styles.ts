import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
      backgroundColor: '#000',
    },
    title: {
      fontSize: 30,
      color: '#fff',
    },
    titleContainer: {
      borderRadius: 8,
      overflow: 'hidden',
    },
    clubTitle: {
      fontSize: 40,
      fontWeight: 'bold',
      marginBottom: 30,
    },
    clubTitleText: {
      fontSize: 40,
      fontWeight: 'bold',
      color: '#fff',
      paddingVertical: 10,
      paddingHorizontal: 20,
    },
    input: {
      width: '100%',
      height: 50,
      borderColor: '#fff',
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: 20,
      marginBottom: 20,
      backgroundColor: '#fff',
      color: 'black',
    },
    loginButton: {
      width: '100%',
      height: 50,
      borderRadius: 8,
      marginBottom: 20,
    },
    loginButtonGradient: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8,
    },
    loginButtonText: {
      fontSize: 18,
      color: '#fff',
      fontWeight: 'bold',
    },
    forgotPassword: {
      color: '#007bff',
      textDecorationLine: 'underline',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });

  export default styles;