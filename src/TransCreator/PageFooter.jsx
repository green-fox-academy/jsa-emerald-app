import React from 'react';
import {
  Text,
  Button,
  Footer,
  FooterTab,
} from 'native-base';
import { Platform } from 'react-native';
import PropTypes from 'prop-types';
import styles from './Style';


const PageFooter = ({ createHandler }) => (
  <Footer style={Platform.OS === 'ios' ? styles.footerIOS : styles.footerAndroid}>
    <FooterTab style={styles.footerAndroid}>
      <Button
        id="btn-pageFooter-confirm"
        bordered
        style={styles.confirmButton}
        onPress={() => createHandler()}
      >
        <Text style={styles.confirmButtonText}>Add</Text>
      </Button>
    </FooterTab>
  </Footer>
);


PageFooter.propTypes = {
  createHandler: PropTypes.func,
};

PageFooter.defaultProps = {
  createHandler: null,
};

export default PageFooter;
