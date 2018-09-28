const React = require('react-native');
const { StyleSheet, Dimensions } = React;
const { height, width } = Dimensions.get('window');

export const colors = {
    white: "rgb(255, 255, 255)",
    whiteOpacity: "rgba(255, 255, 255, 0.5)",
    violet: "rgb(132, 1, 191)",
    violetOpacity: "rgba(132, 1, 191, 0.2)",
    pink: "rgb(214, 5, 128)",
    pinkOpacity: "rgb(214, 5, 128, 0.2)",
    lemon: "rgb(254,204,33)",
    green: "rgb(23,157,39)",
    red: "rgb(220,29,54)",
    redOpacity: "rgba(220,29,54,0.7)",
    black: "rgb(54,54,54)",
    grey: "rgb(146,146,146)",
    greyOpacity: "rgba(146,146,146, 0.2)",
    gallery: "rgb(237,237,237)",
    galleryOpacity: "rgba(237,237,237, 0.8)"
  };
  

export default {
    input: {
        paddingBottom: 0,
        paddingLeft: 0,
    },
    coloredBackground: {
        shadow: {
            flex: 1,
            width: null,
            height: null,
            resizeMode: 'cover',
        },
        bg: {
            flex: 1,
            paddingTop: 20,
            paddingBottom: 30,
        },
        logo: {
            marginTop: height / 7,
            width: 80,
            height: 80,
            alignSelf: 'center',
        },
        btnActive: {
            height: 60,
            borderRadius: 20,
            marginTop: 40,
            marginLeft: 10,
            marginRight: 10,
            backgroundColor: colors.violet,
        },
        buttonTextActive: {
            color: colors.gallery,
            fontSize: 20,
        },
        btn: {
            height: 60,
            borderRadius: 20,
            marginTop: 40,
            marginLeft: 10,
            marginRight: 10,
            backgroundColor: colors.violetOpacity,
        },
        buttonText: {
            color: colors.galleryOpacity,
            fontSize: 20
        },
        inputInvalidWrapper: {
            backgroundColor: colors.red,
            elevation: 5,
            paddingLeft: 20,
            paddingRight:20,
            borderColor: 'transparent',
            marginTop: 15,
            marginBottom: 15,
        },
        inputWrapper: {
            paddingHorizontal: 20,
            marginTop: 15,
            marginBottom: 15,
            borderBottomColor: 0.5,
        },
    },
    markdown: {
        strong: {
            fontWeight: '400',
        },
        heading1: {
            fontSize: 24,
            fontWeight: 'bold',
            color: colors.violet,
            paddingBottom: 20,
            marginVertical: 0,
        },
        heading2: {
            fontSize: 17,
            fontWeight: '200',
            paddingBottom: 20,
            color: colors.black,
            marginVertical: 0,
        },
        heading3: {
            fontSize: 16,
            fontWeight: 'bold',
            paddingBottom: 6,
            color: colors.black,
            marginVertical: 0,
        },
        paragraph: {
            // fontSize: 14,
            paddingBottom: 12,
            // color: colors.black,
        },
    },
};
