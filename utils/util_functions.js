import { t } from 'testcafe';
import SelectorUtil from './util_selector'

const selectorUtil = new SelectorUtil();
const employeeName = 'John Doe';

export default class FunctionUtils {
    constructor() {
    }

    async UserLoginWithValidCredentials() {
        console.log('>> User login with valid credentials')
        await t
            .typeText(selectorUtil.usernameInput, 'Admin')
            .typeText(selectorUtil.passwordInput, 'admin123')
            .click(selectorUtil.loginButton);
    }
    async UserLoginWithInValidCredentials() {
        console.log('>> User login with invalid credentials and check for error Message')
        await t
            .typeText(selectorUtil.usernameInput, 'invalidAdmin')
            .typeText(selectorUtil.passwordInput, 'invalidadmin123')
            .click(selectorUtil.loginButton)
            .expect(selectorUtil.errorMessage.exists).ok()
            .wait(3000);
    }
    async UserLogout() {
        console.log('>> User logout')
        await t
            .click(selectorUtil.userDropdwon)
            .wait(3000)
            .click(selectorUtil.logoutButton)
            .expect(selectorUtil.loginButton.exists).ok()
            .wait(3000);
    }

    async AddEmployee() {
        console.log('>> PIM - Add employee')
        await t
            .click(selectorUtil.pimModule)
            .click(selectorUtil.addEmployeeButton);

        // Step 3: Fill out Employee details
        await t
            .typeText(selectorUtil.firstNameInput, 'John')
            .typeText(selectorUtil.lastNameInput, 'Doe')
            .selectText(selectorUtil.employeeIdInput)
            .pressKey('delete')
            .typeText(selectorUtil.employeeIdInput, '9999');

        // Step 4: Upload Employee Image
        await t
            .wait(3000)
            .setFilesToUpload(selectorUtil.fileInput, './employee-image.jpg')
            .wait(3000)
            .expect(selectorUtil.fileInput.exists).ok('File input not found')
            .expect(selectorUtil.fileInput.value).contains('employee-image.jpg', 'Image was not uploaded successfully');

        // Step 5: Save Employee
        await t
            .click(selectorUtil.saveButton) // 20241111: 1.it taks some time for updating file at system, thus add wait(5000) below. 2.warning: it employee exist, is still able to proceed to next action. no problem ? 
            .wait(8000);
    }

    async SearchEmployee() {
        console.log('>> PIM - Search employee')
        await t
            .click(selectorUtil.pimModule)
            .typeText(selectorUtil.employeeNameField, employeeName)
            .click(selectorUtil.searchButton)
            .wait(3000);
    }

    async DeleteEmployee() {
        console.log('>> PIM - Delete employee')

        await t
            .click(selectorUtil.employeeCheckbox)
            .click(selectorUtil.deleteButton)
            .click(selectorUtil.confirmDeleteButton)
            .expect(selectorUtil.noRecordFound.exists).notOk('Employee record still exists after delete');
        /*
         await t
             .click(selectorUtil.pimModule)
             .typeText(selectorUtil.employeeNameField, employeeName)
             .click(selectorUtil.searchButton)
             .wait(3000)
             .expect(selectorUtil.noRecordFound.exists).notOk('Employee record still exists after delete');
     */
    }

    async ApplyLeave() {
        console.log('>> Leave - Apply Leave')
        await t
            .click(selectorUtil.leaveModule) // 點擊 "Leave" 模組
            .click(selectorUtil.addLeaveButton); // 點擊 "Apply" 按鈕

        // 選擇 Leave Type
        await t
            .click(selectorUtil.leaveTypeDropdown)
            .click(selectorUtil.leaveTypeOption);

        // 輸入 From Date 和 To Date
        await t
            .typeText(selectorUtil.ApplyLeaveFromDateInput, '2024-12-12', { replace: true })
            .typeText(selectorUtil.ApplyLeaveToDateInput, '2024-12-12', { replace: true })
            .click(selectorUtil.ApplyLeaveToDateInput)
            .wait(3000);

        // 選擇 Duration 為 "Specify Time"
        await t
            .hover(selectorUtil.durationDropdown)
            .click(selectorUtil.durationDropdown)
            .wait(2000)
            .click(selectorUtil.specifyTimeOption)
            .click(selectorUtil.applyButton)
            .wait(5000);
    }

    async SearchLeave() {
        console.log('>> Leave - Search Leave')
        await t
            .click(selectorUtil.MyLeaveButton)
            .wait(2000)
            .selectText(selectorUtil.MyLeaveFromDateInput)
            .pressKey('delete')
            .wait(2000)
            .typeText(selectorUtil.MyLeaveFromDateInput, '2024-12-12', { replace: true })
            .selectText(selectorUtil.MyLeaveToDateInput)
            .pressKey('delete')
            .typeText(selectorUtil.MyLeaveToDateInput, '2024-12-12', { replace: true })
            .click(selectorUtil.searchButton)
            //.expect(recordFound.exists).ok('No records found') // optionla 非必要,因為如果 employee 可被選擇/刪除,到表搜尋動作可找到 employee.
            .wait(2000);
    }

    async CancelLeave() {
        console.log('>> Leave - Cancel Leave')
        await t
            .click(selectorUtil.cancelButton);
    }

}
