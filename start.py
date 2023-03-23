#!/usr/bin/env python
import sys
import os

os.environ['DISPLAY'] = ':0'

sys.path.append('/home/pi/.local/lib/python3.9/site-packages')

import webbrowser
import pyautogui as pyautogui
import subprocess

# Lancer le premier script
subprocess.Popen(['python', 'main.py'])

url = 'http://localhost:8000'



pyautogui.sleep(5)

subprocess.Popen(['chromium-browser','--no-sandbox', 'http://localhost:8000/StationM%C3%A9t%C3%A9o/'])

pyautogui.hotkey('cmd', 'O')
pyautogui.hotkey('ctrl', 'cmd', 'f')
