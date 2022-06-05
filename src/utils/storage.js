import CryptoJS from "crypto-js";
const SECRET = "SDS2021Salt1234";

/**
 * Utils : Locale
 * ---
 * Functions to encrypt/decrypt data in the JS localeStorage.
 * Import "ls" from this file for all the localeStorage handling of this app (get/set/remove).
 */

export const ls = {
	set,
	get,
	remove,
};

function set(item, value) {
	const str = JSON.stringify(value);
	const encr = encrypt(str);
	localStorage.setItem(item, encr);
}

function get(item) {
	const encr = localStorage.getItem(item);
	if (!encr) return null;

	const str = decrypt(encr);
	return str;
}

function remove(item) {
	localStorage.removeItem(item);
}

// ----------------------
// --- HELP FUNCTIONS ---
// ----------------------

/**
 * Encrypts a string.
 * @param  { String }  str
 * @return { String }
 */
function encrypt(str) {
	try {
		return CryptoJS.AES.encrypt(str, SECRET);
	} catch (e) {
		console.warn("Warning: Problem writing localeStorage");
		return null;
	}
}

/**
 * Decrypts an encrypted string.
 * @param  { String }  str  (encripted)
 * @return { Object }
 */
function decrypt(str) {
	try {
		let bytes = CryptoJS.AES.decrypt(str, SECRET);
		return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
	} catch (e) {
		console.warn("Warning: Problem fetching localeStorage");
		return null;
	}
}
