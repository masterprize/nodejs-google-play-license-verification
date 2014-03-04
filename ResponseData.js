/**
 * LICENSE
 *
 * This source file is subject to the new BSD license that is bundled
 * with this package in the file LICENSE.
 * It is also available through the world-wide-web at this URL:
 *
 */

/**
 * A representation of the data returned by the licensing service
 *
 */

/**
 * This is a nodejs implementation of php verification library published at this URL: 
 *  http://code.google.com/p/android-market-license-verification
 */

var LICENSED = 0;
var NOT_LICENSED = 1;
var LICENSED_OLD_KEY = 2;
var ERROR_NOT_MARKET_MANAGED = 3;
var ERROR_SERVER_FAILURE = 4;
var ERROR_OVER_QUOTA = 5;

var ERROR_CONTACTING_SERVER	= 101;
var ERROR_INVALID_PACKAGE_NAME = 102;
var ERROR_NON_MATCHING_UID = 103;
	
/**
 * @param string responseData
 */
var AndroidMarket_Licensing_ResponseData = function(responseData) {

	if (!responseData) {
		throw new Error('Invalid response data, expected JSON');
	}
		
	this.responseCode = responseData.responseCode;
	this.nonce = responseData.nonce;
	this.packageName = responseData.packageName;
	this.versionCode = responseData.versionCode;
	this.userId = responseData.userId;
	this.timestamp = responseData.timestamp;
	
};

/**
 * If server response was licensed
 *
 * @return bool
 */
AndroidMarket_Licensing_ResponseData.prototype.isLicensed = function() {
	return (this.responseCode === LICENSED);
};

module.exports.AndroidMarket_Licensing_ResponseData = AndroidMarket_Licensing_ResponseData;