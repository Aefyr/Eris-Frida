Java.perform(function() {
        
    var NetworkSecurityTrustManager = Java.use("android.security.net.config.NetworkSecurityTrustManager");

    NetworkSecurityTrustManager.checkServerTrusted.overload("[Ljava.security.cert.X509Certificate;", "java.lang.String").implementation = function(a, b) {
        //Don't perform any checks
    };

    NetworkSecurityTrustManager.checkServerTrusted.overload("[Ljava.security.cert.X509Certificate;", "java.lang.String", "java.net.Socket").implementation = function(a, b, c) {
        //Don't perform any checks
    };

    NetworkSecurityTrustManager.checkServerTrusted.overload("[Ljava.security.cert.X509Certificate;", "java.lang.String", "javax.net.ssl.SSLEngine").implementation = function(a, b, c) {
        //Don't perform any checks
    };

    NetworkSecurityTrustManager.checkServerTrusted.overload("[Ljava.security.cert.X509Certificate;", "java.lang.String", "java.lang.String").implementation = function(a, b, c) {
        //Don't perform any checks and return an empty list

        var ArrayList = Java.use("java.util.ArrayList");

        return ArrayList.$new();
    };
});