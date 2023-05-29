export const INVOICE_SELECTED = 'INVOICE_SELECTED';

export const InvoiceSelected = (userId) => ({
	type: INVOICE_SELECTED,
	userId: userId,
});
