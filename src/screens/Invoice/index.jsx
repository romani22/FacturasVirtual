import { View, Text, FlatList } from 'react-native';
import styles from './styles';
// import { INVOICES } from '../../data/Invoices.js';

import { useSelector, useDispatch } from 'react-redux';
import { InvoiceSelected } from '../../store/actions/invoice.action';
import { useEffect } from 'react';

const Invoice = () => {
	// const user = useSelector((state) => state.auth.register);
	// const dispatch = useDispatch();
	// useEffect(() => {
	// 	dispatch(InvoiceSelected(user.id));
	// }, []);
	// const invoices = useSelector((state) => state.invoices.selected);
	// const renderInvoice = ({ item }) => (
	// 	<View style={styles.containerTable}>
	// 		<Text style={styles.textTable}>{item.name}</Text>
	// 		<Text style={styles.textTable}>{item.Price}</Text>
	// 		<Text style={styles.textTable}>{item.status}</Text>
	// 	</View>
	// );
	return (
		<View style={styles.container}>
			{/* <FlatList
				data={invoices}
				renderItem={renderInvoice}
				keyExtractor={(item) => item.id}
				style={styles.TableContainer}
			/> */}
			<Text>Configuracion</Text>
		</View>
	);
};

export default Invoice;
