import sys
import os
from bs4 import BeautifulSoup

def repaint_svg_files(new_color):
    current_directory = os.getcwd()
    for filename in os.listdir(current_directory):
        if filename.endswith(".svg"):
            filepath = os.path.join(current_directory, filename)
            with open(filepath, 'r', encoding='utf-8') as file:
                soup = BeautifulSoup(file, 'xml')
                paths = soup.find_all('path')
                for path in paths:
                    if 'fill' in path.attrs:
                        path['fill'] = f'#{new_color}'

            with open(filepath, 'w', encoding='utf-8') as file:
                file.write(str(soup))

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python repaint.py <new_color>")
        sys.exit(1)

    new_color = sys.argv[1]
    
    if len(new_color) != 6 or not all(c in '0123456789ABCDEFabcdef' for c in new_color):
        print("Error: new_color should be a 6-character hex code.")
        sys.exit(1)

    repaint_svg_files(new_color)
    print(f"Repainted all SVG files in the current directory with color #{new_color}.")
