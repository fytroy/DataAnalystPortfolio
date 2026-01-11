from PIL import Image, ImageChops

def trim(im):
    bg = Image.new(im.mode, im.size, im.getpixel((0,0)))
    diff = ImageChops.difference(im, bg)
    diff = ImageChops.add(diff, diff, 2.0, -100)
    bbox = diff.getbbox()
    if bbox:
        return im.crop(bbox)
    return im

try:
    img_path = "public/profile-pic.jpg"
    im = Image.open(img_path)
    # The image might have not-perfectly-black pixels, so we use a more robust method or just simple bbox if valid
    # Let's try a simple crop assuming top/bottom are roughly black
    # Convert to RGB to be safe
    im = im.convert('RGB')
    
    # Get bounding box of non-black regions
    # We can iterate or use ImageChops
    # Simple way:
    bg = Image.new(im.mode, im.size, (0,0,0))
    diff = ImageChops.difference(im, bg)
    diff = ImageChops.add(diff, diff, 2.0, -20) # Threshold
    bbox = diff.getbbox()
    
    if bbox:
        print(f"Original size: {im.size}")
        print(f"Cropping to: {bbox}")
        cropped = im.crop(bbox)
        cropped.save(img_path)
        print("Success")
    else:
        print("No crop needed or failed to detect")

except Exception as e:
    print(f"Error: {e}")
