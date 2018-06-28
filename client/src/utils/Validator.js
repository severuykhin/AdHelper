import { fileRules, errors } from '../config/common';

/**
 * Represent validator class
 */

 export default class Validator {

	/**
	 * Validates file
	 * @param { object } file - File instance uploaded via input[type="file"] 
	 */
	checkFile(file) {
		let result = {
			status : false,
			errors : []
		};

		const { type } = file;
		
		if (fileRules.types.indexOf(type) <= -1) {
			result.errors.push({
				message : errors.file.invalidType
			});
		}

		if (result.errors.length <= 0) result.status = true;

		return result;
	}

 }