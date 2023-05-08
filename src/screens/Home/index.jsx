import { View, Text, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './styles';
import MenuFooter from '../../components/MenuFooter';

const Home = () => {
	const [seeView, setSeeView] = useState();

	const handleView = (viewSelect) => {
		console.log(viewSelect);
		setSeeView(viewSelect);
	};

	let content = <Text>Home</Text>;
	switch (seeView) {
		case 'menu':
			content = <Text>Home1</Text>;
			break;
		case 'notification':
			content = <Text>Home2</Text>;
			break;
		case 'home':
			content = <Text>Home3</Text>;
			break;
		case 'invoice':
			content = <Text>Home4</Text>;
			break;
		case 'turn':
			content = <Text>Home5</Text>;
			break;
	}

	return (
		<View style={styles.container}>
			<View style={styles.view}>{content}</View>
			<View style={styles.footer}>
				<MenuFooter clickView={handleView} />
			</View>
		</View>
	);
};

export default Home;
