# MOODLE WEBSERVICE LIB

This is **NOT** yet another moodle client implementation.
This is rather a collection of all the names and parameters of the moodle webservices.

##### Background

Moodle offers about 380 webservice functions (state: version 3.2). 
The knowledge about these functions and their required and optional parameters should be available independently from a certain moodle client implementation.
Therefore this collection is designed to be client agnostic.


**Note:** This package is at a very early stage but updated regularly. Contribution is very welcome!

## Install

```javascript
import {MoodleWebservicesLib} from 'moodle-webservices-lib';

// get the service lib for the default version (currently: 3.2)
// or pass a version number, if you want another version (if supported)
const services = mws.getService();

//... prepare your moodle client for a webservice calls

// create the base url for the ws call
const url = "https://demo.moodle.com/" + services.URL_TOKEN + "?";
const args = services.AUTH_GET_TOKEN.args("yourusername", "yourpassword");

//... include url and args into your ws query 

```

## Changelog

0.0.5

* core_course_get_courses
* core_enrol_get_enrolled_users
* core_webservice_get_site_info


0.0.2 - get auth token

* Auth token can be retrieved from the moodle website

0.0.1 - initial collection

* getService() function to retrieve service libs by moodle version
* intitial testing system


## Contribution / Pull Requests

##### Guidelines

Contribution is always welcome! Please create a branch for each service (pattern: 3.2_service_name). 
After implementation,  test and merge your results into the main service version (such as "3.2").

The develop branch should only receive merges from version branches, because it is the main anchor point between versions.
Untested PRs will be rejected. Incomplete tests are only accepted on optional parameters. The main service tests should run as expected.

Please also update this README changelog, if you added significant changes

##### Testing

1. Fork and clone the repo
2. cd into the dir and install the dev dependencies
3. To run the tests, you need to login to the moodle sandbox and enable webservices. This sandbox is a service provided by the moodle platform to test the framework.

3.1. Go to https://demo.moodle.net
3.2. Login as user: admin with password: sandbox
3.3. Go to Site administration
3.4. Got to Mobile App -> Mobile App Settings
3.5. Activate the checkbox 'Enable web services for mobile devices' and save changes
3.6. Goto Site Administration -> Development -> Debugging
3.7. Set Debug Messages to 'Developer'
3.8. Set 'Display debug messages' to yes
3.9. Save changes
3.10. run tests


##### Versioning

This package uses semantic versioning (http://semver.org) where the numbers are mapped as following:

major.minor.patch

major will be counted only for full releases, e.g. when a moodle version is completely covered.
minor will be counted when a webservice category is covered (e.g. core_user, core_competency, mod_forum etc.)
patch will be counted when a single service is covered or bugs/errors are fixed

## Licence

Jan Küster 2017 MIT Licence