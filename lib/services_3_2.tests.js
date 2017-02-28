
import {Services_3_2} from './services_3_2.js';
import {MoodleWebservicesLib} from './index.js';

const expect = require('expect');
const request = require('sync-request');
const querystring = require('querystring');

const MOODLE_ROOT = "http://demo.moodle.net/";
const USER = "admin";
const PASSWORD = "sandbox";

let token;

describe('MoodleWebservicesLib', function () {

	it("import is working correct", ()=>{
		expect(MoodleWebservicesLib).toExist();
	});

	it("getService", ()=>{
		const service = MoodleWebservicesLib.getService();
		expect(service).toExist();
		expect(service.version).toBe("3.2");
	});

	it("getService with fallback", ()=>{
		const otherServiceWithFallback = MoodleWebservicesLib.getService("2.2", true);
		expect(otherServiceWithFallback).toExist();
		expect(otherServiceWithFallback.version).toBe("3.2");
	});

	it("getService no fallback", ()=>{
		expect(function () {
			const noFallback = MoodleWebservicesLib.getService("2.2");
		}).toThrow(/not found/);
	});
});


describe('Services 3.2', function () {

	it("import is working correct", ()=>{
		expect(Services_3_2).toExist();
	});

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

		token = parsed.token;
	});

	it("core_webservice_get_site_info", ()=>{
		const url = MOODLE_ROOT + Services_3_2.URL_WS + "?";
		const args = querystring.stringify(Services_3_2.CORE_WEBSERVICE_GET_SITE_INFO.args(token));
		const response = request("POST", url+ args);
		expect(response.statusCode).toBe(200);

		const parsed = JSON.parse(response.getBody('utf8'));
		expect(parsed).toExist();
		expect(parsed.error).toNotExist();

		// IMPORTANT: Check, if these information remains on the sandbox.
		expect(parsed.sitename).toBe('Moodle sandbox demo');
		expect(parsed.username).toBe('admin');
		expect(parsed.firstname).toBe('Admin');
		expect(parsed.lastname).toBe('User');
		expect(parsed.fullname).toBe('Admin User');
		expect(parsed.lang).toBe('en');
		expect(parsed.userid).toBe(2);
		expect(parsed.siteurl).toBe('https://demo.moodle.net');

	});
});