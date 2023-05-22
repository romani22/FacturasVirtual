import { View, Text, FlatList } from 'react-native';
import styles from './styles';
import { INVOICES } from '../../data/Invoices.js';
const Invoice = () => {
	const renderInvoice = ({ item }) => (
		<View style={styles.containerTable}>
			<Text style={styles.textTable}>{item.name}</Text>
			<Text style={styles.textTable}>{item.Price}</Text>
			<Text style={styles.textTable}>{item.status}</Text>
		</View>
	);
	return (
		<View style={styles.container}>
			<FlatList data={INVOICES} renderItem={renderInvoice} keyExtractor={(item) => item.id} style={styles.TableContainer} />
		</View>
	);
};

export default Invoice;
