from PIL import Image, ImageDraw, ImageOps
import os

# Load the image
input_image_path = "logo"  # Logo file without extension, will be detected automatically
extensions = ['.png', '.jpg', '.jpeg', '.bmp', '.gif', '.tiff']
input_image = None

# Detect the file extension and load the image
for ext in extensions:
    if os.path.exists(input_image_path + ext):
        input_image = Image.open(input_image_path + ext)
        break

if input_image is None:
    raise FileNotFoundError("Logo file not found. Please ensure the logo image is in the correct directory with one of the supported extensions.")

# Function to save the image with the given size
def save_image(image, size, output_path):
    resized_image = image.resize(size, Image.LANCZOS)
    resized_image.save(output_path, format="PNG")

# Function to create a circular favicon
def create_circular_favicon(image, size, output_path):
    resized_image = image.resize(size, Image.LANCZOS)
    mask = Image.new('L', size, 0)
    draw = ImageDraw.Draw(mask)
    draw.ellipse((0, 0) + size, fill=255)
    circular_image = ImageOps.fit(resized_image, mask.size, centering=(0.5, 0.5))
    circular_image.putalpha(mask)
    circular_image.save(output_path, format="ICO")

# Create the resized images
save_image(input_image, (192, 192), "logo192.png")
save_image(input_image, (512, 512), "logo512.png")

# Create circular favicon
favicon_size = (16, 16)
create_circular_favicon(input_image, favicon_size, "favicon.ico")

print("Images have been successfully created: logo192.png, logo512.png, favicon.ico")
