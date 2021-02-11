/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (date) {
    var srt, obj = {};
    obj["time"] = new Date(date);
    obj.add = function (value, dates) {
        if (value < 0) {
            throw new TypeError("Передано неверное значение");
        }
        switch (dates) {
            case "years":
                this.time.setFullYear(this.time.getFullYear() + value);
                obj["value"] = string(this.time);
                return this;
            case "months":
                this.time.setMonth(this.time.getMonth() + value);
                obj["value"] = string(this.time);
                return this;
            case "days":
                this.time.setDate(this.time.getDate() + value);
                obj["value"] = string(this.time);
                return this
            case "hours":
                this.time.setHours(this.time.getHours() + value);
                obj["value"] = string(this.time);
                return this;
            case "minutes":
                this.time.setMinutes(this.time.getMinutes() + value);
                obj["value"] = string(this.time);
                return this;
            default:
                throw new TypeError("Передано неверное значение");
        }
    }
    obj.subtract = function (value, dates) {
        if (value < 0) {
            throw new TypeError("Передано неверное значение");
        }
        switch (dates) {
            case "years":
                this.time.setFullYear(this.time.getFullYear() - value);
                obj["value"] = string(this.time);
                return this;
            case "months":
                this.time.setMonth(this.time.getMonth() - value);
                obj["value"] = string(this.time);
                return this;
            case "days":
                this.time.setDate(this.time.getDate() - value);
                obj["value"] = string(this.time);
                return this
            case "hours":
                this.time.setHours(this.time.getHours() - value);
                obj["value"] = string(this.time);
                return this;
            case "minutes":
                this.time.setMinutes(this.time.getMinutes() - value);
                obj["value"] = string(this.time);
                return this;
            default:
                throw new TypeError("Передано неверное значение");
        }
    }
    return obj;
}
function string(str) {
    var strs;
    if (str.getMinutes() > 10) {
        strs = str.getFullYear() + "-" + "0" + (str.getMonth() + 1) + "-" + str.getDate() + " " + str.getHours() + ":" + str.getMinutes();
    } else {
        strs = str.getFullYear() + "-" + "0" + (str.getMonth() + 1) + "-" + str.getDate() + " " + str.getHours() + ":0" + str.getMinutes();
    }
    return strs;
}
