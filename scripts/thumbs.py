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
# a larger copy of each church's lead photograph (the first in its profile, whatever its number), for the big tiles
import re
for md in glob.glob('src/content/churches/*.md'):
    m = re.search(r"^photos:\n(?:.*\n)*?.*?src: ['\"]?(/photos/[^'\"\n]+\.jpg)", open(md).read(), re.M)
    if not m:
        continue
    f = 'public' + m.group(1)
    d, n = os.path.split(f)
    out = os.path.join(d, 'm', n[:-4] + '.webp')
    if os.path.exists(out) and os.path.getmtime(out) >= os.path.getmtime(f):
        continue
    os.makedirs(os.path.dirname(out), exist_ok=True)
    im = Image.open(f).convert('RGB')
    im.thumbnail((1200, 1200), Image.LANCZOS)
    im.save(out, 'WEBP', quality=74, method=6)
