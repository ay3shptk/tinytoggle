# If you have a darkmode css file called "dark.css":
* Create an element (button, span, etc.) with `toggle` as the `id` and "🌘" as the content. (if you wish to change, remember to change it in the script as well).
* Add the following snippet where you end the `body` tag:
```
<script src="https://cdn.statically.io/gh/ayshptk/tinytoggle/main/dist/default.min.js"></script>
```
* If you have a file named different from `dark.css`, either make edits by using a self-hosted version of the script or use the next method.

# If you wish to dynamically change what it uses as a darkmode stylesheet:
```
<script> let dark = "default darkmode stylesheet here";</script>
<script src="https://cdn.statically.io/gh/ayshptk/tinytoggle/main/dist/toggle.min.js"></script>
```
Then change the style anytime by calling the ```changestyle(stylesheet_url_here)``` function.


<b>P.s. the script was written to be the simplest possible dark mode toggle. PRs welcome if you can make it smaller.</b>