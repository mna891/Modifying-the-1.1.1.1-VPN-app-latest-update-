Java.perform(function () {

    let AccountData = Java.use("com.cloudflare.app.data.warpapi.AccountData");
    let WarpPlusState = Java.use("com.cloudflare.app.data.warpapi.WarpPlusState");

    AccountData.$init.overload(
        'java.lang.String',
        'com.cloudflare.app.data.warpapi.WarpPlusState',
        'java.lang.Long',
        'java.lang.Long',
        'org.threeten.bp.LocalDateTime',
        'java.lang.Integer',
        'java.lang.String',
        'com.cloudflare.app.data.warpapi.Managed',
        'com.cloudflare.app.data.warpapi.AccountRole'
    ).implementation = function (
        p1, p2, p3, p4, p5, p6, p7, p8, p9
    ) {
        console.log("[Hook] AccountData constructor called");


        p2 = WarpPlusState.UNLIMITED.value;


        return this.$init(p1, p2, p3, p4, p5, p6, p7, p8, p9);
    };
});
