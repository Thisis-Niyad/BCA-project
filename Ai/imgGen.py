# !pip install fastapi uvicorn pyngrok
# !pip install pillow
# !pip install diffusers transformers accelerate safetensors
# !pip install fastapi uvicorn pyngrok nest_asyncio
# !pip install python-dotenv
# --------------------dotenv setup--------------------
import os
from dotenv import load_dotenv

load_dotenv()
ngorkToken = os.getenv("ngorkToken")
# ------------------- ngork auth -------------------
from pyngrok import ngrok

ngrok.set_auth_token(ngorkToken)


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
import asyncio
import base64
from io import BytesIO

# ---- FastAPI App ----
app = FastAPI()


# ---- Request Schema ----
class ImageRequest(BaseModel):
    prompt: str


# ---- Image to Base64 ----
def image_to_base64(image):
    buffer = BytesIO()
    image.save(buffer, format="PNG")
    return base64.b64encode(buffer.getvalue()).decode("utf-8")


# ---- API Route ----
@app.post("/generate-image")
def generate_image(data: ImageRequest):
    prompt = data.prompt
    print("Prompt:", prompt)

    image = pipe(prompt, height=480, width=480).images[0]

    image_base64 = image_to_base64(image)

    return {"image": image_base64}


# ---- Colab Fix ----
nest_asyncio.apply()

# ---- Ngrok ----
public_url = ngrok.connect(8000)
print("Public URL:", public_url)

# ---- Run Server ----
config = uvicorn.Config(app, host="0.0.0.0", port=8000)
server = uvicorn.Server(config)

asyncio.get_running_loop().run_until_complete(server.serve())
