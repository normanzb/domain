define(function () {
    'use strict';
    
    function Getter(context) {
        this._context = context;
    }

    Getter.prototype.topLevel = function(topLevelList) {
        var result = null;

        for(var l = topLevelList.length;l--;) {
            if (this.subsOf(topLevelList[l]) !== null) {
                result = topLevelList[l];
                break;
            }
        }

        return result;
    };

    Getter.prototype.subsOf = function(tlDomain) {
        var fullDomain = this._context.domain;
        var fdParts = fullDomain.split('.');
        var tlParts = tlDomain.split('.');
        var i, l;
        var fdIndex = 0;
        var result = [];

        for(l = tlParts.length; l--;) {
            fdIndex = fdParts.length - (tlParts.length - l);
            if (tlParts[l] !== fdParts[fdIndex]) {
                result = null;
                break;
            }
        }

        if (result === null) {
            return result;
        }

        for(i = 0; i < fdIndex; i++) {
            result.push(fdParts[i]);
        }

        return result;
    };
});