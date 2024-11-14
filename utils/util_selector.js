import { Selector } from 'testcafe';

export default class SelectorUtil {
	constructor() {
		// definition of selectors
		this.usernameInput = Selector('input[placeholder="Username"]');
		this.passwordInput = Selector('input[placeholder="Password"]');
		this.loginButton = Selector('button[type="submit"]');
		this.userDropdwon = Selector('.oxd-userdropdown-name');
		this.logoutButton = Selector('a').withText('Logout');
		this.errorMessage = Selector('p').withText('Invalid credentials');

		// Add Employeee
		this.pimModule = Selector('a').withText('PIM');
		this.addEmployeeButton = Selector('button').withText('Add');
		this.firstNameInput = Selector('input[name="firstName"]');
		this.lastNameInput = Selector('input[name="lastName"]');
		this.employeeIdInput = Selector('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.orangehrm-employee-container > div.orangehrm-employee-form > div:nth-child(1) > div.oxd-grid-2.orangehrm-full-width-grid > div > div > div:nth-child(2) > input');
		this.saveButton = Selector('button').withText('Save');

		// ImageUpload, PIM Step 4: Upload Employee Image, not ready, 1.browser file window 無法關閉, 2.user image not update in preview screen.
		this.imageUploadIcon = Selector('i.oxd-icon.bi-plus');
		this.fileInput = Selector('input[type="file"]');

		// search the employee
		this.employeeNameField = Selector('input[placeholder="Type for hints..."]');
		this.searchButton = Selector('button').withText('Search');
		this.noRecordFound = Selector('div').withText('No Records Found');

		//remove the employee
		this.employeeCheckbox = Selector('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.orangehrm-paper-container > div.orangehrm-container > div > div.oxd-table-body > div:nth-child(1) > div > div:nth-child(1) > div > div > label > span > i');
		this.deleteButton = Selector('button').withText('Delete');
		this.confirmDeleteButton = Selector('button').withText('Yes, Delete');

		//Leave: Apply Leave 表單
		this.leaveModule = Selector('a').withText('Leave');
		this.addLeaveButton = Selector('a').withText('Apply');
		this.leaveTypeDropdown = Selector('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(1) > div > div:nth-child(2) > div > div > div.oxd-select-text--after > i');
		this.leaveTypeOption = Selector('span').withText('CAN - FMLA');
		this.ApplyLeaveFromDateInput = Selector('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(2) > div > div:nth-child(1) > div > div:nth-child(2) > div > div > input');
		this.ApplyLeaveToDateInput = Selector('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(2) > div > div:nth-child(2) > div > div:nth-child(2) > div > div > input');

		//this.durationDropdown = Selector('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(3) > div > div:nth-child(2) > div > div:nth-child(2) > div > div > div.oxd-select-text--after > i');
		this.durationDropdown = Selector('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(3) > div > div:nth-child(1) > div > div:nth-child(2) > div > div > div.oxd-select-text--after > i');
		this.specifyTimeOption = Selector('span').withText('Specify Time');
		this.applyButton = Selector('button').withText('Apply');

		this.MyLeaveButton = Selector('a').withText('My Leave');
		this.MyLeaveFromDateInput = Selector('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.oxd-table-filter > div.oxd-table-filter-area > form > div.oxd-form-row > div > div:nth-child(1) > div > div:nth-child(2) > div > div > input');
		this.MyLeaveToDateInput = Selector('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.oxd-table-filter > div.oxd-table-filter-area > form > div.oxd-form-row > div > div:nth-child(2) > div > div:nth-child(2) > div > div > input');

		this.cancelButton = Selector('button').withText('Cancel');
		this.confirmCancelButton = Selector('button').withText('Yes, Confirm');
	}
}
