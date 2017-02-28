import {Services_3_2} from './services_3_2.js';

export const MoodleWebservicesLib = {

	/**
	 * Collection of all services, which are currently supported.
	 */
	services: [Services_3_2],

	/**
	 *
	 * @param version
	 * @param useFallback
	 * @returns {*}
	 */
	getService:function(version="3.2", useFallback=false){
		for(let service of this.services){
			if (service.version === version)
				return service;
		}
		if (useFallback)
			return this.services[0]; // on fallback return the lowest version
		else
			throw new Error("Service not found for Moodle version [" + version + "]");
	},
};