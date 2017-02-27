import {Services_3_2} from './services_3_2.js';

export const MoodleWebservicesLib = {


	services: [
		{
			ref: Services_3_2,
			version: "3.2",
		},
	],

	currentService: Services_3_2,

	versions: ["3.2"],

	currentVersion: "3.2",

	fallback: "3.2",

	/**
	 *
	 * @param version The moodle version. Use the <major.minor.patch> format.
	 * @returns {Boolean}
	 */
	hasVersion(version) {
		return this.versions.indexOf(version.trim()) > -1;
	},

	setVersion: function (version, optionalFallback=false) {
		const hasVersion = this.hasVersion(version);
		if (!optionalFallback && !hasVersion)
			throw new Erro("Unkown or unsupported MOODLE Version.");
		else if(optionalFallback && !hasVersion)
			version = this.fallback;
		this.currentVersion = version;
	},

	/**
	 *
	 * @param optionalVersion specifiy a certain version if desired.
	 * @returns {Object} Service object
	 */
	getService : function(optionalVersion=null) {
		if (optionalVersion)
			this.setVersion(optionalVersion);

		for (let service of this.services) {
			if (service.version === this.currentVersion)
				return service;
		}
		throw new Error("Unexpected: could not fetch any service. There should be at least a fallback to version " + this.fallback);
	},
};