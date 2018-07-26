var AdaptiveGrid = {

    //Events window
    EVENT_ENABLED_XS:  'ENABLED_XS',
    EVENT_DISABLED_XS: 'DISABLED_XS',
    EVENT_ENABLED_SM:  'ENABLED_SM',
    EVENT_DISABLED_SM: 'DISABLED_SM',
    EVENT_ENABLED_MD:  'ENABLED_MD',
    EVENT_DISABLED_MD: 'DISABLED_MD',
    EVENT_ENABLED_LG:  'ENABLED_LG',
    EVENT_DISABLED_LG: 'DISABLED_LG',
    EVENT_ENABLED_XL:  'ENABLED_XL',
    EVENT_DISABLED_XL: 'DISABLED_XL',
    EVENT_ADAPTIVE_CHANGE: 'ADAPTIVE_CHANGE',

    //Define the breakpoints max
    max_xs: 479, //480 - 1
    max_sm: 767,
    max_md: 991,
    max_lg: 1199,

    enabled_xs: false,
    enabled_sm: false,
    enabled_md: false,
    enabled_lg: false,
    enabled_xl: false,

    init: function() {
        this.bind();

        this.run();
    },

    bind: function() {
        $(window).resize(this.run);

        $(window).on([this.EVENT_ENABLED_XS, this.EVENT_ENABLED_SM, this.EVENT_ENABLED_MD, this.EVENT_ENABLED_LG, this.EVENT_ENABLED_XL].join(' '), function () {
            $(window).trigger(AdaptiveGrid.EVENT_ADAPTIVE_CHANGE);
        });
    },

    run: function () {
        AdaptiveGrid.detected();
    },

    detected: function () {
        //xs
        if(window.innerWidth <= this.max_xs){
            if(this.enabled_xs === false){
                $(window).trigger(this.EVENT_ENABLED_XS);
                this.enabled_xs = true;
            }
        }else{
            if(this.enabled_xs === true){
                $(window).trigger(this.EVENT_DISABLED_XS);
                this.enabled_xs = false;
            }
        }

        //sm
        if(window.innerWidth > this.max_xs && window.innerWidth <= this.max_sm){
            if(this.enabled_sm === false){
                $(window).trigger(this.EVENT_ENABLED_SM);
                this.enabled_sm = true;
            }
        }else{
            if(this.enabled_sm === true){
                $(window).trigger(this.EVENT_DISABLED_SM);
                this.enabled_sm = false;
            }
        }

        //md
        if(window.innerWidth > this.max_sm && window.innerWidth <= this.max_md){
            if(this.enabled_md === false){
                $(window).trigger(this.EVENT_ENABLED_MD);
                this.enabled_md = true;
            }
        }else{
            if(this.enabled_md === true){
                $(window).trigger(this.EVENT_DISABLED_MD);
                this.enabled_md = false;
            }
        }

        //lg
        if(window.innerWidth > this.max_md && window.innerWidth <= this.max_lg){
            if(this.enabled_lg === false){
                $(window).trigger(this.EVENT_ENABLED_LG);
                this.enabled_lg = true;
            }
        }else{
            if(this.enabled_lg === true){
                $(window).trigger(this.EVENT_DISABLED_LG);
                this.enabled_lg = false;
            }
        }

        //xl
        if(window.innerWidth > this.max_lg){
            if(this.enabled_xl === false){
                $(window).trigger(this.EVENT_ENABLED_XL);
                this.enabled_xl = true;
            }
        }else{
            if(this.enabled_xl === true){
                $(window).trigger(this.EVENT_DISABLED_XL);
                this.enabled_xl = false;
            }
        }
    }
};