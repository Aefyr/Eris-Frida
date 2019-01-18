import frida
import time
import sys

if sys.argv.__len__() is 1:
    print("Usage: eris.py <package of the app to start>")
    print("Example: eris.py com.example.app")
    exit()

eris_js = ""

with open("eris.js") as f:
    eris_js = f.read()

device = None
pid = None
try:
    device  = frida.get_usb_device()
    pid     = device.spawn([sys.argv[1]])
    session = device.attach(pid)
    script  = session.create_script(eris_js)
    
    script.load()
    sys.stdin.read()
    
    device.resume(pid)
except KeyboardInterrupt:
    print ("Killing process")
    device.kill(pid)
except frida.TimedOutError:
    print("Process spawn timed out. If app was actually started on device, try restarting this script without closing the app")