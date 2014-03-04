/**
 * LICENSE
 *
 * This source file is subject to the new BSD license that is bundled
 * with this package in the file LICENSE.
 * It is also available through the world-wide-web at this URL:
 *
 */

/**
 * Verifies a response from the Licensing server
 *
 */

/**
 * This is a nodejs implementation of php verification library published at this URL: 
 *  http://code.google.com/p/android-market-license-verification
 */


var crypto = require('crypto');
var SIGNATURE_ALGORITHM = 'SHA1';
var AndroidMarket_Licensing_ResponseData = require('./ResponseData.js').AndroidMarket_Licensing_ResponseData;

var KEY_PREFIX = "-----BEGIN PUBLIC KEY-----\n";
var KEY_SUFFIX = '-----END PUBLIC KEY-----';

/**
*
* @param string publicKey   Base64-encoded representation of your public key
* @param string packageName An optional package name to verify
*/
var AndroidMarket_Licensing_ResponseValidator = function(publicKey, packageName) {
	/**
	 * OpenSSL public key
	 *
	 * @var resource
	 */
	this.publicKey   = KEY_PREFIX + publicKey + KEY_SUFFIX;
	
	/**
	 * Application package name
	 *
	 * @var string
	 */
	this.packageName = packageName;
};


   
/**
 * Verifies that the response was signed with the given signature
 * and, optionally, for the right package
 * 
 * @param  AndroidMarket_Licensing_ResponseData|string responseData
 * @param  string signature
 * @return bool
 */
AndroidMarket_Licensing_ResponseValidator.prototype.verify = function(responseData, signature) {
	var response;
	if (responseData instanceof AndroidMarket_Licensing_ResponseData) {
		response = responseData;
	} else {
		response = new AndroidMarket_Licensing_ResponseData(responseData);
	}
	
	//check package name is valid
	if (this.packageName && this.packageName !== response.packageName) {
		return false;
	}

	if (response.isLicensed() === false) {
		return false;
	}
	
	
	var verifier = crypto.createVerify(SIGNATURE_ALGORITHM);
	verifier.update(responseData);
	var result = verifier.verify(this.publicKey, signature, 'base64');

	//openssl_verify returns 1 for a valid signature
	if (result) {
		return true;
	} else {
		return false;
	}
	
};

module.exports.AndroidMarket_Licensing_ResponseValidator = AndroidMarket_Licensing_ResponseValidator;
