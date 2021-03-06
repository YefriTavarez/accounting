const frappe = require('frappejs');
const registerReportRoutes = require('../reports/view');

module.exports = {
  start() {
    // require modules
    frappe.registerModels(require('../models'), 'client');

    frappe.registerView('List', 'Customer', require('../models/doctype/Party/CustomerList.js'));

    registerReportRoutes();

    frappe.desk.menu.addItem('ToDo', '#list/ToDo');
    frappe.desk.menu.addItem('Event', '#list/Event');
    frappe.desk.menu.addItem('Chart of Accounts', '#tree/Account');
    frappe.desk.menu.addItem('Items', '#list/Item');
    frappe.desk.menu.addItem('Customers', '#list/Customer');
    frappe.desk.menu.addItem('Quotation', '#list/Quotation');
    frappe.desk.menu.addItem('Sales Order', '#list/SalesOrder');
    frappe.desk.menu.addItem('Fulfillment', '#list/Fulfillment');
    frappe.desk.menu.addItem('Invoice', '#list/Invoice');
    frappe.desk.menu.addItem('Bill', '#list/Bill');
    frappe.desk.menu.addItem('Purchase Order', '#list/PurchaseOrder');
    frappe.desk.menu.addItem('Purchase Receipt', '#list/PurchaseReceipt');
    frappe.desk.menu.addItem('Journal Entry', '#list/JournalEntry');
    frappe.desk.menu.addItem('Address', '#list/Address');
    frappe.desk.menu.addItem('Contact', '#list/Contact');
    frappe.desk.menu.addItem('Settings', () => frappe.desk.showFormModal('SystemSettings'));

    // reports
    frappe.desk.menu.addItem('General Ledger', '#report/general-ledger');
    frappe.desk.menu.addItem('Profit And Loss', '#report/profit-and-loss');
    frappe.desk.menu.addItem('Balance Sheet', '#report/balance-sheet');
    frappe.desk.menu.addItem('Trial Balance', '#report/trial-balance');
    frappe.desk.menu.addItem('Sales Register', '#report/sales-register');
    frappe.desk.menu.addItem('Purchase Register', '#report/purchase-register');
    frappe.desk.menu.addItem('Accounts Receivable', '#report/accounts-receivable');
    frappe.desk.menu.addItem('Accounts Payable', '#report/accounts-payable');

    frappe.router.default = '#tree/Account';

    frappe.router.show(window.location.hash);
  }
};
