
import FunctionUtils from './utils/util_functions';
const utils = new FunctionUtils();
const baseURL = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";

//Initialization
fixture`===== QA Automation Assesment on OrangeHRM =====`

	.beforeEach(async t => {
		console.log('\n Go to Testing Website - https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
		await t
			.setTestSpeed(1.0)
			.navigateTo(baseURL)
			.maximizeWindow();
	});

//case_01
test('case1: Successful login with valid credentials', async t => {
	console.log('case1: Successful login with valid credentials');
	await utils.UserLoginWithValidCredentials();
	await utils.UserLogout();
});


//case_02
test('case2: Failed login with invalid credentials', async t => {
	console.log('case2: Failed login with invalid credentials');
	await utils.UserLoginWithInValidCredentials();
});


//case_03
test('case3: PIM - Add Employee / Search Employee / Delete Employee', async t => {
	console.log('case3: PIM - Add Employee / Search Employee / Delete Employee');
	await utils.UserLoginWithValidCredentials();
	await utils.AddEmployee();
	await utils.SearchEmployee();
	await utils.DeleteEmployee();
});


//case_04
test('case4: Leave - Apply Leave / Search Leave / Cancel Leave', async t => {
	console.log('case4: Leave - Apply Leave / Search Leave / Cancel Leave');
	await utils.UserLoginWithValidCredentials();
	await utils.ApplyLeave();
	await utils.SearchLeave();
	await utils.CancelLeave();
});



