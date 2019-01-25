const HEALTH_STATUS_PASS = 'pass';
const HEALTH_STATUS_FAIL = 'fail';
const HEALTH_STATUS_WARN = 'warn';

class HealthStatus {
    constructor(status) {
        // @todo check if the status is allowed (pass, fail, warn)

        this._status = status;

        // optional parameters
        this._description = '';
    }

    setDescription(description) {
        this._description = description;
    }

    toJson() {
        let result = {
            'status': this._status
        };

        if (this._description) {
            result['description'] = this._description;
        }

        return result;
    }
}

module.exports = HealthStatus;