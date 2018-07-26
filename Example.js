function AdaptivePageTop() {
    this.__proto__ = AdaptiveGrid;

    var t = this;

    t.__proto__.max_xs = 479;
    t.__proto__.max_sm = 651;
    t.__proto__.max_md = 961;
    t.__proto__.max_lg = 1273;

    t.bind = function() {
        t.__proto__.bind();

        //Example
        $(window).on(t.EVENT_ENABLED_XS, function () {
            console.log(t.EVENT_ENABLED_XS);
        });
        $(window).on(t.EVENT_DISABLED_XS, function () {
            console.log(t.EVENT_DISABLED_XS);
        });

        $(window).on(t.EVENT_ENABLED_SM, function () {
            console.log(t.EVENT_ENABLED_SM);
        });
        $(window).on(t.EVENT_DISABLED_SM, function () {
            console.log(t.EVENT_DISABLED_SM);
        });

        $(window).on(t.EVENT_ENABLED_MD, function () {
            console.log(t.EVENT_ENABLED_MD);
        });
        $(window).on(t.EVENT_DISABLED_MD, function () {
            console.log(t.EVENT_DISABLED_MD);
        });

        $(window).on(t.EVENT_ENABLED_LG, function () {
            console.log(t.EVENT_ENABLED_LG);
        });
        $(window).on(t.EVENT_DISABLED_LG, function () {
            console.log(t.EVENT_DISABLED_LG);
        });

        $(window).on(t.EVENT_ENABLED_XL, function () {
            console.log(t.EVENT_ENABLED_XL);
        });
        $(window).on(t.EVENT_DISABLED_XL, function () {
            console.log(t.EVENT_DISABLED_XL);
        });

        $(window).on(t.EVENT_ADAPTIVE_CHANGE, function () {
            console.log(t.EVENT_ADAPTIVE_CHANGE);
        });
    };

    this.init();
}
