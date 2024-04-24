import json
import re
import time
from os import listdir
from os.path import isfile, join
from typing import Type

from py_module import (
    DEFAULT_PATH,
    LANGUAGES,
    LanguageNotFoundError,
    Color,
    File,
    HTML,
    CSS,
)

def color_html_code(content) -> str:
    primary = Color.primary
    secondary = Color.secondary
    accent = Color.accent

    code_block_match = re.search(
        r'<code class="language-html">(.*?)</code>', content, re.DOTALL)
    code_block = code_block_match.group(1)

    if f'style="color: {primary};"' in code_block:
        print("Code block might already be highlighted.")
        print("1. Continue anyways.")
        print("0. Go back.")
        option = int(input("Enter an option: "))
        if option == 0:
            return content
        elif option == 1:
            pass

    # fmt: off
    highlighted_code = re.sub(r'&lt;(/?\w+)',
                              fr'&lt;<p style="color: {primary};">\1</p>',
                              code_block
                              )
    highlighted_code = re.sub(r'(\s+\w+)=&quot;',
                              fr'<p style="color: {accent};">\1</p>=&quot;',
                              highlighted_code
                              )
    highlighted_code = re.sub(r'&quot;(.*?)&quot;',
                              fr'&quot;<p style="color: {secondary};">\1</p>&quot;',
                              highlighted_code
                              )
    return re.sub(r'(<code class="language-html">).*?(</code>)',
                  r'\1' + highlighted_code + r'\2',
                  content,
                  flags=re.DOTALL
                  )
    # fmt: on


def markdown_to_html(markdown):
    lines = markdown.split('\n')
    html_lines = []
    in_list = False

    # fmt: off
    for line in lines:
        # Headers
        line = re.sub(r'^(#{1,6})\s*(.*)',
                      lambda m: f'<h{len(m.group(1))}>{m.group(2)}</h{len(m.group(1))}>',
                      line)

        # Inline code
        line = re.sub(r'`(.+?)`', r'<code>\1</code>', line)

        # Bold
        line = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', line)

        # Italics
        line = re.sub(r'\*(.*?)\*', r'<em>\1</em>', line)

        # Links
        line = re.sub(r'\[(.*?)\]\((.*?)\)', r'<a href="\2">\1</a>', line)

        # Lists
        if re.match(r'^\* (.*)', line):
            line = re.sub(r'^\* (.*)', r'<li>\1</li>', line)
            if not in_list:
                line = '<ul>' + line
                in_list = True
        elif in_list:
            line = '</ul>' + line
            in_list = False

        html_lines.append(line)
    # fmt: on

    # Close the list if file ends while still in a list
    if in_list:
        html_lines.append('</ul>')

    return '\n'.join(html_lines)


def open_unhighlighted_file() -> File:
    """
    Opens unhighlighted files with auto-fill.
    """
    while True:
        lang = input(
            f"Enter the language: ")
        try:
            lang = lang.lower()
            for language, alias in LANGUAGES.items():
                if lang in alias:
                    break
            else:
                raise LanguageNotFoundError(f"Invalid language: {lang}")
            break
        except LanguageNotFoundError as e:
            print(e.args[0])
            continue

    while True:
        fn = input(
            f"Enter the file name: {DEFAULT_PATH}{language}/unhighlighted_html/")
        if ".html" not in fn:
            fn += ".html"
        try:
            path = f"{DEFAULT_PATH}{lang}/unhighlighted_html/{fn}"
            with open(path, "r") as f:
                content = f.read()

            file = File(fn, content, language)
        except LanguageNotFoundError as e:
            print(e)
            continue
        except FileNotFoundError:
            print("File not found.")
            continue
        return file

def get_class(language: str) -> File:
    language_class = {
        "HTML": HTML,
        "CSS": CSS,
        # "JavaScript": JavaScript,
        # "PHP": PHP,
        # "C": C,
        # "C++": Cpp,
        # "C#": CSharp,
        # "SQL": SQL,
        # "Ruby": Ruby,
        # "Python": Python,
        # "Java": Java
    }
    for _language, _class in language_class.items():
        if language == _language:
            return _class


def highlight_all():
    pending: list[File] = []

    for lang in LANGUAGES:
        try:
            files = [f for f in listdir(
                f"storage/app/markdown/course/{lang}/unhighlighted_html")]
            finished_files = [f for f in listdir(
                f"storage/app/markdown/course/{lang}/finished_html")]
        except FileNotFoundError:
            continue
        unfinished_files = [f for f in files if f not in finished_files]
        for unfinished_file in unfinished_files:
            file_class = get_class(lang)
            with open(f"{DEFAULT_PATH}{lang}/unhighlighted_html/{unfinished_file}", "r") as f:
                content = f.read()
            f: File = file_class(unfinished_file, content)
            pending.append(f)

    for file in pending:
        start = time.time()
        file.highlight_code()
        file.save_as_highlighted()
        end = time.time()
        print(f"Finished {file.file_name} in {end - start:.10f} seconds")



def main():
    highlight_all()


if __name__ == "__main__":
    main()
