#coding=utf-8
from PIL import Image
import pytesseract
# logger.debug('')
text=pytesseract.image_to_string(Image.open('denggao.JPG'),lang='chi_sim')
print(text)