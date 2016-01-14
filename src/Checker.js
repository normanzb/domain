define(function(){
    'use strict';

    function Checker(context) {
        this._context = context;
    }

    Checker.prototype.subOf = function(tlDomain) {
        if (typeof tlDomain === 'object' && 'length' in tlDomain) {
            for (var l = tlDomain.length; l--;) {
                if (this.subOf(tlDomain[l])) {
                    return true;
                }
            }
            return false;
        }
        else {
            return this._context.get.subsOf(tlDomain) !== null?true:false;
        }
    };
});