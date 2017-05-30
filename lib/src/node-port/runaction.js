import 'rxjs/add/operator/map';
var RunAction = (function () {
    function RunAction(opts) {
        this._options = opts;
        this._http = this._options.base.airtable.http;
        this._endpointUrl = this._options.base.airtable.options.endpointUrl;
        this._apiVersion = this._options.base.airtable.options.apiVersion;
        this._baseId = this._options.base.baseId;
        this._path = this._options.path;
    }
    RunAction.prototype.perform = function () {
        return this._http.request(this._endpointUrl + "/v" + this._apiVersion + "/" + this._baseId + "/" + this._path, {
            method: this._options.method,
            params: this._options.params,
            body: this._options.body
        })
            .map(function (response) { return response.json(); });
    };
    return RunAction;
}());
export { RunAction };
//# sourceMappingURL=runaction.js.map