#!/usr/bin/env python3
"""Deterministic masthead wash: bake a soft dark scrim into the art so an
overlaid headline always reads. Left 62% and lower 55% get darkened; upper-right
stays brighter so the sketch keeps its character.  Input: raw sketch art."""
from PIL import Image
import sys
src = sys.argv[1]; dst = sys.argv[2]
im = Image.open(src).convert("RGB")
W, H = im.size
# build a per-pixel darkening mask (0..1 alpha of black)
mask = Image.new("L", (W, H), 0)
mp = mask.load()
for y in range(H):
    fy = y / H
    for x in range(W):
        fx = x / W
        # horizontal: dark on the left, fading out by ~62%
        a_h = max(0.0, 1.0 - fx / 0.62) * 0.72
        # vertical: dark toward the bottom, starting ~55%
        a_v = max(0.0, (fy - 0.55) / 0.45) * 0.60
        a = max(a_h, a_v)
        mp[x, y] = int(round(a * 255))
black = Image.new("RGB", (W, H), (10, 10, 14))
out = Image.composite(black, im, mask)
out.save(dst)
print("wrote", dst, out.size)
