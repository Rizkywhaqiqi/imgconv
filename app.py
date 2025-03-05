import os
import base64
import io
from flask import Flask, request, render_template, jsonify
from PIL import Image

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/convert", methods=["POST"])
def convert_to_gif():
    images = request.files.getlist("images")
    duration = int(request.form.get("duration", 500))

    if len(images) > 50:
        return jsonify({"error": "Maksimal upload 50 gambar!"}), 400

    frames = []
    for img in images:
        image = Image.open(img).convert("RGBA")
        frames.append(image)

    if not frames:
        return jsonify({"error": "Tidak ada gambar yang dipilih!"}), 400

    # Simpan ke BytesIO (tidak disimpan di folder)
    gif_bytes = io.BytesIO()
    frames[0].save(gif_bytes, format="GIF", save_all=True, append_images=frames[1:], duration=duration, loop=0)
    gif_bytes.seek(0)

    # Encode ke Base64
    gif_base64 = base64.b64encode(gif_bytes.getvalue()).decode("utf-8")

    return jsonify({"gif_base64": gif_base64})

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8000))
    app.run(host="0.0.0.0", port=port)
