## Description
Eris-Frida removes certificates checks from `android.security.net.config.NetworkSecurityTrustManager` class, bypassing [Android's native SSL pinning](https://android-developers.googleblog.com/2016/07/changes-to-trusted-certificate.html) defined by network security config xml file.

## Requirements:
* Python 3.7 (Frida does not work on 3.6 for some reason) with frida-tools installed (`pip install frida-tools`)

* Device running Android 7.0+ connected via USB with frida-server started (check [docs](https://www.frida.re/docs/android/)). Your device must also be connected to a running [adb](https://developer.android.com/studio/command-line/adb) server.

## Usage:
Use `eris.py <app package>` to start app instance with SSL pinning bypassed

Example: `eris.py com.example.app`

Ctrl+C to kill the app process and exit eris.py

## Notes
* Originally I made [Eris Xposed module](https://github.com/Aefyr/Eris), but there is no Xposed for Android 9 yet and Frida is supposed to support it, so I made these two little scripts. Still haven't tested them on Pie though.

* Maybe it's just my ROM issue, but most of the times I have to first start eris.py just to get a process spawn timeout (but app does still launch without eris.js applied however) and then start eris.py again and it will restart the app and actually apply eris.js this time.
