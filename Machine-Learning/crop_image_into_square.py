from PIL import Image
import os
from tkinter import Tk, filedialog

Tk().withdraw()

path = filedialog.askdirectory()
dirs = os.listdir(path)
print(path)

Tk().withdraw()
directory_tujuan = filedialog.askdirectory()

def crop():
    for item in dirs:
        fullpath = os.path.join(path, item)
        if os.path.isfile(fullpath):
            im = Image.open(fullpath)
            width, height = im.size
            
            # Calculate the coordinates for center cropping
            left = (width - 1024) // 2
            top = (height - 1004) // 2
            right = (width + 1024) // 2
            bottom = (height + 1004) // 2
            
            imCrop = im.crop((left, top, right, bottom))
            
            # Save with the original file extension
            f, e = os.path.splitext(item)
            imCrop.save(os.path.join(directory_tujuan, f + e), format=im.format)

crop()
