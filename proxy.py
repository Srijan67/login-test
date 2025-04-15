from mitmproxy import http

def request(flow: http.HTTPFlow) -> None:
    # Check if the request is to an ngrok URL
    if "ngrok" in flow.request.host:
        flow.request.headers["ngrok-skip-browser-warning"] = "1"
