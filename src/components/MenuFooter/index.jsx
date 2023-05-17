import { View, Text, Image, FlatList } from 'react-native';
import Button from '../Button';
import styles from './styles';

import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import colors from '../../constants/colors';

const MenuFooter = ({ clickView }) => {
	const [viewSelect, setViewSelect] = useState('');
	const HandleclickMenu = (viewActive) => {
		setViewSelect(viewActive);
	};
	useEffect(() => {
		clickView(viewSelect);
	}, [viewSelect]);
	return (
		<View style={styles.containerButton}>
			<Button
				buttonStyle={styles.Button}
				actionPress={() => {
					HandleclickMenu('menu');
				}}
			>
				<FontAwesome5 name="list" size={24} style={styles.shadowIcon} color={colors.white} />
				<Text style={styles.textButton}>Menu</Text>
			</Button>
			<Button
				buttonStyle={styles.Button}
				actionPress={() => {
					HandleclickMenu('notification');
				}}
			>
				<FontAwesome5 name="bell" size={24} style={styles.shadowIcon} color={colors.white} />
				<Text style={styles.textButton}>Notification</Text>
			</Button>
			<Button
				buttonStyle={styles.Button}
				actionPress={() => {
					HandleclickMenu('home');
				}}
			>
				<MaterialCommunityIcons name="home-outline" size={27} style={styles.shadowIcon} color={colors.white} />
				<Text style={styles.textButton}>Home</Text>
			</Button>
			<Button
				buttonStyle={styles.Button}
				actionPress={() => {
					HandleclickMenu('invoice');
				}}
			>
				<FontAwesome5 name="file-alt" size={24} style={styles.shadowIcon} color={colors.white} />

				<Text style={styles.textButton}>Factura</Text>
			</Button>
			<Button
				buttonStyle={styles.Button}
				actionPress={() => {
					HandleclickMenu('turn');
				}}
			>
				<FontAwesome5 name="calendar-alt" size={24} style={styles.shadowIcon} color={colors.white} />
				<Text style={styles.textButton}>Turnos</Text>
			</Button>
		</View>
	);
};

export default MenuFooter;
