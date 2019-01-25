const HEALTH_STATUS_PASS = 'pass';
const HEALTH_STATUS_FAIL = 'fail';
const HEALTH_STATUS_WARN = 'warn';

class HealthStatus {
    constructor(status, output) {
        // @todo check if the status is allowed (pass, fail, warn)

        this._status = status;

        if (this._status !== HEALTH_STATUS_PASS && !output) {
            throw Error('If status is not pass the output message is mandatory.');
        }

        this._output = output;

        // optional parameters
        this._description = '';
    }

    setDescription(description) {
        this._description = description;
    }

    toJson() {
        let jsonResult = {
            'status': this._status,
            'output': this._output,
            'description': this._description
        };

        return jsonResult;
    }
}

module.exports = HealthStatus;