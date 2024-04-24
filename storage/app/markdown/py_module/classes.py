import re


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
    ORANGE = "#ff9900"
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
        return self.PRIMARY

    @classproperty
    def secondary(self) -> str:
        """Green"""
        return self.SECONDARY

    @classproperty
    def accent(self) -> str:
        """Blue"""
        return self.ACCENT

    @classproperty
    def class_color(self) -> str:
        """Blue"""
        return self.BLUE

    @classproperty
    def function_color(self) -> str:
        """Green"""
        return self.GREEN


class File:

    LANGUAGE: str = None
    EXTENTION: str = None

    @property
    def content(self) -> str:
        return self._content

    @property
    def file_name(self) -> str:
        return self._fn

    @property
    def language(self) -> str:
        return self.LANGUAGE

    @property
    def short(self) -> str:
        return self.SHORT

    @property
    def extention(self) -> str:
        return self.EXTENTION

    @content.setter
    def content(self, data: str) -> None:
        self._content = data

    def __init__(self, fn: str, data: str) -> None:
        self._fn = fn
        self._content = data

    def path(self, directory="unknown") -> str:
        return f"storage/app/markdown/course/{self.language}/{directory}/{self._fn}"

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

    def highlight_code(self) -> None:
        pass



class HTML(File):
    LANGUAGE: str = "HTML"
    EXTENTION: str = ".html"

    def __init__(self, fn: str, data: str,) -> None:
        super().__init__(fn, data,)

        self.tag_color = Color.primary
        self.value_color = Color.secondary
        self.attribute_color = Color.accent

        self._tag_pattern = re.compile(r'&lt;(/?\w+)')
        """
        `<div class="abc">abc</div>`\n
        `-^^^------------------^^^-`
        """
        self._attribute_pattern = re.compile(r'(\s+\w+)=&quot;')
        """
        `<div class="abc">abc</div>`\n
        `-----^^^^^----------------`
        """
        self._value_pattern = re.compile(r'&quot;(.*?)&quot;')
        """
        `<div class="abc">abc</div>`\n
        `------------^^^-----------`
        """

        # fmt: off
        self._tag_outcome = fr'&lt;<p style="color: {self.tag_color};">\1</p>'
        self._attribute_outcome = fr'<p style="color: {self.attribute_color};">\1</p>=&quot;'
        self._value_outcome = fr'&quot;<p style="color: {self.value_color};">\1</p>&quot;'
        # fmt: on

    def highlight_code(self) -> None:
        code_block_match = re.search(
            r'<code class="language-html">(.*?)</code>',
            self.content,
            re.DOTALL,
        )
        if not code_block_match:
            return
        code_block: str = code_block_match.group(1)

        code_block = re.sub(self._tag_pattern,
                            self._tag_outcome,
                            code_block
                            )
        code_block = re.sub(self._attribute_pattern,
                            self._attribute_outcome,
                            code_block
                            )
        code_block = re.sub(self._value_pattern,
                            self._value_outcome,
                            code_block
                            )

        self._content = re.sub(
            r'(<code class="language-html">).*?(</code>)',
            r'\1' + code_block + r'\2',
            self.content,
            flags=re.DOTALL
        )

class CSS(File):
    LANGUAGE: str = "CSS"
    EXTENTION: str = ".css"

    def __init__(self, fn: str, data: str) -> None:
        super().__init__(fn, data)

        self.class_color: str = Color.primary
        self.type_color: str = Color.accent
        self.at_color: str = Color.purple

        # fmt: off
        self._class_pattern = re.compile(r'(?<!\d)([\.\#][a-zA-Z0-9-]+)([\s\{\:])')
        """
        `.welcome #inner a {`\n
        `^^^^^^^^-^^^^^^---`
        """
        self._type_pattern = re.compile(r'(?<![\#\.\<\>\"\@])(\b[a-zA-Z0-9-]+)([\s\{\:])')
        """
        `.welcome #inner a {`\n
        `----------------^-`
        """
        self._psudo_pattern = re.compile(r':(\b[a-zA-Z0-9-]+)([\s\{])')
        """
        `a::after {`\n
        `---^^^^^--`
        """
        self._at_pattern = re.compile(r'(@\b[a-zA-Z0-9-]+)([\s\{\:])')
        """
        `@media screen and (max-width: 1200px) {`\n
        `^^^^^^---------------------------------`
        """
        self._and_pattern = re.compile(r'(?<![\#\.\<\>\"\@])(\s*)(and)([\s\{\:])')
        """
        `@media screen and (max-width: 1200px) {`\n
        `--------------^^^----------------------`
        """
        self._comment_pattern = re.compile(r'(\/\*.*?\*\/)')
        """1 line comments."""

        self._class_outcome = fr'<p style="color: {self.class_color};">\1</p>\2'
        self._type_outcome = fr'<p style="color: {self.type_color};">\1</p>\2'
        self._psudo_outcome = fr'<p style="color: {self.type_color};">\1</p>\2'
        self._at_outcome = fr'<p style="color: {self.at_color};">\1</p>\2'
        self._and_outcome = fr'\1<p style="color: {self.at_color};">\2</p>\3'
        # fmt: on

    def highlight_code(self) -> None:
        code_block_match = re.search(
            r'<code class="language-css">(.*?)</code>',
            self.content,
            re.DOTALL,
        )
        if not code_block_match:
            return
        code_block: str = code_block_match.group(1)

        code_block = re.sub(self._at_pattern,
            self._at_outcome,
            code_block
        )
        code_block = re.sub(self._and_pattern,
            self._and_outcome,
            code_block
        )
        code_block = re.sub(self._comment_pattern,
            '',
            code_block
        )
        code_block = re.sub(self._class_pattern,
            self._class_outcome,
            code_block
        )
        code_block = re.sub(self._type_pattern,
            self._type_outcome,
            code_block
        )
        code_block = re.sub(self._psudo_pattern,
            self._psudo_outcome,
            code_block
        )

        self._content = re.sub(
            r'(<code class="language-css">).*?(</code>)',
            r'\1' + code_block + r'\2',
            self.content,
            flags=re.DOTALL
        )
