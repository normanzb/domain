define([
    './Getter',
    './Setter',
    './Checker'
], function (
    Getter,
    Setter,
    Checker
) {
    'use strict';

    function Domain(domain) {
        if (domain == null) {
            throw new Error('domain must be specified');
        }
        this.domain = domain.toLowerCase();
        this.is = new Checker(this);
        this.get = new Getter(this);
        this.set = new Setter(this);
    }

    Domain.prototype.toString = function() {
        return this.domain;
    };

    return Domain;
});
