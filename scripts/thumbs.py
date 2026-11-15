"""Make small WebP copies of every photograph for tiles and thumbnails: public/photos/<slug>/t/N.webp"""
import glob, os
from PIL import Image
for f in glob.glob('public/photos/*/*.jpg'):
    d, n = os.path.split(f)
    out = os.path.join(d, 't', n[:-4] + '.webp')
    if os.path.exists(out) and os.path.getmtime(out) >= os.path.getmtime(f):
        continue
    os.makedirs(os.path.dirname(out), exist_ok=True)
    im = Image.open(f).convert('RGB')
    im.thumbnail((760, 760), Image.LANCZOS)
    im.save(out, 'WEBP', quality=72, method=6)
