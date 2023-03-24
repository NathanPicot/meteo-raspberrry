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

subprocess.Popen(['firefox-esr','--no-sandbox', 'http://localhost:8000/'])

pyautogui.hotkey('cmd', 'O')
pyautogui.hotkey('ctrl', 'cmd', 'f')

#Code chatGPT
#import os
import subprocess
import webbrowser

# Définir le port du serveur
PORT = 8000

# Chemin vers le fichier HTML
FILE_PATH = 'index.html'

# Lancer le serveur PythOn
try:
    subprocess.Popen(['python', '-m', 'http.server', str(PORT)])
except Exception as e:
    print(f"Erreur lors du lancement du serveur: {e}")
    exit()

# Ouvrir le navigateur web et afficher la page HTML
try:
    browser = webbrowser.get('firefox')
    browser.open(f'http://localhost:{PORT}/{FILE_PATH}')
except Exception as e:
    print(f"Erreur lors de l'ouverture du navigateur: {e}")
    exit()
