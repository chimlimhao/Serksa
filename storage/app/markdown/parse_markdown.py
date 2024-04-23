import json
import os
import re
from typing import Type

DEFAULT_PATH = "storage/app/markdown/course/"
LANGUAGES: dict[str, list[str]] = {
    "HTML": ["html"],
    "CSS": ["css"],
    "JavaScript": ["javascript", "js"],
    "PHP": ["php"],
    "C": ["c"],
    "C++": ["c++", "cpp"],
    "C#": ["c#", "cs"],
    "SQL": ["sql"],
    "Ruby": ["ruby"],
    "Python": ["python", "py"],
    "Java": ["java"],
}


class LanguageNotFoundError(Exception):
    pass


class classproperty:
    """Property classmethod"""

    def __init__(self, f):
        self.getter = f

    def __get__(self, obj, cls=None):
        return self.getter(cls)


class Color:
    """Class for default colors"""

    RED = "#ff0000"
    GREEN = "#60a642"
    BLUE = "#44b3f1"
    PURPLE = "#baa0f8"
    GRAY = "#8b9798"

    PRIMARY = RED
    SECONDARY = GREEN
    ACCENT = BLUE

    @classproperty
    def red(self) -> str:
        """Red ...duh"""
        return self.RED

    @classproperty
    def green(self) -> str:
        """Green ...duh"""
        return self.GREEN

    @classproperty
    def blue(self) -> str:
        """Blue ...duh"""
        return self.BLUE

    @classproperty
    def purple(self) -> str:
        """Purple ...duh"""
        return self.PURPLE

    @classproperty
    def gray(self) -> str:
        """Gray ...duh"""
        return self.GRAY

    @classproperty
    def grey(self) -> str:
        """Gray"""
        return self.GRAY

    @classproperty
    def primary(self) -> str:
        """Red"""
        return self.RED

    @classproperty
    def secondary(self) -> str:
        """Green"""
        return self.GREEN

    @classproperty
    def accent(self) -> str:
        """Blue"""
        return self.BLUE

    @classproperty
    def class_color(self) -> str:
        """Blue"""
        return self.BLUE

    @classproperty
    def function_color(self) -> str:
        """Green"""
        return self.GREEN


class File:

    @property
    def language(self) -> str:
        return self._language

    @property
    def content(self) -> str:
        return self._content

    @property
    def file_name(self) -> str:
        return self.file_name

    @content.setter
    def content(self, data: str) -> None:
        self._content = data

    def __init__(self, fn: str, data: str, language: str) -> None:
        self._fn = fn
        self._content = data
        self._language = language

    def path(self, directory="unknown") -> str:
        return f"{DEFAULT_PATH}{self.language}/{directory}/{self._fn}"

    def save(self) -> None:
        with open(self.path, "w") as f:
            f.write(self._content)

    def save_as_highlighted(self) -> None:
        path = self.path("finished_html")
        with open(path, "w") as f:
            f.write(self._content)

    def save_as_md(self) -> None:
        if ".md" in self._fn:
            self.save()
        else:
            # fmt: off
            fn = f"storage/app/markdown/course/{self._fn.replace('.html', '.md')}"
            with open(fn, "w") as f:
                f.write(self._content)

    def save_as_html(self) -> None:
        if ".html" in self._fn:
            self.save()
        else:
            fn = f"storage/app/markdown/course/{self._fn.replace('.md', '.html')}"
            with open(fn, "w") as f:
                f.write(self._content)
            # fmt: on


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


def parse_html_file():
    file = open_unhighlighted_file()

    html = color_html_code(file.content)
    file.content = html
    file.save_as_highlighted()


def parse_file():
    # TODO
    ...


def main():
    # with open("storage/app/markdown/course/html/chapter1.html", "r") as f:
    #     content = f.read()

    # code_block = color_html_code(content)
    # print(code_block)
    while True:

        print("1. Parse a markdown file.")
        print("2. Parse a markdown directory.")
        print("3. Hightlight code blocks in a parsed file.")
        print("4. Hightlight code blocks in a parsed directory.")
        print("5. Hightlight all code blocks in the unhighlighted directories.")
        print("0. Exit.")
        option = int(input("Enter an option: "))

        if option == 1:
            parse_file()
        elif option == 2:
            # TODO
            pass
        elif option == 3:
            parse_html_file()
        elif option == 4:
            # TODO
            pass
        elif option == 5:
            # TODO
            pass
        elif option == 0:
            break


if __name__ == "__main__":
    main()
