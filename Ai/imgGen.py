# !pip install fastapi uvicorn pyngrok
# !pip install pillow
# !pip install diffusers transformers accelerate safetensors
# !pip install fastapi uvicorn pyngrok nest_asyncio


# ------------------- ngork auth -------------------
from pyngrok import ngrok

ngrok.set_auth_token("356ECzsn1fGp4C3SFwvOuxdTs3C_qrymgaheWsXhWJAhCLoh")


# ------------------- sdxl  import -------------------
import torch
from diffusers import DiffusionPipeline

pipe = DiffusionPipeline.from_pretrained(
    "stabilityai/stable-diffusion-xl-base-1.0",
    torch_dtype=torch.float16,
    use_safetensors=True,
    variant="fp16",
).to("cuda")
pipe.unload_lora_weights()
# If you have your LoRA fine-tuned safetensor
pipe.load_lora_weights(
    "/content/drive/MyDrive/Loras/BCA-project/output/BCA-project-20.safetensors"
)


# ------------------- server -------------------

from fastapi import FastAPI
from pydantic import BaseModel
from pyngrok import ngrok
import nest_asyncio
import uvicorn
import asyncio  # Import asyncio
from fastapi.responses import HTMLResponse
from fastapi import FastAPI, Form
import base64
from io import BytesIO

# FastAPI app in the same cell (NO app.py file)
app = FastAPI()


@app.get("/", response_class=HTMLResponse)
def home():
    html = """
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <form action="/generate" method="post">
            < <textarea name="prompt" id=""></textarea>
            <button type="submit">Submit</button>
        </form>
    </body>
    </html>
    """
    return html
    # return {"message": "AI Image Generator API Running"}


class Prompt(BaseModel):
    text: str


@app.post("/generate")
def generate(prompt: str = Form(...)):
    # Generate image
    image = pipe(prompt, height=480, width=480).images[0]

    # Convert to base64 string
    buffer = BytesIO()
    image.save(buffer, format="PNG")
    img_str = base64.b64encode(buffer.getvalue()).decode()

    # return {"image": img_str}

    html = f"<img src='data:image/png;base64,{img_str}' />"
    return HTMLResponse(content=html)


# Allow nested event loops (Colab fix)
nest_asyncio.apply()

# Start ngrok
public_url = ngrok.connect(8000)
print("Public URL:", public_url)

# Run FastAPI using uvicorn.Server to integrate with the existing event loop
config = uvicorn.Config(app, host="0.0.0.0", port=8000)  # Use 'app' directly
server = uvicorn.Server(config)

# Run the server in the existing event loop
asyncio.get_running_loop().run_until_complete(server.serve())
