class UtilHelper {
    _instance = null
    static getInstance() {
        return this._instance = this._instance || new UtilHelper();
    }

    getRealWidth(deviceWidth, width) {
        let widthRate = width / 375;
        return deviceWidth * widthRate;
    }

    getRealHeight(deviceHeight, height) {
        let heightRate = height / 667;
        return deviceHeight * heightRate;
    }
}

export default UtilHelper.getInstance();