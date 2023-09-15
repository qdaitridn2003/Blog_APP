import AsyncStorage from '@react-native-async-storage/async-storage';

class LocalStorage {
    async getItem(key: string) {
        try {
            const result = await AsyncStorage.getItem(key);
            return result;
        } catch (error) {
            console.log('Async Storage Error: ' + error);
        }
    }

    async setItem(key: string, value: string) {
        try {
            await AsyncStorage.setItem(key, value);
        } catch (error) {
            console.log('Async Storage Error: ' + error);
        }
    }

    async clearItem(key: string) {
        try {
            await AsyncStorage.removeItem(key);
        } catch (error) {
            console.log('Async Storage Error: ' + error);
        }
    }

    async clearAllItem() {
        try {
            await AsyncStorage.clear();
        } catch (error) {
            console.log('Async Storage Error: ' + error);
        }
    }
}

export default new LocalStorage();
