import { Image } from 'react-native';
import styles from './styles';

const Logo = () => {
	return <Image style={styles.SizeLogin} source={require('../../assets/img/Logo.png')} />;
};

export default Logo;
