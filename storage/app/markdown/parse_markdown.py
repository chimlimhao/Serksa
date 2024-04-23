import json
import os
import re

colors = {}


def load_colors():
    global colors

    with open("storage/app/markdown/syntax.json", "r") as f:
        colors = json.load(f)


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

    @property
    def path(self) -> str:
        return f"storage/app/markdown/course/{self._fn}"

    @content.setter
    def content(self, data: str):
        self._content = data

    def __init__(self, fn: str, data: str):
        self._fn = fn
        self._content = data

        lang = re.search(r'(.*?)/', data).group(1)
        print(lang)
        self._language = lang

    def save(self) -> None:
        with open(self.path, "w") as f:
            f.write(self._content)

    def save_as_md(self) -> None:
        if ".md" in self._fn:
            self.save()
        else:
            fn = f"storage/app/markdown/course/{self._fn.replace('.html', '.md')}"
            with open(fn, "w") as f:
                f.write(self._content)


def get_color(language) -> dict:
    return colors[language]['colors']


def color_html_code(content):
    color = get_color('HTML')
    primary = color['primary']
    secondary = color['secondary']
    accent = color['accent']

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

    highlighted_code = re.sub(r'&lt;(/?\w+)',
                              fr'&lt;<p style="color: {primary};">\1</p>',
                              code_block
                              )
    highlighted_code = re.sub(r'(\w+)(&quot;)',
                              fr'<p style="color: {accent};">\1</p>\2',
                              highlighted_code
                              )
    highlighted_code = re.sub(r'(&quot;.*?&quot;)',
                              fr'<p style="color: {secondary};">\1</p>',
                              highlighted_code
                              )
    return re.sub(r'(<code class="language-html">).*?(</code>)',
                  r'\1' + highlighted_code + r'\2',
                  content,
                  flags=re.DOTALL
                  )


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


def open_file() -> File:
    while True:
        fn = input(
            "Enter the path to the file: storage/app/markdown/course/")
        try:
            path = f"storage/app/markdown/course/{fn}"
            with open(path, "r") as f:
                content = f.read()

            file = File(fn, content)
        except FileNotFoundError:
            print("File not found.")
            continue
        return file


def parse_html_file():
    file = open_file()

    html = color_html_code(file.content)
    file.content = html
    file.save()


def parse_file():
    content = open_file()

    html = markdown_to_html(content)


def main():
    load_colors()
    # with open("storage/app/markdown/course/html/chapter1.html", "r") as f:
    #     content = f.read()

    # code_block = color_html_code(content)
    # print(code_block)
    while True:

        print("1. Parse a markdown file.")
        print("2. Parse a markdown directory.")
        print("3. Hightlight a parsed file with a code block.")
        print("0. Exit.")
        option = int(input("Enter an option: "))

        if option == 1:
            parse_file()
        elif option == 2:
            pass
        elif option == 3:
            parse_html_file()
        elif option == 0:
            break


if __name__ == "__main__":
    main()
