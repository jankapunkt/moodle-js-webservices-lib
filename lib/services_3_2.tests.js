
import {Services_3_2} from './services_3_2.js';
import http from 'http';
import expect from 'expect';


const MOODLE_ROOT = "http://demo.moodle.net/";
const USER = "admin";
const PASSWORD = "sandbox";

describe('Services 3.2 - get auth token', function () {

	const url = MOODLE_ROOT + Services_3_2.URL_TOKEN;

	const args = Services_3_2.AUTH_GET_TOKEN.args(USER, PASSWORD);

	const result = http.call("GET", url,  args);
	console.log(result);
});