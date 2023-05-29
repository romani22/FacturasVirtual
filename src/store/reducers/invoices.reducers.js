import { INVOICES } from '../../data/Invoices';
import { INVOICE_SELECTED } from '../actions/invoice.action';

const initialState = {
	invoices: INVOICES,
	selected: null,
};

const InvoiceReducer = (state = initialState, action) => {
	switch (action.type) {
		case INVOICE_SELECTED:
			const Invoices = state.invoices.filter((inv) => inv.user === action.userId);
			return { ...state, selected: Invoices[0].invoice };
		default:
			return state;
	}
};

export default InvoiceReducer;
