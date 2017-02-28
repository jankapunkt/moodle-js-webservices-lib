# MOODLE WEBSERVICE LIB

A collection of all the names and parameters of the moodle webservices. 
This package is at a very early stage but updated regularly.

## Install

```javascript
import {MoodleWebservicesLib} from 'moodle-webservices-lib';

// get the service lib for th default version (3.2)
const mws = MoodleWebservicesLib.getLib();

```



## Testing

To run the tests, you need to setup the moodle sandbox.
It is located at https://demo.moodle.net and is a service provided by the moodle platform to test the framework.

1. Go to https://demo.moodle.net
2. Login as user: admin with password: sandbox
3. Go to Site administration
4. Got to Mobile App -> Mobile App Settings
5. Activate the checkbox 'Enable web services for mobile devices' and save changes
6. Goto Site Administration -> Development -> Debugging
7. Set Debug Messages to 'Developer'
8. Set 'Display debug messages' to yes
9. Save changes
10. run tests

## Pull Requests

Contribution is always welcome! Please create a branch for each service version (such as 3.2) to test and merge your results into the "develop" branch.

## Licence

Jan Küster 2017 MIT Licence