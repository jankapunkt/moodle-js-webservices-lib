
import {Services_3_2} from './services_3_2.js';


const expect = require('expect');
const request = require('sync-request');
const querystring = require('querystring');



const MOODLE_ROOT = "http://demo.moodle.net/";
const USER = "admin";
const PASSWORD = "sandbox";

describe('Services 3.2', function () {

	it("get auth token creds are valid", ()=>{
		const url = MOODLE_ROOT + Services_3_2.URL_TOKEN + "?";
		const args = querystring.stringify(Services_3_2.AUTH_GET_TOKEN.args(USER, PASSWORD));
		const response = request("POST", url+ args);
		expect(response.statusCode).toBe(200);

		const parsed = JSON.parse(response.getBody('utf8'));
		console.log(parsed);
		expect(parsed).toExist();
		expect(parsed.error).toNotExist();
		expect(parsed.token).toExist();

	})
});