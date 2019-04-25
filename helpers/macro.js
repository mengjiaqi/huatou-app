const SYSTEM = Symbol('Application#SYSTEM');
const SCREEN_WIDTH = Symbol('Application#SCREEN_WIDTH');
const SCREEN_HEIGHT = Symbol('Application#SCREEN_HEIGHT');

export default {
	// remote
	API_SERVER: 'http://localhost:8000',
	get SYSTEM() {
		if (!this[SYSTEM]) {
			this[SYSTEM] = uni.getSystemInfoSync();
			return this[SYSTEM];
		}
	}
};
